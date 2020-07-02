<template>
    <div>
        <div class="part_1 part">
            <swiper ref="mySwiper1" :options="swiperOptions1">
                <swiper-slide v-for="item in 5" :key="'swiper_'+item">
                    <img :src="'/static/images/'+item+'.jpg'" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="part_2 part">
            <swiper ref="mySwiper2" :options="swiperOptions2">
                <swiper-slide v-for="item in 5" :key="'swiper_'+item">
                    <img :src="'/static/images/'+item+'.jpg'" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="part_3 part">
            <swiper ref="mySwiper3" :options="swiperOptions3">
                <swiper-slide v-for="item in 5" :key="'swiper_'+item">
                    <img :src="'/static/images/'+item+'.jpg'" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
    data() {
        return {
            swiperOptions1: {
                pagination: {
                    el: ".part_1 .swiper-pagination"
                },
                autoplay: true
                // Some Swiper option/callback...
            },
            swiperOptions2: {
                pagination: {
                    el: ".part_2 .swiper-pagination"
                },
                autoplay: true
            },
            swiperOptions3: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true,
                loop: true,
                pagination: {
                    el: ".part_3 .swiper-pagination",
                    clickable: true
                },
                autoplay: true
            }
        };
    },
    mounted() {
        // console.log("Current Swiper instance object", this.swiper1);
        this.swiper1.slideTo(0, 1000, false);

        this.swiper2.slideTo(0, 1000, false);
    },
    computed: {
        swiper1() {
            return this.$refs.mySwiper1.$swiper;
        },
        swiper2() {
            return this.$refs.mySwiper2.$swiper;
        }
    },
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    }
};
</script>

<style>
.part {
    margin-top: 30px;
}
.swiper-container {
    width: 600px;
    height: 300px;
}
.swiper-container img {
    width: 100%;
}
.swiper-slide {
    /* border: 1px solid red; */
}

.part_3 .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
}
.part_3 .swiper-slide-active,
.swiper-slide-duplicate-active {
    transform: scale(1);
}
</style>