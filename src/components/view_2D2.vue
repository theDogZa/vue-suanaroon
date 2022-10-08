<template>
    <div ref="mainContent" class="container-fluid" style="min-height:800px">
        <div class=row>
            <div ref="bgMain" class="col-12 position-relative bg-success w-100 banner-bg banner-hight mb-4" v-bind:style="{ 'background-image': 'url(' + content.img + ')'}">
                <div class="text-inner text-center position-absolute text-white">
                    <h1 v-html="content.h1"></h1>
                    <span v-html="content.h1s"></span> <i class="icon-angle-right"></i>
                </div>
            </div>
            <div class="col-12 pt-4">
                <!--- com- list -->
                <div class="container">
                    <div class="row align-middle align-center mt-4 mb-4">
                        <div class="col-md-6 col-sm-12">
                            <div class="text-center pb-4">
                                <h2 v-html="content.h1"></h2>
                            </div>
                            <div class="text-center pt-4">
                                <h3 v-html="content.h2"></h3>
                                <div class="text-center pl-4 pr-4" v-html="content.c2"></div>
                            </div>
                            <div class="text-center pt-3">
                                <h3 v-html="content.h3"></h3>
                                <div class="text-center pl-4 pr-4" v-html="content.c3"></div>
                            </div>
                            <!-- <div class="container section-title-container">
                                <h3 class="section-title section-title-center">
                                    <b></b>
                                    <span class="section-title-main" v-html="content.h2"></span>
                                    <b></b>
                                </h3>
                            </div> -->
                        </div>
                        <div class="col-md-6 col-sm-12">
                             <!-- <vue-justified-layout :items="imagesG" v-slot="{item}"  :options="{targetRowHeight: 200,containerPadding: 5 ,boxSpacing: {horizontal: 5,vertical: 5 }}">
                                <img v-img:name v-lazy="item.url" :src="item.url" />
                            </vue-justified-layout> -->
                             <vueper-slides
                                autoplay
                                fixed-height="600px"
                                :arrows="true"
                                :arrows-outside="true"
                                :touchable="true"
                                class="no-shadow"
                                :visible-slides="1"
                                slide-multiple
                                :gap="3"
                                :slide-ratio="1 / 3"
                                :dragging-distance="200"
                                :breakpoints="{ 800: { visibleSlides:1, slideMultiple: 1 } }">
                            <vueper-slide v-for="(slide, i) in slides2" :key="i" class="bg-white">
                                    <template v-slot:content>
                                        <div class="vueperslide__content-wrapper" style="flex-direction: row">
                                            <div class="w-100 h-100 ">
                                                <!-- <div class="bg-success banner-bg" v-img:name v-lazy="slide.url" :src="slide.url"  v-bind:style="{ 'background-image': 'url(' + slide.image + ')' }"></div> -->
                                                <img v-img:name v-lazy="slide.image" :src="slide.image" width="100%" />
                                            </div>
                                        </div>
                                    </template>
                                </vueper-slide>
                            </vueper-slides>
                        </div>
                    </div>

                    <!-- <div class="row align-middle align-center mt-4">
                        <div class="col-12">
                            <div class="col-inner text-center">
                                <h3 v-html="content.h3"></h3>
                            </div>
                                <div class="col-12 mb-4 pb-4 pt-4">
                                    <div class="col-inner text-center pl-4 pr-4" v-html="content.c3">
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <vue-justified-layout :items="imagesG" v-slot="{item}"  :options="{targetRowHeight: 200,containerPadding: 5 ,boxSpacing: {horizontal: 5,vertical: 5 }}">
                                <img v-img:name v-lazy="item.url" :src="item.url" />
                            </vue-justified-layout>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// const axios = require('axios');
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {

  data: function () {
    return {
      windowHeight: window.innerHeight,
      images1: require('../assets/images/20190706_104644.jpg'),
      images2: require('../assets/images/20200627_172839.jpg'),
      images3: require('../assets/images/20200627_172428.jpg'),
      images4: require('../assets/images/20200627_173313.jpg'),
      images5: require('../assets/images/20200627_172926.jpg'),
      content: {},
      imagesG: [],
      id: this.$route.params.id,
      slides2: [
        {
          title: 'เศรษฐีเจ้าสัว',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20200627_173313.jpg'),
          url: '../assets/images/20200627_173313.jpg'
        },
        {
          title: 'เรดคองโก',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20200507_102131.jpg'),
          url: require('../assets/images/20200507_102131.jpg')
        },
        {
          title: 'เศรษฐีมีทรัพย์',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20190925_141254.jpg'),
          url: require('../assets/images/20190925_141254.jpg')
        },
        {
          title: 'กวนอิมดัด(ไผ่กวนอิม)',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20190805_071543.jpg'),
          url: require('../assets/images/20190805_071543.jpg')
        },
        {
          title: 'บารมี',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20190706_104644.jpg'),
          url: require('../assets/images/20190706_104644.jpg')
        },
        {
          title: 'รวยทรัพย์',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('../assets/images/20190116_142020.jpg'),
          url: require('../assets/images/20190116_142020.jpg')
        }
      ]
    }
  },
  components: { VueperSlides, VueperSlide },
  created () {
    console.log(this.id)
    if (this.id === '1') {
      this.content.h1 = 'เศรษฐีเจ้าสัว'
      this.content.h1s = 'xxxxxxxxxxxxxxxxxxxxx'
      this.content.h2 = 'ลักษณะทั่วไป'
      this.content.c2 = '<p >เศรษฐีเจ้าสัวเป็นไม้พุ่มโชว์ใบ ใบใหญ่กว้าง ขอบใบเป็นรอยหยัก ก้านใบสั้น ใบมีสีเข้มและแข็งสามารถเพาะจากเมล็ดหรือใช้วิธีแบ่งเนื้อเยื่อได้</p>'
      this.content.img = this.images1
      this.content.h3 = 'คุณสมบัติ'
      this.content.c3 = '<p >เศรษฐีเจ้าสัวเป็นไม้ที่ไม่ชอบแสงแดด ไม่ชอบน้ำ นิยมปลูกในกระถางในที่ร่ม จึงเหมาะกับการประดับตกแต่งไว้ภายในบ้านหรือออฟฟิศ คนส่วนมากนิยมปลูกหรือซื้อหาเพื่อเป็นศิริมงคล หรือเป็นของฝากเนื่องในโอกาสพิเศษต่างๆ</p>'
      console.log(this.content)
    } else if (this.id === '2') {
      this.content.h1 = 'ปาล์มพัด'
      this.content.h1s = 'xxxxxxxxxxxxxxxxxxxxx'
      this.content.h2 = 'ลักษณะทั่วไป'
      this.content.c2 = '<p >ปาล์มพัดมีขนาดลำต้นประมาณ 20-30 เซนติเมตร ลักษณะใบเป็นใบเดี่ยวรูปพัดเรียงสลับกัน แผ่นใบหนาสีเขียวอ่อน ขอบใบจักเว้าตื้นตามรอยจีบ ก้านใบสีเขียวยาว 1 เมตร ไม่มีหนามแต่โคนกาบใบมีเส้นใยสีน้ำตาลคลุม ดอกสีเหลืองปนน้ำตาล ออกดอกเป็นช่อแบบช่อแยกแขนงระหว่างกาบใบ ดอกแยกเพศอยู่ร่วมต้น ช่อดอกยาวประมาณ 0.9 เมตร เมื่อออกผลจะมีผลสดที่มีเนื้อเมล็ดเดียว ทรงกลม ขนาดประมาณ 1.2 เซนติเมตร เมื่อผลแก่จะมีผลสีดำ</p>'
      this.content.img = this.images2
      this.content.h3 = 'คุณสมบัติ'
      this.content.c3 = '<p >ทรงพุ่มสวย ต้นเล็กนิยมปลูกในกระถางประดับในอาคารหรือปลูกในที่ร่มรำไรและมีพื้นที่กว้าง</p>'
    }
  },
  mounted () {
    if ((80 + 159) + this.$refs.mainContent.clientHeight < this.windowHeight) {
      this.$refs.mainContent.style.minHeight = this.windowHeight - 80 - 159 + 'px'
      this.$refs.bgMain.style.height = this.windowHeight * (50 / 100) + 'px'
    }
  }
}
</script>
<style scoped>

.text-inner{
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 90%;
}
.box-list-items {
    position: relative;
    overflow: hidden;
    padding-top: 120% !important;
}
.box-image-bg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    /* background: #3C9; */
    margin: 5px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto 100%;
}
.already-visible {
    transform: translateY(0);
    animation: none;
}

</style>
