<template>
  <div>
    <button class="open-button" @click="openForm">
      <i class="fa fa-commenting"></i>
    </button>

    <div class="chat-popup" id="myForm">
      <div class="closeBtn">
        <div class="d-flex justify-content-between">
          <div class="p-3">
            <img
              v-if="this.profile"
              :src="this.profile.profile_pic"
              alt
              class="rounded-circle"
              width="20px"
              height="20px"
            />
            <span class="ml-1"
              >{{ this.profile.first_name }} {{ this.profile.last_name }}</span
            >
          </div>
          <button type="button" class="btn cancel" @click="closeForm">
            <i class="fa fa-angle-double-down"></i>
          </button>
        </div>
      </div>

      <form @submit.prevent="sendMessage" class="form-container">
        <div class="chat-down">
          <div>
            <img
              v-if="this.profile"
              :src="this.profile.profile_pic"
              alt
              class="rounded-circle"
              width="40px"
              height="40px"
            />
          </div>
          <div
            class="pl-2 user-text br/"
            v-for="(chat, index) in chats"
            :key="index"
          >
            <p class="" style="margin-top: 1rem; margin-left: 0.5rem">
              {{ chat.message }}
            </p>
          </div>
        </div>

        <!-- <div class="d-flex mt-4">
          <div>
            <img
              v-if="this.profile_pic"
              src="/img/averter.jpg"
              alt
              class="rounded-circle"
              width="40px"
              height="40px"
            />
          </div>
          <div class="pl-2 admin-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
            culpa?
          </div>
        </div> -->

        <div class="form-down">
          <div class="d-flex">
            <div class="">
              <input
                type="text"
                class="form-control mt-3"
                placeholder="Type message"
                v-model="message"
                required
              />
            </div>
            <div class="">
              <button type="submit" class="btn mt-3">
                <font-awesome-icon class="ml-1" :icon="['fa', 'paper-plane']" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {},
      user: {},
      message: "",
      id: {},
      friend_id: 50,
      chats: [],
    };
  },
  mounted() {
    this.getProfile();
    this.viewMessage();
    this.user = this.$auth.$storage.getLocalStorage("jwt");
    this.$axios.get("https://hamlet.payfill.co/api/auth/admin").then((res) => {
      this.id = res.data.user.id;
    });
  },
  methods: {
    openForm() {
      document.getElementById("myForm").style.display = "block";
    },
    closeForm() {
      document.getElementById("myForm").style.display = "none";
    },
    getProfile() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then((res) => {
          console.log(res.data.profile);
          this.profile = res.data.user.profile;
        });
    },

    sendMessage() {
      // this.submitted = true;
      // this.$validator.validateAll().then(valid => {
      //     if (valid) {
      //     console.log("Login")
      //     }
      // });
      const formData = new FormData();
      formData.append("message", this.message);
      formData.append("user_id", this.id);
      formData.append("friends_id", this.friend_id);
      this.$axios
        .post("https://hamlet.payfill.co/api/chat", formData, {
          headers: {
            Authorization: `Bearer ${this.user}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.message = "";
          this.$message({
            message: "Chat Sent Succesfully!",
            type: "success",
          });
        })
        .catch((error) => {
          console.log(error);
          this.loader = true;
        });
    },
    viewMessage() {
      this.$axios
        .get(`https://hamlet.payfill.co/api/chat/view/${this.friend_id}`)
        .then((res) => {
          this.chats = res.data;
          console.log(this.chats.message);
        })
        .catch((error) => {
          console.log(error);
          this.loader = true;
        });
    },
  },
};
</script>

<style scoped>
.open-button {
  /* padding: 16px 20px; */
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
  bottom: 23px;
  right: 28px;
  padding: 1rem;
  background-color: #ffffff;
  width: 80px;
  height: 80px;
  text-align: center;
  border-radius: 50%;
  color: #64a2ff;
  font-size: 2rem;
  line-height: 3rem;
  outline: none;
  box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.44);
}
.open-button:focus {
  outline: none;
}
/* The popup chat - hidden by default */
.chat-popup {
  display: none;
  position: fixed;
  bottom: 0;
  height: 710px;
  right: 15px;
  border: 1px solid #ffffff;
  z-index: 9;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.44);
  transition: 0.2s ease;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #e6ecf2;
}
::-webkit-scrollbar-thumb {
  background-color: #64a2ff;
  border-radius: 20px;
  border: 1px solid #64a2ff;
}
/* Add styles to the form container */
.form-container {
  max-width: 300px;
  padding: 10px;
  /* margin-top: 2rem; */
  /* height: 100vh; */
  background-color: white;
}
.chat-down {
  margin-top: 3.2rem;
}
/* Full-width textarea */
.form-container textarea {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
  resize: none;
  min-height: 200px;
}

/* When the textarea gets focus, do something */
.form-container textarea:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for the submit/send button */
.form-container .btn {
  /* background-color: #64a2ff; */
  color: #64a2ff;
  /* padding: 16px 20px; */
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
  opacity: 0.8;
}

/* Add a red background color to the cancel button */
.closeBtn {
  background-color: #ffffff !important;
  border-bottom: 1px solid #000000;
  box-shadow: -1px 6px 13px 0px rgba(243, 241, 241, 0.44);
  position: fixed;
  width: 18.9%;
  z-index: 1;
  outline: none !important;
  /* top: 0;
  left: 0; */
}
.cancel {
  color: #64a2ff;
  font-size: 1.5rem;
  /* margin-left: 15rem; */
  outline: none !important;
}
.cancel:focus {
  outline: none;
}
/* Add some hover effects to buttons */
.form-container .btn:hover,
.open-button:hover {
  opacity: 1;
}
.user-text {
  /* background-color: #b2beb5; */
  border-radius: 5px;
  margin-left: 0.5rem;
}
.admin-text {
  background: seagreen;
  border-radius: 5px;
  margin-left: 0.5rem;
  color: #ffffff;
}
.form-down {
  position: fixed;
  bottom: 10px;
  /* width: 17%; */
  /* background: #64a2ff; */
  /* right: px; */
}
</style>