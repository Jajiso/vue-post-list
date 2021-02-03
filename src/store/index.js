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
    create_post: (state, postObj) => {
      const id = state.posts.length + 1
      const newPost = {
        id: id,
        title: postObj.title,
        body: postObj.body,
        userId: postObj.userId
      }
      state.posts.push(newPost)
    },
    delete_post: (state, id) => {
      state.posts = state.posts.filter((post) => post.id != id)
    },
  },
  actions: {
    async setPostFromAPI() {
      const fetchData = await fetch(url_api)
      const data = await fetchData.json()
      this.commit('set_posts', data)
    },
    createPost(context, postObj) {
      context.commit('create_post', postObj)
    },
    deletePost(context, id) {
      context.commit('delete_post', id)
    }
  },
  getters: {
    getPostList: state => state.posts,
  },
})
