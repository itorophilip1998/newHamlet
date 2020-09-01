<template>
  <div>
    <Navbar />
    <!-- Desktop view -->
    <div class="bg-big">
      <div class="grid desktopShow">
        <div class="margin-form">
          <div class="form-edit">
            <div class="stepwizard">
              <div class="stepwizard-row" ref="edu">
                <div class="stepwizard-step col-lg-4">
                  <a href type="button" class="btn btn-primary btn-circle">1</a>
                  <p>
                    <small>Company's Details</small>
                  </p>
                </div>
                <div class="stepwizard-step col-lg-4">
                  <a href type="button" class="btn btn-default btn-circle" disabled="disabled">2</a>
                  <p>
                    <small>Company's Details cont.</small>
                  </p>
                </div>
              </div>
            </div>
            <form @submit.prevent="submitBtn">
              <div class="form-all" ref="formShow">
                <div class="second-form active" id="hide-form">
                  <!-- <h1>Company's Information</h1> -->
                  <div class="mt-4">
                    <input
                      type="text"
                      name="company-name"
                      class="form-control"
                      id
                      placeholder="company name"
                      v-model="companyInfo.company_name"
                      v-validate="'required'"
                      :class="{ 'is-invalid': submitted && errors.has('company-name') }"
                    />
                    <small
                      v-if="submitted && errors.has('company-name')"
                      class="invalid-feedback"
                    >{{ errors.first("company-name")}}</small>
                  </div>
                  <div class="mt-4">
                    <input
                      type="text"
                      name="company-address"
                      class="form-control"
                      id
                      placeholder="company address"
                      v-model="companyInfo.company_address"
                      v-validate="'required'"
                      :class="{ 'is-invalid': submitted && errors.has('company-address') }"
                    />
                    <small
                      v-if="submitted && errors.has('company-address')"
                      class="invalid-feedback"
                    >{{ errors.first("company-address")}}</small>
                  </div>
                  <div class="mt-4">
                    <input
                      type="text"
                      name="city"
                      class="form-control"
                      id
                      placeholder="city"
                      v-model="companyInfo.city"
                      v-validate="'required'"
                      :class="{ 'is-invalid': submitted && errors.has('city') }"
                    />
                    <small
                      v-if="submitted && errors.has('city')"
                      class="invalid-feedback"
                    >{{ errors.first("city")}}</small>
                  </div>
                  <div class="mt-4">
                    <input
                      type
                      name="zip-code"
                      class="form-control"
                      id
                      placeholder="zip-code"
                      v-model="companyInfo.zip_code"
                      v-validate="'numeric'"
                      :class="{ 'is-invalid': submitted && errors.has('zip-code') }"
                    />
                    <small
                      v-if="submitted && errors.has('zip-code')"
                      class="invalid-feedback"
                    >{{ errors.first("zip-code")}}</small>
                  </div>
                  <div class="mt-4">
                    <input
                      type="text"
                      name="state"
                      class="form-control"
                      id
                      placeholder="state"
                      v-model="companyInfo.state"
                      v-validate="'required'"
                      :class="{ 'is-invalid': submitted && errors.has('state') }"
                    />
                    <small
                      v-if="submitted && errors.has('state')"
                      class="invalid-feedback"
                    >{{ errors.first("state")}}</small>
                  </div>
                  <div class="mt-4">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      id
                      placeholder="company email"
                      v-model="companyInfo.company_email"
                      v-validate="'required|email'"
                      :class="{ 'is-invalid': submitted && errors.has('email') }"
                    />
                    <small
                      v-if="submitted && errors.has('email')"
                      class="invalid-feedback"
                    >{{ errors.first("email")}}</small>
                  </div>
                </div>
                <div class="first-form" id="hide-form">
                  <div class="mt-4">
                    <input
                      type
                      name="phone"
                      class="form-control"
                      id
                      placeholder="company phone number"
                      v-model="companyInfo.company_phone"
                      v-validate="'numeric'"
                      :class="{ 'is-invalid': submitted && errors.has('phone') }"
                    />
                    <small
                      v-if="submitted && errors.has('phone')"
                      class="invalid-feedback"
                    >{{ errors.first("phone")}}</small>
                  </div>
                  <div class="mt-4">
                    <input
                      type="text"
                      name="website"
                      class="form-control"
                      id
                      placeholder="company website"
                      v-model="companyInfo.company_website"
                      v-validate="{url: {require_protocol: true }}"
                      :class="{ 'is-invalid': submitted && errors.has('website') }"
                    />
                    <small
                      v-if="submitted && errors.has('website')"
                      class="invalid-feedback"
                    >{{ errors.first("website")}}</small>
                  </div>
                  <div class="mt-4">
                    <input
                      type
                      name="no-of-employees"
                      class="form-control"
                      id
                      placeholder="number of employees"
                      v-model="companyInfo.no_of_employees"
                      v-validate="'numeric'"
                      :class="{ 'is-invalid': submitted && errors.has('no-of-employees') }"
                    />
                    <small
                      v-if="submitted && errors.has('no-of-employees')"
                      class="invalid-feedback"
                    >{{ errors.first("no-of-employees")}}</small>
                  </div>
                  <div class="mt-4">
                    <label for>Upload Company Logo</label>
                    <br />
                    <input
                      type="file"
                      name="company-logo"
                      class="file-border img-fluid"
                      id
                      placeholder
                      @change="upload()"
                      v-validate="'required|ext:jpeg,jpg,svg,png'"
                      :class="{ 'is-invalid': submitted && errors.has('company-logo') }"
                    />
                    <small
                      id="emailHelp"
                      class="form-text text-muted"
                    >(Picture must be of .jpeg, .png, .svg, .jpg format)</small>
                    <small
                      v-if="submitted && errors.has('company-logo')"
                      class="invalid-feedback"
                    >{{ errors.first("company-logo")}}</small>
                  </div>
                  <div class="mt-4">
                    <label for>Tell us about your company</label>
                    <textarea
                      type="text"
                      name="about-us"
                      class="form-control"
                      id
                      v-model="companyInfo.services"
                      placeholder
                      v-validate="'required'"
                      :class="{ 'is-invalid': submitted && errors.has('about-us') }"
                    ></textarea>
                    <small
                      v-if="submitted && errors.has('about-us')"
                      class="invalid-feedback"
                    >{{ errors.first("about-us")}}</small>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="btn3 btn btn-primary mt-3"
                v-if="showS"
                style="outline: none !important"
              >
                <span v-if="loader">Submit</span>
                <div v-else>
                  <app-loader />
                </div>
              </button>
            </form>
            <div class="mt-5">
              <button
                class="btn1 btn"
                @click="prevBtn"
                :disabled="prevDisabled"
                style="outline: none !important"
              >
                <font-awesome-icon :icon="['fa', 'arrow-left']" />
              </button>
              <button
                class="btn2 btn"
                @click="nextBtn"
                :disabled="isDisabled"
                style="outline: none !important"
              >
                <font-awesome-icon :icon="['fa', 'arrow-right']" />
              </button>
              <!-- <button
                type="submit"
                class="btn3 btn btn-success"
                @click="submitBtn"
                v-if="showS"
                style="outline: none !important"
              >
                <span v-if="loader">Submit</span>
                <div v-else>
                  <app-loader />
                </div>
              </button>-->
            </div>
          </div>
        </div>
        <div class="wrapper mt-3">
          <!-- <div class="box-down">
            <div class="d-flex">
              <div>
                <img src="/img/Rectangle 21.png" class="img-fluid" alt srcset />
              </div>
              <div class="text-box">Best Pricing Plans</div>
            </div>
            <div class="d-flex mt-3">
              <div>
                <img src="/img/Rectangle 21.png" class="img-fluid" alt srcset />
              </div>
              <div class="text-box">Best Pricing Plans</div>
            </div>
            <div class="d-flex mt-3">
              <div>
                <img src="/img/Rectangle 21.png" class="img-fluid" alt srcset />
              </div>
              <div class="text-box">Best Pricing Plans</div>
            </div>
            <div class="d-flex mt-3">
              <div>
                <img src="/img/Rectangle 21.png" class="img-fluid" alt srcset />
              </div>
              <div class="text-box">Best Pricing Plans</div>
            </div>
          </div>-->
        </div>
      </div>
    </div>
    <!-- Desktop View End -->
    <!-- Mobile View -->
    <div class="container wrapper mobileShow">
      <div class="mobile-form">
        <form action>
          <div class="form-all" ref="formMobile">
            <div class="second-form active" id="hide-form">
              <h1>Company's Information</h1>
              <div class="mt-4">
                <input type="text" name class="form-control" id required placeholder="company name" />
              </div>
              <div class="mt-4">
                <input
                  type="text"
                  name
                  class="form-control"
                  id
                  required
                  placeholder="company address"
                />
              </div>
              <div class="mt-4">
                <input type="text" name class="form-control" id required placeholder="city" />
              </div>
              <div class="mt-4">
                <input type="text" name class="form-control" id required placeholder="zip-code" />
              </div>
              <div class="mt-4">
                <input type="text" name class="form-control" id required placeholder="state" />
              </div>
              <div class="mt-4">
                <input
                  type="text"
                  name
                  class="form-control"
                  id
                  required
                  placeholder="company email"
                />
              </div>
            </div>
            <div class="first-form" id="hide-form">
              <h1>Company's Information continue...</h1>
              <div class="mt-4">
                <input
                  type
                  name
                  class="form-control"
                  id
                  required
                  placeholder="company phone number"
                />
              </div>
              <div class="mt-4">
                <input type name class="form-control" id required placeholder="company website" />
              </div>
              <div class="mt-4">
                <input
                  type="number"
                  name
                  class="form-control"
                  id
                  required
                  placeholder="number of employees"
                />
              </div>
              <div class="mt-4">
                <label for>Upload Company Logo</label>
                <input type="file" name class="file-border img-fluid" required id placeholder />
              </div>
              <div class="mt-4">
                <label for>Tell us about your company</label>
                <textarea name class="form-control" id></textarea>
              </div>
            </div>
          </div>
        </form>
        <div class="mt-3">
          <button
            class="btn1 btn"
            @click="prev"
            :disabled="prevDisabled1"
            style="outline: none !important"
          >
            <font-awesome-icon :icon="['fa', 'arrow-left']" />
          </button>
          <button
            class="btn2 btn"
            @click="next"
            :disabled="isDisabled1"
            style="outline: none !important"
          >
            <font-awesome-icon :icon="['fa', 'arrow-right']" />
          </button>
          <button
            class="btn3 btn btn-success"
            @click="submitB"
            v-if="showS"
            style="outline: none !important"
          >Submit</button>
        </div>
      </div>
    </div>
    <!-- Mobile View End -->
  </div>
