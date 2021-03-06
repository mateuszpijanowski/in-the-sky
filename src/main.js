import VueScrollReveal from 'vue-scroll-reveal';
import Vue from 'vue';
import App from './App.vue';

Vue.use(VueScrollReveal);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1000,
  scale: 1,
  distance: '10px',
  mobile: true,
});
