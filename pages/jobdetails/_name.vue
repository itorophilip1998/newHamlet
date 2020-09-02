<template>
  <div>
    <app-navbar/>
    <div class="row one5">
      <app-sidebar/>
      <div class="one2 " >
        <div v-if="!show" id="style-loader">
              <span disabled>
                <span class="spinner-border text-primary spinner-border-sm" role="status" aria-hidden="true"></span>

              </span>
            </div>
        <div class="one3" v-if="show">

          <h2>Job Details</h2>
          <hr>
          <form @submit.prevent="addJobDetails">
            <div class="grid">
              <p>Job Title</p>
              <input type="text" name="job-title" class="one6 form-control"  v-model="jobDetails.job_title"
              v-validate="'required'"
                  :class="{ 'is-invalid': submitted && errors.has('job-title') }"
                /><div></div>
                <small
                  v-if="submitted && errors.has('job-title')"
                  class="invalid-feedback"
                >
                  {{ errors.first("job-title") }}
                </small>
            </div>

            <div class="grid">
              <p>Employment Type</p>
              <div class="one7">
                <div class="custom-control custom-radio" @click="showradio1">
                  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" value="Full Time" v-model="jobDetails.employment_type">
                  <label class="custom-control-label" for="customRadio1">Employee</label>
                </div>
                <div class="custom-control custom-radio" @click="showradio2">
                  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" value="Contingent Worker" v-model="jobDetails.employment_type">
                  <label class="custom-control-label" for="customRadio2">Contingent Worker</label>
                </div>
              </div>

            </div>
            <div class="grid">
              <p>Classification</p>
              <div class="input-group" v-if="radio1">
                <label class="container">Full Time
                  <input type="radio" checked="checked" name="radio" value="Full Time" v-model="jobDetails.employment_classification">
                  <span class="checkmark"></span>
                </label>
                <label class="container">Part Time
                  <input type="radio" name="radio" value="Part Time" v-model="jobDetails.employment_classification">
                  <span class="checkmark"></span>
                </label>
                <label class="container">Intern
                  <input type="radio" name="radio" value="Intern" v-model="jobDetails.employment_classification">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-group" v-if="radio2">
                <label class="container">Temporary Staff
                  <input type="radio" checked="checked" name="radio" value="Temporary Staff" v-model="jobDetails.employment_classification">
                  <span class="checkmark"></span>
                </label>
                <label class="container">Hired Contractor
                  <input type="radio" name="radio" value="Hired Contractor" v-model="jobDetails.employment_classification">
                  <span class="checkmark"></span>
                </label>
                <label class="container">Volunteer
                  <input type="radio" name="radio" value="Volunteer" v-model="jobDetails.employment_classification">
                  <span class="checkmark"></span>
                </label>

              </div>

            </div>
            <div class="grid">
              <p>Date Hired</p>
              <input type="date" name="date-hired" id="" class="one6 form-control" v-model="jobDetails.date_hired"
              v-validate="'required'"
                  :class="{ 'is-invalid': submitted && errors.has('date-hired') }"
                /><div></div>
                <small
                  v-if="submitted && errors.has('date-hired')"
                  class="invalid-feedback"
                >
                  {{ errors.first("date-hired") }}
                </small>
            </div>
            <div class="grid">
              <p>Work Location</p>
              <input type="text" name="work-location" class="one6 form-control" v-model="jobDetails.work_location"
              v-validate="'required'"
                  :class="{ 'is-invalid': submitted && errors.has('work-location') }"
                /><div></div>
                <small
                  v-if="submitted && errors.has('work-location')"
                  class="invalid-feedback"
                >
                  {{ errors.first("work-location") }}
                </small>
            </div>
            <div class="grid">
              <p>Salary (In Naira)</p>
              <input  class="one6 form-control" name="salary" v-model="jobDetails.salary"
              v-validate="'required|numeric'"
                  :class="{ 'is-invalid': submitted && errors.has('salary') }"
                /><div></div>
                <small
                  v-if="submitted && errors.has('salary')"
                  class="invalid-feedback"
                >
                  {{ errors.first("salary") }}
                </small>
            </div>
            <div class="grid">
              <p>Job Description</p>
              <textarea name="description" id=""  class=" form-control"  cols="10" rows="5" v-model="jobDetails.description"
              v-validate="'required'"
                  :class="{ 'is-invalid': submitted && errors.has('description') }"
                >
              </textarea>
              <div></div>
                <small
                  v-if="submitted && errors.has('description')"
                  class="invalid-feedback"
                >
                  {{ errors.first("description") }}
                </small>
            </div>
            <div class="grid">
              <p>Job Category</p>
              <div class="input-group">
                <select class="custom-select form-control one6" id="inputGroupSelect04" name="job-category" aria-label="Example select with button addon" v-model="jobDetails.job_category"
                 v-validate="'required'"
                  :class="{ 'is-invalid': submitted && errors.has('job-category') }"
                >
                  <option value="Male">Executive Officers and Managers</option>
                  <option value="Female">Mid-Level Officers and Managers</option>
                  <option value="Male">Professionals</option>
                    <option value="Female">Technicians</option>
                    <option value="Male">Sales Workers</option>
                    <option value="Female">Craft Workers</option>
                    <option value="Female">Service Workers</option>
                </select>
                <div></div>
                <small
                  v-if="submitted && errors.has('job-category')"
                  class="invalid-feedback"
                >
                  {{ errors.first("job-category") }}
                </small>
              </div>
            </div>
            <div class="grid">
              <p>Department</p>
              <div class="input-group">
                <select class="custom-select one6" name="department" id="inputGroupSelect04" aria-label="Example select with button addon" v-model="jobDetails.department"
                v-validate="'required'"
                  :class="{ 'is-invalid': submitted && errors.has('department') }"
                >
                  <option  v-for="(department, index) in departments" :key="index">{{department.name}}</option>
                </select>
                <div></div>
                <small
                  v-if="submitted && errors.has('department')"
                  class="invalid-feedback"
                >
                  {{ errors.first("department") }}
                </small>
              </div>
            </div>

            <hr>
            <div class="one4">
              <!-- <nuxt-link to="/contact-info"><button class="btn1">Back</button></nuxt-link> -->
              <button type="submit"  class="btn2">
                <span v-if="isLoading">Submit</span>
                <app-loader v-else />
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>


  </div>


