(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"row justify-end"},[a("div",{staticClass:"col-5"},[a("Introduction")],1),a("div",{staticClass:"col-3"},[a("Top10Decks")],1),a("div",{staticClass:"col-4"},[a("RecentResults")],1)])])},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-toolbar",{staticClass:"bg-primary text-white shadow-2"},[a("q-toolbar-title",[t._v("Top 10 Decks")])],1),a("q-list",{attrs:{bordered:""}},t._l(t.decks,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.externalId,attrs:{to:"deck?id="+e.externalId}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{size:"50px"}},[a("img",{attrs:{src:"./images/"+e.externalId+".png"}})])],1),a("q-item-section",[t._v(t._s(e.name))]),a("q-item-section",[t._v(t._s(e.elo))]),a("q-item-section",[t._v(t._s(e.wins)+" - "+t._s(e.losses))])],1)})),1),a("q-btn",{staticStyle:{display:"flex","justify-content":"center"},attrs:{color:"primary",clickable:"",type:"a",href:"standings",label:"Full Standings"}})],1)},o=[],r=(a("4160"),a("159b"),{name:"Top10Decks",created:function(){var t=this;this.$axios.get("http://historicmtgapi.herokuapp.com/standingsapi").then((function(e){console.log(e),t.decks=[],e.data.forEach((function(e){t.decks.length<11&&(console.log(t.decks.length),t.decks.push(e))})),t.loading=!1,console.log("decks = "+t.decks)})).catch((function(e){console.log(e),t.loading=!1}))},data:function(){return{showImageDialog:!1,imageUrl:"",loading:!0,decks:[]}},methods:{showImage:function(t){this.imageUrl=t,this.showImageDialog=!0}}}),l=r,c=a("2877"),d=a("65c6"),h=a("6ac5"),u=a("1c1c"),m=a("66e5"),p=a("4074"),g=a("cb32"),f=a("9c40"),v=a("714f"),w=a("eebe"),b=a.n(w),k=Object(c["a"])(l,n,o,!1,null,null,null),_=k.exports;b()(k,"components",{QToolbar:d["a"],QToolbarTitle:h["a"],QList:u["a"],QItem:m["a"],QItemSection:p["a"],QAvatar:g["a"],QBtn:f["a"]}),b()(k,"directives",{Ripple:v["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-toolbar",{staticClass:"bg-primary text-white shadow-2"},[a("q-toolbar-title",[t._v("Recent Results")])],1),a("q-list",{attrs:{bordered:""}},t._l(t.results,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{size:"50px"}},[a("img",{attrs:{src:"./images/"+e.winningDeck+".png"}})])],1),a("q-item-section",[t._v(t._s(e.winningDeck)+" def. ")]),a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{size:"50px"}},[a("img",{attrs:{src:"./images/"+e.losingDeck+".png"}})])],1),a("q-item-section",[t._v(t._s(e.losingDeck)+" ")]),a("q-item-section",[e.was20?a("span",[t._v("2-0")]):t._e(),e.was20?t._e():a("span",[t._v("2-1")])]),a("q-item-section",[t._v("  "+t._s(t.moment(e.date).format("MM/DD/YYYY")))])],1)})),1)],1)},q=[],x={name:"RecentResults",created:function(){var t=this;this.$axios.get("http://historicmtgapi.herokuapp.com/resultsapi").then((function(e){console.log(e),t.results=[];for(var a=0;a<10;a++)t.results.push(e.data[a]);t.loading=!1,console.log("results = "+t.results)})).catch((function(e){console.log(e),t.loading=!1}))},data:function(){return{loading:!0,results:[]}},methods:{}},I=x,Q=Object(c["a"])(I,y,q,!1,null,null,null),T=Q.exports;b()(Q,"components",{QToolbar:d["a"],QToolbarTitle:h["a"],QList:u["a"],QItem:m["a"],QItemSection:p["a"],QAvatar:g["a"]}),b()(Q,"directives",{Ripple:v["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-card",{staticClass:"my-card"},[a("q-parallax",{attrs:{src:"./images/jtms-parallax.jpg",height:170}}),a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Historical Standard")]),a("div",{staticClass:"text-subtitle2"},[t._v("About the Site")]),a("div",{staticClass:"text"},[t._v("At Grand Prix Denver 2016, Pascal Maynard was excitedly telling me about an idea he had. That idea was to build standard decks from throughout the history of Magic, and then pit them against each other as a new casual format. I was immediately in love with the idea and decided to do the same thing myself. I started off with the goal of one deck per year, but quickly found myself wanting to add more decks for some years, so the initial pool of decks was around 35. I have continued to add to this, and view it as a museum I am curating.\n        "),a("p"),t._v("The game play was hit or miss, however. As some standard formats are much stronger than others, and I would often contemplate what could be done to group the decks into tiers so that the matchups are closer and the games are more interesting and fun as a result. That is where this site enters the picture, as the back end has a matchmaking system and a standard ELO rating system. All of the decks and results are stored and updated in a database, which this front-end accesses to display results, decklists, and ratings.\n        "),a("p"),t._v("The sample size will always be insufficient to truly prove which deck was the best in the entire history of Magic, but the ratings should be a good indicator of what tier the decks lie in. Ultimately, this site is purely for fun and should not be taken seriously. I hope you enjoy it and please feel free to connect with me on Twitter "),a("a",{attrs:{href:"https://twitter.com/rob_pisano",target:"_blank"}},[t._v("@Rob_Pisano")]),t._v(" to let me know what you think. Thanks for visiting!\n      ")])])],1)],1)},D=[],R={name:"Introduction",created:function(){},data:function(){return{}},methods:{}},j=R,S=a("f09f"),A=a("639d"),E=a("a370"),P=Object(c["a"])(j,C,D,!1,null,null,null),$=P.exports;b()(P,"components",{QCard:S["a"],QParallax:A["a"],QCardSection:E["a"]});var M={name:"PageIndex",components:{Top10Decks:_,RecentResults:T,Introduction:$},data:function(){return{}}},O=M,z=a("9989"),Y=Object(c["a"])(O,s,i,!1,null,null,null);e["default"]=Y.exports;b()(Y,"components",{QPage:z["a"]})}}]);