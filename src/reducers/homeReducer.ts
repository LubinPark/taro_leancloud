import * as types from '@constants/home'

const INITIAL_STATE = {
  banners: [],
  loading: true
}

function HomeReducer (state = INITIAL_STATE, action) {
  switch (action.type) {

    case types.HOME_DATA:
    state.banners = action.banners
    state.loading = false
    return Object.assign({}, state)
    break

    default:
      return state
      break
  }
}

export default HomeReducer
