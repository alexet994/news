<template>
   <div>
      <h1>Это страница поста с ид:{{$route.params.id}}</h1>
      <div>{{$route.params.title}}</div>
      <div>{{$route.params.body}}</div>
   </div>
</template>

<script>
export default {


}
</script>

<style  scoped>

</style>