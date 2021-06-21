import create from './axios';

const request = create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
});

// 测试用例
export const getText = () => {
  return request({
    url: '/test.txt',
    method: 'get',
    responseType: 'text'
  })
}

// 获取图片验证码
export const getImgCode = () => {
    return request({
        url: '/image/code',
        method: 'get',
        // 图片验证码 response类型设置成blob，图片才能显示出来
        responseType: "blob"
    })
}

// 获取手机验证码
export interface PhoneCodeQuery {
  code: string,
}

export const getPhoneCode = (query: PhoneCodeQuery) => {
    return request({
        url: '/user/messageCode',
        method: 'post',
        data: query
    })
}

// 获取用户任务列表
export interface UserTaskQuery {
  id: string,
}

export const getUserTask = (query: UserTaskQuery) => {
    return request({
        url: '/task/select',
        method: 'get',
        params: query
    })
}

// 搜索任务接口
export interface TaskQuery1 {
  id: string,
}

export interface TaskQuery2 {
  name: string,
}

export const queryTask = (query1: TaskQuery1, query2: TaskQuery2) => {
    return request({
        url: '/task/query',
        method: 'post',
        data: query1,
        params: query2
    })
}