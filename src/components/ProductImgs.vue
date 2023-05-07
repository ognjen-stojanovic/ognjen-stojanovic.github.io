<script>
export default{
        props: ["image"]
    };
</script>

<template>
    <div class="image-src">
        <img :src="image">
    </div>
</template>

<style scoped>
.image-src{
    width: 96px;
    height: 64px;
}

.image-src img{
    object-fit: cover; 
    height: 100%;
    border-radius: 5px;
    width: 100%;
}

</style>

