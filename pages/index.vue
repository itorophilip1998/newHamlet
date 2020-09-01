<template>
  <div>
    <div>
      <app-navbar />
    </div>
    <!-- <div class="two2">
      <app-navbar />
      <div class="two">
        <div class="grid">
          <div class="two1">
            <h2>Do more than what is expected of you with HAMLET.</h2>
            <p>
              Great leaders know their strengths, but they know their weaknesses even better. Knowing when to act
              and when to step back is one of the skills a leader must.
            </p>
            <nuxt-link to="/signin">
              <button class="btn1">
                Sign In
                <img src="/img/Polygon 1.png" alt />
              </button>
            </nuxt-link>
            <nuxt-link to="/signup">
              <button class="btn2">
                Get started
                <img src="/img/Polygon 1.png" alt />
              </button>
            </nuxt-link>
          </div>
          <div></div>
        </div>
      </div>
    </div>-->
    <!-- welcome page -->
    <section>
      <div class="container welcome-down pb-5 pt-5">
        <div class="row">
          <div class="col-lg-6">
            <div class="welcome-text">
              Do more than what is expected of you with
              <span style="color : #0065fc">HAMLET</span>.
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
    </section>
    <!-- welcome page end -->

    <!-- global brand start -->
    <section>
      <div class="pb-5" style="background-color : rgba(220, 234, 255, 0.5); text-align : center">
        <div class>
          <div class="brand-text pt-5 mt-2">TRUSTED BY GLOBAL BRANDS</div>
          <div class="mt-5 mb-5 text-center">
            <marquee behavior direction>
              <img src="/img/access.jpeg" class="mt-1" alt srcset width="200px" height="100px" />
              <img src="/img/ibomair.png" class="mt-1" alt srcset width="200px" height="100px" />
              <img src="/img/corrywise.png" class="mt-1" alt srcset width="200px" height="100px" />
              <img src="/img/hotelsng.png" class="mt-1" alt srcset width="200px" height="100px" />
              <img src="/img/flutter.png" class="mt-1" alt srcset width="200px" height="100px" />
            </marquee>
          </div>
        </div>
      </div>
    </section>
    <!-- global brand start -->
    <!-- manage your employee -->
    <section>
      <div>
        <div class="container pb-5 pt-5">
          <div class="row">
            <div class="col-lg-6 system-bg">
              <img src="/img/system.png" width="100%" alt srcset />
            </div>
            <div class="col-lg-6 system-bg-1">
              <div class="border-blue mb-3"></div>
              <div class="border-text">MANAGE YOUR EMPLOYEES WITHOUT HASSLE</div>
              <div class="border-p">
                Business productivity is of paramount importance to the employers and
                poor performance of an employee can badly affect the overall efficiency.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- manage end -->
    <!-- how it works -->
    <section>
      <div class="pb-5 pt-5" style="background: #294859;">
        <div class="container">
          <div class="how-it-works pb-5">HOW IT WORKS</div>
          <div class="row">
            <div class="col-sm-6">
              <img src="/img/handi.png" alt class="img-fluid" srcset />
              <div class="letter-under">Signup</div>
              <div class="letter-under-1">
                Explore from hundreds of NG and US stocks.
                we’ve made it fast and seamless
                to discover the
                best local and global companies to invest in.
              </div>
            </div>
            <div class="col-sm-6">
              <img src="/img/pencil1.png" alt class="img-fluid mt-4" srcset />
              <div class="letter-under">Manage</div>
              <div class="letter-under-1">
                Business productivity is of paramount
                importance
                to the employers
                and poor performance
                of an
                employee can badly affect the overall efficiency.
              </div>
            </div>
          </div>
          <nuxt-link to="/signup">
            <button class="btn2 mt-5">
              Get started
              <span class="ml-2">
                <font-awesome-icon :icon="['fa', 'angle-right']" />
              </span>
            </button>
          </nuxt-link>
        </div>
      </div>
    </section>
    <!-- how it works end -->

    <!-- manage-employee -->
    <section>
      <div class="pb-5 pt-5" style="background: #BACEED;">
        <div class="container">
          <div class="row mt-5">
            <div class="col-sm-4">
              <div>
                <img src="/img/1p.png" class="img-fluid" alt srcset />
              </div>
              <div class="mt-5">
                <img src="/img/2p.png" class="img-fluid" alt srcset />
              </div>
            </div>
            <div class="col-sm-4">
              <div>
                <img src="/img/5p.png" class="img-fluid" alt srcset />
              </div>
            </div>
            <div class="col-sm-4">
              <div>
                <img src="/img/3p.png" class="img-fluid" alt srcset />
              </div>
              <div class="mt-5">
                <img src="/img/4p.png" class="img-fluid" alt srcset />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- manage-employee -->
  </div>
