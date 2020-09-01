<template>
    <div>
        <app-navbar/>

        <div class="row one5">

            <div class="one">
        <div class="one1">
            <div v-for="item in employee" :key="item.id">
        <img  v-if="item.profile_pic"  :src="`${item.profile_pic  || '~/assets/Group 58.png'}`" alt="">
           </div>
             <p ><span style="cursor:pointer" @click='Personal()'  class="text-primary">Personal Info</span></p>
            <p ><span style="cursor:pointer"  @click='Contact()' class="text-primary">Contact info</span></p>
            <p ><span style="cursor:pointer"  @click='Job()' class="text-primary">Job Details</span></p>
            <!-- <p ><button class="btn border-primary  text-primary">Homepage</button></p> -->

    </div>
    </div>
    <div  class="one2 ">
      <div class="one6">
      <div class="one7 ">
          <h2><div v-for="item in employee" :key="item.id">
             {{ item.first_name + " " + item.other_names }}
          </div></h2>
          <p>Job Title (employmenttype)  Started on (Date hired)</p>
      </div>
      <div class="one8">
          <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Actions
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" data-toggle="modal" data-target="#modelId">Edit profile</a>
                  <a class="dropdown-item" href="#" >Terminate</a>
              </div>
          </div>
      </div>
  </div>

       <div id="Personal" style="display: block;">
      <div    class="one3" v-for="(data, index) in employee" :key="index">
        <h3>Personal Info</h3>
        <hr>

      <div class="grid">
          <p> Gender</p>
          <p>{{data.gender}}</p>
      </div>
      <div class="grid">
          <p>Date of Birth</p>
          <p>{{data.dob}}</p>
      </div>
      <div class="grid">
          <p>Address</p>
          <p>{{data.address}}</p>
      </div>
      <div class="grid">
          <p>Qualification</p>
          <p>{{data.qualification}}</p>
      </div>
      <div class="grid">
          <p>City/Town</p>
          <p>{{data.city}}</p>
      </div>
      <hr>
      <button class="btn-primary fa fa-pencil" @click='personaliInfo(data)'>edit</button>
  </div>
        </div>
<!-- personl info  edit -->
<div id="form">
  <!-- <form @submit.prevent="personalForm()"> -->
     <!-- <input type="email" class="form-control" placeholder="gender" v-model="gender"> -->
 <!-- {{personaliInfo}} -->
    <!-- </form> -->
</div>

       <div id="Job" style="display: none;"   >
      <div class="one3">
        <h3>Job Details</h3>
        <hr>
      <div class="grid">
          <p>Job Title</p>
          <p>{{job_details.job_title}}</p>
      </div>
      <div class="grid">
          <p>Employment Type</p>
          <p>{{job_details.employment_type}}</p>
      </div>
      <div class="grid">
          <p>Salary</p>
          <p>{{job_details.salary}}</p>
      </div>
      <div class="grid">
          <p>Date hired</p>
          <p>{{job_details.date_hired}}</p>
      </div>
      <div class="grid">
          <p>Description</p>
          <p>{{job_details.description}}</p>
      </div>
      <div class="grid">
          <p>Department</p>
          <p>{{job_details.department}}</p>
      </div>
      <div class="grid">
          <p>Employment Classification</p>
          <p>{{job_details.employment_classification}}</p>
      </div>
      <div class="grid">
          <p> Job Category</p>
          <p>{{job_details.job_category}}</p>
      </div>
      <div class="grid">
          <p>Work Location</p>
          <p>{{job_details.work_location}}</p>
      </div>
      <hr>
  </div>
      </div>
       <div id="Contact"   style="display: none;"  >
      <div class="one3">
      <h3>Contact Info</h3>
      <hr>
      <div class="grid">
          <p>Phone</p>
          <p>{{contact_info.phone}}</p>
      </div>
      <div class="grid">
          <p>Email</p>
          <p>{{contact_info.email}}</p>
      </div>
      <div class="grid">
          <p>Emergency Contact</p>
          <p>{{contact_info.emergency_contact}}</p>
      </div>
      <hr>
    </div>
     </div>

 </div>
        </div>


    </div>


    <!-- </div> -->
