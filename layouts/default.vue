<template>
    <div>
        <header>
            <nav>
                <h1 class="logo">FAIR SHOP</h1>
                <Nuxt-link to="/">หน้าแรก</Nuxt-link>
                <Nuxt-link to="/About">เกี่ยวกับเรา</Nuxt-link>
                <Nuxt-link to="/products">สินค้าทั้งหมด</Nuxt-link>
            </nav>
        </header>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
nav {
    margin: 10px auto;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: pink;
}

nav a {
    color: aliceblue;
    text-decoration: none;
    margin-left: 12px;
    font-size: 18px;
    padding: 10px;
}

nav a:hover {
    color: black
}

.logo {
    margin-right: auto;
    padding-left: 10px;
    color: whitesmoke;
    border-color: whitesmoke;
}
</style>