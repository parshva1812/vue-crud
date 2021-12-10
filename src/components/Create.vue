<template>

  <div>
    <div class="card">
      <div class="card-header">
        <h3>Add Post</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="checkForm">
        <p v-if="errors.length">
        <b>Please correct the following errors</b>
        <ul>
        <li v-for="err in errors" :key="err">{{err}}</li>
        </ul>
        </p>
          <div class="form-group">
            <label>User ID:</label>
            <input type="number" class="form-control" v-model="post.userId" min="1"/>
          </div>
          <div class="form-group">
            <label>Title:</label>
            <input type="text" class="form-control" v-model="post.title" />
          </div>
          <div class="form-group">
            <label>Body:</label>
            <input type="textarea" class="form-control" v-model="post.body" />
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Add Post" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import {mapActions} from 'vuex'
export default {
  components: {
    name: 'AddPost'
  },
  data () {
    return {
      post: {},
      errors: []
    }
  },
  methods: {
...mapActions(['addPost']),
    checkForm (e) {
      this.errors = []
      if (!this.post.title) this.errors.push('title required.')
      if (!this.post.userId) this.errors.push('UserId required.')
      if (!this.post.body) this.errors.push('body required.')
      console.log(this.errors)
      if (this.errors.length > 0) {
        e.preventDefault()
      }
      else {
        console.log(this.post)
        this.addPost(this.post).then(()=>{
          this.$router.push({ name: 'index' })
        }).catch((err)=>console.log(err))
      }
    },
    // addPost () {
    //   let uri = 'http://localhost:3000/posts'
    //   this.axios.post(uri, this.post).then(response => {
    //     console.log('add post response', response)
    //     this.$router.push({ name: 'index' })
    //   })
    // }
  }
}
</script>
<style>
ul li {
  color: red;
}
b{
  color: blue;
}
</style>
