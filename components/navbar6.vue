<template>
<div class="boxShadow fixed-top">
   <div class="one desktopView">
  <nav class="navbar navbar-expand-lg navbar-light ">
  <nuxt-link to="/dashboard"><a class="navbar-brand" href="#" style="color: #0065FC">Hamlet</a></nuxt-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
       <!-- <li v-if="$auth.loggedIn">
      {{auth.user.email}}
      <span class="ml-3">Log out</span>
    </li> -->
     <li class="nav-item active">
        <nuxt-link to="/profile/profile"><img
                   v-if="this.profile_pic"  :src="this.profile_pic.profile_pic"
                      alt
                      class="rounded-circle"
                      width="40px"
                      height="40px"

           /></nuxt-link>
      </li>
      <li class="nav-item active">
        <button v-if="loader" @click="logOut" class="btn1">Log Out</button>
         <span v-else><app-loader /></span>
      </li>

    </ul>

  </div>
</nav>
    </div>
    <!-- desktop view end -->


    <!-- mobile-view -->
    <div class="boxShadow">
    <div class="container mobileView">
      <div class="mobileView">
          <div id="mySidenav" :style="styleObject" class="sidenav">
            <div class="float-right pb-5">
               <span to="" class="closebtn" style="color : #FFFFFF" @click="closeNav">
               <font-awesome-icon :icon="['fa', 'times']"/>
               </span>
            </div>

           <div class="one1">
            <img v-if="this.company" :src="this.company.company_logo" alt class="w-50" />
             <p class="mt-3"><nuxt-link to="/company/company-overview" style="text-decoration:none; color : #FFFFFF"><h5 style="margin-bottom:1rem">Company Overview</h5> </nuxt-link></p>
            <p><nuxt-link to="/department/add-department" style="text-decoration:none;  color : #FFFFFF"><h5 style="margin-bottom:1rem">Department</h5></nuxt-link></p>
            <p><nuxt-link to="/all-employees" style="text-decoration:none;  color : #FFFFFF"><h5 style="margin-bottom:1rem">Directory</h5></nuxt-link></p>

            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
       <!-- <li v-if="$auth.loggedIn">
      {{auth.user.email}}
      <span class="ml-3">Log out</span>
    </li> -->
     <li class="nav-item active">

        <nuxt-link to="/profile/profile"><img
                    v-if="this.profile_pic"   :src="this.profile_pic.profile_pic"
                      alt
                      class="rounded-circle"
                      width="50px"
                      height="50px"

           /></nuxt-link>
      </li>
      <li class="nav-item active mt-1">
        <button v-if="loader" @click="logOut" class="btn1">Log Out</button>
         <span v-else><app-loader /></span>
      </li>

    </ul>
        </div>

          </div>
        <div class="wrapper2">
          <div class="logo2">
           <nuxt-link to="/dashboard"> Hamlet </nuxt-link>
          </div>
          <div>
              <span style="font-size:30px;cursor:pointer" class="openNav" @click="openNav">
                <font-awesome-icon :icon="['fa', 'bars']"/>
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
import axios from 'axios'
import newLoader from "~/components/loader.vue";
export default {
  components : {
    'app-loader' : newLoader,
  },
  data(){
    return{
      profile_pic : {},
     styleObject : {
       width : '0px'
     },
     loader : true,
     company: {},
    }
  },
  mounted(){
    this.getProfile(),
    this.getCompany()
  },
  methods : {
    getProfile(){
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then((res) => {
          console.log(res.data.company);
          this.profile_pic = res.data.user.profile;
        });
    },
    openNav(){
      this.styleObject.width = '100%'
    },
    closeNav(){
      this.styleObject.width = '0px'
      // console.log('clicked')
    },
    async logOut(){
      this.loader = false
     await this.$auth.logout();
     localStorage.removeItem("jwt");
    this.$router.push('/signin')
     this.$message({
          message:  "You Logged out successfully!",
          type: 'success'
        })
    },
    getCompany() {
        this.$axios
            .get("https://hamlet.payfill.co/api/auth/admin")
            .then(res => {
            console.log(res.data.company);
            this.company = res.data.user.company;
            });
        }
  }
}
</script>>
<style scoped>
    *{
        font-family: 'Overpass', sans-serif;

    }
    ul li{
      margin-left: 1.5rem;
    }
    .boxShadow{
       /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; */
      background-color: #FFFFFF !important;
      /* border-bottom: 1px solid #E0E6ED; */
    }
    .one{
        margin-left: 100px;
        margin-right: 100px;

    }
    .btn1{
        background: white;
        color:#0065FC ;
        border-radius: 5px;
        padding: 5px 20px;
        border: 1px solid #0065FC;
        outline: none !important;
    }
    .btn1:hover{
        background: #0065FC;
        color: white;
        border-radius: 5px;
        padding: 5px 20px;
        border: 1px solid #0065FC;

    }
    .btn2{
        background: #0065FC;
        color: white;
        border-radius: 5px;
        padding: 5px 20px;
        border: 1px solid #0065FC;
        outline: none !important;
    }
    .btn2:hover{
        background: white;
        color:#0065FC ;
        border-radius: 5px;
        padding: 5px 20px;
        border: 1px solid #0065FC;
    }
.mobileView{
    display: none;
  }
  .logo2{
    font-size: 1.5rem;
    color: #0065FC;
}
#maintwo {
 transition: margin-left .5s;
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
 background-color: rgb(0,101,252);
 /* background-image: linear-gradient(to right, #0288d1, #0288d1 ); */
/* opacity: 0.7; */
 overflow-x: hidden;
 transition: 0.5s;
 padding-top: 60px;
}
.sidenav ul{
    margin-top: 2rem;
}
.sidenav ul li a {
 padding: 8px 8px 8px 32px;
 text-decoration: none;
 font-size: 25px;
 color: #E54332;
 display: block;
 transition: 0.3s;
 /* margin-top: 3rem; */
 padding: 20px;
}
.sidenav ul li a:hover
{
 color: hotpink;
}
.closebtn {
 position: absolute;
 top: 0;
 right: 40px;
 font-size: 2rem !important;
 margin-left: 50px;
}
.openNav{
    font-size: 1.8rem !important;
}
.logo3{
position: absolute;
 top: 0;
 left: 0;
 font-size: 2rem !important;
 /* margin-left: 50px; */
}
.wrapper2{
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
  .closebtn {
 position: absolute;
 top: 1rem;
 right: 2rem;
 font-size: 2rem !important;
 margin-left: 55px;
}
.desktopView{
    display: none;
  }
  .mobileView{
    display: block;
  }
  .one1{
    text-align: center !important;
  }
}

@media only screen and (min-width: 360px) and (max-width: 578px) {
  .desktopView{
    display: none;
  }
  .mobileView{
    display: block;
  }
  .closebtn {
 top: 1rem;
 right: 2rem;
}
.one1{
    text-align: center !important;
  }
}
@media only screen and (min-width: 710px) and (max-width: 768px){
    .one{
        margin-left: 20px;
        margin-right: 20px;
    }
    .desktopView{
      display: none;
    }
    .mobileView{
      display: block;
    }
}

</style>
