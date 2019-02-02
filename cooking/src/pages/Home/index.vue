<template>
    <div class="home">
        <header class="header">
            <img src="/images/Page 1 Copy 2.png" alt="" class="logo">
            <div class="search"></div>
            <img src="/images/Group 2.png" alt="" class="message">
        </header>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    .logo{
        margin: 0 0.498rem 0 0.32rem;
    }
    .search{
        width: 5.12rem;
        height: 0.6rem;
        background: #EFEFEF ;
    }
    .message{
        margin: 0 0.32rem 0 0.46rem;
    }
}
</style>

