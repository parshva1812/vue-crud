<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit Post</h3>
        <!-- {{$route.params.id}}
        {{singlepost}} -->
      </div>
      <div class="card-body">
        <form @submit.prevent="checkForm($route.params.id)">
        <p v-if="errors.length">
        <b>Please correct the following errors</b>
        <ul>
        <li v-for="err in errors" :key="err" >{{err}}</li>
        </ul>
        </p>
          <div class="form-group">
            <label>User ID:</label>
            <input type="number" class="form-control" v-model="singlepost.userId" />
          </div>
          <div class="form-group">
            <label>Title:</label>
            <input type="text" class="form-control" v-model="singlepost.title" />
          </div>
          <div class="form-group">
            <label>Body:</label>
            <input type="textarea" class="form-control" v-model="singlepost.body" />
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="update Post" />
          </div>
        </form>
        <!-- {{$route.params}} -->
      </div>
    </div>
    <!-- {{ singlepost}} -->
  </div>
</template>
<script>
/* eslint-disable */
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    name: "EditPost",
  },
  data() {
    return {
      //  post:{
      //    userId:this.$route.params.userId,
      //    title:this.$route.params.title,
      //    body:this.$route.params.body
      //  },
      errors: [],
    };
  },

  created: function () {
    this.getPost(this.$route.params.id);
  },
  computed: mapGetters(["singlepost"]),
  methods: {
    ...mapActions(["updatePost", "getPost"]),
    // getPost () {
    //   let uri = 'http://localhost:3000/posts/' + this.$route.params.id
    //   this.axios.get(uri).then(response => {
    //     console.log(response.data)
    //     this.post = response.data
    //   })
    // },
    checkForm(e) {
      this.errors = [];
      if (!this.singlepost.title) this.errors.push("title required.");
      if (!this.singlepost.userId) this.errors.push("UserId required.");
      if (!this.singlepost.body) this.errors.push("body required.");
      console.log(this.errors);
      if (this.errors.length > 0) {
        e.preventDefault();
      } else {
        console.log(this.$route.params.id);
        this.updatePost(this.singlepost).then(() => {
          this.$router.push({ name: "index" });
        });
      }
    },
    // updatePost () {
    //   let uri = 'http://localhost:3000/posts/' + this.$route.params.post.id
    //   this.axios.put(uri, this.post).then(response => {
    //     console.log('update response', response)
    //     this.$router.push({ name: 'index' })
    //   })
    // }
  },
};
</script>
<style>
ul li {
  color: red;
}
b {
  color: blue;
}
</style>

