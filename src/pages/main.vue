<template>
   <div>
      <div class="app__btns">
         <MySelect v-model="selectedSort" :options="sortOptions"></MySelect>
      </div>

      <PostList v-bind:posts="sortAndSearchedPosts" @remove="removePost" />


   </div>
</template>
<script>
import PostList from '@/components/PostList.vue'
import MyButton from '@/components/UI/MyButton.vue';
import axios from 'axios';

export default {
   components: {
      PostList,
      MyButton,

   },
   data() {
      return {
         posts: [],
         selectedSort: '',
         searchQuery: '',
         sortOptions: [
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По содержанию' }
         ],
         page: 1,
         limit: 10,
         totalPages: 0

      }
   },
   methods: {
      async fetchPost() {
         try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
               params: {
                  _page: this.page,
                  _liit: this.limit
               }
            });
            this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
            this.posts = response.data
         } catch (e) {
            alert('Ошибка получение данних')
         }
      },

   },
   mounted() {
      this.fetchPost();


   },
   computed: {
      sortedPosts() {
         return [...this.posts].sort((post1, post2) => {
            return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
         })
      },
      sortAndSearchedPosts() {
         return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
   },
   watch: {
   }
}
</script>
<style>
.app__btns {
   margin: 15px;
   display: flex;
   justify-content: space-between;
}
</style>
 