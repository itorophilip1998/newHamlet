<template>
  <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
    <div>
      <app-navbar />
    </div>

    <!-- hero-start -->
    <section class="desktop-display">
      <div class="bg-down">
        <div class="bg-hero container">
          <div class="row">
            <div class="col-lg-6">
              <div class="">
                <div class="hero-text">
                  Do more than what is expected of you with
                  <span style="color: #0065fc; font-weight: bolder"
                    >HAMLET</span
                  >
                </div>
                <div class="hero-text-1">
                  Great leaders know their strengths, but they know their
                  weaknesses even better.
                </div>
                <div class="mt-3 m-align">
                  <nuxt-link to="/signup">
                    <button class="btn2 mt-3 btn-sm">
                      Get started
                      <span class="ml-2">
                        <font-awesome-icon :icon="['fa', 'angle-right']" />
                      </span>
                    </button>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="tooltip-container">
                <div class="tooltip-wrapper d-flex">
                  <div>
                    <img
                      src="/img/profilePic.jpg"
                      class="dp"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div>
                    <li>
                      <p class="name ml-2">
                        Afolabi Timothy <br />
                        <span class="role">Front-End Developer</span>
                      </p>
                    </li>
                  </div>

                  <!-- <div class="tooltip"></div> -->
                </div>
                <span class="tip"></span>
                <span class="circle-o"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mobile-display">
      <div class="bg-down">
        <div class="bg-hero container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 t-center">
              <div class="hero-text">
                Do more than what is expected of you with
                <span style="color: #0065fc; font-weight: bolder">HAMLET</span>
              </div>
              <div class="hero-text-1">
                Great leaders know their strengths, but they know their
                weaknesses even better.
              </div>
              <div class="mt-3 m-align">
                <nuxt-link to="/signup">
                  <button class="btn2 mt-3 btn-sm">
                    Get started
                    <span class="ml-2">
                      <font-awesome-icon :icon="['fa', 'angle-right']" />
                    </span>
                  </button>
                </nuxt-link>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 tooltip-off">
              <div class="tooltip-container">
                <div class="tooltip-wrapper">
                  <div>
                    <img
                      src="/img/profilePic.jpg"
                      class="dp"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div>
                    <li>
                      <p class="name ml-2">
                        Afolabi Timothy <br />
                        <span class="role">Front-End Developer</span>
                      </p>
                    </li>
                  </div>

                  <!-- <div class="tooltip"></div> -->
                </div>
                <span class="tip"></span>
                <span class="circle-o"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- hero end -->
    <!-- hero page -->
    <!-- <section>
      <div class="bg-hero">
        <div class="container">
          <div class="hero-text">
            Do more than what is expected of you with
            <span style="color : #0065fc; font-weight: bolder;">HAMLET</span>
            <div class="hero-text-1">
              Great leaders know their strengths, but they know their weaknesses
              even better.
            </div>
            <div class="">
              <nuxt-link to="/signup">
                <button class="btn2 mt-3 btn-sm">
                  Get started
                  <span class="ml-2">
                    <font-awesome-icon :icon="['fa', 'angle-right']" />
                  </span>
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>-->

    <!-- global brand start style="background-color : rgba(220, 234, 255, 0.5)-->
    <section>
      <div class="brand-color pb-5 pt-5">
        <div>
          <div class="brand-text text-center">TRUSTED BY GLOBAL BRANDS</div>
          <div class="container">
            <div class="grid-style">
              <div>
                <img
                  src="/img/access.png"
                  class="img-fluid"
                  width="150px"
                  alt
                  srcset
                />
              </div>
              <div>
                <img
                  src="/img/ibomair.png"
                  class="img-fluid p-down"
                  width="90px"
                  height="150px"
                  alt
                  srcset
                />
              </div>
              <div>
                <img
                  src="/img/cowrywise.png"
                  class="img-fluid p-down"
                  width="150px"
                  alt
                  srcset
                />
              </div>
              <div>
                <img
                  src="/img/hotels.png"
                  class="img-fluid p-down"
                  width="100px"
                  alt
                  srcset
                />
              </div>
              <div>
                <img
                  src="/img/barter.png"
                  class="img-fluid p-down"
                  width="100px"
                  alt
                  srcset
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- global brand start -->
    <!-- manage your employee -->
    <section id="service">
      <div class="system-bg">
        <div class="container pb-5 pt-5">
          <div class="row">
            <div
              class="col-lg-6 system-bg-2"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <img src="/img/system.png" class="img-fluid" alt srcset />
            </div>
            <div
              class="col-lg-6 system-bg-1"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div class="border-blue mb-3"></div>
              <div class="border-text">
                MANAGE YOUR EMPLOYEES WITHOUT HASSLES
              </div>
              <div class="border-p">
                Business productivity is of paramount importance to the
                employers and poor performance of an employee can badly affect
                the overall efficiency.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- manage end -->
    <!-- how it works -->
    <section id="works">
      <div class="pt-5 bg-curve">
        <div class="container pb-5">
          <div class="how-it-works pb-5 mt-5 pt-5">HOW IT WORKS</div>
          <div class="container">
            <div class="row">
              <div
                class="col-12 col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <div class="letter-under text-margin">Signup</div>
                <div class="letter-under-1">
                  Explore from hundreds of NG and US stocks. we’ve made it fast
                  and seamless to discover the best local and global companies
                  to invest in.
                </div>
              </div>
              <div
                class="col-12 col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <img src="/img/illustrato-2.png" alt class="img-fluid" srcset />
              </div>
            </div>
            <div class="row mt-5">
              <div
                class="col-12 col-sm-12 col-md-12 col-lg-5"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <img src="/img/illustrator.png" alt class="img-fluid" srcset />
              </div>
              <div
                class="col-12 col-sm-12 col-md-12 col-lg-6 offset-1"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <div class>
                  <div class="letter-under text-margin-1">Pricing</div>
                  <div class="letter-under-1">
                    Of course, business productivity is ofparamount importance
                    to the employers and poor performance of an employee
                    canbadly affect the overall efficiency.
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div
                class="col-12 col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <div class="letter-under text-margin-2">Manage</div>
                <div class="letter-under-1">
                  Explore from hundreds of NG and US stocks. we’ve made it fast
                  and seamless to discover the best localand global companies to
                  invest in.
                </div>
              </div>
              <div
                class="col-12 col-sm-12 col-md-12 col-lg-6"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <img
                  src="/img/illustrator-e.png"
                  alt
                  class="img-fluid"
                  srcset
                />
              </div>
            </div>
          </div>
          <div class="text-center mt-2">
            <nuxt-link to="/signup">
              <button class="btn2 btn-mobile-works">
                Get started
                <span class>
                  <font-awesome-icon :icon="['fa', 'angle-right']" />
                </span>
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <!-- how it works end -->

    <!-- testimonial -->
    <section id="testimonial">
      <div class="pt-5 pb-5 mt-5">
        <div class="container testimonial-bg">
          <div class="text-client text-center testy btn-mobile-works">
            CLIENT'S REVIEW
          </div>
          <div class="text-client-1">
            Ask first. Before jumping into designing I always make sure that
            we’re asking the right questions and trying to accomplish the right
            challenges. This stage includes market research, competitive
            consulting and exploring possible solutions.
          </div>

          <div class="row justify-content-center">
            <div class="d-flex text-center">
              <div>
                <img src="/img/lady-1.png" alt srcset />
              </div>
              <div>
                <div
                  class="mt-4"
                  style="color: #081d29; font-weight: bold; font-style: normal"
                >
                  Evia Omari
                </div>
                <div
                  class="ml-3"
                  style="
                    color: #081d29;
                    font-weight: normal;
                    font-style: normal;
                  "
                >
                  Front-end developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div>
        <form @submit.prevent="getDetails">
          <input type="text" v-model="name">
          <input type="button" value="submit">
        </form>
      </div> -->
    </section>
    <!-- testimonial end -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/navbar2.vue";
