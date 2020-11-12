<template>
  <div class="boxShadow fixed-top">
    <div class="one desktopView">
      <nav class="navbar navbar-expand-lg navbar-light">
        <nuxt-link to="/dashboard">
          <a class="navbar-brand" style="color: #0065fc">Hamlet</a>
        </nuxt-link>
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
            <!-- <li v-if="$auth.loggedIn">
      {{auth.user.email}}
      <span class="ml-3">Log out</span>
            </li>-->
            <li class="nav-item active mt-3">
              <div @click="notificationOpen" style="cursor : pointer">
                <span style="color : #0065fc"><font-awesome-icon :icon="['fa', 'bell']" /></span> 
                 <span class="badge">{{notifications.length}}</span>
              </div>
              
            </li>
            <li class="nav-item active">
              <nuxt-link to="/profile/profile">
                <img
                  v-if="this.profile_pic"
                  :src="this.profile_pic.profile_pic"
                  alt
                  class="rounded-circle"
                  width="40px"
                  height="40px"
                />
              </nuxt-link>
            </li>

            <li class="nav-item active mt-1">
              <button v-if="loader" @click="logOut" class="btn1">
                Log Out
              </button>
              <span v-else>
                <app-loader />
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <transition name="slide" v-if="displayModal" appear>
    <div class="modal-new">
      <div class="d-flex justify-content-between">
        <div class="notify">
          Notification ({{notifications.length}})
        </div>
         <div class="" @click="notificationClose" style="cursor : pointer;  transition: 0.3s;">
        <font-awesome-icon :icon="['fa', 'times']" />
      </div>
      </div>
     <div class="border-line"></div>
  <div class="d-flex mt-3 mb-3"  v-for="(notification,index) in notifications" :key="index">
    <div class="icon-edit">
       <font-awesome-icon :icon="['fa', 'volume-up']" />
    </div>
    <div class="ml-3 border-bottom">
      <div class="header-notify">{{notification.title}}</div>
      <div class="text-notify">{{notification.body}}</div>
    </div>
  </div>
  <!-- <div class="border-line"></div> -->
    </div>
    </transition>
    <!-- desktop view end -->

    <!-- mobile-view -->
    <div class="boxShadow">
      <div class="container mobileView">
        <div class="mobileView">
          <div id="mySidenav" :style="styleObject" class="sidenav">
            <div class="float-right pb-5">
              <span
                to
                class="closebtn"
                style="color: #ffffff"
                @click="closeNav"
              >
                <font-awesome-icon :icon="['fa', 'times']" />
              </span>
            </div>

            <div class="one1">
              <img
                v-if="this.company"
                :src="this.company.company_logo"
                alt
                class="w-50"
                style="margin-bottom: 1rem"
              />
              <p>
                <nuxt-link
                  to="/company/company-overview"
                  style="
                    text-decoration: none;
                    color: #ffffff;
                    margin-top: 2rem !important;
                  "
                >
                  <h5 style="margin-bottom: 1rem">Company Overview</h5>
                </nuxt-link>
              </p>
              <p>
                <nuxt-link
                  to="/all-employees"
                  style="
                    text-decoration: none;
                    color: #ffffff;
                    margin-top: 2rem !important;
                  "
                >
                  <h5 style="margin-bottom: 1rem">Directory</h5>
                </nuxt-link>
              </p>
              <p>
                <nuxt-link
                  to="/department/add-department"
                  style="
                    text-decoration: none;
                    color: #ffffff;
                    margin-top: 2rem !important;
                  "
                >
                  <h5 style="margin-bottom: 1rem">Departments</h5>
                </nuxt-link>
              </p>
              <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <!-- <li v-if="$auth.loggedIn">
              {{auth.user.email}}
              <span class="ml-3">Log out</span>
                </li>-->
                <li class="nav-item active">
                  <nuxt-link to="/profile/profile">
                    <img
                      v-if="this.profile_pic"
                      :src="this.profile_pic.profile_pic"
                      alt
                      class="rounded-circle"
                      width="50px"
                      height="50px"
                    />
                  </nuxt-link>
                </li>
                <li class="nav-item active">
                  <button v-if="loader" @click="logOut" class="btn1">
                    Log Out
                  </button>
                  <span v-else>
                    <app-loader />
                  </span>
                </li>
              </ul>
              <!-- <p><nuxt-link to="/company/taxinfo" style="text-decoration:none;  color : #FFFFFF"><h5 style="margin-bottom:1rem">Tax Info</h5></nuxt-link></p>
              <p><nuxt-link to="/company/locations" style="text-decoration:none;  color : #FFFFFF"><h5 style="margin-bottom:1rem">Locations</h5></nuxt-link></p>-->
            </div>
          </div>
          <div class="wrapper2">
            <nuxt-link to="/dashboard">
              <div class="logo2">Hamlet</div>
            </nuxt-link>
            <div>
              <span
                style="font-size: 30px; cursor: pointer"
                class="openNav"
                @click="openNav"
              >
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
import axios from "axios";
import newLoader from "~/components/loader.vue";
export default {
  name: "navbar7",
  data() {
    return {
      displayModal: false,
      profile_pic: {},
      notifications : [],
      styleObject: {
        width: "0px",
      },
      displayNote: {
        display : "block"
      },
      loader: true,
      company: {},
    };
  },
  mounted() {
    this.getProfile()
    this.getCompany()
    this.getNotification()
  },
  methods: {
    getNotification(){
        this.$axios
        .get("https://hamlet.payfill.co/api/update/notify")
        .then((res) => {
          this.notifications = res.data.notice;
          console.log(this.notifications)
        });
    },
    notificationOpen(){
      this.displayModal = true
      this.displayNote.display = "none";
      // alert("clicked")
    },
    notificationClose(){
      this.displayModal = false
      // alert("clicked")
    },
    getProfile() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then((res) => {
          console.log(res.data.profile);
          this.profile_pic = res.data.user.profile;
        });
    },
    openNav() {
      this.styleObject.width = "100%";
    },
    closeNav() {
      this.styleObject.width = "0px";
      // console.log('clicked')
    },
    async logOut() {
      this.loader = false;
      await this.$auth.logout();
      localStorage.removeItem("jwt");
      this.$router.push("/signin");
      this.$message({
        message: "You Logged out successfully!",
        type: "success",
      });
    },
    getCompany() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then((res) => {
          console.log(res.data.company);
          this.company = res.data.user.company;
        });
    },
  },
};
</script>>
<style scoped>
* {
  font-family: "Overpass", sans-serif;
}
ul li {
  margin-left: 1.5rem;
}
.modal-new {
  position: fixed;
  top: 19rem;
  left: 80%;
  transform: translate(-50%, -50%);
  /* z-index: 99; */
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  /* border-radius: 16px; */
  padding: 10px;
  /* position: absolute; */
  z-index: 1001;
  border: 1px solid #ddd;
  border-radius: 3px;
  transition: opacity 0.6s;
  box-shadow: 0 0 5px 1px rgba(0,0,0,.05);
}
.border-bottom{
  border-bottom: 1px solid #e6ecf2 !important;
}
.badge {
  position: absolute;
  /* top: 13px;  */
     /* right: 1px; */
  padding: 1px;
  border-radius: 50%;
  /* background: #FF00FF; */
  color: #000;
}
.notify{
  color: #0065fc;
}
.icon-edit{
  padding: 1rem;
  background: #e6ecf2;
  border-radius: 50%;
  /* line-height: 3; */
  height: 55px;
  width: 55px;
}
.border-line{
  border: 1px solid #e6ecf2;
  width: 100%;
  margin: .1rem;
}
.header-notify{
font-weight: bold;
}
.text-notify{
  font-size: .8rem;
}
.boxShadow {
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; */
  background-color: rgba(255, 255, 255, 1) !important;
}
a {
  text-decoration: none !important;
}
.one {
  margin-left: 100px;
  margin-right: 100px;
}
.btn1 {
  background: white;
  color: #0065fc;
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid #0065fc;
  outline: none !important;
}
.btn1:hover {
  background: #0065fc;
  color: white;
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid #0065fc;
}
.btn2 {
  background: #0065fc;
  color: white;
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid #0065fc;
  outline: none !important;
}
.btn2:hover {
  background: white;
  color: #0065fc;
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid #0065fc;
}
.mobileView {
  display: none;
}
.logo2 {
  font-size: 1.5rem;
  color: #0065fc;
}
#maintwo {
  transition: margin-left 0.5s;
  /* padding: 16px; */
}
.sidenav {
  text-align: center;
  height: 100%;
  /* width: 0; */
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 101, 252);
  /* background-image: linear-gradient(to right, #0288d1, #0288d1 ); */
  /* opacity: 0.7; */
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
.sidenav ul {
  margin-top: 2rem;
}
.sidenav ul li a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #e54332;
  display: block;
  transition: 0.3s;
  /* margin-top: 3rem; */
  padding: 20px;
}
.sidenav ul li a:hover {
  color: hotpink;
}
.closebtn {
  position: absolute;
  top: 0;
  right: 40px;
  font-size: 2rem !important;
  margin-left: 50px;
}
.openNav {
  font-size: 1.8rem !important;
}
.logo3 {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2rem !important;
  /* margin-left: 50px; */
}
.wrapper2 {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

/* @media(max-width:768px) {
         .one{
        margin-left: 20px;
        margin-right: 20px;
    }
    } */
@media only screen and (min-width: 300px) and (max-width: 350px) {
  a {
    text-decoration: none !important;
  }
  .closebtn {
    position: absolute;
    top: 1rem;
    right: 2rem;
    font-size: 2rem !important;
    margin-left: 55px;
  }
  .desktopView {
    display: none;
  }
  .mobileView {
    display: block;
  }
  .one1 {
    text-align: center !important;
  }
}
@media only screen and (min-width: 360px) and (max-width: 578px) {
  a {
    text-decoration: none !important;
  }
  .desktopView {
    display: none;
  }
  .mobileView {
    display: block;
  }
  .closebtn {
    top: 1rem;
    right: 2rem;
  }
  .one1 {
    text-align: center !important;
  }
}
@media only screen and (min-width: 579px) and (max-width: 996px) {
  a {
    text-decoration: none !important;
  }
  .one {
    margin-left: 20px;
    margin-right: 20px;
  }
  .desktopView {
    display: none;
  }
  .mobileView {
    display: block;
  }
}
</style>
