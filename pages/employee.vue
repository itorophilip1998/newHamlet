<template>
    <div>
        <h1>see</h1>
        <employee></employee>
    </div>
</template>

<script>
import employee from "~/pages/all-employees.vue";

export default {
    props:['employees'],
    components:
    {
        employee
    },
    data()
    {
        return{
             employee:{}
        }
    }
}
</script>