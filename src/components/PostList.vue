<template>
  <div>
    <v-card color="blue" dark class="ma-10">
        <v-card-text class="display-1 text-center">
            Post List
        </v-card-text>
    </v-card>

    <v-card color="secondary" dark class="ma-10 pa-10">
        <div v-for="post in getPostList" :key="post.id">
          <Post :post="post" class="mb-10"/>
        </div>
    </v-card>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
    components: {
        Post
    },
    computed: {
        getPostList() {
            return this.$store.getters.getPostList
        }
    }
}
</script>

<style>

</style>