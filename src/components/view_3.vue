<template>
    <div ref="mainContent" class="container-fluid" style="min-height:800px">
        <div class=row>
            <div ref="bgMain" class="col-12 position-relative bg-success w-100 banner-bg banner-hight mb-4" v-bind:style="{ 'background-image': 'url(' + content.img + ')'}">
                <div class="text-inner text-center position-absolute text-white">
                    <h1 v-html="content.h1"></h1>
                    <span v-html="content.h1s"></span> <i class="icon-angle-right"></i>
                </div>
            </div>
             <!-- <div class="col-12 mt-4 pt-4">
                <div class="row align-middle align-center mt-4">
                  <div class="col-12">
                      <div class="col-inner text-center">
                          <h3 v-html="content.h2"></h3>
                      </div>
                  </div>
                  <div class="col-12 mb-4 pb-4 pt-4">
                      <div class="col-inner text-center pl-4 pr-4" v-html="content.c1">
                      </div>
                  </div>
              </div>
            </div> -->
            <div class="col-12 mt-4 pt-4">
                <!--- com- list -->
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-4 text-center mb-3 already-visible">
                            <router-link to="/knowledges/1">
                                <div>
                                    <div class="box-list-items-60 p-1">
                                        <div class="box-image-bg-100-auto " v-bind:style="{ 'background-image': 'url(' + images1 + ')'}"></div>
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <b>พันธุ์ไม้ดูดสารพิษ</b>
                                    <p  class="p-2"> อากาศที่เราหายใจเข้าไปทุกวันนี้ประกอบด้วยฝุ่นละอองและสารเคมีมากมาย...</p>
                                </div>
                            </router-link>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4 text-center mb-3 already-visible">
                            <router-link to="/knowledges/1">
                                <div>
                                    <div class="box-list-items-60 p-1">
                                        <div class="box-image-bg-100-auto " v-bind:style="{ 'background-image': 'url(' + images2 + ')'}"></div>
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <b>ขงจิ้อ กับ ต้นไม้ </b>
                                     <p  class="p-2">   ท่านขงจื้อกล่าวเกี่ยวกับการสร้างความสุขไว้ว่า .... ถ้าอยากมีความสุข ตลอดชีวิต ให้ปลูกต้นไม้ ...</p>
                                </div>
                            </router-link>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4 text-center mb-3 already-visible">
                            <router-link to="/knowledges/1">
                                <div>
                                    <div class="box-list-items-60 p-1">
                                        <div class="box-image-bg-100-auto " v-bind:style="{ 'background-image': 'url(' + images3 + ')'}"></div>
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <b>วิธีเลือกไม้ประดับอาคาร </b>
                                    <p class="p-2">ทุกวันนี้สังคมเมือง กับเทคโนโลยีเข้ามามีส่วนในวงจรชีวิตของมนุษย์มากเกินกว่า 80% บางคนแทบไม่มีโอกาสที่จะได้สัมผัสกับต้นไม้ใบหญ้าเลยด้วยซ้ำ...</p>
                                </div>
                            </router-link>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4 text-center mb-3 already-visible">
                            <router-link to="/knowledges/2">
                                <div>
                                    <div class="box-list-items-60 p-1">
                                        <div class="box-image-bg-100-auto " v-bind:style="{ 'background-image': 'url(' + images4 + ')'}"></div>
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <b>xxxxxxxx </b>
                                    <p class="p-2"> ...</p>
                                </div>
                            </router-link>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4 text-center mb-3 already-visible">
                            <router-link to="knowledges/1">
                                <div>
                                    <div class="box-list-items-60 p-1">
                                        <div class="box-image-bg-100-auto " v-bind:style="{ 'background-image': 'url(' + images5 + ')'}"></div>
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <b>xxxxxxxx </b>
                                    <p class="p-2">...</p>
                                </div>
                            </router-link>
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
      images3: require('../assets/images/20200627_172428.jpg'),
      images4: require('../assets/images/20200627_173313.jpg'),
      images5: require('../assets/images/20200627_172926.jpg'),
      content: {},
      imagesG: []
    }
  },
  created () {
    if (this.id === 1) {
      this.content.h1 = 'Knowledge '
      this.content.h1s = 'Knowledge shot content'
      this.content.h2 = 'Plant Rental Service for Offices &amp; Businesses'
      this.content.c1 = '<p >We are the preferred supplier to architects, interior designers, corporations, government departments and event organizers.<br>Since 1982, we have been transforming offices and commercial interior spaces with lush greenery and botanicals so that our customers and their guests can enjoy the beauty of nature.</p>'
      this.content.c1 += '<p >Our service include:</p>'
      this.content.c1 += '<p >&gt; Plant rental –indoor plants and outdoor plants</p>'
      this.content.c1 += '<p >&gt; Plant care and maintenance</p>'
      this.content.c1 += '<p >&gt; Professional interior and exterior landscape design</p>'
      this.content.c1 += '<p >&gt; Wedding and events decoration</p>'
      this.content.img = this.images5
      this.content.h3 = 'Our Rent Plants Gallery'
    } else if (this.id === 2) {
      this.content.h1 = 'Landscape Design'
      this.content.h1s = 'Design, build and maintain the garden of your dreams.'
      this.content.h2 = 'Celebrating Outdoor Living Spaces'
      this.content.c1 = '<p >Our passion for landscaping has been featured in many home magazines and newspapers. We take pride in our innovative landscape and garden designs that utilizes natural elements, gardening trends and breezy botanicals such as our potted lady palm and anthurium table top plants. Our experienced landscape design team are always ready to listen to your landscape ideas and requirements to create the garden of your dreams.</p>'
      this.content.img = this.images3
      this.content.h3 = 'Our Landscape and Garden Designs'
    }
    let im = [
      {
        width: 133,
        height: 200,
        url: 'https://source.unsplash.com/featured/133x200?green,blue'
      },
      {
        width: 300,
        height: 200,
        url: 'https://source.unsplash.com/featured/300x200?green,blue'
      },
      {
        width: 133,
        height: 200,
        url: 'https://source.unsplash.com/featured/133x200?red,blue'
      },
      {
        width: 133,
        height: 200,
        url: 'https://source.unsplash.com/featured/133x200?blue,red'
      },
      {
        width: 133,
        height: 200,
        url: 'https://source.unsplash.com/featured/133x200?green,red'
      },
      {
        width: 300,
        height: 200,
        url: 'https://source.unsplash.com/featured/300x200?green,blue'
      },
      {
        width: 300,
        height: 200,
        url: 'https://source.unsplash.com/featured/300x200?red,blue'
      },
      {
        width: 133,
        height: 200,
        url: 'https://source.unsplash.com/featured/133x200?green,black'
      }
    ]
    this.imagesG = im
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
.box-list-items-60 {
    position: relative;
    overflow: hidden;
    padding-top: 60% !important;
}
.box-image-bg-100-auto {
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
    background-size: 100% auto;
}
.already-visible {
    transform: translateY(0);
    animation: none;
}

</style>
