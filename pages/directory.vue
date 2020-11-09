<template>
  <div class="entire">
    <!-- navbar start-->
    <div>
      <navbar />
    </div>
    <!-- navbar end -->
    <div class="bg-color desktop-View">
      <div class="sidebar-slide"></div>
      <div class="row">
        <div class="col-sm-2 d-none d-lg-block d-xl-block">
          <!-- side-bar start -->
          <div class="side-bar">
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
            <input
              type="search"
              v-model="filterbyName"
              class="form-control mt-4 pl-1"
              name
              id
              placeholder="Search"
            />
            <ul>
              <nuxt-link to="/dashboard">
                <li class="d-flex mt-5">
                  <div>
                    <!-- <img src="/img/fi_home.png" alt="" srcset=""> -->
                    <font-awesome-icon :icon="['fa', 'home']" />
                  </div>
                  <div class="l-left-1">
                    <label class="check-1">Dashboard</label>
                  </div>
                </li>
              </nuxt-link>

              <nuxt-link to="/department/add-department">
                <li class="d-flex mt-4">
                  <div>
                    <!-- <img src="/img/fi_grid.png" alt="" srcset=""> -->
                    <font-awesome-icon :icon="['fa', 'columns']" />
                  </div>
                  <div class="l-left-1">
                    <label class="check-1">Departments</label>
                  </div>
                </li>
              </nuxt-link>

              <nuxt-link to="/all-employees">
                <li class="d-flex mt-4">
                  <div>
                    <!-- <img src="/img/fi_users.png" alt="" srcset=""> -->
                    <font-awesome-icon :icon="['fa', 'users']" />
                  </div>
                  <div class="l-left-1">
                    <label class="check-1">Employees</label>
                  </div>
                </li>
              </nuxt-link>
              <nuxt-link to="/profile/profile">
                <li class="d-flex mt-4">
                  <div>
                    <!-- <img src="/img/fi_user.png" alt="" srcset=""> -->
                    <font-awesome-icon :icon="['fa', 'user']" />
                  </div>
                  <div class="l-left-1">
                    <label class="check-1">Manager Profile</label>
                  </div>
                </li>
              </nuxt-link>
            </ul>

            <h6 class="mt-5">Department</h6>

                  <select style="cursor:pointer" id="department" @input="filterDepartments=getDepartment()"     class="custom-select increase_height">
                  <option value selected>Select Department</option>
                  <option
                    v-for="(item, index) in filterbyDepartment"
                    :key="index"
                    :value="item.name"
             >{{item.name}}</option>
                </select>
          </div>
        </div>
        <!-- side-bar end -->

        <!-- table -->
        <div class="col-sm-9">
          <div>
            <div class="mt-5">
              <div v-if="loader" class="loader-edit" style="margin-top : 15rem;">
                <newLoader />
              </div>
              <div class="main-panel" v-else>
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
                      <!-- <th scope="col">Job Description</th> -->
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
                      <!-- <td>
                          <span
                            v-if="employee.job_details"
                          >{{ (employee.job_details) ? employee.job_details.description : '...'}}</span>
                      </td>-->
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- table -->
        </div>
      </div>
    </div>

    <!-- mobile view -->
    <div class="mobile-view">
      <div class="container">
        <div v-if="loader" class="text-center" style="margin-top : 15rem">
          <newLoader />
        </div>
        <div v-else class="ml-3">
          <input
            type="search"
            v-model="filterbyName"
            class="form-control mt-5 mb-5 rounded p-1 row justify-content-center"
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
            <div class="ml-4">
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
    <!-- mobile view end -->
  </div>
</template>




