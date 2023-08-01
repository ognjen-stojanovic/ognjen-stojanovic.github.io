<script>
export default{
        props: ["product"]
    };
</script>

<template>
    <div class="product-card">
        <div class="partner">
            <img :src="product.partner" alt="" class="partner-image"> 
        </div>
        <div class="image">
            <img :src="product.img" :alt="product.title">
        </div>
        <div class="text">
            <div class="h4">
                <h4>{{product.sub_category.toUpperCase()}}</h4>
            </div>
            <div class="h3">
                <b><h3>{{product.title}}</h3></b>
            </div>
            <div class="h5">
                <h5>{{product.desc}}</h5> 
            </div>
        </div>
        <div v-if="product.newItem" class="new-item2">
            <img class="item" src="../assets/svgs/new-item.png" alt="">
        </div>
    </div>
</template>

<style scoped>
    h4,h5,h3{
        margin: 0;
    }
    .item{
        width: 6rem;
    }
    .new-item2{
        position: absolute;
        right: 0;
        top: 0;
    }
    .product-card{
        position: relative;
        width: 22rem;
        height: 24.875rem;
        border-radius: 5px;
        background-color: #F5F5F5;
        box-shadow: 2px 5px 5px rgba(0, 0, 0, .1);
        text-align: left;
        transition: all .2s ease-in-out;
    }
    .partner{
        height: 3rem; 
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        background-color: #fff;
    }
    .partner img{
        object-fit: cover;
        height: 100%;
        padding-left: 1rem;
    }
    .product-card > * {
        padding: 0;
        margin: 0;
    }
    .text{
        padding-left: 1rem;
    }
    .image img{
        object-fit: cover;
        width: 22rem;
        height: 15.625rem;
    }
    h4{
        font-size: 14px;
        color: var(--btn-background);
    }
    h3{
        font-size: 24px;    
        color: rgb(33,53,71);
    }
    h5{
        font-size: 12px;
        color: rgba(33,53,71, 0.7);
    }
    .product-card:hover{ 
        transform: translate(5px, -10px);
    }
    @media screen and (max-width: 480px){
        .image img{
            width: 17rem;
            height: 10.625rem;
        }
        .product-card{
            width: 17rem;
            height: 20rem;
        
        }
    }
    @media screen and (max-width: 400px){
        .image img{
            width: 14rem;
            height: 9.625rem;
        }
        .product-card{
            width: 14rem;
            height: 21rem;
        
        }
    }
</style>

