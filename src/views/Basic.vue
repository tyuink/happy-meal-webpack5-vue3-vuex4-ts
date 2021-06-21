<template>
  <div id="computed-basics">
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <p>{{ this.author.name }}</p>
    <p>{{ this.author.books }}</p>
    <p @click="onClicked">{{ this.test }}</p>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      test: '123',
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    };
  },
  computed: {
    // 计算属性的 getter
    publishedBooksMessage(): string {
      // `this` 指向 vm 实例
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  },
  methods: {
    onClicked() {
      this.test = '333';
    }
  }
});

</script>