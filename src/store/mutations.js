export default {
    //login start
    SAVED_USERID: (state, user_id) => {

        state.user_id = user_id
    },

    SAVE_LOGIN_DETAILS: (state, data) => {
        state.email = data.email
        state.password = data.password
    },

    CLEAR_LOGIN_DETAILS: state => {
        state.email = ''
        state.password = ''
        state.addressBook = []
        state.user_id = ""
    },

    SET_USERID: (state, user_id) => state.user_id = user_id,
    // login end

   
  
    // addresslist starts
    SAVE_ADDRESSLIST: (state, { data }) => {
        state.addressBook = [...data]

    },
 

    ADD_CONTACT_LOCALLY: (state, { data }) => {
        state.addressBook.push(data)
    },

    CLEAR_ADDPAGE_DATA: state => {
        state.addPage.email = ''
        state.addPage.email = ''
        state.addPage.contact_number = ''
        state.addPage.name = ''
        state.addPage.active = true
        state.addPage.isNew = true
    },
   
    //edit address starts

    SET_DATA_TO_EDIT: (state, { data }) => {
        state.addPage.email = data.email
        state.addPage.contact_number = data.contact_number
        state.addPage.name = data.name
        state.addPage.active = true
        state.addPage.isNew = false
    },
    
    UPDATE_CONTACT_LOCALLY: (state, { data }) => {
        for (let i = 0; i < state.addressBook.length; i++) {
            if (state.addressBook[i].address_id == data.address_id)
                state.addressBook[i] = data
            break
        }
    },

    //edit address ends


    //delete address starts
    REMOVE_CONTACT: (state, address_id) => {
        state.addressBook = state.addressBook.filter(a => a.address_id != address_id)
    },

    //delete address ends

}