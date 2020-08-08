<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-parallax
        :src="'./images/jtms-parallax.jpg'"
        :height="170"
      />
      <q-card-section>
        <div class="text-h6">Historical Standard</div>
        <div class="text-subtitle2">About the Site</div>
        <div class="text">At Grand Prix Denver 2016, Pascal Maynard was excitedly telling me about an idea he had. That idea was to build standard decks from throughout the history of Magic, and then pit them against each other as a new casual format. I was immediately in love with the idea and decided to do the same thing myself. I started off with the goal of one deck per year, but quickly found myself wanting to add more decks for some years, so the initial pool of decks was around 35. I have continued to add to this, and view it as a museum I am curating.
          <p/>The game play was hit or miss, however. As some standard formats are much stronger than others, and I would often contemplate what could be done to group the decks into tiers so that the matchups are closer and the games are more interesting and fun as a result. That is where this site enters the picture, as the back end has a matchmaking system and a standard ELO rating system. All of the decks and results are stored and updated in a database, which this front-end accesses to display results, decklists, and ratings.
          <p/>The sample size will always be insufficient to truly prove which deck was the best in the entire history of Magic, but the ratings should be a good indicator of what tier the decks lie in. Ultimately, this site is purely for fun and should not be taken seriously. I hope you enjoy it and please feel free to connect with me on Twitter <a href="https://twitter.com/rob_pisano" target="_blank">@Rob_Pisano</a> to let me know what you think. Thanks for visiting!
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  created () {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