</template>

<script>
  import sidebar from '~/components/sidebar.vue';
  import navbar from '~/components/navbar.vue';
  import swal from "sweetalert";
  import newLoader from "~/components/loader.vue";
  export default {
    //  middleware : ['auth'],
    components:{
      'app-sidebar':sidebar,
      'app-navbar':navbar,
      "app-loader": newLoader,
    },
    mounted(){
      this.getDepartment()
    },
    data(){
      return{
        radio1: true,
        radio2: false,
        show:false,
        jobDetails:{
          employment_type:"",
          job_title: "",
          salary: "",
          date_hired: "",
          description: "",
          department: "",
          job_category: "",
          work_location: "",
          employment_classification: "",
        employee_id: this.$route.params.name,

        },
        isLoading : true,
        submitted: false,
        departments:{},
      }
    },
    methods:{
      showradio1(){
        this.radio2 = false;
        this.radio1 = true;
      },
      showradio2(){
        this.radio1 = false;
        this.radio2 = true;
      },
      addJobDetails(){
        console.log("clicked")
      this.submitted = true;
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          console.log("Login");
         this.isLoading = false;
         this.$axios.post("https://hamlet.payfill.co/api/job-details", this.jobDetails).then((res) => {
          console.log(res.data);
          this.$message({
          message: "You've added your employee's job details!",
          type: "success"
        });
          this.isLoading = true;
          this.$router.push("/dashboard");
        }).catch(e => {
          this.isLoading = true;
        });
        } else {
        this.isLoading = true;
        }
      })},
      getDepartment() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then(res => {
          console.log(res.data);
          this.departments = res.data.user.company.company_departments;this.show = true;
        });
    },
    },
    created(){
      // this.getDepartment()
    }

  }
</script>

<style scoped>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Overpass', sans-serif;

  }
  .one2{
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.15);
    width: 50%;
    border-radius: 5px;
    background: #FFFFFF;
    margin-top: 5rem;
    height: 150vh;
    margin-left: 25%;
  }
  .grid{
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-bottom: 30px;
  }
  .grid p{
    color: #081D29;
  }
  .grid .one6{
    width:100%;
    border: 0.5px solid #081D29 !important;
    height: 30px;
    padding: 5px !important;
    border-radius: 5px;
  }
  .one3{
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 20px;
    padding-bottom: 50px;

  }
  hr{
    margin-bottom: 30px;
  }
  .one3 h2{
    margin-bottom: 10px;
    color: #0065FC;
  }
  .one4{
    text-align: right;
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
    height: 150vh;
  }
  select{
    width:100%;
    border: 0.5px solid #081D29 !important;
    height: 32px;
    padding: 5px;
  }
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 15px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default radio button */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 17px;
    width: 17px;
    background-color: #eee;
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;

  }

  /* Show the indicator (dot/circle) when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .container .checkmark:after {
    top: 6px;
    left: 6px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: white;
  }
  .one7{
    margin-left: 1.5rem;
  }
  #style-loader{
  margin-top: 30vh;
  text-align: center;

}




  @media(max-width:567px){
    .one2{
      width: 100%;
      margin-left: 0%;
      height: 130vh;
    }
    .grid{
      grid-template-columns: 1fr ;
    }
    .one3{
      padding-left: 30px;
      padding-right: 30px;
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

  @media(min-width: 568px) and (max-width:768px) {
    .one2{
      width: 75%;
    }
    .one3{
      padding-left: 20px;
      padding-right: 20px;
    }
    .grid{
      grid-gap: 1rem;
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



</style>
