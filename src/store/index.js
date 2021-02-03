import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url_api = "http://jsonplaceholder.typicode.com/posts/?_limit=10"

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    set_posts: (state, postList) => {
      state.posts = postList
    },
  },
  actions: {
    async setPostFromAPI() {
      const fetchData = await fetch(url_api)
      const data = await fetchData.json()
      this.commit('set_posts', data)
    },
  },
  getters: {
    getPostList: state => state.posts,
  },
})
