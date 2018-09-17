import api from './api.js'
import Snackbar from '@/components/Snackbar.vue'
export default {
  /**
   * Register
   */
  register: ({ commit, state }) => new Promise((resolve, reject) => {
    let obj = { email: state.registerPage.email, password: state.registerPage.password }
    api.register({ obj }).then(res => {
      //if response comes and response.res is 0 and there IS user_id
      if (res && res.res && res.res == '0' && res.user_id) {
        localStorage.setItem('user_id', btoa(res.user_id))
        commit('SAVE_USERID', res.user_id)
        resolve(res.user_id)
      } else reject(res)
    }).catch(err => {
      reject(err)
    }).finally(() => commit('CLEAR_REGISTER_DETAILS'))
  }),
  /**
   * Login
   */
  logIn: ({ commit, state }) => new Promise((resolve, reject) => {
    let obj = { email: state.email, password: state.password }
    api.logIn({ obj }).then(res => {
      //if response comes and response.res is 0 and there IS user_id
      if (res && res.res && res.res == '0' && res.user_id) {
        localStorage.setItem('user_id', btoa(res.user_id))
        commit('SAVE_USERID', res.user_id)
        resolve(res.user_id)
      } else reject(res)
    }).catch(err => {
      reject(err)
    }).finally(() => commit('CLEAR_LOGIN_DETAILS'))
  }),

  /**
   * get addresslist
   */
  getAddressList: ({ commit, state }) => new Promise((resolve, reject) => {
    api.getAddressList({ user_id: state.user_id }).then(res => {
      if (res && res.res && res.res == '0' && res.data && Array.isArray(res.data)) {
        commit('SAVE_ADDRESSLIST', { data: res.data })
        resolve()
      }
      reject()
    }).catch(err => {
      reject(err)
    })
  }),
  /**
   * Delete contact
   */
  deleteContact: ({ commit }, { contact }) => new Promise((resolve, reject) => {
    api.deleteContact({ user_id: contact.user_id, address_id: contact.address_id }).then(res => {
      if (res && res.res && res.res == '0') {
        commit('REMOVE_CONTACT', { address_id: contact.address_id })
        Snackbar.methods.openSnackbar('Deleted Successfully')
        resolve()
      } else reject()
    }).catch(err => {
      reject()
      console.log(err)
    })
  }),
  /**
   * add contact
   */
  addContact: ({ commit, state }) => new Promise((resolve, reject) => {
    if (state.addPage.email == '' || state.addPage.contact_number == '' || state.addPage.name == '') {

      Snackbar.methods.openSnackbar('Enter all details')
    } else {
      api.addContact({ obj: state.addPage, user_id: state.user_id }).then(res => {
        if (res && res.res && res.res == '0' && res.data) {
          commit('ADD_CONTACT_LOCALLY', { data: res.data })
          commit('CLEAR_ADDPAGE_DATA')
          Snackbar.methods.openSnackbar('User added successfully')
          resolve()
        } else {
          Snackbar.methods.openSnackbar('Something went wrong')
          reject()
        }
      }).catch(err => {
        Snackbar.methods.openSnackbar('Something went wrong')
        console.log(err)
        reject()
      })
    }
  }),
  /**
   * retrive data of contact when user clicks edit of any contact
   */
  updateContact: ({ commit, state }, { address_id }) => new Promise((resolve, reject) => {
    if (state.addPage.email == '' || state.addPage.contact_number == '' || state.addPage.name == '') {
      Snackbar.methods.openSnackbar('Enter all details')
    } else {
      api.updateContact({ address_id, user_id: state.user_id, obj: state.addPage }).then(res => {
        if (res && res.res && res.res == '0' && res.data) {
          commit('UPDATE_CONTACT_LOCALLY', { data: res.data })
          Snackbar.methods.openSnackbar('Updated Successfully')
          resolve()
        } else reject()
      }).catch(err => {
        reject()
        console.log(err)
      })
    }
  }),

  retriveDataForEditPage: ({ commit, state }, { address_id }) => {
    state.addressBook.some(element => {
      if (element.address_id == address_id) {
        let data = element
        commit('SET_DATA_TO_EDIT', { data })
      }
      return element.address_id == address_id
    });
  },
  /**
   * clearing data of addpage
   * used when contact is added successfully or user comes on add page
   */
  clearAddPageData: ({ commit }) => commit('CLEAR_ADDPAGE_DATA'),
  /**
   * Update contact information
   */
  setUserId: ({ commit }, { user_id }) => commit('SET_USERID', { user_id }),
  retriveFromLocalStorage: ({ commit }) => commit('RETRIVE_CONTACTS')
}
