<template>
    <form @submit.prevent="handleSubmit">

      <input type="email" required placeholder="display email" v-model="email" />
      <input type="password" required placeholder="password" v-model="password" />
      <div class="error" >{{ error }}</div>
      <button>Sing Up</button>
    </form>
  </template>
  
  <script>
  import { ref } from "vue";
  import useLogin from "@/composables/useLogin";
  
  export default {
    setup(props, context) {
      const email = ref("");
      const password = ref("");

      const {login, error} = useLogin() 
  
      const handleSubmit = async () => {
          await login(email.value, password.value)
          if(!error.value){
            context.emit('login')
            console.log("user logged in")
          }
      };
  
      return {  email, password, handleSubmit, error };
    },
  };
  </script>
  