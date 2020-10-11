<template>
  <div>
    <app-navbar />
    <div class="row one5">
      <app-sidebar />

      <div class="one2">
        <div v-if="loader" id="style-loader">
          <load />
          <!-- <span disabled>
            <span
              class="spinner-border text-primary spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          </span>-->
        </div>
        <div v-else>
          <div v-if="edit">
            <div class="one6">
              <div class="one7">
                <span class="one9 float-right">
                  <nuxt-link to="/dashboard">
                    <button class="btn1">
                      <font-awesome-icon :icon="['fa', 'arrow-left']" />
                    </button>
                  </nuxt-link>
                </span>
                <!-- {{ user }} -->
                <h2>{{ this.company.company_name }}</h2>
                <p>
                  Total Headcount: {{ employees.length }} | Services:
                  {{ this.company.services }}
                </p>
              </div>
            </div>
            <div>
              <div class="one3">
                <h3>Manager's Information</h3>
                <hr />
                <div class="grid">
                  <p style="color: #0065fc; font-weight: 400">First Name</p>
                  <p>{{ this.profile.first_name }}</p>
                </div>
                <div class="grid">
                  <p style="color: #0065fc; font-weight: 400">Last Name</p>
                  <p>{{ this.profile.last_name }}</p>
                </div>
                <div class="grid">
                  <p style="color: #0065fc; font-weight: 400">Address</p>
                  <p>{{ this.profile.address }}</p>
                </div>
                <div class="grid">
                  <p style="color: #0065fc; font-weight: 400">Phone Number</p>
                  <p>{{ this.profile.phone }}</p>
                </div>
                <div class="grid">
                  <p style="color: #0065fc; font-weight: 400">Email</p>
                  <p>{{ this.managerEmail }}</p>
                </div>
                <hr />
                <span class="one9">
                  <button class="btn1" @click="edititems(profile)">Edit</button>
                </span>
              </div>
            </div>
          </div>
          <div v-else>
            <form class="p-5">
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="first-name"
                    class="form-control"
                    v-model="profileInfo.first_name"
                    v-validate="'required'"
                    :class="{
                      'is-invalid': submitted && errors.has('first-name'),
                    }"
                  />
                  <small
                    v-if="submitted && errors.has('first-name')"
                    class="invalid-feedback"
                    >{{ errors.first("first-name") }}</small
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last-name"
                    class="form-control"
                    v-model="profileInfo.last_name"
                    v-validate="'required'"
                    :class="{
                      'is-invalid': submitted && errors.has('last-name'),
                    }"
                  />
                  <small
                    v-if="submitted && errors.has('last-name')"
                    class="invalid-feedback"
                    >{{ errors.first("last-name") }}</small
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    class="form-control"
                    v-model="profileInfo.address"
                    v-validate="'required'"
                    :class="{
                      'is-invalid': submitted && errors.has('address'),
                    }"
                  />
                  <small
                    v-if="submitted && errors.has('address')"
                    class="invalid-feedback"
                    >{{ errors.first("address") }}</small
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label>Phone umber</label>
                  <input
                    type="text"
                    name="phone"
                    maxlength="11"
                    class="form-control"
                    v-model="profileInfo.phone"
                    v-validate="'numeric'"
                    :class="{ 'is-invalid': submitted && errors.has('phone') }"
                  />
                  <small
                    v-if="submitted && errors.has('phone')"
                    class="invalid-feedback"
                    >{{ errors.first("phone") }}</small
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label>Profile Picture</label>
                  <br />
                  <input
                    type="file"
                    name="profile-picture"
                    class="file-border img-fluid"
                    required
                    id
                    placeholder
                    @change="upload()"
                    v-validate="'required|ext:jpeg,jpg,svg,png'"
                    :class="{
                      'is-invalid': submitted && errors.has('profile-picture'),
                    }"
                  />
                  <small id="emailHelp" class="form-text text-muted"
                    >(Picture must be of .jpeg, .png, .svg, .jpg format)</small
                  >
                  <small
                    v-if="submitted && errors.has('profile-picture')"
                    class="invalid-feedback"
                    >{{ errors.first("profile-picture") }}</small
                  >
                </div>
              </div>
              <div style="text-align: center">
                <button type="submit" class="btn btn2" @click="canceledit">
                  Cancel
                </button>
                <button
                  type="submit"
                  class="btn btn2"
                  @click.prevent="updateProfile(profileInfo.id)"
                >
                  <span v-if="isloading_1">Update</span>
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
import sidebar from "~/components/sidebar5.vue";
import VueJwtDecode from "vue-jwt-decode";
import navbar from "~/components/navbar5.vue";
import swal from "sweetalert";
import newLoader from "~/components/loader.vue";
import load from "~/components/loader-1.vue";
export default {
  //  middleware : ['auth'],
  components: {
    "app-sidebar": sidebar,
    "app-navbar": navbar,
    "app-loader": newLoader,
    load,
  },
  data() {
    return {
      company: {},
      profile: {},
      loader: true,
      managerEmail: "",
      user: {},
      isloading: true,
      isloading_1: true,
      edit: true,
      submitted: false,
      employees: [],
      profileInfo: {
        first_name: "",
        last_name: "",
        address: "",
        phone: "",
        profile_pic: {},
        // _method: "PUT",
      },
    };
  },
  mounted() {
    this.user = this.$auth.$storage.getLocalStorage("jwt");
    //  this.user = localStorage.getItem("jwt");
    console.log(this.user);
    this.getCompany();
    this.getProfile();
    // this.getToken()
  },
  methods: {
    reload() {
      var timeout = setTimeout("location.reload(true);", 3000);
      function resetTimeout() {
        clearTimeout(timeout);
        timeout = setTimeout("location.reload(true", 3000);
      }
    },
    getCompany() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then((res) => {
          console.log(res.data.user.company);
          this.company = res.data.user.company;
          this.managerEmail = res.data.user.email;
          this.employees = res.data.user.employees;
          //   for (let key in data) {
          //     const details = data[key];
          //     details.company.id = key;
          //     this.company.unshift(details);
          //   }
          //   this.company = res.data.company;
          this.loader = false;
        });
    },
    updateProfile(i) {
      this.submitted = true;
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          console.log("Login");
          swal({
            title: "Are you sure?",
            text: "Once you Update, previous manager information will be lost",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
                this.isloading_1 = false;
                const formData = new FormData();
                formData.append("first_name", this.profileInfo.first_name);
                formData.append("last_name", this.profileInfo.last_name);
                formData.append("address", this.profileInfo.address);
                formData.append("phone", this.profileInfo.phone);
                formData.append("profile_pic", this.profileInfo.profile_pic);
                formData.append("_method", "PUT");
                this.$axios
                  .post(
                    `https://hamlet.payfill.co/api/profile/${i}`,
                    formData,
                    {
                      headers: {
                        Authorization: `Bearer ${this.user}`,
                        "Content-Type": "multipart/form-data",
                      },
                    }
                  )
                  .then(
                    (res) => {
                      // this.getProfile();
                      // this.getCompany();
                      console.log(res);
                      this.$message({
                        message: "Manager Profile Updated Successfully!",
                        type: "success",
                      });
                      this.isloading_1 = true;
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
                  message: "Manager Profile remains the same !",
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
          this.isloading = true;
        } else {
          this.$message({
            message: "Error, field cannot be empty!",
            type: "error",
          });
        }
      });
    },
    getProfile() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then((res) => {
          console.log(res.data.user.profile);
          this.profile = res.data.user.profile;
          //   for (let key in data) {
          //     const details = data[key];
          //     details.company.id = key;
          //     this.company.unshift(details);
          //   }
          //   this.company = res.data.company;
          this.loader = false;
        });
    },
    edititems(id) {
      this.edit = false;
      this.profileInfo = id;
    },
    canceledit() {
      this.edit = true;
    },
    upload() {
      var input = event.target;
      this.profileInfo.profile_pic = input.files[0];
      console.log(this.profileInfo.profile_pic);
    },
  },
  created() {
    // this.getCompany();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Overpass", sans-serif;
}
.form-row {
  margin-bottom: 2rem !important;
}
.one2 {
  width: 50%;
  border-radius: 5px;
  background: #ffffff !important;
  margin-top: 5rem;
  height: fit-content;
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
  padding-top: 50px;
  padding-bottom: 20px;
}
hr {
  margin-bottom: 30px;
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
  background-color: #e6ecf2 !important;
  /* background: #f9f9f9; */
  margin-top: 3.5rem;
  height: 130vh;
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
input,
textarea {
  padding: 0.5rem;
}
.file-border {
  padding: 1rem 5rem 1rem 1rem;
  border: 1px solid rgb(192, 192, 192);
  outline: none;
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
#style-loader {
  margin-top: 30vh;
  margin-bottom: 30vh;
  text-align: center;
}
.file-border {
  width: 100%;
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
