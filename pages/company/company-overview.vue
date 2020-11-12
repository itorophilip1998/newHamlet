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
                <h2 v-if="this.company">{{ this.company.company_name }}</h2>
                <p v-if="this.company">
                  Total Headcount: {{ employees.length }} | Services:
                  {{ this.company.services }}
                </p>
              </div>
            </div>
            <div>
              <div class="one3">
                <h3>General Information</h3>
                <hr />
                <div class="grid">
                  <h5 style="color: #0065fc; font-weight: 400">Company Name</h5>
                  <p v-if="this.company">{{ this.company.company_name }}</p>
                </div>
                <div class="grid">
                  <h5 style="color: #0065fc; font-weight: 400">
                    Company Website
                  </h5>
                  <p v-if="this.company">{{ this.company.company_website }}</p>
                </div>
                <div class="grid">
                  <h5 style="color: #0065fc; font-weight: 400">Email</h5>
                  <p v-if="this.company">{{ this.company.company_email }}</p>
                </div>
                <div class="grid">
                  <h5 style="color: #0065fc; font-weight: 400">Phone Number</h5>
                  <p v-if="this.company">{{ this.company.company_phone }}</p>
                </div>
                <div class="grid">
                  <h5 style="color: #0065fc; font-weight: 400">Address</h5>
                  <p v-if="this.company">{{ this.company.company_address }}</p>
                </div>
                <div class="grid">
                  <h5 style="color: #0065fc; font-weight: 400">City</h5>
                  <p v-if="this.company">{{ this.company.city }}</p>
                </div>
                <div class="grid">
                  <h5 style="color: #0065fc; font-weight: 400">Zip Code</h5>
                  <p v-if="this.company">{{ this.company.zip_code }}</p>
                </div>
                <div class="grid">
                  <h5 style="color: #0065fc; font-weight: 400">State</h5>
                  <p v-if="this.company">{{ this.company.state }}</p>
                </div>

                <hr />
                <span class="one9">
                  <button
                    class="btn1"
                    @click="edititems(company)"
                    data-toggle="modal"
                    data-target="#exampleModal-1"
                  >
                    Edit
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModal-1"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <!-- <h5 class="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5> -->
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div>
                    <form class="p-4">
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label>Company Name</label>
                          <input
                            type="text"
                            name="company-name"
                            class="form-control"
                            v-validate="'required'"
                            :class="{
                              'is-invalid':
                                submitted && errors.has('company-name'),
                            }"
                            v-model="companyInfo.company_name"
                          />
                          <small
                            v-if="submitted && errors.has('company-name')"
                            class="invalid-feedback"
                            >{{ errors.first("company-name") }}</small
                          >
                        </div>
                        <div class="form-group col-md-6">
                          <label>Company Website</label>
                          <input
                            type="text"
                            name="website"
                            v-validate="{ url: { require_protocol: true } }"
                            :class="{
                              'is-invalid': submitted && errors.has('website'),
                            }"
                            class="form-control"
                            v-model="companyInfo.company_website"
                          />
                          <small
                            v-if="submitted && errors.has('website')"
                            class="invalid-feedback"
                            >{{ errors.first("website") }}</small
                          >
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            v-validate="'required|email'"
                            :class="{
                              'is-invalid': submitted && errors.has('email'),
                            }"
                            class="form-control"
                            v-model="companyInfo.company_email"
                          />
                          <small
                            v-if="submitted && errors.has('email')"
                            class="invalid-feedback"
                            >{{ errors.first("email") }}</small
                          >
                        </div>
                        <div class="form-group col-md-6">
                          <label>Phone Number</label>
                          <input
                            type
                            name="phone"
                            maxlength="11"
                            v-validate="'numeric'"
                            :class="{
                              'is-invalid': submitted && errors.has('phone'),
                            }"
                            class="form-control"
                            v-model="companyInfo.company_phone"
                          />
                          <small
                            v-if="submitted && errors.has('phone')"
                            class="invalid-feedback"
                            >{{ errors.first("phone") }}</small
                          >
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label>Address</label>
                          <input
                            type="text"
                            name="company-address"
                            v-validate="'required'"
                            :class="{
                              'is-invalid':
                                submitted && errors.has('company-address'),
                            }"
                            class="form-control"
                            v-model="companyInfo.company_address"
                          />
                          <small
                            v-if="submitted && errors.has('company-address')"
                            class="invalid-feedback"
                            >{{ errors.first("company-address") }}</small
                          >
                        </div>
                        <div class="form-group col-md-6">
                          <label>City</label>
                          <input
                            type="text"
                            name="city"
                            class="form-control"
                            v-validate="'required'"
                            :class="{
                              'is-invalid': submitted && errors.has('city'),
                            }"
                            v-model="companyInfo.city"
                          />
                          <small
                            v-if="submitted && errors.has('city')"
                            class="invalid-feedback"
                            >{{ errors.first("city") }}</small
                          >
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label>State</label>
                          <input
                            type="text"
                            name="state"
                            class="form-control"
                            v-validate="'required'"
                            :class="{
                              'is-invalid': submitted && errors.has('state'),
                            }"
                            v-model="companyInfo.state"
                          />
                          <small
                            v-if="submitted && errors.has('state')"
                            class="invalid-feedback"
                            >{{ errors.first("state") }}</small
                          >
                        </div>
                        <div class="form-group col-md-6">
                          <label>Zip Code</label>
                          <input
                            type
                            name="zip-code"
                            v-validate="'numeric'"
                            :class="{
                              'is-invalid': submitted && errors.has('zip-code'),
                            }"
                            class="form-control"
                            v-model="companyInfo.zip_code"
                          />
                          <small
                            v-if="submitted && errors.has('zip-code')"
                            class="invalid-feedback"
                            >{{ errors.first("zip-code") }}</small
                          >
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label>Number of Employees</label>
                          <input
                            type
                            name="no-of-employees"
                            v-validate="'numeric'"
                            :class="{
                              'is-invalid':
                                submitted && errors.has('no-of-employees'),
                            }"
                            class="form-control"
                            v-model="companyInfo.no_of_employees"
                          />
                          <small
                            v-if="submitted && errors.has('no-of-employees')"
                            class="invalid-feedback"
                            >{{ errors.first("no-of-employees") }}</small
                          >
                        </div>
                        <div class="form-group col-md-6">
                          <label>Company Logo</label>
                          <input
                            type="file"
                            name="company-logo"
                            class="file-border img-fluid"
                            required
                            id
                            v-validate="'required|ext:jpeg,jpg,svg,png'"
                            :class="{
                              'is-invalid':
                                submitted && errors.has('company-logo'),
                            }"
                            placeholder
                            @change="upload()"
                          />
                          <small id="emailHelp" class="form-text text-muted"
                            >(Picture must be of .jpeg, .png, .svg, .jpg
                            format)</small
                          >
                          <small
                            v-if="submitted && errors.has('company-logo')"
                            class="invalid-feedback"
                            >{{ errors.first("company-logo") }}</small
                          >
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-12">
                          <label for>Services</label>
                          <textarea
                            name="about-us"
                            id
                            class="form-control"
                            v-validate="'required'"
                            :class="{
                              'is-invalid': submitted && errors.has('about-us'),
                            }"
                            v-model="companyInfo.services"
                          ></textarea>
                          <small
                            v-if="submitted && errors.has('about-us')"
                            class="invalid-feedback"
                            >{{ errors.first("about-us") }}</small
                          >
                        </div>
                      </div>

                      <div style="text-align: center">
                        <!-- <button
                          type="submit"
                          class="btn btn2"
                          @click="canceledit"
                        >
                          Cancel
                        </button> -->
                        <button
                          type="submit"
                          class="btn btn2"
                          @click.prevent="updateCompany(companyInfo.id)"
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
                <!-- <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "~/components/sidebar3.vue";
