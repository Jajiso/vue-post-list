<template>
  <div>
    <v-card color="white" light>
      <v-card-title v-if="!editing" class="text-center">
        {{ post.title }}
      </v-card-title>
      <v-card-text v-else>
          <v-form>
              <v-text-field label="Title" :value="title" v-model="title"></v-text-field>
          </v-form>
      </v-card-text>
      <v-card-text v-if="!editing" class="text-center">
        {{ post.body }}
      </v-card-text>
      <v-card-text v-else>
          <v-form>
              <v-textarea label="Comment" :value="body" v-model="body"></v-textarea>
          </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange" text @click="editPost(post)"> 
            {{editing? ' Update ':' Edit '}} 
        </v-btn>
        <v-btn 
            color="secondary" 
            v-if="editing" 
            @click="cancelEditPost()" 
            depressed> Cancel </v-btn>
        <v-btn 
            color="error" 
            v-else 
            @click="deletePost(post.id)"
            depressed> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

export default {
  props: {
    post: {},
  },
  data: () => ({
    editing: false,
    title: "",
    body: "",
  }),
  methods: {
    editPost(post) {
        this.editing = !this.editing
        if (this.editing) {
            this.title = post.title
            this.body = post.body
        } else {
            post.title = this.title
            post.body = this.body
        }
    },
    cancelEditPost() {
        this.editing = !this.editing
        this.title = ""
        this.body = ""
    },
    deletePost(id) {
        this.$store.dispatch('deletePost', id)
    }
  }
};
</script>

<style>
</style>