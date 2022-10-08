<template>
    <div>
        <div class="container-fluid">
            <div class="row position-relative" id="banner-set" style="min-height:850px">
                <div class="col-md-6 col-sm-12  d-inline-block banner p-3" style="height:450px">
                    <router-link class="banner-link" to="/rent">
                        <div class="bg-success w-100 h-100 banner-bg" v-bind:style="{ 'background-image': 'url(' + images1 + ')' }">
                            <div class="text-inner text-left position-absolute text-white">
                                <h1>Rent</h1>
                                <span>Learn more</span> <i class="icon-angle-right"></i>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-6 col-sm-12  d-inline-block banner p-3" style="height:450px">
                    <router-link class="banner-link" to="/buy">
                        <div class="bg-success w-100 h-100 banner-bg" v-bind:style="{ 'background-image': 'url(' + images2 + ')' }">
                            <div class="text-inner text-left position-absolute text-white">
                                <h1>Buy</h1>
                                <span>Learn more</span> <i class="icon-angle-right"></i>
                            </div>
                        </div>
                   </router-link>
                </div>
                <div class="col-md-6 col-sm-12  d-inline-block banner p-3" style="height:400px">
                    <router-link class="banner-link" to="/events">
                        <div class="bg-success w-100 h-100 banner-bg" v-bind:style="{ 'background-image': 'url(' + images3 + ')' }">
                            <div class="text-inner text-left position-absolute text-white">
                                <h1>Events</h1>
                                <span>Learn more</span> <i class="icon-angle-right"></i>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-6 col-sm-12  d-inline-block banner p-3" style="height:400px">
                    <router-link class="banner-link" to="/Souvenir">
                        <div class="bg-success w-100 h-100 banner-bg" v-bind:style="{ 'background-image': 'url(' + images4 + ')' }">
                            <div class="text-inner text-left position-absolute text-white">
                                <h1>Souvenir</h1>
                                <span>Learn more</span> <i class="icon-angle-right"></i>
                            </div>
                        </div>
                    </router-link>
                </div>
                 <div class="col-md-12 col-sm-12  d-inline-block banner p-3" style="height:300px">
                    <router-link class="banner-link" to="/landscape">
                        <div class="bg-success w-100 h-100 banner-bg" v-bind:style="{ 'background-image': 'url(' + images5 + ')' }">
                            <div class="text-inner text-left position-absolute text-white w-50">
                                <h1>Landscape</h1>
                                <span>Learn more</span> <i class="icon-angle-right"></i>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="mt-4 pt-4 bg-light">
                <div class="container mb-4 pb-4 mt-4">
                     <div class="box-silde">
                    <!-- <h3 class="mt-4 mb-4">Latest Collections</h3> -->
                    <div class="mt-4 container section-title-container">
                            <h3 class="section-title section-title-center">
                                <b></b>
                                <span class="section-title-main">Latest Collections</span>
                                <b></b>
                            </h3>
                            <h6 class="mt-4 mb-4">รับผลิตกระถางไฟเบอร์</h6>
                        </div>
                    <vueper-slides
                        fixed-height="360px"
                        :arrows="false"
                        :arrows-outside="false"
                        :touchable="true"
                        class="no-shadow"
                        :visible-slides="4"
                        slide-multiple
                        :gap="3"
                        :slide-ratio="1 / 3"
                        :dragging-distance="200"
                        :breakpoints="{ 800: { visibleSlides:2, slideMultiple: 2 } }">
                       <vueper-slide v-for="(slide, i) in slides2" :key="i" class="bg-white">
                            <template v-slot:content>
                                <div class="vueperslide__content-wrapper" style="flex-direction: row">
                                    <div class="w-100 h-100 ">
                                        <router-link class="banner-link" to="#">
                                            <div class="w-100 h-100 bg-success product-list-bg" v-bind:style="{ 'background-image': 'url(' + slide.image + ')' }"></div>
                                            <!-- <div class="w-100 h-25 pt-3 product-list-title"></div> -->
                                        </router-link>
                                    </div>
                                </div>
                            </template>
                        </vueper-slide>
                    </vueper-slides>
                    </div>
                </div>
                <div class="container pb-4 pt-4 mt-4">
                    <div class="box-silde">
                        <!-- <h3 class="mt-4">Our Story</h3> -->
                        <div class="container section-title-container">
                            <h3 class="section-title section-title-center">
                                <b></b>
                                <span class="section-title-main">Our Story</span>
                                <b></b>
                            </h3>
                        </div>
                        <vueper-slides :touchable="true" class="no-shadow" fixed-height="500px"  bullets-outside >
                            <vueper-slide
                                v-for="(slide, i) in slides"
                                :key="i"
                                :image="slide.image"
                                :content="slide.content" >
                                <template v-slot:content>
                                <div class="vueperslide__content-wrapper" style="flex-direction: row">
                                    <div class="w-100 h-100 position-relative">
                                        <div class="position-absolute slide-content-inner text-white text-left"><span>{{ slide.content }}</span></div>
                                    </div>
                                </div>
                                </template>
                            </vueper-slide>
                        </vueper-slides>
                    </div>
                </div>

                <div class="container pb-4 pt-4 mt-4">
                    <div class="box-silde">
                        <div class="container section-title-container" id="contactus">
                            <h3 class="section-title section-title-center">
                                <b></b>
                                <span class="section-title-main">Contact</span>
                                <b></b>
                            </h3>
                            <div class="row">
                                <div class="col-md-6 pt-4 mb-3 pl-3 text-left">
                                    <h4>สำนักงาน</h4>
                                    <p class="pl-3">1 หมู่ 1 ถนน นครอินทร์ <br>ต.บางขุนกอง อ.บางกรวย นนทบุรี 11130</p>
                                    <h4>เบอร์โทรศัพท์</h4>
                                    <p class="pl-3">คุณสุชญา (รัตน์) : 098 369 8361 </p>
                                    <!-- <p class="pl-3">คุณธนัชชา (ปุ๊) : 098 192 4289 </p> -->
                                    <!-- <p class="pl-3">คุณ ณัฐธดา ( ปิง ) : 062 498 5415 </p> -->
                                    <h4>อีเมล์</h4>
                                    <p class="pl-3">suanaroon@gmail.com</p>
                                    <!-- <h4>Line Id</h4>
                                    <p class="pl-3">suanaroon</p> -->
                                </div>
                                <div class="col-md-6 pt-4 mb-3">
                                    <div class="row">
                                        <div class="col-6">
                                            <img :src="LineSuanaroon" width="100%">
                                        </div>
                                        <div class="col-6">
                                             <img :src="QR_FB" width="100%">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// const axios = require('axios');
