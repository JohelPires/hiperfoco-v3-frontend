import axios from 'axios'

export function fetchMyData() {
  return axios
    .get('http://localhost:5001/api/v1/tasks')
    .then((response) => response.data)
    .catch((error) => console.error(error))
}
