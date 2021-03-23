import api from '@/api'
import store from '@/store/index.js'

export default {



  register: (context, { payload }) => new Promise((resolve, reject) => {
    return api.register(payload)
      .then((response) => {
        if (response && response.res && response.res == "0" && response.data.user_id) {
          let data = {
            email: response.data.email,
            password: response.data.password
          }
          localStorage.setItem('user_id', btoa(response.data.user_id))
          context.commit('SAVED_USERID', response.data.user_id)
          context.commit('SAVE_LOGIN_DETAILS', data)
          resolve(response.data.user_id)
        } else reject(response)
      }).catch(err => {
        reject(err)
      })
  }),

  login: (context, { payload }) => new Promise((resolve, reject) => {
    return api.login(payload)

      .then((response) => {

        if (response && response.res && response.res == "0" && response.data.user_id) {
          localStorage.setItem('user_id', btoa(response.data.user_id))
          context.commit('SAVED_USERID', response.data.user_id)
          let data = {
            email: response.data.email,
            password: response.data.password
          }
          context.commit('SAVE_LOGIN_DETAILS', data)
          resolve(response.data.user_id)
        } else reject(response)
      }).catch(err => {
        context.commit('CLEAR_LOGIN_DETAILS')
        reject(err)
      })
  }),

  /**
 * get addresslist
 */
  getAddressList: (context, { user_id }) => new Promise((resolve, reject) => {
    return api.getAddressList(user_id)
      .then(response => {
        if (response && response.res && response.res == '0' && response.data && Array.isArray(response.data)) {
          context.commit('SAVE_ADDRESSLIST', { data: response.data })
          resolve(response)
        }
        else {
          reject(response)
        }
      }).catch(err => {
        reject(err)
      })
  }),


  updateContact: (context, { address_id, user_id, payload }) => new Promise((resolve, reject) => {

    return api.updateContact({ address_id, user_id, payload }).then(res => {

      if (res && res.res && res.res == '0' && res.data) {
        context.commit('UPDATE_CONTACT_LOCALLY', { data: res.data })

        resolve(res)
      } else {

        reject(res)
      }
    }).catch(err => {


      reject(err)
    })
  }),

  /**
  * Delete contact
  */
  deleteContact: (context, { user_id, address_id }) => new Promise((resolve, reject) => {
    api.deleteContact(user_id, address_id).then(res => {
      console.log(res);
      if (res && res.res && res.res == '0') {
        context.commit('REMOVE_CONTACT', address_id)

        resolve(res)
      } else {
        reject(res)
      }
    }).catch(err => {
      reject(err)
      console.log(err)
    })
  }),


  addContact: (context, { payload }) => new Promise((resolve, reject) => {

    return api.addContact(payload).then(res => {
      if (res && res.res && res.res == '0' && res.data) {
        context.commit('ADD_CONTACT_LOCALLY', { data: res.data })
        context.commit('CLEAR_ADDPAGE_DATA')

        resolve(res)
      } else {

        reject(res)
      }
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  }),

  clearLoginDetails(context) {
    context.commit('CLEAR_LOGIN_DETAILS');
  },

  setUserId: (context, user_id) => context.commit('SET_USERID', user_id),

  retriveDataForEditPage: (context, address_id) => {
    store.state.addressBook.map(element => {
      if (element.address_id == address_id) {
        let data = element
        context.commit('SET_DATA_TO_EDIT', { data })
      }
      return element.address_id == address_id
    });
  },

  clearAddPageData: (context) => context.commit('CLEAR_ADDPAGE_DATA'),

}