import navBar from './_nav_bar.vue'
import navFooter from './_footer.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  data: function () {
    return {
    // transitionName: 'slide-left',
    // transitionMode: 'out-in',
      images1: require('../assets/images/20190706_104644.jpg'),
      images2: require('../assets/images/20200627_172839.jpg'),
      images3: require('../assets/images/even_h.jpg'),
      images4: require('../assets/images/Souvernir_h.jpg'),
      images5: require('../assets/images/landscape_h.jpg'),
      LineSuanaroon: require('../assets/images/line-suanaroon.jpg'),
      QR_FB: require('../assets/images/qr_fb.jpg'),

      slides: [
        {
          title: 'El Teide Volcano, Spain',
          content: 'อารมณ์และสุขภาพที่ดีที่ได้รับจากนานาพรรณไม้ที่เป็นธรรมชาติอย่างแท้จริงในทุกๆครั้งที่เราอยู่ในสวน เราจึงมีแนวความคิดว่าเราสามารถทำสวนที่แห่งใดก็ได้ให้อยู่รอบๆตัวเราไม่ว่าเราจะอยู่ที่ไหนก็ตาม เป็นจุดเริ่มต้นที่ทำให้ต้นไม้ของสวนอรุณมาร่วมเป็นส่วนหนึ่งในการสร้างสุขภาพกายและใจสำหรับผู้คนที่ต้องเคร่งเครียดกับการทำงานในอาคารสำนักงาน รวมไปถึงสถานที่จัดงานต่างๆ ทั้งภายในและภายนอกอาคาร',
          // You can also provide a URL for the image.
          image: require('../assets/images/20200627_172926.jpg')
        },
        {
          title: 'El Teide Volcano, Spain',
          content: 'และเพื่อเพิ่มความสะดวกสบายให้กับลูกค้าเราจึงมีบริการเช่าต้นไม้โดยมีทีมงานมืออาชีพไปดูแลนานาพรรณไม้ให้ท่านอย่างสม่ำเสมอ',
          // You can also provide a URL for the image.
          image: require('../assets/images/20190903_133934.jpg')
        }
      ],

      slides2: [
        {
          title: 'เศรษฐีเจ้าสัว',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20190814_091627.jpg')
        },
        {
          title: 'เรดคองโก',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20190814_091656.jpg')
        },
        {
          title: 'เศรษฐีมีทรัพย์',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20190814_091743.jpg')
        },
        {
          title: 'กวนอิมดัด(ไผ่กวนอิม)',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20190901_110224.jpg')
        },
        {
          title: 'บารมี',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20190901_110921.jpg')
        },
        {
          title: 'รวยทรัพย์',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20190903_132356.jpg')
        },
        {
          title: 'รวยทรัพย์',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20190903_132831.jpg')
        },
        {
          title: 'รวยทรัพย์',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20190925_140958.jpg')
        },
        {
          title: 'รวยทรัพย์',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20190925_141432.jpg')
        },
        {
          title: 'รวยทรัพย์',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20190925_141447.jpg')
        },
        {
          title: 'รวยทรัพย์',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20200309_161356.jpg')
        },
        {
          title: 'รวยทรัพย์',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20200627_170749.jpg')
        },
        {
          title: 'รวยทรัพย์',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20200627_170755.jpg')
        },
        {
          title: 'รวยทรัพย์',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20200627_171049.jpg')
        },
        {
          title: 'รวยทรัพย์',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20200627_171659.jpg')
        }

      ]
    }
  },
  components: { navBar, navFooter, VueperSlides, VueperSlide },
  created () {

  }
}
</script>
<style scoped>
#contactus p {
    letter-spacing: 2px;
    text-indent: 0;
}
.container{
    max-width: 1080px;
}
.box-silde{
    width: 100%;
}
.vueperslides__arrow{
    display: none !important;
    color: crimson;
}
.banner-link:hover:before,
.banner-bg:hover:before {
 background-color: rgba(0, 0, 0, .5)
}
.product-list-bg {
    background-image: url('http://placehold.it/100/24f355');
    transition: background .5s cubic-bezier(0.8, 0.3, 0.5, 0.8);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    position: relative;
}

.product-list-title {
    color: #288745 !important;
    text-decoration: none !important;
}
.product-list-title:hover {
    text-decoration: none !important;
}

.block-items div{
    height: 250px;
}

.banner-bg .text-inner{
    width: 20%;
    top: 50%;
    left: 5%;
    -ms-transform: translateY(-50%) !important;
    transform: translateY(-50%) !important;
    position: absolute;
}
.text-inner a{
    color: #fff;
}

.text-inner-block{
    width: 40%;
    top: 50%;
    right: 5%;
    -ms-transform: translateY(-50%) !important;
    transform: translateY(-50%) !important;
}
.slide-content-inner{
   right: 10%;
   top: 50%;
   transform: translate(10%, -50%);
    padding: 7px 20px 13px 20px;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);
    background-color: rgba(100, 115, 85, 0.7);
    font-size: 100%;
    max-height: 100%;
    width: 50%;
    min-height: 200px;
    line-height: 200px;
}

.slide-content-inner span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}

@media (max-width: 575.98px) {
  .slide-content-inner{
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   width: 90%;
  }
}
</style>
