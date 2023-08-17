<template>
    <div class="container">
        <h1>หน้าแรกของเว็บไซต์</h1>
        <img src="/image/shoping.svg">
    </div>
</template>

<script setup>
useHead({
    title:"หน้าแรกของเว็บไซต์",
    meta:[
    {name:"descrition", content:"ร้านค้า,อุปกรณ์คอมพิวเตอร์,เสื้อผ้า"}
    ]
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img {
    width: 500px;
    height: 500px;
}
</style>