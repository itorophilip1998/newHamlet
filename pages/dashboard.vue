<template>
  <div>
    <div class="big-nav">
      <app-navbar />
      <div class="container">
        <div class="row bg-color">
          <div class="col-sm-2">
            <img
              v-if="this.company"
              :src="this.company.company_logo"
              alt
              class="w-100"
            />
            <span v-if="loader" class="text-center">
              <span disabled>
                <span
                  class="spinner-border text-primary spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </span>
            </span>
            <h4 v-else class="text-center mt-2">
              <span v-if="this.company">{{ this.company.company_name }}</span>
            </h4>
          </div>
          <div class="col-sm-7">
            <h2 v-if="this.profile">Hello {{ this.profile.first_name }}</h2>
            <h6 v-if="department == ''" class="mt-4">Welcome to Hamlet!</h6>
            <div
              v-if="department == ''"
              class="border-admin"
              style="cursor: pointer"
              @click="departmentClick()"
            >
              Please click here to add Department
            </div>
            <hr />
            <!-- Add user / list of users -->
            <div>
              <!-- <div>
                <nuxt-link to="/employee-details">
                  <div class="circle-name-1">
                    <i class="fa fa-plus" style="font-weight : 300"></i>
                  </div>
                </nuxt-link>
              </div>-->
              <div class="row mt-5 p-4">
                <nuxt-link to="/employee-details">
                  <div class="circle-name-1">
                    <font-awesome-icon :icon="['fa', 'plus']" />
                  </div>
                </nuxt-link>
                <div
                  v-for="(employee, id) in employees"
                  class="define"
                  :key="id"
                  style="text-align: center"
                >
                  <div class>
                    <nuxt-link :to="`/employees/${employee.id}`">
                      <img
                        v-if="employee"
                        :src="employee.profile_pic"
                        alt
                        class="rounded-circle"
                        width="80px"
                        height="80px"
                        style="margin-top: 1rem; margin-left: 0.5rem"
                      />
                    </nuxt-link>
                    <div
                      class="text-center ml-2 mt-2"
                      style="font-size: 1rem"
                      v-if="employee"
                    >
                      {{ employee.first_name }}
                    </div>
                  </div>
                </div>
                <nuxt-link to="/directory">
                  <div class="circle-name-1">...</div>
                </nuxt-link>
              </div>
            </div>

            <div class="boxes">
              <p class="mt-4">Apps</p>
              <div class="row">
                <div class="col-sm-4">
                  <nuxt-link to="/company/company-overview">
                    <div class="box-icon shadow rounded-lg">
                      <!-- <i class="fa fa-users"></i> -->
                      <font-awesome-icon :icon="['fa', 'users']" />
                    </div>
                  </nuxt-link>
                  <p class="mt-2 text-center">Company Profile</p>
                </div>
                <div class="col-sm-4">
                  <nuxt-link to="/directory">
                    <div class="box-icon shadow rounded-lg">
                      <!-- <i class="fa fa-file"></i> -->
                      <font-awesome-icon :icon="['fa', 'file']" />
                    </div>
                  </nuxt-link>
                  <p class="mt-2 text-center">Directory</p>
                </div>
                <div class="col-sm-4">
                  <nuxt-link to="/department/add-department">
                    <div class="box-icon shadow rounded-lg">
                      <!-- <i class="fa fa-building"></i> -->
                      <font-awesome-icon :icon="['fa', 'building']" />
                    </div>
                  </nuxt-link>
                  <p class="mt-2 text-center">Departments</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2 ml-5 quick-mobile">
            <h5>Quick Links</h5>
            <p class="mt-4">
              <nuxt-link to="/directory">App Directory</nuxt-link>
            </p>
            <p>
              <nuxt-link to="/company/company-overview"
                >Company Details</nuxt-link
              >
            </p>
            <p>
              <nuxt-link to="/profile/profile">Manager Profile</nuxt-link>
            </p>
            <p>
              <nuxt-link to="/department/add-department">Departments</nuxt-link>
            </p>
          </div>
        </div>
      </div>
      <div>
        <chat />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import chat from "~/components/chat";
import navbar from "~/components/navbar7.vue";
import newLoader from "~/components/loader.vue";
// import { mapGetters } from "vuex";
export default {
  // middleware: "authenticated",
  components: {
    "app-navbar": navbar,
    "app-loader": newLoader,
    chat,
  },
  data() {
    return {
      user: {},
      company: {},
      profile: {},
      loader: true,
      employees: [],
      department: [],
    };
  },
  mounted() {
    this.user = this.$auth.$storage.getLocalStorage("user").username;
    this.getCompany();
  },
  methods: {
    departmentClick() {
      this.$router.push("/department/add-department");
    },
    getCompany() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then((res) => {
          console.log(res.data.company);
          this.company = res.data.user.company;
          let newArray = res.data.user.employees;
          let n = 10;
          this.employees = newArray.splice(0, n);
          console.log(this.employees);
          this.profile = res.data.user.profile;
          this.department = res.data.user.company.company_departments;
          this.loader = false;
        });
    },
  },
  created() {
    this.getCompany();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Overpass", sans-serif;
}
p a {
  color: #64a2ff !important;
}
.big-nav {
  /* background-color: rgb(192, 192, 192, 0.2) !important; */
  background-color: #e6ecf2 !important;
  height: auto;
}
.bg-color {
  /* margin: 0 5rem 0 0 !important; */
  padding: 10rem 1em 2rem 0;
  height: auto;
}
.box-logo {
  /* padding: 4.5rem; */
  border: 1px solid #64a2ff;
  color: #000000;
  background-color: rgb(255, 255, 255);
  text-align: center;
}
.box-icon {
  padding: 3rem 0 3rem 0;
  /* border: 1px solid #64a2ff; */
  color: #64a2ff;
  background-color: rgb(255, 255, 255);
  text-align: center;
  font-size: 3rem;
  transition: transform 0.2s;
}
.box-icon:hover {
  transform: scale(1.1);
}
.define {
  transition: transform 0.2s;
}
.define:hover {
  transform: scale(1.1);
}
.border-admin {
  /* border: 1px solid #000000; */
  border-left: 2px solid #64a2ff !important ;
  padding: 1rem;
  background-color: #ffffff;
  font-weight: bold;
}
.circle-name {
  margin-top: 3rem;
  padding: 1rem;
  /* border: 1px solid red; */
  background-color: orangered;
  width: 100px;
  height: 100px;
  text-align: center;
  border-radius: 50%;
  color: #ffffff;
  font-size: 1.5rem;
  line-height: 4rem;
}
.circle-name-1 {
  margin-top: 1rem;
  padding: 1rem;
  margin-left: 0.5rem;
  /* border: 1px solid red; */
  background-color: #64a2ff;
  width: 80px;
  height: 80px;
  text-align: center;
  border-radius: 50%;
  color: #ffffff;
  font-size: 1.2rem;
  line-height: 3rem;
}
a {
  color: #ffffff !important;
}
a:hover {
  text-decoration: none !important;
}
.boxes {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.quick-mobile {
  margin-top: 2.5rem;
}
@media only screen and (min-width: 300px) and (max-width: 350px) {
  .bg-color {
    padding: 10rem 0.5rem 2rem 0.5rem;
    height: auto;
  }
  .quick-mobile {
    display: none;
  }
}
@media only screen and (min-width: 360px) and (max-width: 578px) {
  .bg-color {
    padding: 10rem 0.5rem 2rem 0.5rem;
    height: auto;
  }
  .quick-mobile {
    display: none;
  }
}
</style>
