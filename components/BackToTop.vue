<template>
    <div>
        <button class="open-button" @click="BackToTop">
            <i class="fa fa-long-arrow-up"></i>
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        BackToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
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
    background-color: #64a2ff;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 50%;
    color: #ffffff;
    font-size: 1rem;
    line-height: 1rem;
    outline: none;
    box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.44);
}
</style>