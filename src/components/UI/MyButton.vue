<template>
   <button class="btn">
      <slot>

      </slot>
   </button>
</template>

<script>
export default {
   name: 'MyButton'

}
</script>
<style scoped>
.btn {
   padding: 10px 15px;
   background: none;
   color: teal;
   cursor: pointer;
   transition: background ease 500ms;
}

.btn:hover {
   background: teal;
   color: white;
}
</style>