<template>
    <div>
        <q-toolbar class="bg-primary text-white shadow-2">
            <q-toolbar-title>Standings</q-toolbar-title>
        </q-toolbar>
        <q-list bordered>
        <q-item
            v-ripple
            v-for="deck in decks"
            :key="deck.externalId"
            :to="'deck?id=' + deck.externalId"
        >
            <q-item-section avatar>
              <q-avatar size="50px">
                  <img :src="'./images/' + deck.externalId + '.png'">
              </q-avatar>
            </q-item-section>
            <q-item-section>{{ deck.name }} ({{ deck.year}})</q-item-section>
            <q-item-section>{{ deck.elo }}</q-item-section>
            <q-item-section>{{ deck.wins }} - {{ deck.losses }}</q-item-section>
        </q-item>
        </q-list>
    </div>
</template>

<script>
export default {
  name: 'Standings',
  created () {
    this.$axios.get('http://historicmtgapi.herokuapp.com/standingsapi')
      .then(response => {
        console.log(response)
        this.decks = response.data
        this.loading = false
        console.log('decks = ' + this.decks)
      })
      .catch(error => {
        console.log(error)
        this.loading = false
      })
  },
  data () {
    return {
      decks: []
    }
  }
}
</script>
