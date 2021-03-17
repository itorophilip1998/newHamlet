<template>
    <div id="chat">
        <button class="open-button" @click="openForm">
            <i class="fa fa-commenting"></i>
        </button>

        <div class="chat-popup" id="myForm">
            <div class="closeBtn fixed-top">
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
                            >{{ this.profile.first_name }}
                            {{ this.profile.last_name }}</span
                        >
                    </div>
                    <button type="button" class="btn cancel" @click="closeForm">
                        <i class="fa fa-angle-double-down"></i>
                    </button>
                </div>
            </div>

            <form @submit.prevent="sendMessage" class="form-container bg-white">
                <div class="chat-down">
                    <ul class="pl-md-2">
                        <li
                            class="pl-2 user-text clearfix"
                            v-for="(chat, index) in chats"
                            :key="index"
                        >
                            <div
                                :class="`${
                                    chat.user.id == profile.id
                                        ? 'myChat bg-primary float-right text-white '
                                        : 'adminChat text-dark '
                                } message p-2  border rounded-lg shadow`"
                            >
                                {{ chat.message }}
                                <small
                                    :class="` d-block ${
                                        chat.user.id == profile.id
                                            ? 'time'
                                            : 'text-muted'
                                    }`"
                                    >{{ time(chat.created_at) }}
                                </small>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="form-down bg-white">
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
                                <font-awesome-icon
                                    class="ml-1"
                                    :icon="['fa', 'paper-plane']"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
    data() {
        return {
            profile: {},
            user: {},
            message: "",
            id: {},
            friend_id: 50,
            chats: [],
            setTime: "",
        };
    },
    mounted() {
        this.getProfile();
        this.viewMessage();
        this.user = this.$auth.$storage.getLocalStorage("jwt");
        this.$axios
            .get("https://hamlet.payfill.co/api/auth/admin")
            .then((res) => {
                this.id = res.data.user.id;
            });
    },
    methods: {
        time(time) {
            return moment(time).fromNow();
        },
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
            this.viewMessage();
            this.message = "";
        },
        viewMessage() {
            this.$axios
                .get(
                    `https://hamlet.payfill.co/api/chat/view/${this.friend_id}`
                )
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
.message {
    max-width: 90%;
    border-radius: 20px;
    margin-bottom: 10px;
    position: relative;
    display: inline-block;
}
.adminChat {
    background: whitesmoke;
}
li {
    list-style-type: none;
}
#chat {
    z-index: 3 !important;
}
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
.time {
    color: rgb(88, 86, 86);
}
/* The popup chat - hidden by default */
.chat-popup {
    display: none;
    position: fixed;
    bottom: 0;
    height: 430px;
    right: 15px;
    border: 1px solid #ffffff;
    background-color: #ffffff;
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
    position: sticky;
    /* width: 18.5%; */
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
    position: sticky;
    bottom: 0;
    /* width: 17%; */
    /* background: #64a2ff; */
    /* right: px; */
}
@media only screen and (min-width: 300px) and (max-width: 350px) {
    .chat-popup {
        display: none;
        position: fixed;
        bottom: 0;
        height: 500px;
        right: 15px;
        border: 1px solid #ffffff;
        z-index: 9;
        overflow-x: hidden;
        overflow-y: auto;
        box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.44);
        transition: 0.2s ease;
    }
    .closeBtn {
        background-color: #ffffff !important;
        border-bottom: 1px solid #000000;
        box-shadow: -1px 6px 13px 0px rgba(243, 241, 241, 0.44);
        position: fixed;
        width: 90%;
        z-index: 1;
        outline: none !important;
        /* top: 0;
  left: 0; */
    }
    .form-container {
        max-width: 290px;
        padding: 10px;
        /* margin-top: 2rem; */
        /* height: 100vh; */
        background-color: white;
    }
    ul li {
        margin: 0 !important;
        padding: 0 !important;
    }
    ul.pl-md-2 {
        margin: 0 !important;
        padding: 0 !important;
    }
    .form-down {
        position: fixed;
        bottom: 10px;
        width: 90%;
        /* background: #64a2ff; */
        /* right: px; */
    }
}
@media only screen and (min-width: 360px) and (max-width: 578px) {
    .chat-popup {
        display: none;
        position: fixed;
        bottom: 0;
        height: 500px;
        right: 15px;
        border: 1px solid #ffffff;
        z-index: 9;
        overflow-x: hidden;
        overflow-y: auto;
        box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.44);
        transition: 0.2s ease;
    }
    .closeBtn {
        background-color: #ffffff !important;
        border-bottom: 1px solid #000000;
        box-shadow: -1px 6px 13px 0px rgba(243, 241, 241, 0.44);
        position: fixed;
        width: auto;
        z-index: 1;
        outline: none !important;
        /* top: 0;
  left: 0; */
    }
    .form-container {
        max-width: 290px;
        padding: 10px;
        /* margin-top: 2rem; */
        /* height: 100vh; */
        background-color: white;
    }
    ul li {
        margin: 0 !important;
        padding: 0 !important;
    }
    ul.pl-md-2 {
        margin: 0 !important;
        padding: 0 !important;
    }
    .form-down {
        position: fixed;
        bottom: 10px;
        width: auto;
        /* background: #64a2ff; */
        /* right: px; */
    }
}
</style>
