<template>
    <div>
        <app-navbar/>

        <div class="row one5">
          
                <!-- <span class="one9 float-right">
                  <nuxt-link to="/dashboard">
                    <button class="btn1">Back</button>
                  </nuxt-link>
                </span> -->
            <div class="one">
              <!-- <app-sidebar /> -->
        <div class="one1">
            <div v-for="item in employee" :key="item.id">
        <img class="w-99"  v-if="item.profile_pic"  :src="`${item.profile_pic  || '~/assets/Group 58.png'}`" alt="">
           </div>
             <p ><span style="cursor:pointer"   class="text-primary">Employee Details</span></p>           
            <!-- <p ><span style="cursor:pointer"  @click='Job()' class="text-primary">Job Details</span></p>
            <p ><span style="cursor:pointer"  @click='Contact()' class="text-primary">Contact info</span></p> -->
            <!-- <p ><button class="btn border-primary  text-primary">Homepage</button></p>  -->

    </div> 
    </div> 
    <div  class="one2 ">
        <span class="one9 float-right">
                  <nuxt-link to="/dashboard">
                    <button class="btn-arrow"><font-awesome-icon :icon="['fa', 'arrow-left']" /></button>
                  </nuxt-link>
                </span>
      <div class="one6">
      <div class="one7 ">
          <div v-for="item in employee" :key="item.id"><h3>{{ item.first_name + " " + item.other_names }}</h3>
             
             <h5>Job Title: {{item.job_details.job_title}} || Date Hired: {{item.job_details.date_hired}}  </h5>
          </div>
          
      </div>
      
        </div>




        <!-- Personal Info Starts -->
       <div id="Personal">
         <div v-if="editEmployeeDetails">
           <div    class="one3" v-for="(data, index) in employee" :key="index" >
        <h3>Personal Info</h3>
        <hr>

      <div class="grid">
          <p style="color : #0065fc; font-weight : 400"> Gender</p>
          <p>{{data.gender}}</p>
      </div>
      <div class="grid">
          <p style="color : #0065fc; font-weight : 400">Date of Birth</p>
          <p>{{data.dob}}</p>
      </div>
      <div class="grid">
          <p style="color : #0065fc; font-weight : 400">Address</p>
          <p>{{data.address}}</p>
      </div>
      <div class="grid">
          <p style="color : #0065fc; font-weight : 400">Qualification</p>
          <p>{{data.qualification}}</p>
      </div>
      <div class="grid">
          <p style="color : #0065fc; font-weight : 400">City/Town</p>
          <p>{{data.city}}</p>
      </div>
      <hr>
      <button class="btn2 " @click="editEmployee(data)">Edit Employee Info</button>
      <!-- <button class="btn-primary fa fa-pencil" @click='personalInfo(data)'>Edit Personal Info</button> -->
  </div>
         </div>
         <!-- personl info  edit -->
