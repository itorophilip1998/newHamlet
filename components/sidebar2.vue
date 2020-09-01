<template>
    <div class="one">
        <div class="one1">
            <img src="~/assets/Group 58.png" alt="">
            
            <h5>Name: </h5>
            <p :class="currentPage.includes('/singleemployee/paymentinfo') ? activeClass : ''"><nuxt-link to="/singleemployee/paymentinfo" style="text-decoration:none">Personal Info</nuxt-link></p>
            <p :class="currentPage.includes('/single-employee/employmentdetails') ? activeClass : ''"><nuxt-link to="/singleemployee/employmentdetails" style="text-decoration:none">Employment Details and Compensation</nuxt-link></p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
    return{
      activeClass : 'active'
    }
},
 computed : {
    currentPage(){
      return this.$route.path
    }
  }
}
</script>>
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
        border-radius: 50%;
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