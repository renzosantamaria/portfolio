<template>
    <div class="header-wrapper">
        <h1>Renzo</h1>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header-wrapper{
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;

    // width: 100vw;
    height: 4rem;
    padding: 0 2rem;
    background-color: rgba(0, 0, 0, 0.548);
    color: rgb(248, 239, 227);
    
    h1{
        font-size: 1.6rem;
    }
    nav{
        a{
            text-decoration: none;
            color: rgb(248, 239, 227);
            margin-left: 2rem;
            font-size: 1.2rem;
        }
    }
}
</style>