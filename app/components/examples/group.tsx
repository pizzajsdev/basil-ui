import { ToggleGroup, ToggleGroupMulti } from '@/registry/basil-ui/blocks/toggle-group'
import { Button } from '@/registry/basil-ui/ui/button'
import { Group } from '@/registry/basil-ui/ui/group'
import { Input } from '@/registry/basil-ui/ui/input'
import { useCallback, useEffect, useRef, useState } from 'react'

export default function GroupExample() {
  const [value, setValue] = useState<number>(1)
  const intervalRef = useRef<number | null>(null)
  const isPressingRef = useRef<boolean>(false)

  const increment = useCallback(() => {
    setValue((prev) => Math.min(10, prev + 1))
  }, [])

  const decrement = useCallback(() => {
    setValue((prev) => Math.max(1, prev - 1))
  }, [])

  const startRepeating = useCallback((action: () => void) => {
    if (intervalRef.current) return
    isPressingRef.current = true
    action()
    intervalRef.current = window.setInterval(() => {
      if (!isPressingRef.current) return
      action()
    }, 150)
  }, [])

  const stopRepeating = useCallback(() => {
    isPressingRef.current = false
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, action: () => void) => {
      // Only handle Space and Enter
      if (e.code !== 'Space' && e.code !== 'Enter') return
      // Prevent scrolling on space
      e.preventDefault()
      startRepeating(action)
    },
    [startRepeating],
  )

  const handleKeyUp = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.code !== 'Space' && e.code !== 'Enter') return
      stopRepeating()
    },
    [stopRepeating],
  )

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <Group>
        <Button
          onPointerDown={() => startRepeating(decrement)}
          onPointerUp={stopRepeating}
          onPointerLeave={stopRepeating}
          onKeyDown={(e) => handleKeyDown(e, decrement)}
          onKeyUp={handleKeyUp}
          disabled={value === 1}
        >
          -
        </Button>
        <Input tabIndex={-1} value={value} className="text-center pointer-events-none select-none" />
        <Button
          onPointerDown={() => startRepeating(increment)}
          onPointerUp={stopRepeating}
          onPointerLeave={stopRepeating}
          onKeyDown={(e) => handleKeyDown(e, increment)}
          onKeyUp={handleKeyUp}
          disabled={value === 10}
        >
          +
        </Button>
      </Group>
      <br />
      <p className="text-sm text-muted-foreground sm:pl-3">Toggle Group</p>
      <ToggleGroup />
      <ToggleGroupMulti />
    </div>
  )
}
