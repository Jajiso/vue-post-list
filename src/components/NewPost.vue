<template>
  <div>
      <v-card color="white" light class="ma-10">
          <v-card-text>
            <v-form>
                <v-text-field label="Title" :value="title" v-model="title"></v-text-field>
                <v-textarea label="Comment" :value="body" v-model="body"></v-textarea>
                <v-btn
                    color="success"
                    class="mr-4"
                    @click="createPost()"
                    >
                    Create Post
                </v-btn>

                <v-btn
                    color="error"
                    class="mr-4"
                    @click="resetPost()"
                    >
                    Reset Post
                </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
  </div>
</template>

<script>
export default {
    data: () => ({
        title: "",
        body: "",
        userId: 1
    }),
    methods: {
        createPost() {
            this.$store.dispatch('createPost', this.$data)
            this.title = ""
            this.body = ""
        },
        resetPost() {
            this.title = ""
            this.body = ""
        },
    }
}
</script>