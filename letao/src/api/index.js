import axios from 'axios'
// 配置基准路径
const baseURL = 'http://127.0.0.1:3000'
axios.defaults.baseURL = baseURL
axios.defaults.withCredentials = true

// 登录
export const login = (pa) => {
  return axios.post('/employee/employeeLogin', pa).then(res => {
    return res
  })
}
// 验证登录
export const confirmlogin = () => {
  return axios.get('/employee/checkRootLogin').then(res => {
    return res.data
  })
}

// 退出登录
export const loginOut = () => {
  return axios.get('/employee/employeeLogout').then(res => {
    return res.data
  })
}

// 更新用户 禁用那一块
export const updateUser = (pa) => {
  return axios.post('/user/updateUser', pa).then(res => {
    return res.data
  })
}
// 用户数据请求
export const queryUser = (pa) => {
  return axios.get('/user/queryUser', {params: pa}).then(res => {
    return res.data
  })
}

// 获取商品列表
export const getGoodsList = (pa) => {
  return axios.get('/product/queryProductDetailList', {params: pa}).then(res => {
    return res.data
  })
}
// 添加商品
export const updateGoods = (pa) => {
  return axios.post('/product/addProduct', pa).then(res => {
    return res.data
  })
}
// 上传图片

// 获取一级分类的数据
export const getFirstsList = (pa) => {
  return axios.get('/category/queryTopCategoryPaging', {params: pa}).then(res => {
    return res.data
  })
}
// 添加一级分类
export const addFirstgoods = (pa) => {
  return axios.post('/category/addTopCategory', pa).then(res => {
    return res.data
  })
}
// 获取耳机分类的数据
export const getSecondList = (pa) => {
  return axios.get('/category/querySecondCategoryPaging', {params: pa}).then(res => {
    return res.data
  })
}
