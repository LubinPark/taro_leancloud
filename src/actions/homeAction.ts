import Activity from '@api/activity'
import * as types from '@constants/home'

export const getBanners = () => (dispatch) => {
  Activity.getBanners(banners => {
      dispatch(saveData(banners))
  })
}

// 保存当前用户
export const saveData = (banners) => {
  return {
    type: types.HOME_DATA,
    banners: banners
  }
}

// 退出清空数据
export const initHomeData = () => {
  return {
    type: types.HOME_DATA_INIT
  }
}
