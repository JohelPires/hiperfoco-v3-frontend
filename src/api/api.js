import axios from 'axios'

export function fetchMyData() {
  return axios
    .get('http://localhost:5001/api/v1/tasks')
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

export function postData(formData) {
  console.log(formData.title)
  const dados = {
    title: formData.title,
    desc: formData.desc,
    priority: 2,
  }
  return axios
    .post('http://localhost:5001/api/v1/tasks', dados)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}
