<template>
<div>
    home组件
    <br /> <br />
    {{ book.title }}
    <br /> <br />
    {{ book.author }}
    <br /> <br />
    {{ book.year }}
    <br /> <br />

    <button @click="setTitle()">设置数据</button>
    <br /> <br />

    {{greeting}}

</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';

interface Book {
    title: string
    author: string
    year: number
}
var book: Book = {
    title: 'Vue 3 Guide',
    author: 'Vue Team',
    year: 2020
}
export default defineComponent({
    name: 'App',
    data() {
        return {
            book
        }
    },
    methods: {
        setTitle(): void {
            this.book.title = "你好vue3.0"
        }
    },
    computed: {
        // 需要注释
        greeting(): string {
            return this.book.title + '!'
        }
    }
});
</script>