</template>


<script>
import axios from "axios";
import swal from "sweetalert";
import newLoader from "~/components/loader.vue";
import Navbar from "@/components/navbar2.vue";
export default {
  //  middleware : ['auth'],
  components: {
    Navbar,
    "app-loader": newLoader,
  },
  data() {
    return {
      counter: 0,
      isDisabled: false,
      prevDisabled: true,
      // isSubmit : true,
      showS: false,
      isDisabled1: false,
      prevDisabled1: true,
      isSubmit1: true,
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
        profile_pic: "",
      },
      user: {},
      loader: true,
      submitted: false,
    };
  },
  created() {
    this.user = this.$auth.$storage.getLocalStorage("jwt");
  },
  methods: {
    upload() {
      var input = event.target;
      this.companyInfo.profile_pic = input.files[0];
      console.log(this.companyInfo.profile_pic);
    },
    nextBtn() {
      this.submitted = true;
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          console.log("Login");
          //    this.showS = true
        } else {
          // this.showS = false
        }
      });
      if (
        this.companyInfo.company_name === "" ||
        this.companyInfo.company_address === "" ||
        this.companyInfo.company_email === "" ||
        this.companyInfo.city === "" ||
        this.companyInfo.state === "" ||
        this.companyInfo.zip_code === ""
      ) {
        swal({
          title: "Oops!",
          text: "fields cannot be empty!",
          icon: "error",
          button: false,
          timer: 1000,
        });
      }
      this.prevDisabled = false;
      this.$refs.formShow.children[this.counter].classList.remove("active");
      this.counter++;
      this.$refs.formShow.children[this.counter].classList.add("active");
      if (this.counter + 1 === this.$refs.formShow.children.length) {
        this.isDisabled = true;
        this.showS = true;
      }
      for (let i = 0; i <= this.$refs.edu.children.length; i++) {
        if ((this.$refs.edu[i] = this.$refs.formShow.children)) {
          this.$refs.edu.children[
            this.counter
          ].childNodes[0].style.backgroundColor = "#0065fc";
        }
      }
    },
    prevBtn() {
      if (this.counter === 0) {
        this.prevDisabled = true;
      } else {
        this.isDisabled = false;
        this.$refs.formShow.children[this.counter].classList.remove("active");
        this.counter--;
        this.$refs.formShow.children[this.counter].classList.add("active");
        for (let i = 0; i <= this.$refs.edu.children.length; i++) {
          if ((this.$refs.edu[i] = this.$refs.formShow.children)) {
            this.$refs.edu.children[
              this.counter + 1
            ].childNodes[0].style.backgroundColor = "#bbb";
          }
        }
      }
    },
    submitBtn() {
      if (
        this.companyInfo.company_name === "" ||
        this.companyInfo.company_address === "" ||
        this.companyInfo.company_email === "" ||
        this.companyInfo.company_website === "" ||
        this.companyInfo.no_of_employees === "" ||
        this.companyInfo.city === "" ||
        this.companyInfo.state === "" ||
        this.companyInfo.zip_code === "" ||
        this.companyInfo.services === "" ||
        this.companyInfo.company_phone === "" ||
        this.companyInfo.profile_pic === ""
      ) {
        this.loader = true;
        this.$message({
          message: "fields cannot be empty!",
          type: "error",
        });
      } else {
        this.loader = false;
      }

      const formData = new FormData();
      formData.append("company_name", this.companyInfo.company_name);
      formData.append("company_address", this.companyInfo.company_address);
      formData.append("company_email", this.companyInfo.company_email);
      formData.append("company_website", this.companyInfo.company_website);
      formData.append("no_of_employees", this.companyInfo.no_of_employees);
      formData.append("city", this.companyInfo.city);
      formData.append("state", this.companyInfo.state);
      formData.append("zip_code", this.companyInfo.zip_code);
      formData.append("services", this.companyInfo.services);
      formData.append("company_logo", this.companyInfo.profile_pic);
      formData.append("company_phone", this.companyInfo.company_phone);
      axios
        .post("https://hamlet.payfill.co/api/company", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${this.user}`,
          },
        })
        .then((res) => {
          this.$message({
            message:
              "Company Details added successfully, Registration Completed!",
            type: "success",
          });
          this.$router.push("/dashboard");
          this.loader = false;
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
          this.loader = true;
          // if (
          //   this.companyInfo.company_name === "" ||
          //   this.companyInfo.company_address === "" ||
          //   this.companyInfo.company_email === "" ||
          //   this.companyInfo.company_website === "" ||
          //   this.companyInfo.no_of_employees === "" ||
          //   this.companyInfo.city === "" ||
          //   this.companyInfo.state === "" ||
          //   this.companyInfo.zip_code === "" ||
          //   this.companyInfo.services === "" ||
          //   this.companyInfo.company_phone === "" ||
          //   this.companyInfo.profile_pic === ""
          // ) {
          //   this.$message({
          //     message: "fields cannot be empty!",
          //     type: "error",
          //   });
          // } else {
          //   this.$message({
          //     message: "Unauthorized User, Please Register!",
          //     type: "error",
          //   });
          // }
        });
      console.log(this.companyInfo);
    },
    next() {
      this.prevDisabled1 = false;
      this.$refs.formMobile.children[this.counter].classList.remove("active");
      this.counter++;
      this.$refs.formMobile.children[this.counter].classList.add("active");
      if (this.counter + 1 === this.$refs.formMobile.children.length) {
        this.isDisabled1 = true;
        this.showS = true;
      }
    },
    prev() {
      if (this.counter === 0) {
        this.prevDisabled1 = true;
      } else {
        this.isDisabled1 = false;
        this.$refs.formMobile.children[this.counter].classList.remove("active");
        this.counter--;
        this.$refs.formMobile.children[this.counter].classList.add("active");
      }
    },
    submitB() {
      console.log("clicked");
    },
  },
};
</script>

<style scoped>
.wrapper {
  background: linear-gradient(
      to right,
      rgba(8, 29, 41, 0.7),
      rgba(8, 29, 41, 0.7)
    ),
    url("/img/nesa.jpg") no-repeat center center/cover;
  /* background-position: right; */
  /* background-size: center center/cover; */
  /* background-repeat: no-repeat; */
  height: auto;
  margin-top: 1.5px !important;
}
.bg-big {
  /* background-color:#F9F9F9; */
  background-color: rgb(192, 192, 192, 0.1);
  margin-top: 4rem;
}
.margin-form {
  margin-left: 8rem;
  /* margin-top: 1rem; */
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.form-edit {
  padding: 1rem;
}
.first-form {
  margin-top: 1rem;
}
.second-form {
  margin-top: 1rem;
}
input {
  width: 70%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  background-color: rgba(255, 255, 255, 1) !important;
}
.file-border {
  padding: 1rem 5rem 1rem 1rem;
  border: 1px solid rgb(192, 192, 192);
  outline: none;
}
textarea {
  width: 70%;
  height: 10vh;
  border: 1px solid rgb(192, 192, 192);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  background-color: rgba(255, 255, 255, 1) !important;
}
.btn1 {
  /* padding: .5rem 1.5rem; */
  color: #0065fc;
  background-color: #ffffff;
  border: 1px solid #0065fc;
  outline: none !important;
  border-radius: 50%;
}
.file-border {
  padding: 1rem 5rem 1rem 1rem;
  border: 1px solid rgb(192, 192, 192);
  outline: none;
}
textarea {
  width: 70%;
  height: 10vh;
  border: 1px solid rgb(192, 192, 192);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  background-color: rgba(255, 255, 255, 1) !important;
}
.btn1 {
  /* padding: .5rem 1.5rem; */
  color: #0065fc;
  background-color: #ffffff;
  border: 1px solid #0065fc;
  outline: none !important;
  border-radius: 50%;
}
.btn2 {
  /* padding: .5rem 1.5rem; */
  color: #0065fc;
  background-color: #ffffff;
  border: 1px solid #0065fc;
  margin-left: 1.5rem;
  outline: none !important;
  border-radius: 50%;
}
.btn3 {
  padding: 1rem 2rem;
  color: #ffffff;
  /* background-color: #1DD200; */
  border: 1px solid #ffffff;
  /* margin-left: 2rem; */
  outline: none !important;
}
.active {
  display: block !important;
}
#hide-form {
  display: none;
}
h1 {
  color: #ffffff;
}
.text-box {
  color: #ffffff;
  font-size: 1.2rem;
  margin-left: 1rem;
}
.box-down {
  padding-left: 20rem;
  margin-top: 17rem;
  text-align: center;
}
.blockBtn {
  display: none;
}
.activeBtn {
  display: block;
}
.stepwizard {
  width: 100%;
  position: relative;
  margin-top: 2rem;
}
.stepwizard-row {
  display: flex;
}
p {
  font-weight: 600;
  font-style: italic;
}
/* .stepwizard-step div:first-child {
  content: none;
} */
.stepwizard-step {
  text-align: center;
}

.btn-circle {
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 1rem !important;
  line-height: 2rem !important;
  border-radius: 50px !important;
}
.stepwizard-step p {
  margin-top: 0.3rem;
  color: #666;
}
.stepwizard-row:before {
  top: 30px;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 70%;
  height: 1px;
  background-color: #ccc;
  z-index: 0;
}
.stepwizard .btn.disabled,
.stepwizard .btn[disabled] {
  opacity: 1 !important;
  color: white;
  background-color: #bbb;
}
.active {
  display: block !important;
}
.red {
  background-color: red;
}
#cardDisplay {
  display: none;
}
.mobileShow {
  display: none;
}
@media only screen and (min-width: 300px) and (max-width: 350px) {
  .mobileShow {
    display: block;
  }
  .desktopShow {
    display: none;
  }
  input {
    width: 100%;
  }
  .wrapper {
    background: linear-gradient(
        to right,
        rgba(8, 29, 41, 0.7),
        rgba(8, 29, 41, 0.7)
      ),
      url("/img/nesa.jpg") no-repeat center center/cover;
    /* background-position: right; */
    /* background-size: center center/cover; */
    /* background-repeat: no-repeat; */
    height: 100vh;
    padding-top: 1rem;
    padding-bottom: 0;
  }
  label {
    color: #ffffff;
  }
  textarea {
    width: 100%;
  }
  .btn2 {
    margin-left: 0.1rem;
  }
  .btn3 {
    margin-left: 0.1rem;
  }
  form {
    padding-bottom: 1rem;
  }
  input[type="button"]span {
    color: #ffffff !important;
  }
  .btn1 {
    /* padding: 1rem 1rem; */
    color: #0065fc;
    background-color: #ffffff;
    border: 1px solid #0065fc;
    outline: none;
    border-radius: 50%;
  }
  .btn2 {
    /* padding: 1rem 1.5rem; */
    color: #0065fc;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    margin-left: 0.1rem;
    outline: none;
    border-radius: 50%;
  }
  .btn3 {
    padding: 1rem 1rem;
    color: #ffffff;
    /* background-color: #1DD200; */
    border: 1px solid #ffffff;
    margin-left: 0.1rem;
    outline: none;
  }
  h1 {
    font-size: 1.5rem;
  }
}
@media only screen and (min-width: 360px) and (max-width: 578px) {
  .mobileShow {
    display: block;
  }
  .desktopShow {
    display: none;
  }
  input {
    width: 100%;
  }
  .wrapper {
    background: linear-gradient(
        to right,
        rgba(8, 29, 41, 0.7),
        rgba(8, 29, 41, 0.7)
      ),
      url("/img/nesa.jpg") no-repeat center center/cover;
    /* background-position: right; */
    /* background-size: center center/cover; */
    /* background-repeat: no-repeat; */
    height: 100vh;
    padding-top: 1rem;
    padding-bottom: 0;
  }
  label {
    color: #ffffff;
  }
  textarea {
    width: 100%;
  }
  .btn2 {
    margin-left: 0.1rem;
  }
  .btn3 {
    margin-left: 0.1rem;
  }
  form {
    padding-bottom: 1rem;
  }
  input[type="button"]span {
    color: #ffffff !important;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .margin-form {
    margin-left: 2rem;
  }
  .box-down {
    padding-left: 5rem;
    margin-top: 13rem;
    text-align: center;
  }
  .btn2 {
    margin-left: 0.1rem;
  }
  .btn3 {
    margin-left: 0.1rem;
  }
  .stepwizard-row:before {
    top: 30px;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 90%;
    height: 1px;
    background-color: #ccc;
    z-index: 0;
  }
  input {
    width: 100%;
  }
  textarea {
    width: 100%;
  }
  .margin-form {
    margin-left: 1rem;
  }
}
</style> 