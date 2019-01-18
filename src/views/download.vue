<template>
    <div class="download">
        <img src="../assets/bg_down_1.jpg" alt="" class="img">
        <button class="btn"></button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .download{
        height: 100vh;
        width: 100%;
        position: relative;
        img{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
        }
        .btn{
            width: 50%;
            position: absolute;
            bottom: 2rem;
            height: 2rem;
            left: 25%;
            background-image: url("../assets/icon_inner_14.png");
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            background-color: transparent;
            border: none;
        }
    }
</style>


