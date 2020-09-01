<template>
    <div class="one">
        <div class="one1">
            <img :src="this.profile.profile_pic" alt class="w-99" />
            <p :class="currentPage.includes('/profile/profile') ? activeClass : ''"><nuxt-link to="/profile/profile" style="text-decoration:none">Manager Profile</nuxt-link></p>
            <!-- <p :class="currentPage.includes('/company/taxinfo') ? activeClass : ''"><nuxt-link to="/company/taxinfo" style="text-decoration:none">Tax Info</nuxt-link></p>
            <p :class="currentPage.includes('/company/locations') ? activeClass : ''"><nuxt-link to="/company/locations" style="text-decoration:none">Locations</nuxt-link></p> -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
    return{
      activeClass : 'active',
      profile: {},
    }
},
    mounted() {
        this.getProfile();
    },
    methods: {
        getProfile() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then((res) => {
          console.log(res.data.profile);
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
    },

 computed : {
    currentPage(){
      return this.$route.path
    }
  }
}
</script>
<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Overpass', sans-serif;

    }
    .nuxt-link-active{
        border-left: 3px solid #64a2ff !important ;
        padding-left: .5rem;
    }
    .one{
        top: 0;
        left: 0;
        width: 25%;
        height: 100vh;
        background: #F9F9F9;
        position: fixed;
    }
    .one1{
        padding-left: 100px;
        margin-top: 10rem;
        padding-right: 10px;
    }
    .one1 img{
        width: 60%;
        vertical-align: middle;
        margin-bottom: 20px;
    }
    .one1 h5{
        margin-bottom: 20px;
        color: #081D29;
    }
    .one1 p{
        margin-bottom: 10px;
        color: #081D29;
    }

    @media (max-width:567px) {
        .one{
            display: none;
        }
    }


    @media(min-width: 568px) and (max-width:768px) {
        .one1{
        padding-left: 10%;
        padding-right: 10%;
    }
    }

    @media(min-width: 769px) and (max-width:1200px) {
        .one1{
        padding-left: 40px;}
    }

</style>
