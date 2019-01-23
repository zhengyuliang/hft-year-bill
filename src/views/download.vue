<template>
    <div class="download" :class="'download_' + indexNum">
        <img :src="imgData" alt="" class="img">
        <img src="../assets/icon_bg_1.png" v-if="indexNum === 1" alt="" class="imgBG">
        <img src="../assets/icon_bg_2.png" v-if="indexNum === 2" alt="" class="imgBG">
        <img src="../assets/icon_bg_3.png" v-if="indexNum === 3" alt="" class="imgBG">
        <img src="../assets/icon_bg_4.png" v-if="indexNum === 4" alt="" class="imgBG">
        <!-- <a class="btn" :href="imgData" download="jpg"></a> -->
        <div class="top"></div>
        <div class="code"></div>
        <div class="text">
            <p v-if="indexNum === 1">家增财富人增寿  春满乾坤福满门</p>
            <p v-if="indexNum === 2">福临宝地千秋盛  财进家门万事兴</p>
            <p v-if="indexNum === 3">客似云来生意旺  货如轮转财源广</p>
            <p v-if="indexNum === 4">客似云来生意旺  货如轮转财源广</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            indexNum:1,
            imgData:'',
            imgList:['https://s3.cn-north-1.amazonaws.com.cn/hunanyancao-advertisements/wxapp-searchprice/bg_down_1.jpg','https://s3.cn-north-1.amazonaws.com.cn/hunanyancao-advertisements/wxapp-searchprice/bg_down_2.jpg','https://s3.cn-north-1.amazonaws.com.cn/hunanyancao-advertisements/wxapp-searchprice/bg_down_3.jpg','https://s3.cn-north-1.amazonaws.com.cn/hunanyancao-advertisements/wxapp-searchprice/bg_down_4.jpg'],
        }
    },
    methods:{

    },
    mounted(){
        let index = Math.floor(Math.random() * 4);
        console.log(index);
        this.indexNum = index + 1;
        this.imgData = this.imgList[index];
    }
    
}
</script>
<style lang="scss" scoped>
    .download{
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: relative;
        .imgBG{
            position: absolute;
            z-index: 2;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100vh;
        }
        &.download_1{
            .top{
                background-image: url("../assets/icon_img_1.png");
            }
            .text{
                color: #cc4f9b;
            }
        }
        &.download_2{
            .top{
                background-image: url("../assets/icon_img_2.png");
            }
            .text{
                color: #e1423f;
            }
        }
        &.download_3{
            .top{
                background-image: url("../assets/icon_img_3.png");
            }
            .text{
                color: #1b5677;
            }
        }
        &.download_4{
            .top{
                background-image: url("../assets/icon_img_4.png");
            }
            .text{
                color: #057b59;
            }
        }
        .top{
            width: 100%;
            height: 65vh;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 70%;
            position: relative;
            z-index: 3;
            display: block;
        }
        .code{
            width: 100%;
            height: 20vh;
            display: block;
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            background-image: url("../assets/code_hft.png");
            position: relative;
            z-index: 3;
        }
        .text{
            position:absolute;
            z-index: 99;
            bottom: .8rem;
            width: 100%;
            text-align: center;
            font-size: .9rem;
        }
        .img{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: 100;
            opacity: 0;
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


