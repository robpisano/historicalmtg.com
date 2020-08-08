<template>
  <q-page>
    <div class="row justify-end scroll overflow-hidden">
      <div class="col-5" v-if="$q.platform.is.desktop && !$q.platform.within.iframe">
        <Introduction/>
      </div>
      <div class="col-3" v-if="$q.platform.is.desktop && !$q.platform.within.iframe">
        <Top10Decks/>
      </div>
      <div class="col-4" v-if="$q.platform.is.desktop && !$q.platform.within.iframe">
        <RecentResults/>
      </div>
      <div class="col-6" v-if="!$q.platform.is.desktop || $q.platform.within.iframe">
        <Introduction/>
      </div>
      <div class="col-6" v-if="!$q.platform.is.desktop || $q.platform.within.iframe">
        <Top10Decks/>
      </div>
    </div>
  </q-page>
</template>

<script>
import Top10Decks from 'components/Top10Decks.vue'
import RecentResults from 'components/RecentResults.vue'
import Introduction from 'components/Introduction.vue'

export default {
  name: 'PageIndex',
  components: { Top10Decks, RecentResults, Introduction },
  data () {
    return {
    }
  }
}
</script>
