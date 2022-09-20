<template>
   <div class="header">
      <span>Web blog</span>
      <div class="title">
         <h1>Новостной сайт</h1>
         <h2>Полезные стати на разные темы</h2>
      </div>


   </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.header {
   background: url("@/img/header.jpg") fixed top;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.75);
   background-blend-mode: multiply;
   color: azure;
}

.title {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 70vh;
   font-size: large;

}

.header span {
   display: inline-block;
   font-size: 24px;
   font-weight: 600;
   align-items: flex-start;
   justify-content: flex-start;

}
</style>