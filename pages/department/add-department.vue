<template>
  <div>
    <app-navbar />
    <div class="row one5">
      <app-sidebar />

      <div class="one2">
        <div>
          <div class="one6">
            <div class="one7">

              <div v-if="loader" class="text-center" style="display : none">
                <span disabled>
                  <span
                    class="spinner-border text-primary spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </span>
              </div>
              <div v-else>
                <span class="one9 float-right">
                  <nuxt-link to="/dashboard">
                    <button class="btn1"> <font-awesome-icon :icon="['fa', 'arrow-left']" /></button>
                  </nuxt-link>
                </span>
                <h2>{{this.company.company_name}}</h2>
                <p>Total Headcount: {{this.company.no_of_employees}} | Services: {{this.company.services}}</p>
              </div>
            </div>
          </div>

          <div v-if="loader2" id="style-loader">
            <span disabled>
              <span
                class="spinner-border text-primary spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </span>
          </div>
          <div v-else>
            <div v-if="editDepartment">
              <form class="form-inline" @submit.prevent="updateDepartment(departmentInfo.id)">
                <div>
                  <div class="one3">
                    <div>
                      <p style="color :#0065fc">Update Department</p>
                      <input
                        type="text"
                        name="Department-name"
                        class="form-control mt-3 mr-3 mb-3 pl-1"
                        v-model="departmentInfo.name"

                      />

                      <span class="one9">
                        <span>
                          <button type="submit" class="btn1">
                            <span v-if="isLoading_1">Update</span>
                            <div v-else>
                              <app-loader />
                            </div>
                          </button>
                        </span>
                      </span>
                    </div>
                    <hr />
                  </div>
                </div>
              </form>
            </div>
            <div v-else>
              <form class="form-inline" @submit.prevent="addDepartment">
                <div>
                  <div class="one3">
                    <div>
                      <p style="color :#0065fc">Add New Department</p>
                      <label class="sr-only" for="inlineFormInputName2">Add New Department</label>
                      <input
                        type="text"
                        name="Department"
                        class="form-control mt-3 mr-3 mb-3 pl-1"
                        v-model="departmentInfo.name"

                      />

                      <span class="one9">
                        <span>
                          <button type="submit" class="btn1">
                            <span v-if="isLoading">Add</span>
                            <div v-else>
                              <app-loader />
                            </div>
                          </button>
                        </span>
                      </span>
                    </div>
                    <hr />
                  </div>
                </div>
              </form>
            </div>

            <!-- <div v-if="loader2" style="text-align:center !important">
            <span disabled>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </span>
            </div>-->

            <div class="one3"  v-if="departments">
              <h3>Departments</h3>
              <div>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <!-- <th scope="col" style="display : none">#</th>
                        <th scope="col"></th>
                        <th scope="col"></th> -->
                      </tr>
                    </thead>
                    <tbody v-for="(department, index) in departments " :key="index">
                      <tr>
                        <th scope="row" style="display : none">{{index + 1}}</th>
                        <td>{{department.name}}</td>
                        <td>

                          <button class="btn text-primary" @click="edit(department)"><font-awesome-icon :icon="['fa', 'pen']" /></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "~/components/sidebar4.vue";
