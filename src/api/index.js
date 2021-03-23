import axiosutil from '@/utils/axiosutil.js'
//import axios from 'axios';
const API_NAME = {
  register: 'registration',
  login: 'login',
  getAddressList: 'getAddressBookByID',
  addContact: 'createAddressBook',
  updateContact: 'updateAddressBook',
  deleteContact: 'removeAddressBook',
}
export default {

  /**
   * POST
    * desc: api to login
    * req:{ "email":"123@gmail.com", "password":"123" }
    * res: { "res": "0", "msg": "Login User", "user_id": 13 }
    * res: { "res": "0", "msg": "Incorreact Email or password" }
    */
  register: (payload) => axiosutil.post(API_NAME.register, payload),


  /**
    * POST
    * desc: api to login
    * req:{ "email":"123@gmail.com", "password":"123" }
    * res: { "res": "0", "msg": "Login User", "user_id": 13 }
    * res: { "res": "0", "msg": "Incorreact Email or password" }
    */
  login: (payload) => axiosutil.post(API_NAME.login, payload),



  /**
   * GET
   * desc: api to get contactlist
   * res: { "res": "0", "msg": [  
   * {
         "address_id": 3,
          "name": "jb",
          "email": "jb@gmail.com",
          "contact_number": "7788445566",
          "is_active": 0,
          "create_date": "2018-07-30T18:30:00.000Z",
          "user_id": 6,
          "is_deleted": 0,
      }, ...]}
   */
  getAddressList: (user_id) => axiosutil.get(`${API_NAME.getAddressList}/${user_id}`),


    /*
  *  POST
  *  desc: api to add contact
  *  req:{ "name":"abc","email":"abc.abc@gmail.com",,  "contact_number":"8956231245","is_active":"true","user_id":"6" }
  *  res: { "res": "0", "msg": [  
      "Successfully Added"
      ]
    }
  */
  addContact: (payload) => axiosutil.post(API_NAME.addContact, payload),



  /**
    * PUT
    * desc
    * req: {"email":"pd@abc.com","contact_number":"45545","name":"pd11","active":true,"isNew":false}
    * res: {"res":"0","msg":"Successfully update",
    *  "data":{
    *      "address_id":45,
    *      "name":"pd11",
    *      "email":"pd@abc.com",
    *      "contact_number":"45545",
    *      "is_active":1,
    *      "create_date":"2018-08-04T18:30:00.000Z",
    *      "user_id":5,
    *      "is_deleted":0
    *  }
    * }
    */
  updateContact: ({ address_id, user_id, payload }) => axiosutil.put(`${API_NAME.updateContact}/${user_id}/${address_id}`, payload),


  
  /**
    * DELETE
    * desc: api to delete contact
    * res: {res: "0", msg: "successfully delete"}
    */
  deleteContact: (user_id, address_id) => axiosutil.delete(`${API_NAME.deleteContact}/${user_id}/${address_id}`),


}