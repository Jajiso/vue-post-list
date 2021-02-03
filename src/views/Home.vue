<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <PostList />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import PostList from '@/components/PostList.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld,
    PostList
  }
}
</script>
