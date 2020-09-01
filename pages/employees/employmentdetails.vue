<template>
    <div>
        <app-navbar/>
        <div class="row one5">
            <app-sidebar/>
            
            <div  class="one2 ">
                <div class="one6">
                <div class="one7">
                    <h2>Name</h2>
                    <p>Job Title (employmenttype)  Started on (Date hired)</p>
                </div>
                <div class="one8">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Actions
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Edit profile</a>
                            <a class="dropdown-item" href="#">Terminate</a>
                        </div>
                    </div>
                </div>
            </div>
                 <div >
                <div class="one3">
                <h3>Employment Details and Compensation</h3>
                <hr>
                <div class="grid">
                    <p> Start Date</p>
                    <p></p>
                </div>
                <div class="grid">
                    <p> Job Title</p>
                    <p></p>
                </div>
                <div class="grid">
                    <p>Work Location</p>
                    <p></p>
                </div>
                <div class="grid">
                    <p>Employment Type</p>
                    <p></p>
                </div>
                <div class="grid">
                    <p>Compensation Type</p>
                   <p></p>
                </div>
                <div class="grid">
                    <p>Address</p>
                    <p></p>
                </div>
                <div class="grid">
                    <p>Emergency Contact</p>
                    <p></p>
                </div>
                
                <hr>             

            </div>
                </div>
           
        </div>
        </div>
        
        
    </div>
    

</template>

<script>
import sidebar from '~/components/sidebar2.vue';
import navbar from '~/components/navbar4.vue';
export default {
    components:{
        'app-sidebar':sidebar,
        'app-navbar':navbar,
    }
    
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
    .one2{
        width: 50%;
        border-radius: 5px;
        background: #FFFFFF;
        margin-top: 5rem;
        height:100vh;
        margin-left: 25%;
    }
    .grid{
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin-bottom: 20px;
    }
    .grid p{
        color: #081D29;
    }
    .grid input{
        width:100%;
        border: 0.5px solid #081D29 !important;
        height: 30px;
        padding: 5px;
        border-radius: 5px;
    }
    .one3{
        padding-left: 70px;
        padding-right: 70px;
        padding-top: 50px;
        padding-bottom: 20px;

    }
    hr{
        margin-bottom: 30px;
    }
    .one3 h3{
        margin-bottom: 30px;
        color: #0065FC;
    }
    .one4{
        text-align: right;
        margin-bottom: 30px;
    }
    .btn1{
        color: #0065FC;
        padding: 8px 65px;
        background: #FFFFFF;
        border: 1px solid #0065FC;
        border-radius: 5px;
    }
    .btn2{
        color: #FFFFFF;
        background: #0065FC;
        border-radius: 5px;
        padding: 8px 65px;
        border: none;
        margin-left: 20px;
    }
    .one5{
        background: #F9F9F9;
        margin-top: 3.5rem;
        height: 130vh;
    }
    .one6{
        padding-left: 4rem;
        padding-right: 4rem;
        padding-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3rem;
    }
    .one8{
        text-align: right;
    }
    .one8 button{
        padding:5px 10px;
    }
    .one7 h2{
        color: #0065FC;
         margin-bottom: 10px;
    }
    

    @media (max-width: 567px) {
        .one2{
        width: 100%;
        margin-left: 0px;
       
    }
        .grid{
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 40px;
    }
        .one3{
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 50px;
        padding-bottom: 50px;

    }
        .one4{
            text-align: center;
    }
        .one4 button{
            width: 100%;
    }
        .btn2{
        
        margin-left: 0px;
    }
        .btn1{
        margin-bottom: 30px;
    }
    .one6{
        padding-left: 30px;
        padding-right: 30px;
    }
        
    }

    @media(min-width: 568px) and (max-width:768px) {
        .one2{
        width: 75%;
    }
        .one3{
        padding-left: 30px;
        padding-right: 30px;
    }
    .one6{
        padding-left: 30px;
        padding-right: 30px;
    }
    }


    @media(min-width: 769px) and (max-width:1200px) {
         .grid{
             grid-gap: 2rem;
         }
         .one4{
        text-align: center;
    }
        .one4 button{
            width: 100%;
    }
    .btn1{
        margin-bottom: 30px;
    }
    .btn2{
        margin-left: 0px;
    }
     }
    
</style>