<template>
<div class="wrapper">
  <div class="cards">
    <div v-if="numCards === 0" class="empty-favorites">0 Items In Favorites</div>
    <div v-else class="cards" v-for="favorites in favorites" :key="pokemon.id">
      <div class="info">
        <h1>{{pokemon.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/images/pokemon/'+pokemon.image">
      </div>
      <div class="price">
        <button @click="removeFromFavorites(pokemon)" class="auto">Remove Item</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'FavoritesList',
  props: {
    favorites: Array
  },
  computed: {
    numPokemon() {
        return this.$root.$data.favorites.length;
    },
  },
  methods: {
    removeFromFavorites(pokemon) {
        this.$root.$data.favorites.splice(this.$root.$data.favorites.indexOf(pokemon), 1);
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.empty-favorites {
    font-size: 2em;
    font-weight: bold;
}
.pokemon {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.pokemon {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}
.pokemon img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}
.pokemon .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.info {
  background: #7882A4;
  color: #000;
  padding: 10px 30px;
  height: 100px;
}
.info h1 {
  font-size: 16px;
}
.info h2 {
  font-size: 14px;
}
.info p {
  margin: 0px;
  font-size: 10px;
}
.quantity {
    color: #B4CFB0;
    font-weight: bold;
}
.price {
  display: flex;
}
button {
  height: 50px;
  background: #B4CFB0;
  color: white;
  border: none;
}
.auto {
  margin-left: auto;
}
</style>
