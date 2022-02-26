import request from '@/utils/request'

const api_name = '/admin/cmn/dict'
export default {

    //医院列表
    getPageList(page,limit,searchObj) {
        return request({
        url: `/admin/hosp/hospital/list/${page}/${limit}`,
        method: 'get',
        params: searchObj
        })
    }, 
     //查询dictCode查询下级数据字典
    findByDictCode(dictCode) {
        return request({
            url: `/admin/cmn/dict/findByDictCode/${dictCode}`,
            method: 'get',
            })
    },
      //根据id查询下级数据字典
    findByParentId(id) {
        return request({
            url: `/admin/cmn/dict/findChildData/{id}`,
            method: 'get',
            })
        
    },
    // 更新上线状态
    updateStatus(id, status) {
        return request({
            url: `/admin/hosp/hospital/updateStatus/${id}/${status}`,
            method: 'get',
            })
    },
    // 获取医院详情
    getHospById(id) {
        return request({
            url: `/admin/hosp/hospital/show/${id}`,
            method: 'get',
            })
    },
    // 获取医院排班
    getDeptByHoscode(hoscode) {
        return request({
            url: `/admin/hosp/department/getDeptList/${hoscode}`,
            method: 'get',
            })
    },
    getScheduleRule(page, limit, hoscode, depcode) {
        return request({
         url: `/admin/hosp/schedule/getScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
         method: 'get'
        })
      },

      //查询排班详情
  getScheduleDetail(hoscode,depcode,workDate) {
    return request ({
      url: `/admin/hosp/schedule/getScheduleDetail/${hoscode}/${depcode}/${workDate}`,
      method: 'get'
    })
  },

}