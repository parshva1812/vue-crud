<template>
  <div>
    <h1>posts</h1>
   <!-- <p>{{allposts}}</p> -->
    <table class="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>User ID</td>
          <td>title</td>
          <td>Body</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="post in allPosts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.userId }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>

          <td>
            <router-link
              :to="{ path: `edit/${post.id}` }"
              class="btn btn-primary"
              >Edit</router-link
            >
            <!-- params: { id: post.id,userId: post.userId,title: post.title,body: post.body} -->
          </td>
          <td>
            <button class="btn btn-danger" @click="handleDelete(post.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
/* eslint-disable */
import {mapGetters,mapActions} from 'vuex'
export default {
  
  computed: mapGetters(['allPosts']),
  

  methods: {
    ...mapActions(['setPosts','deletePost']),
    handleDelete(id){
     this.deletePost(id).then(()=>{
        this.setPosts()
        }).catch((err)=>console.log(err))
    }
    // fetchPosts () {
    //   let uri = 'http://localhost:3000/posts/'
    //   this.axios.get(uri).then(response => {
    //     this.posts = response.data
    //     console.log('reaspo', this.posts)
    //   })
    // },
    // deletePost (id) {
    //   let uri = 'http://localhost:3000/posts/' + id
    //   this.axios.delete(uri).then(response => {
    //     console.log('delete response', response)
    //     alert('post deleted')
    //     this.fetchPosts()
    //   })
    },
    created() {
      this.setPosts()
  },
  }

</script>