</template>

<script>
import sidebar from '~/components/sidebar2.vue';
import navbar from '~/components/navbar4.vue';
export default {
    //  middleware : ['auth'],
    components:{
        'app-sidebar':sidebar,
        'app-navbar':navbar,
    },

    data() {
      return {
        employee:{},
        contact_info:{},
        editedEmployee:{},
        job_details:{},
        styleObject : {
       width : '0px'
     }
      }
    },
    mounted(){
      this.$axios.get(`https://hamlet.payfill.co/api/employees/${this.$route.params.name}`).then(res => {
              this.employee=res.data.employee
              this.contact_info=res.data.employee[0].contact_info
              this.job_details=res.data.employee[0].job_details
        });
    },
    methods:{
getEmployee(data)
{
// this.editedEmployee=data

},
        openNav(){
      this.styleObject.width = '100%'
    },
    closeNav(){
      this.styleObject.width = '0px'
    }
,
Personal()
      {

      document.getElementById('Personal').style.display='block';
      document.getElementById('Job').style.display='none';
      document.getElementById('Job').style.display='none';
      },
      Job()
      {
        document.getElementById('Job').style.display='block';
        document.getElementById('Personal').style.display='none';
        document.getElementById('Contact').style.display='none';
      },
      Contact()
      {
        document.getElementById('Contact').style.display='block';
        document.getElementById('Personal').style.display='none';
        document.getElementById('Job').style.display='none';
      }
    },


}
</script>

<style scoped>
 .nuxt-link-active{
        border-left: 3px solid #64a2ff !important ;
        padding-left: .5rem;
    }
    .one{
        top: 0;
        left: 0;
        width: 25%;
        height: 100vh;
        background: #F9F9F9;
        position: fixed;
    }
    .one1{
        padding-left: 100px;
        margin-top: 10rem;
        padding-right: 10px;
    }
    .one1 img{
        width: 60%;
        vertical-align: middle;
        border-radius: 50%;
        margin-bottom: 20px;
    }
    .one1 h5{
        margin-bottom: 20px;
        color: #081D29;
    }
    .one1 p{
        margin-bottom: 10px;
        color: #081D29;
    }

    @media (max-width:567px) {
        .one{
            display: none;
        }
    }


    @media(min-width: 568px) and (max-width:768px) {
        .one1{
        padding-left: 10%;
        padding-right: 10%;
    }
    }

    @media(min-width: 769px) and (max-width:1200px) {
        .one1{
        padding-left: 40px;}
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;

    }
    .one2{
        width: 50%;
        border-radius: 5px;
        background: #FFFFFF;
        margin-top: 5rem;
        height:100vh;
        margin-left: 25%;
    }
    .grid{
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin-bottom: 20px;
    }
    .grid p{
        color: #081D29;
    }
    .grid input{
        width:100%;
        border: 0.5px solid #081D29 !important;
        height: 30px;
        padding: 5px;
        border-radius: 5px;
    }
    .one3{
        padding-left: 70px;
        padding-right: 70px;
        padding-top: 50px;
        padding-bottom: 20px;

    }
    hr{
        margin-bottom: 30px;
    }
    .one3 h3{
        margin-bottom: 30px;
        color: #0065FC;
    }
    .one4{
        text-align: right;
        margin-bottom: 30px;
    }
    .btn1{
        color: #0065FC;
        padding: 8px 65px;
        background: #FFFFFF;
        border: 1px solid #0065FC;
        border-radius: 5px;
    }
    .btn2{
        color: #FFFFFF;
        background: #0065FC;
        border-radius: 5px;
        padding: 8px 65px;
        border: none;
        margin-left: 20px;
    }
    .one5{
        background: #F9F9F9;
        margin-top: 3.5rem;
        height: 130vh;
    }
    .one6{
        padding-left: 4rem;
        padding-right: 4rem;
        padding-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3rem;
    }
    .one8{
        text-align: right;
    }
    .one8 button{
        padding:5px 10px;
    }
    .one7 h2{
        color: #0065FC;
         margin-bottom: 10px;
    }


    @media (max-width: 567px) {
        .one2{
        width: 100%;
        margin-left: 0px;

    }
        .grid{
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 40px;
    }
        .one3{
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 50px;
        padding-bottom: 50px;

    }
        .one4{
            text-align: center;
    }
        .one4 button{
            width: 100%;
    }
        .btn2{

        margin-left: 0px;
    }
        .btn1{
        margin-bottom: 30px;
    }
    .one6{
        padding-left: 30px;
        padding-right: 30px;
    }

    }


    @media(min-width: 568px) and (max-width:768px) {
        .one2{
        width: 75%;
    }
        .one3{
        padding-left: 30px;
        padding-right: 30px;
    }
    .one6{
        padding-left: 30px;
        padding-right: 30px;
    }
    }


    @media(min-width: 769px) and (max-width:1200px) {
         .grid{
             grid-gap: 2rem;
         }
         .one4{
        text-align: center;
    }
        .one4 button{
            width: 100%;
    }
    .btn1{
        margin-bottom: 30px;
    }
    .btn2{
        margin-left: 0px;
    }
     }


     *{
        font-family: 'Overpass', sans-serif;

    }

    .oneV{
        margin-left: 100px;
        margin-right: 100px;

    }
    a{
        color: #0065FC !important;
    }
    .btn1V{
        background: white;
        color:#0065FC ;
        border-radius: 5px;
        padding: 5px 20px;
        border: 1px solid #0065FC;
        outline: none !important;
    }
    .btn1V:hover{
        background: #0065FC;
        color: white;
        border-radius: 5px;
        padding: 5px 20px;
        border: 1px solid #0065FC;

    }
  .btn2V{
        background: #0065FC;
        color: white;
        border-radius: 5px;
        padding: 5px 20px;
        border: 1px solid #0065FC;
        outline: none !important;
    }
