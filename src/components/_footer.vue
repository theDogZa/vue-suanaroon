<template>
    <!-- <div class="footer" v-bind:class="[(isFooterPosition)? 'fixed-bottom': '']"  >
        <footer>
            <div class="container text-center pt-4 mt-3 mb-2">
                <p class="text-shadow-224b"> ©  2006 - 2020 Copyrighted By Prasong Putichanchai.  These photos may not be used without permission.</p>
            </div>
        </footer>
    </div> -->
    <div>
        <footer class="section-content bg-aroon">
            <div class="container p-2">
                <div class="row">
                    <div class="col text-center">
                        <h4 class=" text-white  mt-4 ">Professional Plants Services</h4>
                        <h6 class="text-uppercase font-italic text-white text-desc">"เน้นคุณภาพ ทำงานด้วยรัก บริการด้วยความเอาใจใส่"</h6>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="footer-box-logo-name col-12 col-lg-auto text-center">
                        <div class="row justify-content-center">
                            <!-- <div class="col-auto p-2">
                                <img :src="img_logo" height="65" alt="Suanaroon">
                            </div> -->
                            <div class="col-auto pt-4">
                                <p class="text-white">www.suanaroon.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer-box-copyright col-12 col-lg-auto pt-4">
                        <p class="text-white">Copyright © 2020 suanaroon.com | All Rights Reservd.</p>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
        </footer>
    </div>
</template>
<script>
export default {
  name: 'foot',
  data () {
    return {
      isFooterPosition: false,
      img_logo: require('../assets/images/LogoSuanaroon.png')
    }
  },
  created () {

  },
  methods: {

  }
}
</script>
<style scoped>
/* footer{
    height: 100px;
} */
.bg-aroon{
    background-color: #288745 !important;
}
.text-desc{
text-align: center;
    width: 100%;
}
.footer-box-copyright{
text-align: right !important;
}

@media (max-width: 575.98px) {
  p {
       margin: unset;
        font-size: 12px;
        line-height: 1.5;
    }
    .footer-box-copyright{
    text-align:center !important;
    }
    .text-desc{
        font-size: 17px;
    }

}
/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
   p {
       margin: unset;
        font-size: 12px;
        line-height: 1.5;
    }
     .footer-box-copyright{
    text-align:center !important;
    }
    .text-desc{
        font-size: 17px;
    }
}

/* @media (min-width: 768px){
    p {
        margin: 10px 0 35px;
        font-size: 20px;
        line-height: 1.6;
    }
} */

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
     p {
       margin: unset;
        font-size: 14px;
        line-height: 1.5;
    }
     .footer-box-copyright{
    text-align:center !important;
    }
}

</style>
