import request from '@/utils/request'

const api_name = '/admin/hosp/hospitalSet'
export default {

  getPageList(page, limit, searchObj) {
  return request({
  url: `${api_name}/findPageHospSet/${page}/${limit}`,
  method: 'post',
  data: searchObj   //post传参
      })
    },
    
  //删除医院设置
  deleteHospSet(id) {
  return request ({
    url: `${api_name}/${id}`,
    method: 'delete',
  })
},
    
  //批量删除医院设置
removeRows(idList) {
  return request({
  url: `${api_name}/batchRemove`,
  method: 'delete',
  data: idList
    })
  },

  //锁定和取消锁定
lockHospSet(id,status) {
  return request ({
    url: `${api_name}/lockHospitalSet/${id}/${status}`,
    method: 'put'
  })
},

  //添加医院设置
  saveHospSet(hospitalSet) {
    return request ({
      url: `${api_name}/saveHospitalSet`,
      data: hospitalSet,
      method : 'post',
    })
  },
  //医院设置id查询
  getHospSet(id) {
    return request ({
      url: `${api_name}/getHospSet/${id}`,
      method: 'get'
    })
  },
  //修改医院设置
  updateHospSet(hospitalSet) {
    return request ({
      url: `${api_name}/updateHospitalSet`,
      method: 'post',
      data: hospitalSet,
    })
  },

  }
  