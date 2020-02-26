import { ComponentClass } from 'react'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import Taro, { Component, Config } from '@tarojs/taro'

import '@/app.less'
import '@css/home/home.less'
import * as actions from '@actions/homeAction'

@connect(
  state => ({
    data: state.HomeReducer
  }), (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)

class HomePage extends Component {

  static options = {
    addGlobalClass: true
  }

  componentDidMount () {
    this.props.actions.getBanners()
  }

  render () {
    let { banners, loading } = this.props.data
    return (
      <View className='home'>
      { !!loading ?
        <View className='full-screen'>
          <View className='loading-view'>
          { 'loading' }
          </View>
        </View> :
        <View>
        { banners.map((item, index) => {
            return (
              <Image
                className='home-banner-img'
                key={index}
                mode={'aspectFill'}
                src={item.image.url}/>
            )
          })
        }
        </View>
      }
      </View>
    )
  }

}

export default HomePage
