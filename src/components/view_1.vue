<template>
    <div ref="mainContent"  class="container-fluid" style="min-height:800px">
      <div class="row">
        <div ref="bgMain" class="col-12 position-relative bg-success w-100 banner-bg banner-hight mb-4" v-bind:style="{ 'background-image': 'url(' + content.img + ')' }">
            <div class="text-inner text-center position-absolute text-white">
                <h1 v-html="content.h1"></h1>
                <span v-html="content.h1s"></span> <i class="icon-angle-right"></i>
            </div>
        </div>
        <div class="col-12 mt-4 pt-4">
          <div class="container">
              <div class="row align-middle align-center mt-4">
                  <div class="col-12">
                      <div class="col-inner text-center">
                          <h3 v-html="content.h2"></h3>
                      </div>
                      <!-- <div class="container section-title-container">
                          <h3 class="section-title section-title-center">
                              <b></b>
                              <span class="section-title-main" v-html="content.h2"></span>
                              <b></b>
                          </h3>
                      </div> -->
                  </div>
                  <div class="col-12 mb-2 pb-4 pt-4">
                      <div class="col-inner text-center pl-4 pr-4" v-html="content.c1">
                      </div>
                  </div>
                  <div class="col-12">
                    <div class="col-inner text-center pl-4 pr-4" v-html="content.c2">
                    </div>
                  </div>
                   <div class="col-12 mb-4 pb-4 pt-4">
                      <div class="row">
                          <div class="col-6">
                            <img :src="QR_LINE" width="80%">
                          </div>
                          <div class="col-6">
                            <img :src="QR_FB" width="80%">
                          </div>
                      </div>
                  </div>
              </div>

              <div class="row align-middle align-center mt-4">
                  <div class="col-12">
                      <div class="col-inner text-center">
                          <h3 v-html="content.h3"></h3>
                      </div>
                      <!-- <div class="container section-title-container">
                          <h3 class="section-title section-title-center">
                              <b></b>
                              <span class="section-title-main" v-html="content.h3"></span>
                              <b></b>
                          </h3>
                      </div> -->
                  </div>
                  <div class="col-12 mb-4">
                      <vue-justified-layout :items="imagesG" v-slot="{item}"  :options="{targetRowHeight: 200,containerPadding: 5 ,boxSpacing: {horizontal: 5,vertical: 5 }}">
                          <img v-img:name v-lazy="item.url_temp" :src="item.url" />
                      </vue-justified-layout>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
// const axios = require('axios');

