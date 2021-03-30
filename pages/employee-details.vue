<template>
  <div>
    <app-navbar />
    <div class="row one5">
      <app-sidebar />
      <div class="one2">
        <div>
          <div class="one3">
            <h2>Employee Details</h2>
            <hr />
            <form @submit.prevent="addEmployeeInfo">
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
                    aria-label="Example select with button addon"
                    v-model="employeeDetails.gender"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && errors.has('gender') }"
                  >
                    <option value selected disabled>Select Gender</option>
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
              <!-- <div class="grid">
                <p>Age</p>
                <input
                  type
                  name="age"
                  class="one6 form-control"
                  v-model="employeeDetails.age"
                  v-validate="'numeric'"
                  :class="{ 'is-invalid': submitted && errors.has('age') }"
                />
                <div></div>
                <small
                  v-if="submitted && errors.has('age')"
                  class="invalid-feedback"
                >{{ errors.first("age") }}</small>
              </div> -->
              <div class="grid">
                <p>Qualifications</p>
                <select
                  class="custom-select one6 form-control"
                  name="qualifications"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  v-model="employeeDetails.qualification"
                  v-validate="'required'"
                  :class="{ 'is-invalid': submitted && errors.has('qualifications') }"
                >
                  <option value selected disabled>Select Qualification</option>
                  <option
                    value="Primary School Leaving Certificate"
                  >Primary School Leaving Certificate</option>
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
                <nuxt-link to="/dashboard">
                  <button class="btn1">Back</button>
                </nuxt-link>
                <button type="submit" class="btn2">
                  <span v-if="isLoading">Next</span>
                  <div v-else>
                    <app-loader />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "~/components/sidebar.vue";
import navbar from "~/components/navbar7.vue";
import swal from "sweetalert";
import newLoader from "~/components/loader.vue";
export default {
  //  middleware : ['auth'],
  components: {
    "app-sidebar": sidebar,
    "app-navbar": navbar,
    "app-loader": newLoader,
  },
  data() {
    return {
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
      isLoading: true,
      submitted: false,
    };
  },
  methods: {
    upload() {
      var input = event.target;
      this.employeeDetails.profile_pic = input.files[0];
      console.log(this.employeeDetails.profile_pic);
    },
    addEmployeeInfo() {
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
          this.$axios
            .post("https://hamlet.payfill.co/api/employee", formData)
            .then((res) => {
              console.log(res.data);
              this.$message({
                message: "You've added your employee's personal details!",
                type: "success",
              });
              this.$router.push(`/contactinfo/${res.data.employee.id}`);
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
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Overpass', sans-serif;
}
.one2 {
  width: 50%;
  border-radius: 5px;
  background: #ffffff;
  margin-top: 5rem;
  height: auto;
  margin-left: 25%;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 20px;
}
.grid p {
  color: #081d29;
}
.grid .one6 {
  width: 100%;
  border: 0.5px solid #081d29 !important;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
}
.one3 {
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 50px;
  padding-bottom: 20px;
}
hr {
  margin-bottom: 30px;
}
.one3 h2 {
  margin-bottom: 30px;
  color: #0065fc;
}
.one4 {
  text-align: right;
  margin-bottom: 30px;
}
.btn1 {
  color: #0065fc;
  padding: 8px 65px;
  background: #ffffff;
  border: 1px solid #0065fc;
  border-radius: 5px;
}
.btn2 {
  color: #ffffff;
  background: #0065fc;
  border-radius: 5px;
  padding: 8px 65px;
  border: none;
  margin-left: 20px;
}
.one5 {
  background-color: #E6ECF2 !important;
   /* background-color: rgb(192, 192, 192, 0.2) !important; */
  margin-top: 3.5rem;
  height: auto;
}
select {
  width: 100%;
  border: 0.5px solid #081d29 !important;
  height: 32px;
  padding: 5px;
}
.file-border {
  padding: 1rem 1rem 1rem 1rem !important;
  border: 0.5px solid #081d29 !important;
  outline: none !important;
  border-radius: 5px;
  width:100% !important;
}

@media (max-width: 567px) {
  .one2 {
    width: 100%;
    margin-left: 0px;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 40px;
  }
  .one3 {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .one4 {
    text-align: center;
  }
  .one4 button {
    width: 100%;
  }
  .btn2 {
    margin-left: 0px;
  }
  .btn1 {
    margin-bottom: 30px;
  }
}

@media (min-width: 568px) and (max-width: 768px) {
  .one2 {
    width: 75%;
  }
  .one3 {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .grid {
    grid-gap: 2rem;
  }
  .one4 {
    text-align: center;
  }
  .one4 button {
    width: 100%;
  }
  .btn1 {
    margin-bottom: 30px;
  }
  .btn2 {
    margin-left: 0px;
  }
}
</style>
