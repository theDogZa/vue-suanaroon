<template>
  <div>
    <nav v-bind:class="[(isNavPosition)?'fixed-top pt-0 pb-0': 'position-static',(isHome)?'position-absolute':'' ]" class="nav-menu navbar navbar-expand-lg navbar-light mt-0 mb-0 navbar-fixed-top top-nav-collapse shadow-sm pb-0 pt-0 bg-aroon fixed-top" role="navigation">
      <div class="container-fluid"  v-bind:style="[isNavPosition ? {'padding': '0px'} :  {'padding': '0px'}]">
        <a class="navbar-brand" href="http://suanaroon.com">
          <img :src="img_logo" height="65" alt="Suanaroon">
        </a>
        <div class="logo-name float-left pt-3 mt-1">
          <h1 class=" text-uppercase">SUANAROON</h1>
        </div>
        <a class="navbar-brand" href="http://suanaroon.com" style="display: none;">
          <img :src="img_logo" height="35" alt="Suanaroon">
        </a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <span>Menu</span>
        </button>
        <div class="box-lang-social-sm float-left mr-3 d-none">
          <div class="float-right pt-1 mr-1 mt-3">
            <p class=" text-uppercase ">
              <a class=" text-uppercase " href="?languages=TH">TH</a>
            </p>
          </div>
          <div class="float-right pt-1 mr-1 mt-3">
            <p class=" text-uppercase ">
              <a class=" text-uppercase " href="?languages=EN">EN</a>
            </p>
          </div>
        </div>

        <div class="navbar-collapse collapse ml-4 mt-1 pt-3" id="navbarSupportedContent">
          <ul class="navbar-nav ul-menu-list">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <!-- <li class="nav-item active">
              <a class="nav-link " href="/aboutus">
                เกี่ยวกับเรา <span class="sr-only">(current)</span>
              </a>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" to="/rent">
                Rent <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/buy">
                Buy <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/events">
                Events <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <!-- <li class="nav-item active">
              <a class="nav-link " href="/customers">
                ลูกค้าของเรา <span class="sr-only">(current)</span>
              </a>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" to="/souvenir">
                Souvenir <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/landscape">
                Landscape <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Knowledge">
                Knowledge <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#contactus">
                Contact <span class="sr-only">(current)</span>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="box-lang-social col-md-auto d-none d-lg-block float-right mt-4 mr-0 pr-0">
            <div class="float-right">
              <a href="https://line.me/ti/p/Kfzi9xgVn1" target="_blank"><img :src="img_line" height="35" alt="Line Suanaroon"></a>
            </div>
            <div class="float-right mr-2 ml-2">
              <a href="https://www.facebook.com/ProfessionalPlantsServices/" target="_blank">
                <img :src="img_fb" height="35" alt="FACEBOOK">
              </a>
            </div>
            <div class="float-right mr-2 mt-3">
              <p class=" text-uppercase ">
                <a class=" text-uppercase " href="?languages=TH">TH</a>
              </p>
            </div>
            <div class="float-right mr-2 mt-3">
              <p class=" text-uppercase ">
                <a class=" text-uppercase " href="?languages=EN">EN</a>
              </p>
            </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      img_logo: require('../assets/images/LogoSuanaroon.png'),
      img_fb: require('../assets/images/logo-facebook.png'),
      img_line: require('../assets/images/logo-line.png'),
      isNavPosition: false,
      isHome: false,
      classNav: ''
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted () {

  },
  methods: {
    isClass () {
      if (this.isHome === true) {
        this.classNav = 'position-absolute'
      } else {
        this.classNav = 'fixed-top pt-0 pb-0 bg-black'
      }
    },
    handleScroll: function () {
      if (window.scrollY > 1) {
        this.isNavPosition = true
      } else {
        this.isNavPosition = false
      }
    }
  }
}

</script>
<style scoped>
.logo-name h1{
  font-size: 2rem;
  letter-spacing: -1.6px;
}
.bg-aroon{
  background-color: #288745 !important;
}
.bg-aroon a,
.bg-aroon h1{
  color: white !important;
}
.ul-menu-list li{
  border-bottom: 2px solid #288745;
  display: inline-block;
}
.ul-menu-list li:hover{
    border-bottom: 2px solid chartreuse;
}
@media (min-width: 1200px){
.box-lang-social-sm {
    display: none !important;
}
}
</style>
