<script setup>
    
defineProps({
  title: String,
  image: String,
  info: String
})
</script>

<template>
        <div class="card">
            <div class="left">
                <a :href="`/products/${title}`">
                <img :src="`${image}`" alt="Image unavailable">

                </a>
            </div>
            <div class="right">
                <h2>{{title}}</h2>
                <p>{{info}}</p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <div>
                    <button>Order now</button>
                </div>

            </div>
        </div>    
</template>

<style scoped>
    h2{
        font-size: 24px;
        margin: 0;
    }
    p{
        font-size: 12px;
        color: rgba(60, 60, 60, .7);
    }
    button{
        background-color: rgba(255, 130, 0, 1);
    }
    .checked{
        color: orange;
        }
    .card{
        justify-content: center;        
        padding: 0.5rem;
        width: 275px;
        background: #fff;
        border: 0;
        border-radius: 10px;

    }
    .card .left a img{
        border-radius: 10px;
        width: 235px;
        height: 235px;
        object-fit: cover;
        filter: grayscale();
        transition: all .3s;
    }
    .card .left a img:hover{
        transform: skew(-2deg, 2deg);
        object-fit:contain;
        filter: none;
    }
</style>

