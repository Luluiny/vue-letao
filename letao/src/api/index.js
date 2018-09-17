import axios from 'axios'
// 配置基准路径
const baseURL = 'http://127.0.0.1:3000'
axios.defaults.baseURL = baseURL
axios.defaults.withCredentials = true

export const login = (pa) => {
  return axios.post('/employee/employeeLogin', pa).then(res => {
    return res
  })
}