export default {
  props: {
    id: Number,
    default: 1
  },
  data: function () {
    return {
      windowHeight: window.innerHeight,
      images1: require('../assets/images/20190706_104644.jpg'),
      images2: require('../assets/images/20200627_172839.jpg'),
      images3: require('../assets/images/landscape_h.jpg'),
      images4: require('../assets/images/even_h.jpg'),
      images5: require('../assets/images/Souvernir_h.jpg'),
      QR_LINE: require('../assets/images/line-suanaroon.jpg'),
      QR_FB: require('../assets/images/qr_fb.jpg'),
      content: {},
      imagesG: []
    }
  },
  created () {
    let im = [
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20190116_142020.jpg'),
        url: require('../assets/images/20190116_142020.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20190903_133934.jpg'),
        url: require('../assets/images/20190903_133934.jpg')
      },
      {
        width: 250,
        height: 188,
        url_temp: require('../assets/images/temp/20200627_172923.jpg'),
        url: require('../assets/images/20200627_172923.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_171806.jpg'),
        url: require('../assets/images/20200627_171806.jpg')
      },
      {
        width: 250,
        height: 188,
        url_temp: require('../assets/images/temp/20200627_173300.jpg'),
        url: require('../assets/images/20200627_173300.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20190904_071213.jpg'),
        url: require('../assets/images/20190904_071213.jpg')
      },
      {
        width: 250,
        height: 188,
        url_temp: require('../assets/images/temp/20200627_173023.jpg'),
        url: require('../assets/images/20200627_173023.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200703_092533.jpg'),
        url: require('../assets/images/20200703_092533.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20190710_084224.jpg'),
        url: require('../assets/images/20190710_084224.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20190903_134000.jpg'),
        url: require('../assets/images/20190903_134000.jpg')
      },
      {
        width: 250,
        height: 188,
        url_temp: require('../assets/images/temp/20190903_134452.jpg'),
        url: require('../assets/images/20190903_134452.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20190904_071432.jpg'),
        url: require('../assets/images/20190904_071432.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20191006_084556.jpg'),
        url: require('../assets/images/20191006_084556.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20190928_075732.jpg'),
        url: require('../assets/images/20190928_075732.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20191006_082520.jpg'),
        url: require('../assets/images/20191006_082520.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20191121_121805.jpg'),
        url: require('../assets/images/20191121_121805.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20191121_121952.jpg'),
        url: require('../assets/images/20191121_121952.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_170825.jpg'),
        url: require('../assets/images/20200627_170825.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_171030.jpg'),
        url: require('../assets/images/20200627_171030.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_171214.jpg'),
        url: require('../assets/images/20200627_171214.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_172728.jpg'),
        url: require('../assets/images/20200627_172728.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_174035.jpg'),
        url: require('../assets/images/20200627_174035.jpg')
      },
      {
        width: 250,
        height: 188,
        url_temp: require('../assets/images/temp/20200627_173300.jpg'),
        url: require('../assets/images/20200627_173300.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_173122.jpg'),
        url: require('../assets/images/20200627_173122.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200703_092533.jpg'),
        url: require('../assets/images/20200703_092533.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_173510.jpg'),
        url: require('../assets/images/20200627_173510.jpg')
      }
    ]
    let im2 = [
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/lanscape_in_1.jpg'),
        url: require('../assets/images/lanscape_in_1.jpg')
      },
      {
        width: 250,
        height: 188,
        url_temp: require('../assets/images/temp/lanscape_in_2.jpg'),
        url: require('../assets/images/lanscape_in_2.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/lanscape_in_3.jpg'),
        url: require('../assets/images/lanscape_in_3.jpg')
      },
      {
        width: 141,
        height: 250,
        url_temp: require('../assets/images/temp/20200507_102128.jpg'),
        url: require('../assets/images/20200507_102128.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200604_110733.jpg'),
        url: require('../assets/images/20200604_110733.jpg')
      }
    ]
    let im3 = [
      {
        width: 141,
        height: 250,
        url_temp: require('../assets/images/temp/20200309_161356.jpg'),
        url: require('../assets/images/20200309_161356.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_171049.jpg'),
        url: require('../assets/images/20200627_171049.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_172247.jpg'),
        url: require('../assets/images/20200627_172247.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_172851.jpg'),
        url: require('../assets/images/20200627_172851.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_172728.jpg'),
        url: require('../assets/images/20200627_172728.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_172754.jpg'),
        url: require('../assets/images/20200627_172754.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_172428.jpg'),
        url: require('../assets/images/20200627_172428.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_171806.jpg'),
        url: require('../assets/images/20200627_171806.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_171214.jpg'),
        url: require('../assets/images/20200627_171214.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_170746.jpg'),
        url: require('../assets/images/20200627_170746.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_170642.jpg'),
        url: require('../assets/images/20200627_170642.jpg')
      },
      {
        width: 141,
        height: 250,
        url_temp: require('../assets/images/temp/20200309_161306.jpg'),
        url: require('../assets/images/20200309_161306.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20191110_135248.jpg'),
        url: require('../assets/images/20191110_135248.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20190903_132739.jpg'),
        url: require('../assets/images/20190903_132739.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20190903_132238.jpg'),
        url: require('../assets/images/20190903_132238.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_173137.jpg'),
        url: require('../assets/images/20200627_173137.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_173201.jpg'),
        url: require('../assets/images/20200627_173201.jpg')
      },
      {
        width: 188,
        height: 250,
        url_temp: require('../assets/images/temp/20200627_172813.jpg'),
        url: require('../assets/images/20200627_172813.jpg')
      }
    ]
    let im4 = [
      {
        width: 250,
        height: 141,
        url_temp: require('../assets/images/temp/event_in_1.jpg'),
        url: require('../assets/images/event_in_1.jpg')
      },
      {
        width: 250,
        height: 141,
        url_temp: require('../assets/images/temp/event_in_2.jpg'),
        url: require('../assets/images/event_in_2.jpg')
      },
      {
        width: 250,
        height: 188,
        url_temp: require('../assets/images/temp/event_in_3.jpg'),
        url: require('../assets/images/event_in_3.jpg')
      },
      {
        width: 250,
        height: 228,
        url_temp: require('../assets/images/temp/event_in_4.jpg'),
        url: require('../assets/images/event_in_4.jpg')
      }
    ]
    let im5 = [
      // {
      //   width: 250,
      //   height: 141,
      //   url_temp: require('../assets/images/temp/event_in_1.jpg'),
      //   url: require('../assets/images/event_in_1.jpg')
      // },
      // {
      //   width: 250,
      //   height: 141,
      //   url_temp: require('../assets/images/temp/event_in_2.jpg'),
      //   url: require('../assets/images/event_in_2.jpg')
      // },
      // {
      //   width: 250,
      //   height: 188,
      //   url_temp: require('../assets/images/temp/event_in_3.jpg'),
      //   url: require('../assets/images/event_in_3.jpg')
      // },
      // {
      //   width: 250,
      //   height: 228,
      //   url_temp: require('../assets/images/temp/event_in_4.jpg'),
      //   url: require('../assets/images/event_in_4.jpg')
      // }
    ]

    if (this.id === 1) {
      this.content.h1 = 'Rent Plants'
      this.content.h1s = 'Plant Rental Service for Offices &amp; Businesses'
      this.content.h2 = 'Plant Rental Service for Offices &amp; Businesses'
      this.content.c1 = '<p> ต้นไม้ของสวนอรุณมาสร้างความสุขและสุขภาพที่ดีตั้งแต่เมื่อปี 2008 เราได้เปลี่ยนสำนักงานและ <br>พื้นที่ภายในเชิงพาณิชย์ด้วยนานาพรรณไม้ของเราเพื่อให้ลูกค้าและ <br>ผู้มาเยี่ยมเยียนของพวกเขาสามารถเพลิดเพลินกับความงามของธรรมชาติ</p>'
      this.content.c1 += '<p ><b>ต้นไม้ของสวนอรุณมอบการบริการอย่างมืออาชีพ</b></p>'
      this.content.c1 += '<p >&gt; ต้นไม้ให้เช่า</p>'
      this.content.c1 += '<p >&gt; ต้นไม้จำหน่าย</p>'
      this.content.c1 += '<p >&gt; ต้นไม้จัดงาน</p>'
      this.content.c1 += '<p >&gt; ต้นไม้ของขวัญ</p>'
      this.content.c1 += '<p >&gt; การออกแบบภูมิทัศน์ภายในและภายนอกอย่างมืออาชีพ</p><br>'
      this.content.c1 += '<p><b>ต้นไม้ของสวนอรุณแบ่งเป็น</b></p>'
      this.content.c1 += '<p >&gt; ต้นไม้ในร่ม</p>'
      this.content.c1 += '<p >- ต้นไม้ฟอกอากาศ</p>'
      this.content.c1 += '<p >- ต้นไม้มงคล</p>'
      this.content.c1 += '<p >- ต้นไม้ใบประดับสวยงาม</p>'
      this.content.c1 += '<p >- ต้นไม้ดอกประดับสวยงาม</p>'
      this.content.c1 += '<p >&gt; ต้นไม้กลางแจ้ง</p>'
      this.content.c1 += '<p >- ต้นไม้ฟอกอากาศ</p>'
      this.content.c1 += '<p >- ต้นไม้มงคล</p>'
      this.content.c1 += '<p >- ต้นไม้ใบประดับสวยงาม</p>'
      this.content.c1 += '<p >- ต้นไม้ดอกประดับสวยงาม</p>'
      this.content.c1 += '<p >- ต้นไม้ดอกมีกลิ่นหอม</p><br>'
      this.content.c1 += '<p><b>มาร่วมสร้างสถานที่ทำงานที่เป็นมิตรกับสิ่งแวดล้อม</b></p>'
      this.content.c1 += '<p >นานาพรรณไม้ที่มีชีวิตในที่ทำงานและในสถานที่เชิงพาณิชย์จะช่วยสร้างสภาพแวดล้อมและอารมณ์ดีขึ้น<br> พรรณไม้ในร่มช่วยเพิ่มความชื้นและทำให้อากาศบริสุทธิ์โดยการกำจัด VOC (สารอินทรีย์ระเหย - สารก่อมะเร็ง) ในสภาพแวดล้อมปิด</p><br>'
      this.content.c1 += '<p >ด้วยแพ็คเกจข้อเสนอที่แตกต่างกันและพันธุ์ไม้ในร่มคุณภาพที่มีให้เลือกมากมายคุณสามารถเช่าหรือ <br>แม้แต่ซื้อต้นไม้จากเราเพื่อสร้างสภาพแวดล้อมการทำงานที่เหมาะสำหรับทั้งคุณและผู้มาเยี่ยมเยียน</p><br>'
      this.content.c2 = '<p >คุยสบายๆกับคนทำสวน ได้ที่ suanaroon@gmail.com</p>'
      this.content.c2 += '<p >สุชญา 098 369 8361</p>'
      // this.content.c2 += '<p >ธนัชชา 098 192 4289</p>'
      // this.content.c2 += '<p >ณัฐธดา 062 498 5415</p>'
      this.content.img = this.images1
      this.content.h3 = 'Our Rent Plants Gallery'
      this.imagesG = im
    } else if (this.id === 2) {
      this.content.h1 = 'Landscape Design'
      this.content.h1s = 'Design, build and maintain the garden of your dreams.'
      this.content.h2 = 'Celebrating Outdoor Living Spaces'
      this.content.c1 = '<p >ทีมออกแบบภูมิทัศน์ที่มีประสบการณ์ของเราพร้อมที่จะรับฟังแนวคิดและ <br>ข้อกำหนดด้านภูมิทัศน์ของคุณเพื่อสร้างสวนในฝันของคุณให้เป็นจริง</p>'
      this.content.c2 = '<p >คุยสบายๆกับคนทำสวน ได้ที่ suanaroon@gmail.com</p>'
      this.content.c2 += '<p >สุชญา 098 369 8361</p>'
      // this.content.c2 += '<p >ธนัชชา 098 192 4289</p>'
      // this.content.c2 += '<p >ณัฐธดา 062 498 5415</p>'
      this.content.img = this.images3
      this.content.h3 = 'Our Landscape and Garden Designs'
      this.imagesG = im2
    } else if (this.id === 3) {
      this.content.h1 = 'Buy'
      this.content.h1s = ''
      this.content.h2 = ''
      this.content.c1 = '<p> คุณกำลังมองหาต้นไม้เพื่อมาสร้างความสุขและสุขภาพที่ดีให้ตัวคุณเองอยู่หรือเปล่า</p>'
      this.content.c1 += '<p> ลองเข้ามาคุยสบายๆ กับคนทำสวน ขอรูปภาพและราคา suanaroon@gmail.com</p>'
      this.content.c1 += '<p>ที่สำคัญเราอยากแนะนำการดูแลต้นไม้สำหรับคุณ</p>'
      this.content.c1 += '<p><b>ต้นไม้ของสวนอรุณแบ่งเป็น</b></p>'
      this.content.c1 += '<p >&gt; ต้นไม้ในร่ม</p>'
      this.content.c1 += '<p >- ต้นไม้ฟอกอากาศ</p>'
      this.content.c1 += '<p >- ต้นไม้มงคล</p>'
      this.content.c1 += '<p >- ต้นไม้ใบประดับสวยงาม</p>'
      this.content.c1 += '<p >- ต้นไม้ดอกประดับสวยงาม</p>'
      this.content.c1 += '<p >&gt; ต้นไม้กลางแจ้ง</p>'
      this.content.c1 += '<p >- ต้นไม้ฟอกอากาศ</p>'
      this.content.c1 += '<p >- ต้นไม้มงคล</p>'
      this.content.c1 += '<p >- ต้นไม้ใบประดับสวยงาม</p>'
      this.content.c1 += '<p >- ต้นไม้ดอกประดับสวยงาม</p>'
      this.content.c1 += '<p >- ต้นไม้ดอกมีกลิ่นหอม</p><br>'
      this.content.c2 = '<p >คุยสบายๆกับคนทำสวน ได้ที่ suanaroon@gmail.com</p>'
      this.content.c2 += '<p >สุชญา 098 369 8361</p>'
      // this.content.c2 += '<p >ธนัชชา 098 192 4289</p>'
      // this.content.c2 += '<p >ณัฐธดา 062 498 5415</p>'
      this.content.img = this.images2
      this.content.h3 = 'Our Buy Gallery'
      this.imagesG = im3
    } else if (this.id === 4) {
      this.content.h1 = 'Event'
      this.content.h1s = ''
      this.content.h2 = ''
      this.content.c1 = '<p> ต้นไม้และความเขียวชอุ่มคือสิ่งดึงดูดให้ผู้คนเข้ามาเยี่ยมชมภายในงานของคุณ ไม่ว่าจะเป็นงานนิทรรศการ</p>'
      this.content.c1 += '<p> งานสัมมนา งานประชุม งานแสดงสินค้า หรือแม้แต่งานเลี้ยงในโอกาสต่างๆ ทีมงานของเราจะช่วยคุณเติมความเขียวชอุ่ม <br>ด้วยนานาพรรณไม้อย่างมืออาชีพ</p>'
      this.content.c2 = '<p >คุยสบายๆกับคนทำสวน ได้ที่ suanaroon@gmail.com</p>'
      this.content.c2 += '<p >สุชญา 098 369 8361</p>'
      // this.content.c2 += '<p >ธนัชชา 098 192 4289</p>'
      // this.content.c2 += '<p >ณัฐธดา 062 498 5415</p>'
      this.content.img = this.images4
      this.content.h3 = 'Our Event Gallery'
      this.imagesG = im4
    } else if (this.id === 5) {
      this.content.h1 = 'Souvenir'
      this.content.h1s = ''
      this.content.h2 = ''
      this.content.c1 = '<p> ถ้าคุณกำลังมองหาของขวัญหรือของที่ระลึกในโอกาสต่างๆ ไม่ว่าจะเป็นงานแต่งงาน งานเปิดตัวสินค้า งานเฉลิมฉลอง</p>'
      this.content.c1 += '<p> งานวันเกิด หรืองานใดๆที่ต้องการมอบสิ่งพิเศษสำหรับผู้มาร่วมงาน ต้นไม้เป็นของขวัญและของที่ระลึกที่มีคุณค่าและ <br> คุณประโยชน์ ควรค่าแก่การส่งมอบ </p>'
      this.content.c2 = '<p >คุยสบายๆกับคนทำสวน ได้ที่ suanaroon@gmail.com</p>'
      this.content.c2 += '<p >สุชญา 098 369 8361</p>'
      // this.content.c2 += '<p >ธนัชชา 098 192 4289</p>'
      // this.content.c2 += '<p >ณัฐธดา 062 498 5415</p>'
      this.content.img = this.images5
      this.content.h3 = ''
      this.imagesG = im5
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

</style>
