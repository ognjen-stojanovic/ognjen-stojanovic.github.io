<script>
    export default{
        data() {
            return {
                image: '',
                info: '',
            }
        },
        watch: {
            data:{
                handler(val){
                    this.image = val.image;
                }
            }
        },
    }

</script>

<template>
    <section class="container">
        <div class="title">
            <h1>{{$route.params.name}}</h1>
        </div>
        <div class="image">
            <img :src="image" :alt="title">
        </div>
        <div class="desc">
            <p>
                {{info}}
            </p>
        </div>
        
    </section>
    
</template>

<style scoped>
h1{
    text-align: center;
}
</style>

