import { ComponentClass } from 'react'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import Taro, { Component, Config } from '@tarojs/taro'

import * as actions from '@actions/homeAction'

@connect(
  state => ({
    data: state.HomeReducer
  }), (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)

class HomePage extends Component {

  componentDidMount () {
    this.props.actions.getBanners()
  }

  render () {
    let { banners, loading } = this.props.data
    return (
      <View className='home'>
      { !!loading ?
        <View>
        loading
        </View> :
        <View>
        { banners.map((item, index) => {
            return (
              <Image
                key={index}
                mode={'aspectFit'}
                src={item.image.thumb80}/>
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
