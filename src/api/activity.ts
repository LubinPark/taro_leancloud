import AV from '@utils/AVConfig'

let ActivityRequest = {}

ActivityRequest.getBanners = (callback) => {
  let params = {
    query: {
      position: 'index'
    }
  }
  AV.Cloud.run('queryBannersCache', params).then(result => {
    callback(result.list)
  })
}

export default ActivityRequest
