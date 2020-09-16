<template>
  <div>
    <!-- Nav-bar -->
    <div>
      <navbar />
    </div>
    <!-- Navbar End -->
    <div class="desktop-View">
      <div class>
        <br />
        <div v-if="loader" class="text-center" style="margin-top : 15rem">
          <newLoader />
          <!-- <span disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </span>-->
        </div>
        <div class v-else>
          <div class>
            <div class="row-dir">
              <div class="col-md-3 col-lg-2 m-0 add-border">
                <div class="mt-5 pt-3 text-center">
                  <nuxt-link to="/profile/profile">
                    <img
                      v-if="this.profile_pic"
                      :src="this.profile_pic.profile_pic"
                      alt
                      class="rounded-circle"
                      width="100px"
                      height="100px"
                    />
                  </nuxt-link>
                </div>
                <h5
                  class="mt-3 text-center"
                >{{this.profile_pic.first_name}} {{this.profile_pic.last_name}}</h5>
                <!-- <label class="mt-3">Name</label> -->
                <input
                  type="search"
                  v-model="filterbyName"
                  class="form-control mt-5"
                  name
                  id
                  placeholder="Search by name"
                />

                <nuxt-link to="/dashboard">
                  <div class="d-flex p-2 mt-5">
                    <div>
                      <!-- <img src="/img/fi_home.png" alt="" srcset=""> -->
                      <font-awesome-icon :icon="['fa', 'home']" />
                    </div>
                    <div class="l-left-1">
                      <label class="check-1">Dashboard</label>
                    </div>
                  </div>
                </nuxt-link>

                <nuxt-link to="/department/add-department">
                  <div class="d-flex p-2">
                    <div>
                      <!-- <img src="/img/fi_grid.png" alt="" srcset=""> -->
                      <font-awesome-icon :icon="['fa', 'columns']" />
                    </div>
                    <div class="l-left-1">
                      <label class="check-1">Departments</label>
                    </div>
                  </div>
                </nuxt-link>

                <nuxt-link to="/all-employees">
                  <div class="d-flex p-2">
                    <div>
                      <!-- <img src="/img/fi_users.png" alt="" srcset=""> -->
                      <font-awesome-icon :icon="['fa', 'users']" />
                    </div>
                    <div class="l-left-1">
                      <label class="check-1">Employees</label>
                    </div>
                  </div>
                </nuxt-link>

                <nuxt-link to="/profile/profile">
                  <div class="d-flex p-2">
                    <div>
                      <!-- <img src="/img/fi_user.png" alt="" srcset=""> -->
                      <font-awesome-icon :icon="['fa', 'user']" />
                    </div>
                    <div class="l-left-1">
                      <label class="check-1">Manager Profile</label>
                    </div>
                  </div>
                </nuxt-link>

                <h5 class="mt-5">Department</h5>
                <select class="custom-select increase_height">
                  <option value selected>Select Department</option>
                  <option
                    v-for="(item, index) in filterbyDepartment"
                    :key="index"
                    :value="item.name"
                  >{{item.name}}</option>
                </select>
              </div>

              <div class="col-md-9 col-lg-9 pl-3">
                <div class="main-panel">
                  <div class="row borderShow">
                    <div class="col-sm-3">
                      <h3 style="color : #122740">Overview</h3>
                    </div>
                    <div class="col-sm-9">
                      <div class>
                        <span class="one9 float-right">
                          <nuxt-link to="/dashboard">
                            <button class="btn1">
                              <font-awesome-icon :icon="['fa', 'arrow-left']" />
                            </button>
                          </nuxt-link>
                        </span>
                      </div>
                    </div>
                  </div>
                  <table class="table border-0 rounded-lg mt-3 rounded-lg table-responsive-lg">
                    <thead style="background-color : #F4F7FA; color : #6C8399;">
                      <tr>
                        <th scope="col" style="display : none">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Employment Type</th>
                        <th scope="col">Job Title</th>
                        <th scope="col">Department</th>
                        <th scope="col">Location</th>
                        <th scope="col">Date Hired</th>
                        <th scope="col">Job Description</th>
                      </tr>
                    </thead>
                    <tbody style="background-color : #FFFFFF; color : #081D29">
                      <tr
                        class="linksingleEmployee"
                        v-for="(employee, index) in filterAll"
                        :key="index"
                        @click="linksingleEmployee(employee.id)"
                      >
                        <th scope="row" style="display : none">{{ index + 1 }}</th>
                        <td>
                          <img
                            :src="employee.profile_pic"
                            alt
                            class="rounded-circle"
                            width="50px"
                            height="50px"
                          />
                          {{ employee.first_name + " " + employee.other_names }}
                        </td>
                        <td>
                          <span
                            v-if="employee.job_details"
                          >{{ (employee.job_details) ? employee.job_details.employment_classification : '...' }}</span>
                        </td>
                        <td>
                          <span
                            v-if="employee.job_details"
                          >{{(employee.job_details) ? employee.job_details.job_title : '...'}}</span>
                        </td>
                        <td>
                          <span
                            v-if="employee.job_details"
                          >{{(employee.job_details) ? employee.job_details.department : "..."}}</span>
                        </td>
                        <td>
                          <span
                            v-if="employee.job_details"
                          >{{ (employee.job_details) ? employee.job_details.work_location : '...' }}</span>
                        </td>
                        <td>
                          <span
                            v-if="employee.job_details"
                          >{{ (employee.job_details) ? employee.job_details.date_hired : '...'}}</span>
                        </td>
                        <td>
                          <span
                            v-if="employee.job_details"
                          >{{ (employee.job_details) ? employee.job_details.description : '...'}}</span>
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

    <div class="mobile-view">
      <div class="container">
        <div v-if="loader" class="text-center" style="margin-top : 15rem">
          <newLoader />
        </div>
        <div v-else>
          <input
            type="search"
            v-model="filterbyName"
            class="form-control mt-5 mb-5 rounded"
            name
            id
            placeholder="Search by name"
          />
          <div
            class="d-flex mt-2 border-b"
            v-for="(employee, index) in filterAll"
            :key="index"
            @click="linksingleEmployee(employee.id)"
          >
            <div>
              <nuxt-link to="/profile/profile">
                <img
                  :src="employee.profile_pic"
                  alt
                  class="rounded-circle"
                  width="50px"
                  height="50px"
                />
              </nuxt-link>
            </div>
            <div class="ml-3">
              <span class="name-employee">{{ employee.first_name + " " + employee.other_names }}</span>
              <br />
              <span
                class="dept-employee"
              >{{(employee.job_details) ? employee.job_details.department : "..."}}</span>
            </div>
            <!-- <div class="border"></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "~/components/navbar6.vue";