<div id="form" style="margin-left:4rem;margin-right:3rem; margin-top:3rem" v-else>
    <h3 style="color:#0065FC">Edit Employee Information</h3>
                <hr>
  <form @submit.prevent="updateEmployeeInfo(employeeDetails.id)">
              <div class="grid">
                <p>First Name</p>
                <input
                  type="text"
                  name="first-name"
                  class="one6 form-control"
                  v-model="employeeDetails.first_name"
                  v-validate="'required'"
                  :class="{ 'is-invalid': submitted && errors.has('first-name') }"
                />
                <div></div>
                <small
                  v-if="submitted && errors.has('first-name')"
                  class="invalid-feedback"
                >{{ errors.first("first-name") }}</small>
              </div>
              <div class="grid">
                <p>Other Names</p>
                <input
                  type="text"
                  class="one6 form-control"
                  name="other-names"
                  v-model="employeeDetails.other_names"
                  v-validate="'required'"
                  :class="{ 'is-invalid': submitted && errors.has('other-names') }"
                />
                <div></div>
                <small
                  v-if="submitted && errors.has('other-names')"
                  class="invalid-feedback"
                >{{ errors.first("other-names") }}</small>
              </div>
              <div class="grid">
                <p>Gender</p>
                <div class="input-group">
                  <select
                    class="custom-select one6 form-control"
                    name="gender"
                    id="inputGroupSelect04"
                   
                    v-model="employeeDetails.gender"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('gender') }"
                  >
                    <option value="" selected disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <div></div>
                  <small
                    v-if="submitted && errors.has('gender')"
                    class="invalid-feedback"
                  >{{ errors.first("gender") }}</small>
                </div>
              </div>
              <div class="grid">
                <p>Date of Birth</p>
                <input
                  type="date"
                  name="date_of_birth"
                  id
                  class="one6 form-control"
                  v-model="employeeDetails.dob"
                  v-validate="'required'"
                  :class="{ 'is-invalid': submitted && errors.has('date_of_birth') }"
                />
                <div></div>
                <small
                  v-if="submitted && errors.has('date_of_birth')"
                  class="invalid-feedback"
                >{{ errors.first("date_of_birth") }}</small>
              </div>
              <div class="grid">
                <p>Address</p>
                <input
                  type="text"
                  class="one6 form-control"
                  name="address"
                  v-model="employeeDetails.address"
                  v-validate="'required'"
                  :class="{ 'is-invalid': submitted && errors.has('address') }"
                />
                <div></div>
                <small
                  v-if="submitted && errors.has('address')"
                  class="invalid-feedback"
                >{{ errors.first("address") }}</small>
              </div>
              <div class="grid">
                <p>City</p>
                <input
                  type="text"
                  name="city"
                  class="one6 form-control"
                  v-model="employeeDetails.city"
                  v-validate="'required'"
                  :class="{ 'is-invalid': submitted && errors.has('city') }"
                />
                <div></div>
                <small
                  v-if="submitted && errors.has('city')"
                  class="invalid-feedback"
                >{{ errors.first("city") }}</small>
              </div>
              <div class="grid">
                <p>Qualifications</p>
                <select
                  class="custom-select one6 form-control"
                  name="qualifications"
                  id="inputGroupSelect04"
                  
                  v-model="employeeDetails.qualification"
                  v-validate="'required'"
                  :class="{ 'is-invalid': submitted && errors.has('qualifications') }"
                >
                  <option value="" selected disabled>Select Qualification</option>
                  <option value="Primary School Leaving Certificate">Primary School Leaving Certificate</option>
                  <option value="JSCE">JSCE</option>
                  <option value="NECO">NECO</option>
                  <option value="WAEC">WAEC</option>
                  <option value="OND">OND</option>
                  <option value="HND">HND</option>
                  <option value="Bsc">Bsc</option>
                  <option value="Masters">Masters</option>
                  <option value="Phd">Phd</option>
                </select>
                <div></div>
                <small
                  v-if="submitted && errors.has('qualifications')"
                  class="invalid-feedback"
                >{{ errors.first("qualifications") }}</small>
              </div>
              <div class="grid">
                <p>Profile Picture</p>
                <input
                  type="file"
                  name="profile-picture"
                  class="file-border"
                  id
                  placeholder
                  @change="upload()"
                  v-validate="'required|ext:jpeg,jpg,svg,png'"
                  :class="{ 'is-invalid': submitted && errors.has('profile-picture') }"
                />
                <div></div>
                <small
                  id
                  class="form-text text-muted"
                >(Picture must be of .jpeg, .png, .svg, .jpg format)</small>
                <div></div>
                <small
                  v-if="submitted && errors.has('profile-picture')"
                  class="invalid-feedback"
                >{{ errors.first("profile-picture")}}</small>
              </div>
              <hr />
              <div class="one4">
                 <button class="btn1" @click="cancelEditEmployee">Back</button> 
                <button type="submit" class="btn2">
                  <span v-if="isLoading">Submit</span>
                  <app-loader v-else />
                </button>
              </div>
            </form>
