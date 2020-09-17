<template>
  <div>
    <div>
      <app-navbar />
    </div>

    <!-- hero page -->
    <section>
      <div class="bg-hero">
        <div class="container text-center">
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
    </section>
    <!-- hero end -->
    <!-- welcome page -->
    <!-- <section>
      <div class="container welcome-down pb-5 pt-5">
        <div class="row">
          <div class="col-lg-6">
            <div class="welcome-text">
              Do more than what is expected of you with
              <span style="color : #0065fc">HAMLET.</span>

            </div>
            <div class="welcome-p mt-2">
              Great leaders know their strengths, but they know their weaknesses even better.
              Knowing when to act and when to step back is one of the skills a leader must master
            </div>
            <div class="startbutton">
              <nuxt-link to="/signup">
                <button class="btn2 mt-3">
                  Get started
                  <span class="ml-2">
                    <font-awesome-icon :icon="['fa', 'angle-right']" />
                  </span>
                </button>
              </nuxt-link>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="/img/logo.png" alt class="img-fluid" />
          </div>
        </div>
      </div>
    </section> -->
    <!-- welcome page end -->

    <!-- global brand start style="background-color : rgba(220, 234, 255, 0.5)-->
    <section>
      <div class="pb-5">
        <div class>
          <div class="brand-text pt-5 mt-2 text-center">
            TRUSTED BY GLOBAL BRANDS
          </div>
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
    <section>
      <div class="system-bg">
        <div class="container pb-5 pt-5">
          <div class="row">
            <div class="col-lg-6 system-bg-2" 
              data-aos="fade-right"
              data-aos-duration="1000"
              >
              <img src="/img/system.png" class="img-fluid" alt srcset />
            </div>
            <div class="col-lg-6  system-bg-1"
              data-aos="fade-down"
              data-aos-duration="1000"
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
    <section>
      <div class="pb-5 pt-5 bg-curve">
        <div class="container pb-5" 
              data-aos="fade-right"
              data-aos-duration="1000"
              >
          <div class="how-it-works pb-5 mt-5 pt-5">HOW IT WORKS</div>
          <div class="container">
             <div class="row">
            <div class="col-sm-4 col-lg-4">
              <div class="text-center">
                <img src="/img/handi.png" alt class="img-fluid" srcset />
                <div class="letter-under">Signup</div>
              </div>

              <div class="letter-under-1">
                Explore from hundreds of NG and US stocks. we’ve made it fast
                and seamless to discover the best local and global companies to
                invest in.
              </div>
            </div>
            <div class="col-sm-4 col-lg-4">
              <div class="text-center">
                <img src="/img/handi.png" alt class="img-fluid" srcset />
                <div class="letter-under">Pricing</div>
              </div>
              <div class="letter-under-1">
                Explore from hundreds of NG and US stocks. we’ve made it fast
                and seamless to discover the best local and global companies to
                invest in.
              </div>
            </div>
            <div class="col-sm-4 col-lg-4">
              <div class="text-center">
                <img src="/img/pencil1.png" alt class="img-fluid mt-4" srcset />
                <div class="letter-under">Manage</div>
              </div>
              <div class="letter-under-1">
                Explore from hundreds of NG and US stocks. we’ve made it fast
                and seamless to discover the best local and global companies to
                invest in.
              </div>
            </div>
          </div>
          </div>
         
          <div class="text-center mt-5 pb-5">
            <nuxt-link to="/signup">
              <button class="btn2 mt-3 mb-5 btn-mobile-works">
                Get started
                <span class="">
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
    <section>
      <div class="pt-5 testimonial-bg">
        <div class="letter-under text-center pt-5 mt-5 mb-5 pb-5 btn-mobile-works">TESTIMONIALS</div>
        <div class="container shadow p-0 lady-bg" 
              data-aos="zoom-in"
              data-aos-duration="1500"
             >
          <div class="row m-0 p-0" style="background-color : #FFFFFF">
            <div class="col-sm-5 pl-0 m-0 l-center">
              <img src="/img/lady.png" class="img-fluid pr-0 mr-0" alt srcset />
            </div>
            <div class="col-sm-6">
              <div class="d-flex  flex-down">
                <div>
                  <div class="text-quote">
                    Grace Nyong
                  </div>
                  <div class="text-quote-1">
                    Start Innovation Hub
                  </div>
                  <div class="text-quote-2">
                    HR
                  </div>
                </div>
                <div class="">
                  <img
                    src="/img/quotation.png"
                    alt=""
                    class="img-fluid"
                    srcset=""
                  />
                </div>
              </div>
              <div class="quote-text">
                The quote testimonial is the grand daddy of all testimonials,
                and likely the first example you thought of. It’s been used for
                as long as testimonials have been alive.
              </div>
            </div>
          </div>
        </div>
      </div>
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
    Footer
  }
};
</script>

