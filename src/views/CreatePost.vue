<template>
  <div class="addPost">
    <v-card color="blue" dark class="ma-10">
        <v-card-text class="display-1 text-center">
            Create a new Post
        </v-card-text>
    </v-card>

    <NewPost />
  </div>
</template>

<script>
import NewPost from '@/components/NewPost.vue'

export default {
  name: 'App',
  components: {
    NewPost
  },
}
</script>