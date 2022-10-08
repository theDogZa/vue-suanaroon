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
                     <div class="row align-middle align-center mt-4">
                        <div class="col-12">
                            <!-- <div class="col-inner text-center">
                                <h3 v-html="content.h2"></h3>
                            </div> -->
                            <!-- <div class="container section-title-container">
                                <h3 class="section-title section-title-center">
                                    <b></b>
                                    <span class="section-title-main" v-html="content.h2"></span>
                                    <b></b>
                                </h3>
                            </div> -->
                        </div>
                     </div>
                  <div class="col-12 pb-4 pt-4">
                      <div class="col-inner text-center pl-4 pr-4" v-html="content.c2">
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
      id: this.$route.params.id
    }
  },
  created () {
    console.log(this.id)
    if (this.id === '1') {
      this.content.h1 = 'พันธุ์ไม้ดูดสารพิษ'
      this.content.h1s = 'ต้นไม้นั้นเปรียบเสมือนปอดของมนุษย์ที่คอยผลิต อ๊อกซิเจนออกมาและในขณะเดียวกันก็ทำหน้าที่เหมือนกับเครื่องกรองอากาศไปในตัวด้วย '
      this.content.h2 = ''
      this.content.c2 = '<p>-----คุณทราบหรือไม่ว่า------ อากาศที่เราหายใจเข้าไปทุกวันนี้ประกอบด้วยฝุ่นละอองและสารเคมีมากมาย ความพยายามที่จะเอาชนะฝุ่นละอองและสารพิษในอากาศที่เรามองไม่เห็นนั้น คงไม่มีวิธีใดที่จะดีไปกว่าการใช้วิธีธรรมชาติมาจัดการกับอากาศพิษเหล่านั้น เรารู้มานานแล้วว่าต้นไม้นั้นเปรียบเสมือนปอดของมนุษย์ที่คอยผลิต อ๊อกซิเจนออกมาและในขณะเดียวกันก็ทำหน้าที่เหมือนกับเครื่องกรองอากาศไปในตัวด้วย      วิธีที่ดีที่สุดเพื่อทำให้คุณภาพของอากาศในที่อยู่อาศัยและที่ทำงานเป็นอากาศที่บริสุทธิ์และสะอาด คือการปลูกต้นไม้ ซึ่งจำเป็นต้องอาศัยต้นไม้ที่มีคุณสมบัติในการดูดสารพิษ ต้องการแสงน้อย และเจริญเติบโตได้ดีแม้ในอยู่ในอาคารที่อยู่อาศัย '
      this.content.c2 += ' <br>Dr. B.C Wolverton ผู้แต่งหนังสือ "How to grow fresh air" เป็นผู้ที่ทำการทดลองใช้ต้นไมพันธุ์ต่างๆ มาทำการทดลองเพื่อสร้างอากาศบริสุทธิ์ Dr. Wolverton ทำงานที่กองการบินอวกาศและการบินแห่งชาติ(NASA) ประมาณ 20 ปี และพัฒนาเทคโนโลยีที่น่าจะทำให้มนุษย์อยู่ภายในสถานที่ปิด อย่างเช่น บนดวงจันทร์หรือดาวอังคารได้ การวิจัยบุกเบิกอันนี้ทำให้เขาทราบว่าการปลูกต้นไม้ (Houseplants) คือเครื่องกรองอากาศที่รวดเร็วที่สุดและมีประสิทธิภาพที่สุดในการลดมวลสารอันตรายอย่างเช่น 1ฟอร์มาลดีไฮด์, 2เบนซิน และ 3ไซลีน ที่อยู่ในอากาศ ซึ่งทั้งหมดอาจส่งผลให้เกิดโรคต่างๆได้หลายโรค เช่น โรคหอบและกลุ่มอาการของโรคภูมิแพ้ต่างๆ'
      this.content.c2 += '  <br>   Dr. Wolverton ได้ทำการปลูกต้นไม้จำพวก Houseplants ไว้ในห้องซึ่งถูกปิดตาย แล้วพวกเขาก็ปล่อยสารเคมีที่เป็นอันตรายต่างๆ เข้าไปในห้องปิดนั้นซึ่งมีสารเคมีกว่าหนึ่งร้อยชนิดเลยทีเดียว หลังจากการทดลองพบว่าต้นไม้เหล่านั้นสามารถดูดสารเคมีออกจากอากาศได้ พวกเขาได้ทำการทดลองซ้ำๆอีกหลายครั้ง สุดท้ายก็ค้นพบความลับที่ทำให้ชวนพิศวงว่าต้นไม้เปรียบเสมือนปอดข้างหนึ่งของมนุษย์ที่คอยช่วยดูดสารพิษต่างๆ ก่อนที่มนุษย์จะสูดเอามันเข้าไป</p>'
      this.content.img = this.images1
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