</div>

      
        </div>






    <!-- Job details starts -->

       <div id="Job">
      <div class="one3">
          <div v-if="editJobDetails">
              <h3>Job Details</h3>
        <hr>
      <div class="grid">
          <p style="color : #0065fc; font-weight : 400">Job Title</p>
          <p>{{job_details.job_title}}</p>
      </div>
      <div class="grid">
          <p style="color : #0065fc; font-weight : 400">Employment Type</p>
          <p>{{job_details.employment_type}}</p>
      </div>
      <div class="grid">
          <p style="color : #0065fc; font-weight : 400">Salary</p>
          <p>{{job_details.salary}}</p>
      </div>
      <div class="grid">
          <p style="color : #0065fc; font-weight : 400">Date hired</p>
          <p>{{job_details.date_hired}}</p>
      </div>
      <div class="grid">
          <p style="color : #0065fc; font-weight : 400">Description</p>
          <p>{{job_details.description}}</p>
      </div>
      <div class="grid">
          <p style="color : #0065fc; font-weight : 400">Department</p>
          <p>{{job_details.department}}</p>
      </div>
      <div class="grid">
          <p style="color : #0065fc; font-weight : 400">Employment Classification</p>
          <p>{{job_details.employment_classification}}</p>
      </div>
      <div class="grid">
          <p style="color : #0065fc; font-weight : 400"> Job Category</p>
          <p>{{job_details.job_category}}</p>
      </div>
      <div class="grid">
          <p style="color : #0065fc; font-weight : 400">Work Location</p>
          <p>{{job_details.work_location}}</p>
      </div>
      <hr>
      <button class="btn2 " @click="editJob(job_details)">Edit Job Details</button>
          </div>
        




      <!-- Edit Job Details -->
      <div id="form" v-else>
          <h3>Edit Job Details</h3>
                <hr>
          <form @submit.prevent="updateJobDetails(jobDetails.employee_id)">
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
                ><option value selected disabled>Select Job Category</option>
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
                > <option value="" selected disabled>Select Department</option>
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
                 <button class="btn1" @click="cancelEditJob">Back</button> 
                <button type="submit" class="btn2">
                  <span v-if="isLoading">Submit</span>
                  <app-loader v-else />
                </button>
              </div>
          </form>

      </div>
  </div>
      </div>




      <!-- Contact Info start -->
       <div id="Contact">
      <div class="one3">
          <div v-if="editContactInfo">
              <h3>Contact Info</h3>
                <hr>
                <div class="grid">
                    <p style="color : #0065fc; font-weight : 400">Phone</p>
                    <p>{{contact_info.phone}}</p>
                </div>
                <div class="grid">
                    <p style="color : #0065fc; font-weight : 400">Email</p>
                    <p>{{contact_info.email}}</p>
                </div>
                <div class="grid">
                    <p style="color : #0065fc; font-weight : 400">Emergency Contact</p>
                    <p>{{contact_info.emergency_contact}}</p>
                </div>
                <hr>
                <button class="btn2 " @click="editContact(contact_info)">Edit Contact Info</button>
                    </div>




                    <!-- Edit Contact Info -->
      
      <div id="form" v-else>
          <h3>Edit Contact Info</h3>
                <hr>
          <form @submit.prevent="updateContactInfo(contactInfo.employee_id)">
              <div class="grid">
                <p>Phone Number</p>
                <input
                  name="phone-number"
                  class="form-control"
                  v-model="contactInfo.phone"
                  v-validate="'numeric|length:11'"
                  :class="{ 'is-invalid': submitted && errors.has('phone-number') }"
                />
                <div></div>
                <small
                  v-if="submitted && errors.has('phone-number')"
                  class="invalid-feedback"
                >{{ errors.first("phone-number") }}</small>
              </div>
              <div class="grid">
                <p>Email</p>
                <input
                  type="email"
                  name="contact-email"
                  class="form-control"
                  v-model="contactInfo.email"
                  v-validate="'required|email'"
                  :class="{ 'is-invalid': submitted && errors.has('contact-email') }"
                />
                <div></div>
                <small
                  v-if="submitted && errors.has('contact-email')"
                  class="invalid-feedback"
                >{{ errors.first("contact-email")}}</small>
              </div>
              <div class="grid">
                <p>Emergency Contact</p>
                <input
                  name="emergency-contact"
                  class="form-control"
                  v-model="contactInfo.emergency_contact"
                  v-validate="'numeric|length:11'"
                  :class="{ 'is-invalid': submitted && errors.has('emergency-contact') }"
                />
                <div></div>
                <small
                  v-if="submitted && errors.has('emergency-contact')"
                  class="invalid-feedback"
                >{{ errors.first("emergency-contact") }}</small>
              </div>

              <hr />
              <div class="one4">
                 <button class="btn1" @click="cancelEditContactInfo">Back</button> 
                <button type="submit" class="btn2">
                  <span v-if="isLoading">Submit</span>
                  <app-loader v-else />
                </button>
              </div>
            </form> 
      </div>
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
import newLoader from "~/components/loader.vue";
import swal from "sweetalert";
export default {
    //  middleware : ['auth'],
    components:{
        'app-sidebar':sidebar,
        'app-navbar':navbar,
        "app-loader": newLoader,
    },
    data() {
      return {
          radio1: true,
        radio2: false,
        departments:{},
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
          _method: "PUT",
        employee_id: this.$route.params.name,
        },
        employeeDetails: {
        first_name: "",
        other_names: "",
        gender: "",
        dob: "",
        address: "",
        city: "",
        age: "",
        qualification: "",
        profile_pic: {},
      },        
        contactInfo: {
        phone: "",
        email: "",
        emergency_contact: "",
        employee_id: this.$route.params.name,
          _method: "PUT"
      },
      editContactInfo: true,
      editEmployeeDetails:true,
      editJobDetails:true,
      isLoading: true,
      submitted: false,
        employee:{},
        contact_info:{},
        editedEmployee:{},
        job_details:{},
        styleObject : {
       width : '0px',
       
        
       
     }
      }
    },
    mounted(){
      this.$axios.get(`https://hamlet.payfill.co/api/employees/${this.$route.params.name}`).then(res => {
              this.employee=res.data.employee
              this.contact_info=res.data.employee[0].contact_info
              this.job_details=res.data.employee[0].job_details
        });
        this.user = this.$auth.$storage.getLocalStorage("jwt");
        this.getDepartment()
    },
    methods:{
getEmployee(data)
{
// this.editedEmployee=data
},
    showradio1(){
        this.radio2 = false;
        this.radio1 = true;
      },
      showradio2(){
        this.radio1 = false;
        this.radio2 = true;
      },
    getDepartment() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then(res => {
          console.log(res.data);
          this.departments = res.data.user.company.company_departments;this.show = true;
        });
    },
        openNav(){
      this.styleObject.width = '100%'
    },
    closeNav(){
      this.styleObject.width = '0px'
    }
