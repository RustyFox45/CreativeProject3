<template>
<div class="wrapper">
  <div class="pokemons">
    <div class="pokemon" v-for="pokemon in pokemons" :key="pokemon.id">
      <div class="info">
        <h1>{{pokemon.name}}</h1>
        <p>{{pokemon.region}}</p>
      </div>
      <div class="image">
        <img :src="pokemon.image">
      </div>
      <div class="region">
        <h2>{{pokemon.type}}</h2>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'PokemonList',
  props: {
    pokemons: Array
  },
  methods: {
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemons {
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
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
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

.region {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
