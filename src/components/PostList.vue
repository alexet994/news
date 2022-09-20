<template>
   <div v-if="posts.length > 0">
      <transition-group name="post-list">
         <div class="flex">
            <PostItem v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove',post)" />
         </div>

      </transition-group>

   </div>
   <h2 v-else>Список пуст</h2>
</template>
<script>
import PostItem from '@/components/PostItem.vue'
export default {
   components: { PostItem },
   props: {
      posts: {
         type: Array,
         required: true,
      }
   }
}
</script>
<style scoped>
.post-list-item {
   display: inline-block;
   margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
   transition: all 1s ease;
}

.post-list-enter-from,
.post-list-leave-to {
   opacity: 0;
   transform: translateY(30px);
}

.post-list-move {
   transition: transform 0.4 ease;
}

.flex {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
}
</style>