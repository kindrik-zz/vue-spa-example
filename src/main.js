import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import carousel from './widgets/carousel-widget.vue'
import card from './widgets/card-widget.vue'
import formWidget from './widgets/form-widget.vue'
import navbar from './widgets/navbar-widget.vue'
import tableWidget from './widgets/table-widget.vue'
import paginationWidget from './widgets/pagination-widget.vue'
import progressWidget from './widgets/progress-widget.vue'
import tabsWidget from './widgets/tabs-widget.vue'
import listWidget from './widgets/list-widget.vue'
import accordianWidget from './widgets/accordian-widget.vue'
import jumbotronWidget from './widgets/jumbotron-widget.vue'
import popoverWidget from './widgets/popover-widget.vue'
import mediaWidget from './widgets/media-widget.vue'
import inputGroupWidget from './widgets/input-group-widget.vue'
import buttonGroupWidget from './widgets/button-group-widget.vue'
import badgeWidget from './widgets/badge-widget.vue'
import buttonWidget from './widgets/button-widget.vue'
import formGroupWidget from './widgets/form-group-widget.vue'
import modalWidget from './widgets/modal-widget.vue'
import twoCol from './widgets/basic-2-col-widget.vue'
import threeCol from './widgets/basic-3-col-widget.vue'
import fourCol from './widgets/basic-4-col-widget.vue'
import fiveCol from './widgets/basic-5-col-widget.vue'
import sixCol from './widgets/basic-6-col-widget.vue'
import sevenCol from './widgets/basic-7-col-widget.vue'
import eightCol from './widgets/basic-8-col-widget.vue'
import nineCol from './widgets/basic-9-col-widget.vue'
import tenCol from './widgets/basic-10-col-widget.vue'
import elevenCol from './widgets/basic-11-col-widget.vue'
import twelveCol from './widgets/basic-12-col-widget.vue'


import homepage from './routes/homepage.vue'
import jumbotronPage from './routes/jumbotronPage.vue'
import carouselPage from './routes/carouselPage.vue'
import cardsPage from './routes/cardsPage.vue'
import formsPage from './routes/formsPage.vue'
import tablesPage from './routes/tablesPage.vue'
import accordianPage from './routes/accordianPage.vue'
import listsPage from './routes/listsPage.vue'
import paginationPage from './routes/paginationPage.vue'
import progressPage from './routes/progressPage.vue'

Vue.use(BootstrapVue)

Vue.component('carousel', carousel);
Vue.component('card', card);
Vue.component('formWidget', formWidget);
Vue.component('navbar', navbar);
Vue.component('tableWidget', tableWidget);
Vue.component('paginationWidget', paginationWidget);
Vue.component('progressWidget', progressWidget);
Vue.component('tabsWidget', tabsWidget);
Vue.component('listWidget', listWidget);
Vue.component('accordianWidget', accordianWidget);
Vue.component('jumbotronWidget', jumbotronWidget);
Vue.component('popoverWidget', popoverWidget);
Vue.component('mediaWidget', mediaWidget);
Vue.component('inputGroupWidget', inputGroupWidget);
Vue.component('buttonGroupWidget', buttonGroupWidget);
Vue.component('badgeWidget', badgeWidget);
Vue.component('buttonWidget', buttonWidget);
Vue.component('formGroupWidget', formGroupWidget);
Vue.component('modalWidget', modalWidget);
Vue.component('twoCol', twoCol);
Vue.component('threeCol', threeCol);
Vue.component('fourCol', fourCol);
Vue.component('fiveCol', fiveCol);
Vue.component('sixCol', sixCol);
Vue.component('sevenCol', sevenCol);
Vue.component('eightCol', eightCol);
Vue.component('nineCol', nineCol);
Vue.component('tenCol', tenCol);
Vue.component('elevenCol', elevenCol);
Vue.component('twelveCol', twelveCol);


Vue.use(VueRouter)

const routes = [
  { path: '/', component: homepage },
  { path: '/jumbotronPage', component: jumbotronPage },
  { path: '/carouselPage', component: carouselPage },
  { path: '/cardsPage', component: cardsPage},
  { path: '/formsPage', component: formsPage},
  { path: '/tablesPage', component: tablesPage},
  { path: '/accordianPage', component: accordianPage},
  { path: '/listsPage', component: listsPage},
  { path: '/paginationPage', component: paginationPage},
  { path: '/progressPage', component: progressPage}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
