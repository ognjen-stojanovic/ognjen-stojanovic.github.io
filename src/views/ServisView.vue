<script>
import workInProgress from '../assets/work-in-progress.png'

export default{
    data() {
        return {
            image : workInProgress
        }
    },
}

</script>

<template>
<img :src="this.image" alt="work_in_progress">
</template>

<style scoped>

@media screen and (max-width: 900px){
    img{
        width: 40%;
    }
}

</style>

