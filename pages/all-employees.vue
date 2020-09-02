<template>
  <div>
    <navbar />
    <div class="pr-5 pl-5 mt-5">
      <div class="row borderShow">
        <div class="col-sm-3 mt-3">
          <h1>Overview</h1>
        </div>
        <div class="col-sm-9 pt-2">
          <div class="float-right">
            <nuxt-link to="/dashboard">
              <div class="btn1">Back</div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-if="loader" class="text-center">
                  <span disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                
                </span>
              </div>
      <div class="card" v-else>

        <div class="card-body">
          <div class="row">
            <div class="col-sm-2 pt-4 pb-4 add-border">
              <h5>Fliters</h5>
              <label class="mt-3">Name</label>
              <input type="search" v-model="filterbyName" class="form-control" name id />

              <h5 class="mt-5">Type</h5>
              <div class="d-flex mt-4">
                <div>
                  <input type="checkbox" name class id />
                </div>
                <div class="l-left-1">
                  <label class="check-1">Full Time</label>
                </div>
              </div>
              <div class="d-flex">
                <div>
                  <input type="checkbox" name class id />
                </div>
                <div class="l-left-1">
                  <label class="check-1">Part Time</label>
                </div>
              </div>
              <div class="d-flex">
                <div>
                  <input type="checkbox" name class id />
                </div>
                <div class="l-left-1">
                  <label class="check-1">Intern</label>
                </div>
              </div>

              <h5 class="mt-5">Job Title</h5>
              <select class="custom-select increase_height" name>
                <option value selected disabled>Select Role</option>
                <option value="OND">Senior Back-end Dev</option>
                <option value="HND">Front-end Inter</option>
              </select>

              <h5 class="mt-5">Department</h5>
              <select class="custom-select increase_height" name>
                <option value selected disabled>Department</option>
                <option value="OND">VR</option>
                <option value="HND">Jiggle</option>
              </select>
            </div>

            <div class="col-sm-10 pl-3">
              <table class="table table-responsive table-bordered table-hover border-0">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Employment Type</th>
                  <th scope="col">Job Title</th>
                  <th scope="col">Department</th>
                  <th scope="col">Location</th>
                  <th scope="col">Date Hired</th>
                  <th scope="col">Action</th>
                </tr>

                <tr v-for="(employee, index) in employees" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ employee.first_name + " " + employee.other_names }}</td>
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
                    <nuxt-link
                      :to="`/employees/${employee.id}`"
                      :title="`View ${employee.first_name} ${employee.other_names}`"
                      class="btn text-primary fa fa-eye"
                    ></nuxt-link>
                  </td>
                </tr>
              </table>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "~/components/navbar.vue";
export default {
  //  middleware : ['auth'],
  components: {
    navbar,
  },
  data() {
    return {
      employees: [],
      loader: true,
      singleEmployee: {},
      filterbyName: "",
    };
  },
  // computed:
  // {
  //    filterAll()
  //    {
  //      return this.employees
  //  .filter(post => {
  //  console.log(post.title.toLowerCase().includes(this.filterbyName.toLowerCase()))
  // //  .filter
  // //  (post => {
  // //   return post.first_name.match(this.filterbyName)
  // })

  //  }

  // },
  methods: {
    view(data) {
      this.singleEmployee = data;
    },
    getEmployees() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then((res) => {
          console.log(res.data.employees);
          this.employees = res.data.user.employees;
          this.loader = false;
        });
    },
    viewEmployee() {
      this.$router.push("/single-employee/personal-info");
    },
  },
  mounted() {
    this.getEmployees();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.l-left {
  margin-left: 1rem !important;
}
.borderShow {
  border: 0.1px thick #000000 !important;
  margin-top: 2rem;
}
.l-left-1 {
  margin-left: 2rem !important;
}
input[type="checkbox"] {
  width: 30px;
  height: 30px;
}
.check-1 {
  font-size: 1.2rem;
}
.add-border {
  /* border: 1px solid #000000 !important; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
}
.btn1 {
  background: white;
  color: #0065fc;
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid #0065fc;
  outline: none !important;
  margin-top: 1rem;
}
.btn1:hover {
  background: #0065fc;
  color: white;
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid #0065fc;
}
.card {
  background: #f9f9f9;
}
</style>
