
/* eslint-disable */
import axios from 'axios'
const state={
    posts:[],
    singlepost:{},
    authenticated:false
    
}
const getters={
    allPosts:(state)=>state.posts,
    singlepost:(state)=>state.singlepost,
    auth_check:(state)=>state.authenticated
}
const actions={
    async addUser({commit},user){
        const response = await axios.post('http://localhost:3000/users',user)
        console.log("res",response.data , response)
        if (response.status === 201){
              alert("signup successful")
              localStorage.setItem("user-info",JSON.stringify(response.data))
          }
        console.log(response)
        commit("adduser",response.data)
    },
    async userLogin({commit},user){
        const response = await axios.get(`http://localhost:3000/users?email=${user.email}&password=${user.password}`)
          console.log("res",response.status , response)
         if (response.status === 200 && response.data.length > 0){
              alert("Login successful")
              localStorage.setItem("user-info",JSON.stringify(response.data))
          }
        commit("userlogin")
    },
    async setPosts({commit}){
        const response = await axios.get('http://localhost:3000/posts')
        commit("setposts",response.data)
    },
    async addPost({commit},post){
        const response = await axios.post('http://localhost:3000/posts',post)
        commit("addpost",response.data)
    },
    async deletePost({commit},id){
        const response = await axios.delete(`http://localhost:3000/posts/${id}`)
        commit("deletepost",id)

    },
    async getPost({commit},id){
        const response = await axios.get(`http://localhost:3000/posts/${id}`)
        commit("getpost",response.data)
    },
    async updatePost({commit},post){
        console.log(post)
        const response = await axios.put(`http://localhost:3000/posts/${post.id}`,post)
        commit("updatepost",response.data)
    }, 
    setAuth({commit}){
        commit('setauth')
    }
}
const mutations={
    setauth:(state)=>{
        if(localStorage.getItem('user-info'))
        state.authenticated=true
        else
        state.authenticated=false

    }
    ,
    adduser:(state)=>{
        state.authenticated=true
        console.log(state.authenticated)
    },
    userlogin:(state)=>{
        state.authenticated=true
        console.log(state.authenticated)
    },
    setposts:(state,data)=>(
        state.posts=data
    ),
    getpost:(state,data)=>(
        state.singlepost=data
    ),
    addpost:(state,data)=>(
    state.posts.unshift(data)
    ),
    deletepost:(state,data)=>(
        state.posts.filter(post=>post.id !=data)
    ),
    updatepost:(state,data)=>(
        console.log(data)
    )


}

export default {
    state,
    getters,
    actions,
    mutations
}