<template>
    <div class="container welcome">
        <h2>Welcome </h2>
        <div v-if="showLogin">
            <h3>Login</h3>
            <LoginForm @login="enterChat"/>
            <p>No account yet? <span @click="showLogin=false">Singup</span></p>
        </div>
        <div v-else>
            <h3>Sing Up</h3>
            <SingupForm @singup="enterChat"/>
            <p>Already registered? <span @click="showLogin=true">Login</span></p>
        </div>
</div>
</template>

<script>
import SingupForm from '../components/SingupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default{
    components: {SingupForm, LoginForm},
    setup(){
        const router = useRouter()    
        const showLogin = ref(false)
        const enterChat = () =>{
            router.push({name:'chatroom'})
        }

        return{showLogin, enterChat}
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
    width: 80%;
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