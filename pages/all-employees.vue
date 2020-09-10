<template>
  <div>
    <navbar />
    <div class="pr-5 pl-5 mt-5">

      <br>
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
<!--
              <h5 class="mt-5">Job Title</h5>
              <select class="custom-select increase_height" name>
                <option value selected disabled>Select Role</option>
                <option value="OND">Senior Back-end Dev</option>
                <option value="HND">Front-end Inter</option>
              </select> -->

              <h5 class="mt-5">Department</h5>
              <select class="custom-select increase_height"  >
                <option value="" selected>Select Department</option>
                <option  v-for="(item, index) in filterbyDepartment" :key="index"  :value="item.name" >{{item.name}}</option>

              </select>
            </div>

            <div class="col-sm-10 pl-3">
               <div class="row borderShow">
        <div class="col-sm-3 mt-3">
          <h2>Overview</h2>
        </div>
        <div class="col-sm-9 pt-2 ">
          <div class="float-right">
            <nuxt-link to="/dashboard">
              <div class="btn1 ">Back</div>
            </nuxt-link>
          </div>
        </div>
      </div>
              <table class="table table-bordered  border-0 rounded-lg rounded-lg shadow table-responsive">

                <thead class="thead-light">
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
                <tbody >

                <tr class="linksingleEmployee" v-for="(employee, index) in filterAll" :key="index" @click='linksingleEmployee(employee.id)' >
                  <th scope="row" style="display : none">{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="employee.profile_pic"
                      alt
                      class="rounded-circle"
                      width="50px"
                      height="50px"

           />   {{ employee.first_name + " " + employee.other_names }}</td>
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
</template>

<script>
import navbar from "~/components/navbar6.vue";
export default {
  //  middleware : ['auth'],
  components: {
    navbar,
  },
  data() {
    return {
       profile_pic : {},
      employees: [],
      loader: true,
      singleEmployee: {},
      filterbyName: "",
      filterbyDepartment: [],
    };
  },
  computed:
  {
     filterAll()
     {
       return this.employees.filter(post => {
        return post.first_name.toLowerCase().match(this.filterbyName.toLowerCase() ||  this.filterbyName.toUpperCase()) || post.other_names.toLowerCase().match(this.filterbyName.toLowerCase() ||  this.filterbyName.toUpperCase())
  })


   }

  },
  methods: {
    linksingleEmployee(employee)
    {
      this.$router.push(`/employees/${employee}`)
    },
    view(data) {
      this.singleEmployee = data;
    },
     getProfile(){
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
    this.getProfile()
  },
};
</script>

<style scoped>
  .linksingleEmployee{
     cursor: pointer;

  }
  .linksingleEmployee:hover{
     cursor: pointer;
     background:#e8e9eb;

  }
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
