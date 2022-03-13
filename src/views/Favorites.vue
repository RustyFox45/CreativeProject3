<template>
<div>
  <FavoriteList :favorite="favorite" />
</div>
</template>

<script>
import CartList from "../components/FavoriteList.vue"
export default {
  name: 'FavoriteView',
  components: {
    FavoriteList
  },
  data() {
    return {}
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    }
  },
}
</script>
