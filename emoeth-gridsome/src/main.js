// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'vuesax/dist/vuesax.css'
import Vuesax from 'vuesax'

export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.use(Vuesax, {});
    Vue.component('Layout', DefaultLayout);
}
