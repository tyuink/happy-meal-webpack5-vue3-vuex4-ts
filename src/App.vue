// App.vue
<template>
  <div>
    <h2>使用自定义组件：</h2>
    <article><hello/></article>
    <h2>使用 Vuex 的数据：</h2>
    <article>
      <table>
        <tr><td>姓名</td><td>{{ name }}</td></tr>
        <tr><td>性别</td><td>{{ gender }}</td></tr>
        <tr><td>年龄</td><td>{{ age }}</td></tr>
        <tr><td>计数</td><td>{{ count }}</td></tr>
      </table>
    </article>
    <h2>修改 Vuex 的数据：</h2>
    <article>
      <table>
        <tr><td><button @click="updateProfileAsync">更新个人信息 (mapActions)</button></td></tr>
        <tr><td><button @click="dispatchUpdateProfileAction">更新个人信息 (dispatch)</button></td></tr>
        <tr><td><button @click="INCREMENT">更新计数 (mapMutations)</button></td></tr>
        <tr><td><button @click="increment">更新计数 (commit)</button></td></tr>
        <tr><td><button @click="queryTextAsync">访问后台接口</button></td></tr>
      </table>
    </article>
    <h2>显示路由页面：</h2>
    <article><router-view></router-view></article>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { mapState, mapMutations, mapActions } from 'vuex';
import { INCREMENT } from './stores/mutation-types';
import { Hello } from './components';
import { getText } from './api';

export default defineComponent({
  components: { Hello },

  computed: {
    // 使用单独的计算属性实现对 state 的读取
    count() {
      return this.$store.state.count;
    },

    // 使用现成的函数批量读取 state 中的数据
    ...mapState(['name', 'gender', 'age'])
  },

  methods: {
    // 使用现成的函数批量生成 Action 中的方法
    ...mapActions([ 'updateProfileAsync' ]),

    // 使用现成的函数批量生成 Mutation 中的方法
    ...mapMutations([ INCREMENT ]),

    // 直接调用 commit 方法执行 mutation 过程
    increment () {
      this.$store.commit(INCREMENT);
    },

    // 直接调用 dispatch 方法执行 action 过程
    dispatchUpdateProfileAction () {
      this.$store.dispatch('updateProfileAsync');
    },

    // 异步访问后台接口的过程
    queryTextAsync () {
      getText().then(resp => {
        console.log(resp);
      });
    }
  },

  data() {
    return {}
  }
});

</script>
