<template>
    <nav>
        <div>
            <p>Hello there displayName </p>
            <p class="email">  email </p>
        </div>
        <button @click="handleClick">Logout</button>
    </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
    export default{
        setup() {
            const {error, logout} = useLogout()


            const handleClick = async() => {
                await logout()
                if(!error.value){
                    console.log("user logout ")
                }

            }
            return {handleClick}
        }
    }


</script>

<style>
nav{
    padding: 20px;
    border-bottom: solid 1px #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav p {
    margin: 2px auto;
    font-size: 14px;
    color: #444;
}

p.email{
    font-size: 14px;
    color: #999;
}
</style>