import VueJwtDecode from "vue-jwt-decode";
import navbar from "~/components/navbar7.vue";
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
      loader: true,
      user: {},
      isloading: true,
      isloading_1: true,
      edit: true,
      submitted: false,
      employees: [],
      companyInfo: {
        company_name: "",
        company_address: "",
        company_phone: "",
        company_email: "",
        no_of_employees: "",
        city: "",
        state: "",
        zip_code: "",
        company_website: "",
        services: "",
        company_logo: {},
        // _method: "PUT",
      },
    };
  },
  mounted() {
    this.user = this.$auth.$storage.getLocalStorage("jwt");
    //  this.user = localStorage.getItem("jwt");
    console.log(this.user);
    this.getCompany();
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
    updateCompany(i) {
      this.submitted = true;
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          console.log("Login");
          swal({
            title: "Are you sure?",
            text: "Once you Update, previous company information will be lost",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
                this.isloading_1 = false;
                const formData = new FormData();
                formData.append("company_name", this.companyInfo.company_name);
                formData.append(
                  "company_address",
                  this.companyInfo.company_address
                );
                formData.append(
                  "company_email",
                  this.companyInfo.company_email
                );
                formData.append(
                  "company_website",
                  this.companyInfo.company_website
                );
                formData.append(
                  "no_of_employees",
                  this.companyInfo.no_of_employees
                );
                formData.append("city", this.companyInfo.city);
                formData.append("state", this.companyInfo.state);
                formData.append("zip_code", this.companyInfo.zip_code);
                formData.append("services", this.companyInfo.services);
                formData.append("company_logo", this.companyInfo.company_logo);
                formData.append(
                  "company_phone",
                  this.companyInfo.company_phone
                );
                formData.append("_method", "PUT");
                this.$axios
                  .post(
                    `https://hamlet.payfill.co/api/company/${i}`,
                    formData,
                    {
                      headers: {
                        Authorization: `Bearer ${this.user}`,
                        "Content-Type": "multipart/form-data",
                      },
                    }
                  )
                  .then((res) => {
                    let close = document.getElementsByClassName(
                      "modal-backdrop"
                    )[0];
                    let modal = document.getElementById("exampleModal-1");
                    let body = document.getElementsByTagName("body")[0];
                    close.style.display = "none";
                    modal.style.display = "none";
                    modal.classList.remove("modal-backdrop");
                    body.style.paddingRight = "0px";
                    this.getCompany();
                    console.log(res);
                    this.$message({
                      message: "Company Details Updated Successfully!",
                      type: "success",
                    });
                    this.isloading_1 = true;
                    this.$router.push("/dashboard");
                    // this.getallBlogs()
                  })
                  .catch((error) => {
                    console.log(error);
                    this.loader_1 = true;
                  });
                // this.reload();

                // this.$router.push("/dashboard")
              } else {
                this.$message({
                  message: "Company Details remains the same !",
                  type: "info",
                });
              }
            })
            .catch((error) => {
              this.isloading_1 = true;
              this.$message({
                message: "Error, Unable to update, Try again!",
                type: "error",
              });
            });
        } else {
          this.isloading_1 = true;
        }
      });
    },
    getCompany() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then((res) => {
          console.log(res.data.company);
          this.company = res.data.user.company;
          this.employees = res.data.user.employees;
          console.log(this.employees.length);
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
      // this.edit = false;
      // this.displayModal = true;
      this.companyInfo = id;
    },
    canceledit() {
      this.edit = true;
      this.displayModal = false;
    },
    upload() {
      var input = event.target;
      this.companyInfo.company_logo = input.files[0];
      console.log(this.companyInfo.company_logo);
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
  /* margin: 0;
  padding: 0; */
  overflow-x: hidden;
  font-family: "Overpass", sans-serif;
}

label {
  margin: 0 !important;
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
  grid-gap: 5rem;
  margin-bottom: 10px;
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
  padding-top: 3px;
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
  /* background-color: rgb(192, 192, 192, 0.2) !important; */
  background-color: #e6ecf2 !important;
  /* background: #f9f9f9; */
  margin-top: 3.5rem;
  height: 100vh;
  padding-bottom: 2rem;
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
  padding-bottom: 5rem;
  text-align: center;
}

@media (max-width: 567px) {
  .one2 {
    width: 100%;
    margin-left: 0px;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin-bottom: 20px;
  }
  .one3 {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 0px;
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
    margin-top: 0.5rem;
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
