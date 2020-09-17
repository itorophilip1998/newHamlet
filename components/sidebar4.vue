<template>
    <div class="one">
        <div class="one1">
            <img :src="this.company.company_logo" alt class="w-99" />
            <p :class="currentPage.includes('/department/add-department') ? activeClass : ''"><nuxt-link to="/department/add-department" style="text-decoration:none">Add Departments</nuxt-link></p>

        </div>
    </div>
</template>

<script>
export default {
    data(){
    return{
      activeClass : 'active',
      company: {},

    }
},
    methods: {
        getCompany() {
        this.$axios
            .get("https://hamlet.payfill.co/api/auth/admin")
            .then(res => {
            this.company = res.data.user.company;
            });
        }
    },
    created() {
        this.getCompany();
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
        /* background: #F9F9F9; */
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