import navbar from "~/components/navbar5.vue";
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
      company: {},
      user: {},
      dept : {},
      loader: true,
      loader2: true,
      isLoading: true,
      isLoading_1: true,
      show: true,
      editDepartment: false,
      departments: {},
      departmentInfo: {
        name: " ",
      },
      submitted: true,
    };
  },
  mounted() {
    this.user = this.$auth.$storage.getLocalStorage("jwt");
     this.getCompany();
    this.getDepartment();
  },
  methods: {
    reload() {
      var timeout = setTimeout("location.reload(true);", 6000);
      function resetTimeout() {
        clearTimeout(timeout);
        timeout = setTimeout("location.reload(true", 6000);
      }
    },
    getCompany() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then((res) => {

          this.company = res.data.user.company;
           console.log(this.company);
          // this.dept = res.data.company.id
          // console.log(this.dept)
          this.loader = false;
        })
        .catch(() => {
          console.log(error);
          this.loader = false;
        });
    },
    addDepartment() {
      this.isLoading = false;
      // this.submitted = true;
      // this.$validator.validateAll().then((valid) => {
      //   if (valid) {
      //     this.isLoading = false;

  this.$axios
            .post(
              "https://hamlet.payfill.co/api/department",
              this.departmentInfo, { header: { 'Authorization': `Bearer ${this.user}` } }
            )
            .then((res) => {
              this.getDepartment()
              this.getCompany()
              // this.isLoading = true;
              this.$message({
                message: "Department Successfully Added!",
                type: "success",
              });
              // this.reload();
              // this.$router.push('/dashboard')
              this.departmentInfo.name = ""
              this.isLoading = true;
            })
            .catch((error) => {
               if(error.response.status==422) {
               this.getDepartment()
              this.getCompany()
              // this.isLoading = true;
              this.$message({
                message: error.response.data.errors.name[0],
                type: "error",
              });
               }else{
                     this.getDepartment()
              this.getCompany()
              // this.isLoading = true;
              this.$message({
                message: "Cannot add Department now, try again later! ",
                type: "warning",
              });
               }
            });
      //   } else {
      //     this.isLoading = true;
      //   }

      // });
    },

    getDepartment() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then((res) => {
          console.log(res.data.user.company.company_departments);
          this.loader2 = false;
          this.departments = res.data.user.company.company_departments;
          this.departments.unshift()
        })
        .catch((error) => {
          console.error(error);
          this.loader2 = true;
        });
    },
    edit(id) {
      this.departmentInfo = id;
      this.editDepartment = true;
    },
    updateDepartment(i) {
      this.submitted = true;
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          console.log("Update");
          swal({
            title: "Are you sure?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
                this.isLoading_1 = false;
                this.$axios
                  .put(
                    `https://hamlet.payfill.co/api/department/${i}`,
                    this.departmentInfo,
                    { header: { Authorization: `Bearer ${this.user}` } }
                  )
                  .then((res) => {
                   this.getDepartment()
                  this.getCompany()
              // this.isLoading = true;
              this.$message({
                message: "Department Successfully Updated!",
                type: "success",
              });
              // this.reload();
              // this.$router.push('/dashboard')
              this.departmentInfo.name = ""
              // this.isLoading = true;
                    this.isLoading_1 = true;
                  }).catch((error) => {
               if(error.response.status==422) {
               this.getDepartment()
              this.getCompany()
              // this.isLoading = true;
              this.$message({
                message: error.response.data.errors.name[0],
                type: "error",
              });
               }else{
                     this.getDepartment()
              this.getCompany()
              // this.isLoading = true;
              this.$message({
                message: "Cannot add Department now, try again later! ",
                type: "warning",
              });
               }
              this.isLoading_1 = false;
            });
                //
                this.isLoading = true;
              } else {
                this.$message({
                  message: "Department remains Unchanged!",
                  type: "info",
                });
                this.isLoading_1 = true;

              }
            })
        } else {
          this.isLoading_1 = true;
        }
      });

       this.editDepartment = false;

      // this.$axios
      //   .put(
      //     `https://hamlet-hrm.herokuapp.com/api/updatedepartment/${i}`,
      //     this.departmentInfo,
      //     { header: { Authorization: `Bearer ${this.user}` } }
      //   )
      //   .then((res) => {
      //     console.log(res.data.company);
      //     this.isLoading = true;
      //     this.editDepartment = false;
      //   //   swal('Success', 'Details Updated', 'success')
      //     this.$message({
      //     message: "Department Successfully Updated",
      //     type: "success",
      //   });
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     this.loader = false;
      //   });
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
#style-loader {
  width: 100%;
  height: 100vh;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.form-row {
  margin-bottom: 2rem !important;
}
.one2 {
  width: 50%;
  border-radius: 5px;
  background: #ffffff;
  margin-top: 5rem;
  height: auto;
  margin-left: 25%;
}
hr {
  width: 100% !important;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 20px;
}
.grid p {
  color: #081d29;
}
.grid input {
  width: 100%;
  border: 0.5px solid #081d29 !important;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
}
.one3 {
  padding-left: 70px;
  padding-right: 70px;
  padding-bottom: 20px;
  padding-top: 20px;

}

.one3 h3 {
  margin-bottom: 10px;
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
  margin-right: 1rem;
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
  /* background-color: rgb(192, 192, 192, 0.2) !important; */
   background-color: #E6ECF2 !important;
  margin-top: 3.5rem;
  height: auto;
}
.one6 {
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 2rem;
}
.one8 {
  text-align: right;
}
.one8 button {
  padding: 5px 10px;
}
.one7 h2 {
  margin-bottom: 10px;
  color: #0065fc;
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
  .one6 {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media (min-width: 568px) and (max-width: 768px) {
  .one3 {
    padding-left: 30px;
    padding-right: 30px;
  }
  .one6 {
    padding-left: 30px;
    padding-right: 30px;
  }
  .one2 {
    width: 75%;

    margin-top: 2rem;
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
