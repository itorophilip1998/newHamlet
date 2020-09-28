<template>
  <div>
    <div class="boxShadowV fixed-top bg-white">
      <!-- desktop view -->
      <div class="container desktopViewV">
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar-example2">
          <nuxt-link to="/" class="navbar-brand" href="#" style="color: #0065FC">Hamlet</nuxt-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <nuxt-link to="/" class="nav-link">
                  Home
                  <span class="sr-only">(current)</span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-new" href="#service">Service</a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-new" href="#works">How it Works</a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-new" href="#testimonial">Testimonials</a>
              </li>
            </ul>
            <form class="form-inline ml-auto my-2 my-lg-0">
              <nuxt-link to="/signin" class="nav-link">
                <button class="btn1V">Log In</button>
              </nuxt-link>
              <nuxt-link to="/signup" class="nav-link" href="#">
                <button class="btn2V">Get Started</button>
              </nuxt-link>
            </form>
          </div>
        </nav>
      </div>
    </div>
    <!-- desktop view end -->

    <!-- mobile-view -->
    <div class="boxShadowV fixed-top bg-white p-2">
      <div class="container mobileViewV bg-white">
        <div class="mobileViewV">
          <div id="mySidenavV" :style="styleObject" class="sidenavV">
            <div class>
              <span class="closebtn" style="color : #FFFFFF" @click="closeNav">
                <font-awesome-icon :icon="['fa', 'times']" />
              </span>
            </div>

            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <nuxt-link to="/" class="nav-link nav-new">
                  Home
                  <span class="sr-only">(current)</span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-new" href="#service">Service</a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-new" href="#works">How it Works</a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-new" href="#testimonial">Testimonials</a>
              </li>
              <li class="nav-item active">
                <nuxt-link to="/signin" class="nav-link">
                  <button class="btn1V">Log In</button>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/signup" class="nav-link" href="#">
                  <button class="btn2V">Get Started</button>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="wrapper2V">
            <nuxt-link to="/" class="logo-ham">Hamlet</nuxt-link>
            <div>
              <span class="openNav" @click="openNav">
                <font-awesome-icon :icon="['fa', 'bars']" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- mobile-view end -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      styleObject: {
        width: "0px"
      }
    };
  },
  methods: {
    openNav() {
      this.styleObject.width = "100%";
    },
    closeNav() {
      this.styleObject.width = "0px";
      // console.log('clicked')
    }
  }
};
</script>
<style scoped>
* {
  font-family: "Overpass", sans-serif;
}

.nav-item {
  margin-left: 2rem;
}
.nav-new {
  color: #9bb2be !important;
}
a {
  color: #0065fc !important;
}
.btn1V {
  background: white;
  color: #0065fc;
  border-radius: 5px;
  padding: 5px 20px;
  border: none;
  outline: none !important;
}
/* .btn1V:hover {
  background: #0065fc;
  color: white;
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid #0065fc;
} */
.btn2V {
  background: #0065fc;
  color: white;
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid #ffffff;
  outline: none !important;
}
.btn2V:hover {
  background: white;
  color: #0065fc;
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid #0065fc;
}
.mobileViewV {
  display: none;
}
.logo-ham {
  font-size: 1.5rem;
  color: #0065fc !important;
}
a {
  text-decoration: none !important;
}
#maintwoV {
  transition: margin-left 0.5s;
  /* padding: 16px; */
}
.sidenavV {
  text-align: center;
  height: 100%;
  /* width: 0; */
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #0065fc;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 0;
}
.sidenavV ul {
  margin-top: 3rem !important;
}
.sidenavV ul li a {
  /* padding: 8px 8px 8px 32px; */
  text-decoration: none;
  font-size: 1.2rem;
  color: #e54332;
  display: block;
  transition: 0.3s;
  text-align: center !important;
  /* margin-top: 3rem; */
  /* padding: 20px; */
}
/* .sidenavV ul li a:hover {
  color: hotpink;
} */
.closebtn {
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 2rem !important;
}
.openNav {
  font-size: 1.5rem !important;
  cursor: pointer;
}
.logo3V {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2rem !important;
  /* margin-left: 50px; */
}
.wrapper2V {
  display: flex;
  justify-content: space-between;
  padding: 0;
}
@media only screen and (min-width: 300px) and (max-width: 350px) {
  .desktopViewV {
    display: none;
  }
  .mobileViewV {
    display: block;
  }
}

@media only screen and (min-width: 360px) and (max-width: 578px) {
  .desktopViewV {
    display: none;
  }
  .mobileViewV {
    display: block;
  }
}
@media only screen and (min-width: 579px) and (max-width: 996px) {
  .desktopViewV {
    display: none;
  }
  .mobileViewV {
    display: block;
  }
}
/* @media only screen and (min-width: 1024px) and (max-width: 2445px){
   .mobileView{
      display: none;
    }
    .desktopView{
      display: block;
    }
} */
</style>
