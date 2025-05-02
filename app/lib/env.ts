export function getBaseUrl() {
  return import.meta.env.DEV ? 'http://localhost:5174' : getProdBaseUrl()
}

export function getProdBaseUrl() {
  return 'https://pizzajs.dev/basil-ui'
}
