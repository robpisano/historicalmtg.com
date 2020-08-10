<template>
    <div>
        <q-toolbar class="bg-primary text-white shadow-2">
            <q-toolbar-title>Top 10 Decks</q-toolbar-title>
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
            <q-item-section>{{ deck.name }}</q-item-section>
            <q-item-section v-if="$q.platform.is.desktop && !$q.platform.within.iframe">{{ deck.elo }}</q-item-section>
            <q-item-section v-if="$q.platform.is.desktop && !$q.platform.within.iframe">{{ deck.wins }} - {{ deck.losses }}</q-item-section>
        </q-item>
        </q-list>
    </div>
</template>

<script>
export default {
  name: 'Top10Decks',
  created () {
    this.$axios.get('http://historicmtgapi.herokuapp.com/standingsapi')
      .then(response => {
        console.log(response)
        this.decks = []
        response.data.forEach(d => {
          if (this.decks.length < 11) {
            console.log(this.decks.length)
            this.decks.push(d)
          }
        })
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
      showImageDialog: false,
      imageUrl: '',
      loading: true,
      decks: []
    }
  },
  methods: {
    showImage (img) {
      this.imageUrl = img
      this.showImageDialog = true
    }
  }
}
</script>
