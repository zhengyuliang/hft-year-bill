<template>
    <div class="download">
        <img :src="imgData" alt="" class="img">
        <!-- <a class="btn" :href="imgData" download="jpg"></a> -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            imgData:'',
            imgList:['https://s3.cn-north-1.amazonaws.com.cn/hunanyancao-advertisements/wxapp-searchprice/bg_down_1.jpg','https://s3.cn-north-1.amazonaws.com.cn/hunanyancao-advertisements/wxapp-searchprice/bg_down_2.jpg','https://s3.cn-north-1.amazonaws.com.cn/hunanyancao-advertisements/wxapp-searchprice/bg_down_3.jpg','https://s3.cn-north-1.amazonaws.com.cn/hunanyancao-advertisements/wxapp-searchprice/bg_down_4.jpg'],
        }
    },
    methods:{

    },
    mounted(){
        let index = Math.floor(Math.random() * 4);
        console.log(index);
        this.imgData = this.imgList[index];
    }
    
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