import Footer from "~/components/footer.vue";
export default {
  auth: false,
  components: {
    "app-navbar": Navbar,
    Footer,
  },
  data() {
    return {
      user: {},
      name: "",
    };
  },
  methods: {
    // getDetails(){
    //   this.$axios.get
    //   (`https://api.fcmb.com/fcmb/test/v1/customers/details/name?accountid=${this.name}`,
    //   {headers : {
    //      "Content-Type" : "application/json",
    //     "X-IBM-Client-Id": "fc14374a-51ec-46ad-b844-62099c359bd0",
    //   }})
    //   .then(res =>{
    //     console.log(res.data)
    //   })
    // }
  },
  mounted() {
    //  this.getDetails()
  },
  //     $(document).ready(function(){
  // 		$('a[href^="#"]').on('click',function (e) {e.preventDefault();
  // 	    var target = this.hash,
  // 	    $target = $(target);
  // 	    $('html, body').stop().animate({
  // 	        'scrollTop': $target.offset().top
  // 	    }, 900, 'swing', function () {
  // 	        window.location.hash = target;
  // 	    });
  // 	});
  // });
};
</script>

<style scoped>
* {
  font-family: "Overpass", sans-serif;
}
.grid-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-gap : ; */
}
.grid-left {
  margin-left: 15rem;
}
.mobile-display {
  display: none;
}
.tooltip-container {
  width: 34%;
  height: 20px;
  /* border-radius: 8px; */
  margin-top: 5rem;
  position: relative;
  animation-name: example;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes example {
  0% {
    left: 0px;
    top: 0px;
  }
  25% {
    left: 400px;
    top: -50px;
  }
  50% {
    left: 400px;
    top: 200px;
  }
  75% {
    left: 100px;
    top: 300px;
  }
  100% {
    left: 0px;
    top: 0px;
  }
}
.tooltip-wrapper {
  /* display: flex; */
  padding: 0.8rem 0 0 0.5rem;
  /* flex-direction: row; */
  background-color: #ffffff;
  box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.44);
  border-radius: 8px;
}
.tooltip {
  display: flex;
  flex-direction: column;
  background: red;
  padding: 10px;
  /* box-shadow: 0 0 10px 8px #0000000f; */
  border-radius: 8px;
}
.dp {
  height: 35px;
  width: 35px;
  border-radius: 100vh;
}
.tooltip-wrapper li {
  list-style-type: none;
}
.tooltip-wrapper p {
  /* font-size: .8rem; */
  line-height: 1;
  letter-spacing: 0.5px;
  white-space: nowrap;
}
.name {
  color: #0065fc;
  font-size: 1rem;
}
.role {
  color: #35454e;
  font-size: 0.8rem;
}
.tip {
  height: 12px;
  width: 20px;
  background: #ffffff;
  display: block;
  clip-path: polygon(100% 0, 0 0, 50% 100%);
  margin: -2px 0px 5px 90px;
}
.circle-o::after {
  content: "";
  width: 10%;
  height: 100%;
  margin-left: 90px;
  display: block;
  background: #0065fc;
  border-radius: 100vh;
  box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.44);
}
.bg-down {
  margin-top: 5rem;
  margin-bottom: 10rem;
}
.gridsection {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 8rem;
  margin-right: 8rem;
  grid-gap: 2rem;
}
.gridclass {
  border: 1px solid #0065fc;
  padding: 20px 20px;
  border-radius: 5px;
}
.gridclass img {
  width: 4rem;
  height: 4rem;
}
.gridclass1 {
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-top: 2rem;
}
.gridclass1 p {
  margin-top: 1.5rem;
  font-weight: 25px !important;
}
.bg-hero {
  background-image: url("/img/bg-map.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
}
.brand-color {
  background: #f3f8ff;
  margin-bottom: 5rem;
}
.hero-text {
  font-style: normal;
  font-weight: 800;
  font-size: 2.2rem;
  margin-top: 8rem;
  letter-spacing: 0.02em;
  color: #002459;
}
.hero-text-1 {
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 41px;
  margin-top: 1rem;
  letter-spacing: 0.03em;
  color: #35454e;
}
.grid-style {
  display: flex;
  /* grid-template-columns: 1fr 1fr; */
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3rem !important;
  /* padding: 3rem; */
}
.btn2 {
  background: #0065fc;
  border-radius: 5px;
  color: white;
  padding: 1rem 3rem;
  border: none;
  outline: none !important;
}
.btn2:hover {
  background: #ffffff;
  color: #0065fc;
  border: 1px solid #0065fc;
}
.btn1 {
  background: white;
  color: #0065fc;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  margin-right: 30px;
  outline: none !important;
}
/* .welcome-text {
  font-size: 48px;
  line-height: 59px;
  text-align: left;
  margin-top: 10rem;
} */
/* .welcome-p {
  font-size: 24px;
  text-align: left;
  padding-right: 20px;
}
.welcome-down {
  margin-top: 5rem;
} */
.brand-text {
  font-weight: bold;
  font-size: 24px;
}
.system-bg {
  background-image: url("/img/circle-1.png");
  background-repeat: no-repeat;
  background-size: 10% 25%;
  background-position: top left;
}
.system-bg-2 {
  background-image: url("/img/bg2.png");
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: bottom right;
}
.border-blue {
  border: 3px solid #0065fc;
  width: 25%;
  margin-top: 10rem;
}
.border-text {
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  color: #002b6b;
}
.border-p {
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  text-align: left;
  /* line-height: 42px; */
  letter-spacing: 0.03em;
  color: #002b6b;
}
.system-bg-1 {
  /* background-image: url("/img/bg2.png"); */
  background-repeat: no-repeat;
  background-size: 50% 50%;
  /* background-size: contain; */
  background-position: top right;
}
.bg-curve {
  background-image: url("/img/curve-new.png");
  background-repeat: no-repeat;
  /* background-size: 100% 100%; */
  background-size: cover;
  /* background-position: top right; */
}
.how-it-works {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #081d29;
}
.testimonial-bg {
  background-image: url("/img/q1.png"), url("/img/q2.png");
  /* background-size: 100% 100%; */
  background-position: top left, bottom right;
  background-repeat: no-repeat, no-repeat;
  /* background-color: #edf4ff; */
  padding-bottom: 7rem !important;
  /* z-index: -1; */
}
.letter-under {
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 32px;
  letter-spacing: 0.03em;
  color: #002459;
}
.text-client {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 42px;
  letter-spacing: 0.1em;
  color: #0065fc;
}
.text-client-1 {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #081d29;
  margin: 2rem 0 2rem 0;
}
.text-margin {
  margin-top: 10rem;
}
.text-margin-1 {
  margin-top: 5rem;
}
.text-margin-2 {
  margin-top: 13rem;
}
.letter-under-1 {
  font-style: normal;
  font-weight: normal;
  width: 100%;
  line-height: 32px;
  font-size: 1.2rem;
  margin-top: 1rem !important;
  letter-spacing: 0.03em;
  color: #002459;
  /* text-align: left; */
}
.l-left {
  margin-left: 5rem;
}
.lady-bg {
  width: 60% !important;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; */
}
.flex-down {
  margin-top: 5rem;
  justify-content: space-between;
}
.text-quote {
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  /* line-height: 38px; */
  color: #000000;
  margin-top: 5rem;
}
.text-quote-1 {
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  /* line-height: 38px; */
  color: #000000;
}
.text-quote-2 {
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 38px;
  color: #000000;
}
.quote-text {
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  width: 90%;
  margin-top: 2rem;
  line-height: 30px;
  color: #616161;
  text-align: left;
}
.testy {
  padding: 7rem 0 0 0;
}
@media only screen and (min-width: 300px) and (max-width: 350px) {
  .mobile-display {
    display: block;
  }
  .desktop-display {
    display: none;
  }
  .letter-under-1 {
    width: 100%;
  }
  .bg-down {
    margin-top: 5rem;
    margin-bottom: 0;
  }
  .l-left {
    margin-left: 0;
  }
  .text-margin {
    margin-top: 0;
  }
  .text-margin-2 {
    margin-top: 2rem;
  }
  .bg-hero {
    background-image: none;
    height: auto;
    background-repeat: no-repeat;
    background-size: none;
    /* object-fit: fill; */
    margin-top: 4rem;
    /* background-blend-mode: darken; */
  }
  .hero-text {
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    text-align: center;
    letter-spacing: 0.02em;
    color: #002459;
  }
  .m-align {
    text-align: center !important;
  }
  .hero-text-1 {
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    margin-top: 1rem;
    /* line-height: 41px; */
    text-align: center;
    letter-spacing: 0.03em;
    color: #35454e;
  }
  .btn2 {
    background: #0065fc;
    border-radius: 5px;
    color: white;
    padding: 1rem 2rem;
    border: none;
    margin-bottom: 1rem;
    outline: none !important;
  }
  .grid-style {
    display: flex;
    /* grid-template-columns: 1fr 1fr; */
    flex-direction: column;
    justify-content: none;
    margin-top: 0;
    padding: 3rem;
    text-align: center;
  }
  .p-down {
    margin-top: 2rem !important;
  }
  .system-bg {
    background-image: url("/img/circle-1.png");
    background-repeat: no-repeat;
    background-size: 20% 10%;
    background-position: top left;
  }
  .border-blue {
    border: 3px solid #0065fc;
    width: 25%;
    margin-top: 3rem;
  }
  .border-text {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    color: #002b6b;
    text-align: left;
  }
  .border-p {
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    text-align: justify;
    /* line-height: 42px; */
    letter-spacing: 0.03em;
    color: #002b6b;
  }
  .how-it-works {
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 0.03em;
    color: #081d29;
  }
  .offset-1 {
    margin-left: 0 !important;
  }
  .testy {
    margin: 15rem 0 5rem 0;
  }
  .btn-mobile-works {
    margin-top: 1rem !important;
  }
  .lady-bg {
    width: 100% !important;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; */
  }
  .l-center {
    text-align: center;
  }
  .p-0 {
    padding: none !important;
  }
  .text-quote {
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
    /* line-height: 38px; */
    color: #000000;
    margin-top: 8rem;
  }
  .text-quote-1 {
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    /* line-hight: 38px; */
    color: #000000;
  }
  .text-quote-2 {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 38px;
    color: #000000;
  }
  .quote-text {
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    width: 100%;
    margin-top: 2rem;
    line-height: 30px;
    color: #616161;
    text-align: justify;
    padding-bottom: 2rem;
  }
  .gridsection {
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 1rem;
    margin-right: 1rem;
    grid-gap: 1rem;
  }
  .tooltip-off {
    display: none;
  }
}
@media only screen and (min-width: 360px) and (max-width: 578px) {
  .mobile-display {
    display: block;
  }
  .desktop-display {
    display: none;
  }
  .tooltip-off {
    display: none;
  }
  .gridsection {
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 1rem;
    margin-right: 1rem;
    grid-gap: 1rem;
  }
  .letter-under-1 {
    width: 100%;
  }
  .bg-down {
    margin-top: 5rem;
    margin-bottom: 0;
  }
  .l-left {
    margin-left: 0;
  }
  .text-margin {
    margin-top: 0;
  }
  .text-margin-2 {
    margin-top: 2rem;
  }
  .bg-hero {
    background-image: none;
    height: auto;
    background-repeat: no-repeat;
    background-size: none;
    /* object-fit: fill; */
    margin-top: 4rem;
    /* background-blend-mode: darken; */
  }
  .hero-text {
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    text-align: center;
    letter-spacing: 0.02em;
    color: #002459;
  }
  .m-align {
    text-align: center !important;
  }
  .hero-text-1 {
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    margin-top: 1rem;
    /* line-height: 41px; */
    text-align: center;
    letter-spacing: 0.03em;
    color: #35454e;
  }
  .btn2 {
    background: #0065fc;
    border-radius: 5px;
    color: white;
    padding: 1rem 2rem;
    border: none;
    margin-bottom: 1rem;
    outline: none !important;
  }
  .grid-style {
    display: flex;
    /* grid-template-columns: 1fr 1fr; */
    flex-direction: column;
    justify-content: none;
    margin-top: 0;
    padding: 3rem;
    text-align: center;
  }
  .p-down {
    margin-top: 2rem !important;
  }
  .system-bg {
    background-image: url("/img/circle-1.png");
    background-repeat: no-repeat;
    background-size: 20% 10%;
    background-position: top left;
  }
  .border-blue {
    border: 3px solid #0065fc;
    width: 25%;
    margin-top: 3rem;
  }
  .border-text {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    color: #002b6b;
    text-align: left;
  }
  .border-p {
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    text-align: justify;
    /* line-height: 42px; */
    letter-spacing: 0.03em;
    color: #002b6b;
  }
  .how-it-works {
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 0.03em;
    color: #081d29;
  }
  .offset-1 {
    margin-left: 0 !important;
  }
  .btn-mobile-works {
    margin-top: 1rem !important;
  }
  .lady-bg {
    width: 100% !important;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; */
  }
  .l-center {
    text-align: center;
  }
  .p-0 {
    padding: none !important;
  }
  .text-quote {
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
    /* line-height: 38px; */
    color: #000000;
    margin-top: 8rem;
  }
  .text-quote-1 {
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    /* line-hight: 38px; */
    color: #000000;
  }
  .text-quote-2 {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 38px;
    color: #000000;
  }
  .quote-text {
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    width: 100%;
    margin-top: 2rem;
    line-height: 30px;
    color: #616161;
    text-align: justify;
    padding-bottom: 2rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .t-center {
    text-align: center !important;
    margin-top: 5rem;
  }
  .bg-down {
    margin-bottom: 5rem;
  }
  .mobile-display {
    display: block;
  }
  .desktop-display {
    display: none;
  }
  .tooltip-off {
    display: none;
  }
  .bg-hero {
    background-image: url("/img/bg-map.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
  }
  .text-margin {
    margin-top: 0;
  }
  .text-margin-1 {
    margin-top: 0;
  }
  .text-margin-2 {
    margin-top: 0;
  }
  .l-left {
    margin-left: 0;
  }
  .hero-text {
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    /* text-align: center; */
    letter-spacing: 0.02em;
    color: #002459;
  }
  .hero-text-1 {
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    margin-top: 1rem;
    /* line-height: 41px; */
    /* text-align: center; */
    letter-spacing: 0.03em;
    color: #35454e;
  }
  .btn2 {
    background: #0065fc;
    border-radius: 5px;
    color: white;
    padding: 1rem 2rem;
    border: none;
    margin-top: 2rem !important;
    margin-bottom: 1rem;
    outline: none !important;
  }
  .grid-style {
    display: flex;
    /* grid-template-columns: 1fr 1fr; */
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0;
    padding: 3rem;
  }
  .system-bg {
    background-image: url("/img/circle-1.png");
    background-repeat: no-repeat;
    background-size: 30% 20%;
    background-position: top left;
  }
  .border-blue {
    border: 3px solid #0065fc;
    width: 15%;
    margin-top: 0;
  }
  .border-text {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    color: #002b6b;
    text-align: justify;
  }
  .offset-1 {
    margin-left: 0 !important;
  }
  .lady-bg {
    width: 100% !important;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; */
  }
  .gridsection {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 3rem;
    margin-right: 3rem;
    grid-gap: 1rem;
  }
  .gridclass1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
  }
}
</style>
