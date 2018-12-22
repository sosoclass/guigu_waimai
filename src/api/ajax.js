/**
 * Created by 93659 on 2018/12/22.
 */
import axios from 'axios'

export default function ajax(url,data={},method = 'GET') {
  return new Promise(function (resolve,reject) {
    let promise
    if(method ==='GET'){
      promise = axios.get(url,{params:data})
    }else {
      promise = axios.get(url,data)
    }
    promise.then(response=>{
      resolve(response.data)
    }).catch(error=>{
      alert('请求错误:' + error.message)
    })

  })
}
