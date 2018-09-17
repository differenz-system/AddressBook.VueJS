export default {
  SAVE_USERID: (state, user_id) => {
    state.user_id = user_id
  },
  ADD_CONTACT: state => {
    state.addressBook.push(state.addPage)
    localStorage.setItem('addressBook', JSON.stringify(state.addressBook))
    state.addPage = { email: '', num: '', name: '' }
    alert('contact Added Successfully')
  },
  SAVE_ADDRESSLIST: (state, {data}) => {
    state.addressBook = [...data]
  },
  REMOVE_CONTACT: (state, { address_id }) => {
    state.addressBook =  state.addressBook.filter(a => a.address_id!=address_id)
  },
  RETRIVE_CONTACTS: state => {
    let addressBook = localStorage.getItem('addressBook')
    console.log(addressBook)
    if(addressBook && addressBook != '' && Array.isArray(JSON.parse(addressBook)))
      state.addressBook = [...JSON.parse(addressBook)]
    else {
      state.addressBook = []
      localStorage.setItem('addressBook',JSON.stringify('[]'))
    }
  },
  SET_DATA_TO_EDIT: (state, {data}) => {
      state.addPage.email =  data.email
      state.addPage.contact_number = data.contact_number
      state.addPage.name = data.name
      state.addPage.active = true
      state.addPage.isNew = false
  },
  CLEAR_ADDPAGE_DATA: state => {
    state.addPage.email = ''
    state.addPage.email =  ''
    state.addPage.contact_number = ''
    state.addPage.name = ''
    state.addPage.active = true
    state.addPage.isNew = true
  },
  ADD_CONTACT_LOCALLY: (state, {data}) => {
    state.addressBook.push(data)
  },
  UPDATE_CONTACT_LOCALLY: (state, {data}) => {
    for(let i = 0; i<state.addressBook.length;i++){
      if(state.addressBook[i].address_id == data.address_id)
        state.addressBook[i] = data
        break
    }
  },
  SET_USERID: (state, {user_id}) => state.user_id = user_id,
  CLEAR_REGISTER_DETAILS: state => { 
    state.registerPage.email = ''
    state.registerPage.password = ''
  },
  CLEAR_LOGIN_DETAILS: state => { 
    state.email = ''
    state.password = ''
  }
}