<style scoped>
* {
  font-family: "Overpass", sans-serif;
}
.bg-hero {
  background-image: linear-gradient(
      to right,
      rgb(0, 0, 0, 0.7),
      rgb(0, 0, 0, 0.7)
    ),
    url("/img/guys.jpg");
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 4rem;
  background-blend-mode: darken;
}
.hero-text {
  font-style: normal;
  font-weight: 800;
  font-size: 3.6rem;
  padding-top: 23rem;
  padding-bottom: 23rem;
  /* line-height: 59px; */
  /* text-align: center; */
  letter-spacing: 0.02em;
  color: #ffffff;
}
.hero-text-1 {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  margin-top: 2rem;
  /* line-height: 41px; */
  /* text-align: center; */
  letter-spacing: 0.03em;
  color: #dae1eb;
}
.grid-style {
  display: flex;
  /* grid-template-columns: 1fr 1fr; */
  flex-direction: row;
  justify-content: space-between;
  /* margin-top: 2rem !important; */
  padding: 3rem;
}
.btn2 {
  background: #0065fc;
  border-radius: 5px;
  color: white;
  padding: 1rem 3rem;
  border: none;
  outline: none !important;
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
.welcome-text {
  font-size: 48px;
  line-height: 59px;
  text-align: left;
  margin-top: 10rem;
}
.welcome-p {
  font-size: 24px;
  text-align: left;
  padding-right: 20px;
}
.welcome-down {
  margin-top: 5rem;
}
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
  background-image: url("/img/curve-1.png");
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
  background-image: linear-gradient(
      to right,
      rgb(255, 255, 255, 0.1),
      rgb(255, 255, 255, 0.1)
    ),
    url("/img/map.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #edf4ff;
  padding-bottom: 7rem !important;
  /* z-index: -1; */
}
.letter-under {
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  /* line-height: 32px; */
  letter-spacing: 0.03em;
  color: #002459;
}
.letter-under-1 {
  font-style: normal;
  font-weight: normal;
  width: 90%;
  font-size: 1.2rem;
  margin-top: 1rem !important;
  

  /* width: 90%; */
  letter-spacing: 0.03em;
  color: #002459;
  text-align: justify;
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
@media only screen and (min-width: 300px) and (max-width: 350px) {
  .letter-under-1 {
    width: 100%;
  }
  .bg-hero {
  background-image: linear-gradient(
      to right,
      rgb(0, 0, 0, 0.7),
      rgb(0, 0, 0, 0.7)
    ),
    url("/img/guys.jpg");
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
  font-size: 1.2rem;
  padding-top: 3rem;
  padding-bottom: 0;
  /* line-height: 59px; */
  /* text-align: center; */
  letter-spacing: 0.02em;
  color: #ffffff;
}
.hero-text-1 {
  font-style: normal;
  font-weight: normal;
  font-size: 1.1rem;
  margin-top: 1rem;
  /* line-height: 41px; */
  /* text-align: center; */
  letter-spacing: 0.03em;
  color: #dae1eb;
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
.p-down{
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
  text-align:justify;
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
.btn-mobile-works{
  margin-top: 1rem !important;
}
.lady-bg {
  width: 100% !important;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; */
}
.l-center{
text-align: center;
}
.p-0{
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
@media only screen and (min-width: 360px) and (max-width: 578px) {
  .letter-under-1 {
    width: 100%;
  }
  .bg-hero {
  background-image: linear-gradient(
      to right,
      rgb(0, 0, 0, 0.7),
      rgb(0, 0, 0, 0.7)
    ),
    url("/img/guys.jpg");
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
  font-size: 1.2rem;
  padding-top: 3rem;
  padding-bottom: 0;
  /* line-height: 59px; */
  /* text-align: center; */
  letter-spacing: 0.02em;
  color: #ffffff;
}
.hero-text-1 {
  font-style: normal;
  font-weight: normal;
  font-size: 1.1rem;
  margin-top: 1rem;
  /* line-height: 41px; */
  /* text-align: center; */
  letter-spacing: 0.03em;
  color: #dae1eb;
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
.p-down{
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
  text-align:justify;
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
.btn-mobile-works{
  margin-top: 1rem !important;
}
.lady-bg {
  width: 100% !important;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; */
}
.l-center{
text-align: center;
}
.p-0{
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

@media only screen and  (min-width: 768px) and (max-width: 1020px) {
 .bg-hero {
  background-image: linear-gradient(
      to right,
      rgb(0, 0, 0, 0.7),
      rgb(0, 0, 0, 0.7)
    ),
    url("/img/guys.jpg");
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
  font-size: 2rem;
  padding-top: 13rem;
  padding-bottom: 13rem;
  /* line-height: 59px; */
  /* text-align: center; */
  letter-spacing: 0.02em;
  color: #ffffff;
}
.hero-text-1 {
  font-style: normal;
  font-weight: normal;
  font-size: 1.1rem;
  margin-top: 1rem;
  /* line-height: 41px; */
  /* text-align: center; */
  letter-spacing: 0.03em;
  color: #dae1eb;
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
}
</style>
