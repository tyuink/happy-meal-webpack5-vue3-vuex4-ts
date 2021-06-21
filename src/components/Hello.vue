<template>
  <div @click="change">Hello, world!</div>
  <div>{{ tester }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'Hello',
  data() {
    return {
      test: 'test'
    }
  },
  computed: {
    tester(): string {
      return this.test + '000';
    }
  },
  methods: {
    change(): void {
      this.test = '111';
    }
  }
});
</script>
