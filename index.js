import VueAwesomeSwiper from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
import SwiperComponent from './swiper/swiper.vue'

const swiper = SwiperComponent
const install = function (Vue, globalOptions) {
  if (globalOptions) {
    SwiperComponent.props.globalOptions.default = () => globalOptions
  }
  Vue.component(SwiperComponent.name, SwiperComponent)
}
const Smiley = {  install }

export default Smiley