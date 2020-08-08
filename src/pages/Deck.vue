<template>
    <div align="center" :class="backgroundColor">
      <q-img
        :src="'./images/' + deck.externalId + '.png'"
        spinner-color="white"
        style="height: 260px; width: 340px;"
        class="rounded-borders"
      >
        <div class="absolute-center text-h4 text-center">
          {{ deck.name }}
        </div>
      </q-img>
      <div class="row">
        <div class="col">
          <q-card
            class="my-card text-white text-left"
            style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
          >
            <q-card-section>
              <div class="text-h6">Decklist</div>
            </q-card-section>
            <q-card-section horizontal>
              <q-card-section class="q-pt-none" style="width: 50%;">
                <q-list dense bordered padding class="rounded-borders">
                  <q-item v-ripple
                    v-for="i in decklist.length"
                    :key="i" @mouseover="showByIndex = i">
                    <q-item-section>
                      {{ decklist[i-1] }}
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
              <q-card-section class="col-5 flex flex-right" style="width: 50%;">
                <img v-if="showByIndex != null && decklist[showByIndex-1] != null && !decklist[showByIndex-1].includes('Sideboard') && decklist[showByIndex-1] != '' && decklist[showByIndex-1].length > 1"
                  class="rounded-borders cardImage"
                  :src="'./images/' + deck.externalId + '-' + showByIndex + '.jpg'"/>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <div class="col">
          <q-card
            class="my-card text-white text-left"
            style="background: radial-gradient(circle, #96e8ff 0%, #28aed4 100%)"
          >
            <q-card-section>
              <div class="text-h6">Results</div>
              <div class="text-subtitle2">ELO: {{ deck.elo }} ({{ deck.wins }} - {{ deck.losses }})</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-list dense bordered padding class="rounded-borders">
                <q-item v-ripple vertical-middle
                  v-for="result in results"
                  :key="result">
                  <q-item-section>
                    <span class="result-row lose-row" v-if="result.losingDeck == deck.externalId && result.was20">L 0-2 - <router-link :to="'deck?id=' + result.winningDeck"><img style="vertical-align:middle;" width="50px" height="38px" :src="'./images/' + result.winningDeck + '.png'"/>{{ result.winningDeck }}</router-link> {{ moment(result.date).format('MM/DD/YYYY') }}</span>
                    <span class="result-row lose-row" v-if="result.losingDeck == deck.externalId && !result.was20">L 1-2 - <router-link :to="'deck?id=' + result.winningDeck"><img style="vertical-align:middle;" width="50px" height="38px" :src="'./images/' + result.winningDeck + '.png'"/>{{ result.winningDeck }}</router-link> {{ moment(result.date).format('MM/DD/YYYY') }}</span>
                    <span class="result-row win-row" v-if="result.winningDeck == deck.externalId && result.was20">W 2-0 - <router-link :to="'deck?id=' + result.losingDeck"><img style="vertical-align:middle;" width="50px" height="38px" :src="'./images/' + result.losingDeck + '.png'"/>{{ result.losingDeck }}</router-link> {{ moment(result.date).format('MM/DD/YYYY') }}</span>
                    <span class="result-row win-row" v-if="result.winningDeck == deck.externalId && !result.was20">W 2-1 - <router-link :to="'deck?id=' + result.losingDeck"><img style="vertical-align:middle;" width="50px" height="38px" :src="'./images/' + result.losingDeck + '.png'"/>{{ result.losingDeck }}</router-link> {{ moment(result.date).format('MM/DD/YYYY') }}</span>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Deck',
  methods: {
    resetMouseOver () {
      this.showByIndex = undefined
    },
    fetchData () {
      console.log(this.$route.query.id)
      this.$axios.get('http://historicmtgapi.herokuapp.com/deckapi?id=' + this.$route.query.id)
        .then(response => {
          this.deck = response.data
          this.decklist = this.deck.decklist.split('\n')
          console.log(this.decklist[0])
          console.log('deck = ' + this.deck)
          if (this.deck.colors != null && this.deck.colors.length > 0) {
            this.backgroundColor = this.deck.colors.charAt(0)
          }
          this.$axios.get('http://historicmtgapi.herokuapp.com/resultsapi?id=' + this.$route.query.id)
            .then(resultresponse => {
              this.results = resultresponse.data
              console.log('results = ' + this.results)
            })
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.fetchData()
  },
  data () {
    return {
      deck: {},
      decklist: [],
      results: [],
      showByIndex: null,
      backgroundColor: 'W'
    }
  },
  watch: {
    '$route' (to, from) {
      this.fetchData()
    }
  }
}
</script>
<style scoped>
  .result-row {
    display: inline-block;
    vertical-align: middle;
  }
  .win-row {
    color: #027a00;
  }
  .lose-row {
    color: #eb0000;
  }
  a {
    color:inherit;
    text-decoration: none;
  }
  .W {
    background: radial-gradient(circle, #e8e8e8 0%, #b8b8b8 100%)
  }
  .U {
    background: radial-gradient(circle, #4fa5ff 0%, #00244a 100%)
  }
  .B {
    background: radial-gradient(circle, #737373 0%, #000000 100%)
  }
  .R {
    background: radial-gradient(circle, #fc6060 0%, #b50404 100%)
  }
  .G {
    background: radial-gradient(circle, #58f57e 0%, #0f6123 100%)
  }
  .cardImage {
    display: block;
    object-fit: scale-down;
    max-width: 100%;
    max-height: 321px;
    width: 223px;
    height: auto;
    border:none;
    border-radius:20px;
    border-spacing: 0px;
    -webkit-border-radius:20px;
    -moz-border-radius:20px;
  }
</style>
