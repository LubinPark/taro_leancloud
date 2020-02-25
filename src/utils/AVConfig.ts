import AV from 'leancloud-storage/dist/av-weapp-min.js'

let appId = 'DMFPURaYWIhImnLhyr4G7USl-gzGzoHsz'
let appKey = 'TMuOmtEP1a4db9wkKem1hVeR'
let region = 'cn'
let serverURLs = 'https://avoscloud.com'

AV.init({
  appId: appId,
  appKey: appKey,
  region: region,
  serverURLs: serverURLs
})

export default AV
