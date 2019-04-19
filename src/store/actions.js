/**
 * Created by T460S on 2018/7/16.
 */
import Mutation from './mutations-types'

export default {
  GET_NEWS ({state, commit}, self) {
    self.$http.get('/api/news/search').then((response) => {
      var news = response.body
      commit(Mutation.SET_NEWS,news)
      }).catch((res) => {
        console.log(res)
      })
  }
}
