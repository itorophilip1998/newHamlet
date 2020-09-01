<template>
  <div>
    <div class="boxShadowV fixed-top bg-white">
      <!-- desktop view -->
      <div class="oneV desktopViewV">
        <nav class="navbar navbar-expand-lg navbar-light">
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
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-new" href="#">Service</a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-new" href="#">Faq</a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-new" href="#">Teams</a>
              </li>
            </ul>
            <form class="form-inline ml-auto my-2 my-lg-0">
              <nuxt-link to="/signin" class="nav-link">
                <button class="btn1V">Sign In</button>
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
    <div class="boxShadowV">
      <div class="container mobileViewV">
        <div class="mobileViewV">
          <div id="mySidenavV" :style="styleObject" class="sidenavV">
            <div class="float-right pb-5">
              <span to class="closebtn" style="color : #FFFFFF" @click="closeNav">
                <font-awesome-icon style="height:100px" :icon="['fa', 'times']" />
              </span>
            </div>

            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <nuxt-link to="signin" class="nav-link">
                  <button class="btn1V">Sign In</button>
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
            <div class="logo2V">Hamlet</div>
            <div>
              <span style="font-size:30px;cursor:pointer;" class="openNaV" @click="openNav">
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
        width: "0px",
      },
    };
  },
  methods: {
    openNav() {
      this.styleObject.width = "100%";
    },
    closeNav() {
      this.styleObject.width = "0px";
      // console.log('clicked')
    },
    
  },
};
</script>
<style scoped>
* {
  font-family: "Overpass", sans-serif;
}

.oneV {
  margin-left: 100px;
  margin-right: 100px;
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
  border: 1px solid #0065fc;
  outline: none !important;
}
.btn1V:hover {
  background: #0065fc;
  color: white;
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid #0065fc;
}
.btn2V {
  background: #0065fc;
  color: white;
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid #0065fc;
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
.logo2v {
  font-size: 1.5rem;
  color: #0065fc;
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
  background-color: rgb(0, 101, 252, 0.7);
  /* background-image: linear-gradient(to right, #0288d1, #0288d1 ); */
  /* opacity: 0.7; */
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
.sidenavV ul {
  margin-top: 2rem;
}
.sidenavV ul li a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #e54332;
  display: block;
  transition: 0.3s;
  /* margin-top: 3rem; */
  padding: 20px;
}
.sidenavV ul li a:hover {
  color: hotpink;
}
.closebtnV {
  position: absolute;
  top: 0;
  right: 40px;
  font-size: 2rem !important;
  margin-left: 50px;
}
.openNavV {
  font-size: 1.8rem !important;
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
  padding: 1rem;
}
@media only screen and (min-width: 300px) and (max-width: 350px) {
  .closebtnV {
    position: absolute;
    top: -0.7rem;
    right: 2rem;
    font-size: 2rem !important;
    margin-left: 50px;
  }
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
  .closebtnV {
    top: -0.7rem;
    right: 2rem;
  }
}
@media only screen and (min-width: 710px) and (max-width: 768px) {
  .oneV {
    margin-left: 20px;
    margin-right: 20px;
  }
  .desktopViewV {
    display: none;
  }
  .mobileViewV {
    display: block;
  }
  .closebtnV {
    top: -0.7rem;
    right: 3.5rem;
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