,
editContact(id) {
      this.editContactInfo = false;
      this.contactInfo = id;
    },
    cancelEditContactInfo() {
      this.editContactInfo = true;
    },
    updateContactInfo(i) {
      swal({
        title: "Are you sure?",
        text: "Once you Update, previous Contact Information will be lost",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            this.isloading = false;
            this.$axios
              .put(`https://hamlet.payfill.co/api/contact-info/${this.employee[0].contact_info.id}`, this.contactInfo, {
                headers: { Authorization: `Bearer ${this.user}` },
              })
              .then(
                (res) => {
                  console.log(res);
                  this.$message({
                    message: "Your Employee's Contact Information has been updated successfully!",
                    type: "success",
                  });
                  this.isloading = true;
                  this.$router.push("/dashboard");
                  // this.getallBlogs()
                },
                function (error) {
                  console.log(error);
                }
              );
            // this.reload();
          } else {
            this.$message({
              message: "Employee Contact information remains the same !",
              type: "info",
            });
          }
        })
        .catch((error) => {
          this.$message({
            message: "Error, Unable to update, Try again!",
            type: "error",
          });
        });
    },
    editEmployee(id) {
      this.editEmployeeDetails = false;
      this.employeeDetails = id;
    },
    cancelEditEmployee() {
      this.editEmployeeDetails = true;
    },
    upload() {
      var input = event.target;
      this.employeeDetails.profile_pic = input.files[0];
      console.log(this.employeeDetails.profile_pic);
    },
    updateEmployeeInfo(i) {
      console.log("clicked");
      this.submitted = true;
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          console.log("Login");
          this.isLoading = false;
          const formData = new FormData();
          formData.append("first_name", this.employeeDetails.first_name);
          formData.append("other_names", this.employeeDetails.other_names);
          formData.append("gender", this.employeeDetails.gender);
          formData.append("dob", this.employeeDetails.dob);
          formData.append("address", this.employeeDetails.address);
          formData.append("city", this.employeeDetails.city);
          formData.append("age", this.employeeDetails.age);
          formData.append("qualification", this.employeeDetails.qualification);
          formData.append("profile_pic", this.employeeDetails.profile_pic);
          formData.append("_method", 'PUT');
          this.$axios
            .post(`https://hamlet.payfill.co/api/employee/${i}`, formData, {
                headers: { Authorization: `Bearer ${this.user}`, 'Content-Type': 'multipart/form-data' },
              })
            .then((res) => {
              console.log(res.data);
              this.$message({
                message: "You've updated your employee's personal details!",
                type: "success",
              });
              this.$router.push("/dashboard");
              this.isLoading = true;
            })
            .catch((e) => {
              this.isLoading = true;
            });
        } else {
          this.isLoading = true;
        }
      });
    },
    editJob(id) {
      this.editJobDetails = false;
      this.jobDetails = id;
    },
    cancelEditJob() {
      this.editJobDetails = true;
    },
    updateJobDetails(i) {
      swal({
        title: "Are you sure?",
        text: "Once you Update, previous Contact Information will be lost",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            this.isloading = false;
            this.$axios
              .put(`https://hamlet.payfill.co/api/job-details/${this.employee[0].job_details.id}`, this.jobDetails, {
                headers: { Authorization: `Bearer ${this.user}` },
              })
              .then(
                (res) => {
                  console.log(res);
                  this.$message({
                    message: "Your Employee's Job Details has been updated successfully!",
                    type: "success",
                  });
                  this.isloading = true;
                  this.$router.push("/dashboard");
                  // this.getallBlogs()
                },
                function (error) {
                  console.log(error);
                }
              );
            // this.reload();
          } else {
            this.$message({
              message: "Employee Job Details remains the same !",
              type: "info",
            });
          }
        })
        .catch((error) => {
          this.$message({
            message: "Error, Unable to update, Try again!",
            type: "error",
          });
        });
    },
