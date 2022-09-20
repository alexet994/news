<template>



   <div class="post__item">
      <div>
         <div><strong>id:</strong>{{post.id}}</div>
         <div><strong>Название:</strong>{{post.title}}</div>
         <div><strong>Описание:</strong>{{post.body}}</div>
      </div>
      <div class="post__btns">
         <MyButton @click="$router.push(`/posts/${post.id}`)">Oткрыть</MyButton>
      </div>
   </div>

</template>
         
<script>
export default {
   props: {
      post: {
         type: Object,
         required: true,
      }
   },
}
</script>
<style>
.post__item {
   background: azure;
   margin: 10px 5%;
   padding: 15px;
   border: 2px solid lightgray;
   margin-top: 15px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 320px;
   height: 500px;

}



.post__btns {
   display: flex;

}
</style>