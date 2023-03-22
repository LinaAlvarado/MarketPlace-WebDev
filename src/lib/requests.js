export const requestProducts = () => {
  return fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((res) => res)
}

export const requestOneProduct = () => {
  return fetch('https://dummyjson.com/products/1')
    .then((res) => res.json())
    .then((res) => res)
}