<script>
import navbar from "~/components/navbar7.vue";
import newLoader from "~/components/loader-1.vue";
export default {
  // auth: false,
  components: {
    navbar,
    newLoader
  },
  data() {
    return {
      profile_pic: {},
      employees: [],
      loader: true,
      singleEmployee: {},
      filterbyName: "",
      filterbyDepartment: []
    };
  },
  computed: {
    filterAll() {
      try {
          return this.employees.filter((post) => {
        return (
          post.first_name
            .toLowerCase()
            .match(
              this.filterbyName.toLowerCase() || this.filterbyName.toUpperCase()
            ))
            ||
            (
          post.city.toLowerCase().match(
              this.filterbyName.toLowerCase() || this.filterbyName.toUpperCase()
            ))
            ||
            (
          post.job_details.job_title.toLowerCase().match(
              this.filterbyName.toLowerCase() || this.filterbyName.toUpperCase()
            ))
            ||
            (
          post.job_details.employment_type.toLowerCase().match(
              this.filterbyName.toLowerCase() || this.filterbyName.toUpperCase()
            ))
            ||
            (
          post.job_details.department.toLowerCase().match(
              this.filterbyName.toLowerCase() || this.filterbyName.toUpperCase()
            ))
            ||
            (
          post.job_details.description.toLowerCase().match(
              this.filterbyName.toLowerCase() || this.filterbyName.toUpperCase()
            ))
            ||
          (post.other_names
            .toLowerCase()
            .match(
              this.filterbyName.toLowerCase() || this.filterbyName.toUpperCase()

            )
        )
            ||
          (post.job_details.date_hired
            .toLowerCase()
            .match(
              this.filterbyName.toLowerCase() || this.filterbyName.toUpperCase()

            )
        );
      });

      } catch (error) {
          console.log(error)
      }
     },
 },
  methods: {
     getDepartment()
    {
      let department=document.getElementById('department').value;
    this.filterbyName=department;
    },
    linksingleEmployee(employee) {
      this.$router.push(`/employees/${employee}`);
    },
    view(data) {
      this.singleEmployee = data;
    },
    getProfile() {
      this.$axios.get("https://hamlet.payfill.co/api/auth/admin").then(res => {
        console.log(res.data.company);
        this.profile_pic = res.data.user.profile;
      });
    },
    getEmployees() {
      this.$axios.get("https://hamlet.payfill.co/api/auth/admin").then(res => {
        console.log(res.data.employees);
        this.employees = res.data.user.employees;
        this.filterbyDepartment = res.data.user.company.company_departments;
        this.loader = false;
      });
    },
    viewEmployee() {
      this.$router.push("/single-employee/personal-info");
    }
  },
  mounted() {
    this.getEmployees();
    this.getProfile();
  }
};
</script>




<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Overpass", sans-serif;
}
.bg-color {
  background-color: #e6ecf2 !important;
  margin-top: 3rem;
  height: 130vh;
}
.side-bar {
  background-color: #0065fc;
  color: #ffffff;
  width: 245px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
}
a {
  color: #ffffff !important;
}
ul li {
  margin: 0;
  padding: 0;
}
.d-flex:hover {
  background-color: #004cbf !important;
  margin-left: 0.5rem !important;
  padding: 0.5rem;
  transition: 0.1s;
}
.l-left-1 {
  margin-left: 0.5rem !important;
}
.main-panel {
  margin-left: 3rem;
  width: 100% !important;
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
.border-b {
  border-bottom: 1px solid #ecebeb;
  padding-bottom: 1rem;
}
.btn1 {
  background-color: #e6ecf2 !important;
  color: #0065fc;
  /* border-radius: 5px; */
  padding: 5px 20px;
  border: none;
  outline: none !important;
  /* margin-top: 1rem; */
  font-size: 1.2rem;
}
.loader-edit {
  display: flex;
  justify-content: center;
  /* margin-left: 50rem; */
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
    /* margin-left: ; */
  }
  input {
    width: 70%;
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
  input {
    width: 70%;
  }
}
@media only screen and (min-width: 710px) and (max-width: 1204px) {
  .main-panel {
    margin-left: 5rem;
  }
  .bg-color {
    background-color: #e6ecf2 !important;
    height: auto;
    margin-top: 3rem;
  }
}
</style>
