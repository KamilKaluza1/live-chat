<template>
    <div class="container welcome">
        <h1>Welcome</h1>
        <div v-if="showLogin">
            <h1>Login</h1>
            <LoginForm />
            <p>No account yet? <span @click="showLogin=false">Singup</span></p>
        </div>
        <div v-else>
            <h1>Sing Up</h1>
            <SingupForm />
            <p>Already registered? <span @click="showLogin=true">Login</span></p>
        </div>
</div>
</template>

<script>
import SingupForm from '../components/SingupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'

export default{
    components: {SingupForm, LoginForm},
    setup(){
        const showLogin = ref(false)

        const toggleShowLogin =()=>{

        }

        return{showLogin}
    }


}
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}

.welcome form {
    width: 300px;
    margin: 20px auto;
}

.welcome label{
    display: block;
    margin: 20px 0 10px;
}
.welcome input{
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}

.welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}

.welcome button{
    margin: 20px auto;
}
</style>