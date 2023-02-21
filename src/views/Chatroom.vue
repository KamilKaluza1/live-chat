<template>
    <div class="container">
        <Navbar/>
    </div>
<h2>chatroom</h2>
</template>

<script>

import getUser from '@/composables/getUser';
import { projectAuth } from '@/firebase/config';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue'
export default{
    components: {Navbar},


    setup(){
        const router = useRouter()
        const {user} = getUser()
        console.log( "here", user)
        watch(user, () =>{
            if(!user.value){
                router.push({name:'welcome'})
            }
        })

    }
    
}


</script>