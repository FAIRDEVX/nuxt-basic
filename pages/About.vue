<template>
    <div class="container">
        <h1>เกี่ยวกับเรา</h1>
        <img src="/image/About_us.svg">
    </div>
</template>

<script setup>
useHead({
    title:"เกี่ยวกับเรา",
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