</template>


<script>
import Navbar from "~/components/navbar2.vue";
export default {
  components: {
    "app-navbar": Navbar,
  },
};
</script>


<style scoped>
* {
  font-family: Overpass;
}
.two {
  background: linear-gradient(
      to right,
      rgba(8, 29, 41, 0.7),
      rgba(8, 29, 41, 0.7)
    ),
    url("/img/nesa.jpg") no-repeat center center/cover;
  height: 120vh;
  margin-top: 4rem;
}
/* .nav-item {
  margin-right: 5rem !important;
} */
.grid {
  padding: 15rem 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
}
.two1 h2 {
  color: #ffffff;
  font-size: 45px;
  margin-bottom: 20px;
}
.two1 p {
  color: #ffffff;
  font-size: 25px;
  margin-bottom: 20px;
  text-align: justify;
}
.btn2 {
  background: #0065fc;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
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
  background-image: url("/img/bg1.png"), url("/img/bg2.png");
  background-repeat: no-repeat, no-repeat;
  background-size: 30% 30%;
  background-position: top left, bottom right;
}
.border-blue {
  border: 2px solid #0065fc;
  width: 25%;
  margin-top: 11rem;
}
.border-text {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #002b6b;
}
.border-p {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  text-align: left;
  line-height: 42px;
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
.how-it-works {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #ffffff;
}
.letter-under {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 32px;
  letter-spacing: 0.03em;
  color: #ecf4ff;
}
.letter-under-1 {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 42px;
  width: 90%;
  /* letter-spacing: 0.03em; */
  color: #dae9ff;
  margin-top: 0.5rem;
  text-align: justify;
}
@media (max-width: 567px) {
  .two {
    background: linear-gradient(
        to right,
        rgba(8, 29, 41, 0.7),
        rgba(8, 29, 41, 0.7)
      ),
      url("/img/nesa.jpg") no-repeat center center/cover;
    height: auto;
  }
  .grid {
    padding: 8rem 20px;
    grid-template-columns: 1fr;
  }
  .two1 h2 {
    color: #ffffff;
    font-size: 40px;
    margin-bottom: 26px;
  }
  .two1 p {
    color: #ffffff;
    font-size: 20px;
    margin-bottom: 26px;
  }
  .welcome-text {
    font-size: 48px;
    line-height: 59px;
    text-align: center;
    margin-top: 2rem;
    padding-right: 10px;
    padding-left: 10px;
  }
  .welcome-p {
    font-size: 24px;
    text-align: center;
    padding-right: 10px;
    padding-left: 10px;
  }
  .startbutton {
    text-align: center;
    margin-bottom: 2rem !important;
  }
}

@media (min-width: 568px) and (max-width: 768px) {
  .two {
    background: linear-gradient(
        to right,
        rgba(8, 29, 41, 0.7),
        rgba(8, 29, 41, 0.7)
      ),
      url("/img/nesa.jpg") no-repeat center center/cover;
    height: auto;
  }
  .grid {
    padding: 10rem 20px;
    grid-template-columns: 1fr 1fr;
    text-align: justify;
  }
  .two1 h2 {
    color: #ffffff;
    font-size: 40px;
    margin-bottom: 26px;
  }
  .two1 p {
    color: #ffffff;
    font-size: 20px;
    margin-bottom: 26px;
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .two {
    background: linear-gradient(
        to right,
        rgba(8, 29, 41, 0.7),
        rgba(8, 29, 41, 0.7)
      ),
      url("/img/nesa.jpg") no-repeat center center/cover;
    height: auto;
  }
  .grid {
    padding: 10rem 20px;
    grid-template-columns: 1fr 1fr;
    text-align: justify;
    margin-left: 80px;
  }
  .two1 h2 {
    color: #ffffff;
    font-size: 3rem;
    margin-bottom: 30px;
  }
  .two1 p {
    color: #ffffff;
    font-size: 20px;
    margin-bottom: 30px;
  }
}
</style>