// Personal()
//       {
//       document.getElementById('Personal').style.display='block';
//       document.getElementById('Job').style.display='none';
//       document.getElementById('Job').style.display='none';
//       },
      // Job()
      // {
      //   document.getElementById('Job').style.display='block';
      //   document.getElementById('Personal').style.display='none';
      //   document.getElementById('Contact').style.display='none';
      // },
      // Contact()
      // {
      //   document.getElementById('Contact').style.display='block';
      //   document.getElementById('Personal').style.display='none';
      //   document.getElementById('Job').style.display='none';
      // }
    },
}
</script>

<style scoped>
*{
  font-family: "Overpass", sans-serif;
}
.one5{
        background: #F9F9F9;
        margin-top: 3.5rem;
        height: 350vh !important;
    }
 .nuxt-link-active{
        border-left: 3px solid #64a2ff !important ;
        padding-left: .5rem;
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
  .one7{
    margin-left: 1.5rem;
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
    .one{
        top: 0;
        left: 0;
        width: 25%;
        height: 350vh;
        background: #F9F9F9;
        position: fixed;
    }
    .one2{
        width: 50%;
        border-radius: 5px;
        background: #FFFFFF;
        margin-top: 5rem;
        height:350vh;
        margin-left: 25%;
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
    .one7 h3{
        color: #0065FC;
        margin-bottom: 1rem;
    }
    .one7 h4{
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
        height:350vh;
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
     .btn-arrow{
        color: #0065FC;
        padding: 8px 20px;
        background: #FFFFFF;
        border: 1px solid #0065FC;
        border-radius: 5px;
        outline: none;
        margin: 1rem 0 0 -5rem;
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
        height: 350vh;
    }
    .one6{
        padding-left: 3rem;
        padding-right: 4rem;
        padding-top: 2rem;
        
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