.btn2V:hover{
        background: white;
        color:#0065FC ;
        border-radius: 5px;
        padding: 5px 20px;
        border: 1px solid #0065FC;
    }
.mobileViewV{
    display: none;
  }
.logo2v{
    font-size: 1.5rem;
    color: #0065FC;
}
#maintwoV {
 transition: margin-left .5s;
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
 background-color: rgb(0,101,252, 0.7);
 /* background-image: linear-gradient(to right, #0288d1, #0288d1 ); */
/* opacity: 0.7; */
 overflow-x: hidden;
 transition: 0.5s;
 padding-top: 60px;
}
.sidenavV ul{
    margin-top: 2rem;
}
.sidenavV ul li a {
 padding: 8px 8px 8px 32px;
 text-decoration: none;
 font-size: 25px;
 color: #E54332;
 display: block;
 transition: 0.3s;
 /* margin-top: 3rem; */
 padding: 20px;
}
.sidenavV ul li a:hover
{
 color: hotpink;
}
.closebtnV {
 position: absolute;
 top: 0;
 right: 40px;
 font-size: 2rem !important;
 margin-left: 50px;
}
.openNavV{
    font-size: 1.8rem !important;
}
.logo3V{
position: absolute;
 top: 0;
 left: 0;
 font-size: 2rem !important;
 /* margin-left: 50px; */
}
.wrapper2V{
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
.desktopViewV{
    display: none;
  }
  .mobileViewV{
    display:block;

  }

}

@media only screen and (min-width: 360px) and (max-width: 578px) {
  .desktopViewV{
    display: none;
  }
  .mobileViewV{
    display: block;
  }
  .closebtnV {
 top: -0.7rem;
 right: 2rem;
}
}
@media only screen and (min-width: 710px) and (max-width: 768px){
    .oneV{
        margin-left: 20px;
        margin-right: 20px;
    }
    .desktopViewV{
      display: none;
    }
    .mobileViewV{
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
