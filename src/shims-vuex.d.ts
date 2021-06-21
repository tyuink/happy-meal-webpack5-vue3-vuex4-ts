// vuex.d.ts
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    name: string,
    gender: string,
    age: number,
    count: number,
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>,
  }
}