import newLoader from "~/components/loader-1.vue";
export default {
  //  middleware : ['auth'],
  components: {
    navbar,
    newLoader,
  },
  data() {
    return {
      profile_pic: {},
      //  manager: {},
      employees: [],
      loader: true,
      singleEmployee: {},
      filterbyName: "",
      filterbyDepartment: [],
    };
  },
  computed: {
    filterAll() {
      return this.employees.filter((post) => {
        return (
          post.first_name
            .toLowerCase()
            .match(
              this.filterbyName.toLowerCase() || this.filterbyName.toUpperCase()
            ) ||
          post.other_names
            .toLowerCase()
            .match(
              this.filterbyName.toLowerCase() || this.filterbyName.toUpperCase()
            )
        );
      });
    },
  },
  methods: {
    linksingleEmployee(employee) {
      this.$router.push(`/employees/${employee}`);
    },
    view(data) {
      this.singleEmployee = data;
    },
    getProfile() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then((res) => {
          console.log(res.data.company);
          this.profile_pic = res.data.user.profile;
        });
    },
    getEmployees() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then((res) => {
          console.log(res.data.employees);
          this.employees = res.data.user.employees;
          this.filterbyDepartment = res.data.user.company.company_departments;
          this.loader = false;
        });
    },
    viewEmployee() {
      this.$router.push("/single-employee/personal-info");
    },
  },
  mounted() {
    this.getEmployees();
    this.getProfile();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Overpass", sans-serif;
}
.border-b {
  border-bottom: 1px solid #ecebeb;
  padding-bottom: 1rem;
}
.name-employee {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.8px;
  color: #2d2d2d;
}
.dept-employee {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.3px;
  color: #000000;
}
.linksingleEmployee {
  cursor: pointer;
}
.linksingleEmployee:hover {
  cursor: pointer;
  background: #e8e9eb;
  /* background: #E6ECF2; */
}
a {
  color: #ffffff !important;
}
.row-dir {
  display: flex;
  flex-direction: row;
  /* background-color: rgb(192, 192, 192, 0.2) !important; */
  background-color: #e6ecf2 !important;
}
.d-flex:hover {
  background-color: #004cbf !important;
  margin-left: 0.5rem !important;
}
.main-panel {
  /* position: relative; */
  /* float: right; */
  margin-left: 3rem;
  width: 100%;
  /* min-height: 100vh; */
}
.l-left {
  margin-left: 1rem !important;
}
.borderShow {
  border: 0.1px thick #000000 !important;
  margin-top: 5rem;
}
.l-left-1 {
  margin-left: 0.5rem !important;
}
input[type="checkbox"] {
  width: 30px;
  height: 30px;
}
.check-1 {
  font-size: 1.2rem;
}
.add-border {
  background-color: #0065fc;
  color: #ffffff;
  width: 245px;
  height: 100vh;
  /* position: fixed; */
  top: 0;
  left: 0;
  /* border: 1px solid #000000 !important; */
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; */
}
.btn1 {
  background-color: #e6ecf2 !important;
  color: #0065fc;
  /* border-radius: 5px; */
  padding: 5px 20px;
  border: none;
  outline: none !important;
  margin-top: 1rem;
  font-size: 1.2rem;
}
/* .btn1:hover {
  background: #0065fc;
  color: white;
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid #0065fc;
} */
.card {
  background: #f9f9f9;
}
.mobile-view {
  display: none;
}
@media only screen and (min-width: 300px) and (max-width: 350px) {
  .desktop-View {
    display: none;
  }
  .mobile-view {
    display: block;
    margin-top: 5rem;
  }
}
@media only screen and (min-width: 360px) and (max-width: 578px) {
  .desktop-View {
    display: none;
  }
  .mobile-view {
    display: block;
    margin-top: 5rem;
  }
}
@media only screen and (min-width: 710px) and (max-width: 1204px) {
  .add-border {
    background-color: #0065fc;
    color: #ffffff;
    width: 270px !important;
    height: auto;
    /* position: fixed; */
    top: 0;
    left: 0;
    /* border: 1px solid #000000 !important; */
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; */
  }
}
</style>
