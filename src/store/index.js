import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        email: '',
        password: '',
        user_id: '',
        addressBook: [],
        addPage: {
            email: '',
            contact_number: '',
            name: '',
            active: true,
            isNew: true /* false when user wants to edit */
        },
    },
    mutations,
    actions

})
