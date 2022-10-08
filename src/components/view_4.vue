<template>
    <div ref="mainContent" class="container-fluid" style="min-height:800px">
        <div class=row>
            <div ref="bgMain" class="col-12 position-relative bg-success w-100 banner-bg banner-hight mb-4" style="min-height: 350px;" v-bind:style="{ 'background-image': 'url(' + content.img + ')'}">
                <div class="text-inner text-center position-absolute text-white">
                    <h1 v-html="content.h1"></h1>
                    <span v-html="content.h1s"></span> <i class="icon-angle-right"></i>
                </div>
            </div>
            <div class="col-12 mt-4 pt-4">
                <!--- com- list -->
                <div class="container">
                    <div class="row">
                        <div class="col-6 col-md-4 mb-4 text-left already-visible box-item-sale">
                            <router-link to="/buy/1">
                                <div>
                                    <div class="box-list-items p-1 ">
                                        <div class="box-image-bg " v-bind:style="{ 'background-image': 'url(' + images1 + ')'}"></div>
                                    </div>
                                </div>
                                <div class="mt-2 p-2">
                                    <div class="mb-2 font-weight-bold">กระถางไม้ ทรงเหลี่ยมคางหมู สูง 80 เซน</div>
                                    <div class="mb-4 pb-2 pl-2">
                                        <div class="row">
                                            <div class="col">
                                                ปากกระถางกว้าง 32เซน X 32 เซน<br>
                                                ฐานกระถาง 25 เซน X 25 เซน
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-4 pb-3 pl-4">
                                        <div class="row">
                                            <div class="col"><b>ขนาดเล็ก</b></div>
                                            <div class="col text-right pr-4"><b>200</b></div>
                                        </div>
                                        <div class="row">
                                            <div class="col"><b>ขนาดกลาง</b></div>
                                            <div class="col text-right pr-4"><b>300</b></div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>

                        <div class="col-6 col-md-4 mb-3 text-left already-visible box-item-sale">
                            <router-link to="/buy/1">
                                <div>
                                    <div class="box-list-items p-1 ">
                                        <div class="box-image-bg " v-bind:style="{ 'background-image': 'url(' + images2 + ')'}"></div>
                                    </div>
                                </div>
                                <div class="mt-2 p-2">
                                    <div class="mb-2 font-weight-bold">กระถางไม้ ทรงเหลี่ยมคางหมู สูง 45 เซน</div>
                                    <div class="mb-4 pb-2 pl-2">
                                        <div class="row">
                                            <div class="col">
                                                ปากกระถางกว้าง 32เซน X 32 เซน<br>
                                                ฐานกระถาง 25 เซน X 25 เซน
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-4 pb-3 pl-4">
                                        <div class="row">
                                            <div class="col"><b>ขนาดเล็ก</b></div>
                                            <div class="col text-right pr-4"><b>200</b></div>
                                        </div>
                                        <div class="row">
                                            <div class="col"><b>ขนาดกลาง</b></div>
                                            <div class="col text-right pr-4"><b>300</b></div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>

                        <div class="col-6 col-md-4 mb-3 text-left already-visible box-item-sale">
                            <router-link to="/buy/1">
                                <div>
                                    <div class="box-list-items p-1 ">
                                        <div class="box-image-bg " v-bind:style="{ 'background-image': 'url(' + images3 + ')'}"></div>
                                    </div>
                                </div>
                                 <div class="mt-2 p-2">
                                    <div class="mb-2 font-weight-bold">กระถางไม้ ทรงเหลี่ยมคางหมู สูง 60 เซน</div>
                                    <div class="mb-4 pb-2 pl-2">
                                        <div class="row">
                                            <div class="col">
                                                ปากกระถางกว้าง 32เซน X 32 เซน<br>
                                                ฐานกระถาง 25 เซน X 25 เซน
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-4 pb-3 pl-4">
                                        <div class="row">
                                            <div class="col"><b>ขนาดเล็ก</b></div>
                                            <div class="col text-right pr-4"><b>200</b></div>
                                        </div>
                                        <div class="row">
                                            <div class="col"><b>ขนาดกลาง</b></div>
                                            <div class="col text-right pr-4"><b>300</b></div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>

                        <div class="col-6 col-md-4 mb-3  text-left already-visible box-item-sale">
                            <router-link to="/buy/1">
                                <div>
                                    <div class="box-list-items p-1 ">
                                        <div class="box-image-bg " v-bind:style="{ 'background-image': 'url(' + images4 + ')'}"></div>
                                    </div>
                                </div>
                                 <div class="mt-2 p-2">
                                    <div class="mb-2 font-weight-bold">กระถางไม้ ทรงเหลี่ยมคางหมู สูง 80 เซน</div>
                                    <div class="mb-4 pb-2 pl-2">
                                        <div class="row">
                                            <div class="col">
                                                ปากกระถางกว้าง 32เซน X 32 เซน<br>
                                                ฐานกระถาง 25 เซน X 25 เซน
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-4 pb-3 pl-4">
                                        <div class="row">
                                            <div class="col"><b>ขนาดเล็ก</b></div>
                                            <div class="col text-right pr-4"><b>200</b></div>
                                        </div>
                                        <div class="row">
                                            <div class="col"><b>ขนาดกลาง</b></div>
                                            <div class="col text-right pr-4"><b>300</b></div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>

                        <div class="col-6 col-md-4 text-left mb-3 already-visible box-item-sale">
                            <router-link to="buy/1">
                                <div>
                                    <div class="box-list-items p-1 ">
                                        <div class="box-image-bg " v-bind:style="{ 'background-image': 'url(' + images5 + ')'}"></div>
                                    </div>
                                </div>
                                <div class="mt-2 p-2">
                                    <div class="mb-2 font-weight-bold">กระถางไม้ ทรงเหลี่ยมคางหมู สูง 80 เซน</div>
                                    <div class="mb-4 pb-2 pl-2">
                                        <div class="row">
                                            <div class="col">
                                                ปากกระถางกว้าง 32เซน X 32 เซน<br>
                                                ฐานกระถาง 25 เซน X 25 เซน
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-4 pb-3 pl-4">
                                        <div class="row">
                                            <div class="col"><b>ราคา</b></div>
                                            <div class="col text-right pr-4"><b>200</b></div>
                                        </div>
                                    </div>
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
      this.content.h1 = 'Buy'
      this.content.h1s = 'Buy xxxxxxxxxxxxxx'
      this.content.h2 = 'Plant Rental Service for Offices &amp; Businesses'
      this.content.c1 = '<p >We are the preferred supplier to architects, interior designers, corporations, government departments and event organizers.<br>Since 1982, we have been transforming offices and commercial interior spaces with lush greenery and botanicals so that our customers and their guests can enjoy the beauty of nature.</p>'
      this.content.c1 += '<p >Our service include:</p>'
      this.content.c1 += '<p >&gt; Plant rental –indoor plants and outdoor plants</p>'
      this.content.c1 += '<p >&gt; Plant care and maintenance</p>'
      this.content.c1 += '<p >&gt; Professional interior and exterior landscape design</p>'
      this.content.c1 += '<p >&gt; Wedding and events decoration</p>'
      this.content.img = this.images2
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
.box-list-items {
    position: relative;
    overflow: hidden;
    padding-top: 130% !important;
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
.box-item-sale{
     border: 1px solid #fff;
}

.box-item-sale:hover{
    border: 1px solid #dee2e6;
    -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
        border-radius: 0.25rem;
}
</style>
