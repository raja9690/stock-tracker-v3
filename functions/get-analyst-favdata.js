const readAll = () => {
  return fetch('/.netlify/functions/analyst').then((response) => {
    return response.json()
  })
}
const allstock = {
readAll: readAll
};
export default allstock;