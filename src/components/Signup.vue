<template>

  <div>
    <div class="card">
      <div class="card-header">
        <h3>Signup</h3>
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
            <label>Name:</label>
            <input type="text" class="form-control" v-model="user.name" min="1"/>
          </div>
          <div class="form-group">
            <label>email:</label>
            <input type="text" class="form-control" v-model="user.email" />
          </div>
          <div class="form-group">
            <label>password:</label>
            <input type="password" class="form-control" v-model="user.password" />
          </div>
          <div class="form-group">
            <label>Confirm password:</label>
            <input type="password" class="form-control" v-model="cpassword" />
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Signup" />
          </div>
        </form>
      </div>
      <router-link to="/login">Login?</router-link>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import {mapActions} from 'vuex'
export default {
  components: {
    name: 'AddUser'
  },
  data () {
    return {
      user: {},
      errors: [],
      cpassword:''
    }
  },
  methods: {
...mapActions(['addUser']),
    checkForm (e) {
      this.errors = []
      if (!this.user.name) this.errors.push('name required.')
      if (!this.user.email) this.errors.push('email required.')
      else if (!this.validEmail(this.user.email)) {
        this.errors.push('Valid email required.');
      }
      if (!this.user.password) this.errors.push('password required.')
      else if(this.user.password.length < 6) this.errors.push('password character should be more than 6.')
      if (!this.cpassword) this.errors.push('confirm password required.')
      
      if(this.user.password !== this.cpassword) this.errors.push('password and confirm password should match.')
      console.log(this.errors)
      if (this.errors.length > 0) {
        e.preventDefault()
      }
      else {
        console.log(this.user)
        this.addUser(this.user).then(()=>{
          this.$router.push({ name: 'index' })
        }).catch((err)=>console.log(err))
      }
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
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
