import axiosutil from '@/utils/axiosutil.js'
export default {
    /**
     * POST
     * desc: api to login
     * req:{ "email":"123@gmail.com", "password":"123" }
     * res: { "res": "0", "msg": "Login User", "user_id": 13 }
     * res: { "res": "0", "msg": "Incorreact Email or password" }
     */
    logIn: ({obj}) => axiosutil.post('login', obj ),

    /**
    * POST
     * desc: api to login
     * req:{ "email":"123@gmail.com", "password":"123" }
     * res: { "res": "0", "msg": "Login User", "user_id": 13 }
     * res: { "res": "0", "msg": "Incorreact Email or password" }
     */
    register: ({obj}) => axiosutil.post('registration', obj),

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
    getAddressList: ( {user_id} ) => axiosutil.get(`display/${user_id}`),

    /**
     * GET
     * desc: api to delete contact
     * res: {res: "0", msg: "successfully delete"}
     */
    deleteContact: ( {user_id, address_id} ) => axiosutil.get(`/delete/${user_id}/${address_id}`),
    
    /**
     * 
     */
    addContact: ({obj, user_id}) => axiosutil.post(`addaddress/${user_id}`, obj),

    /**
     * POST
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
    updateContact: ({obj, user_id, address_id}) => axiosutil.post(`/update/${user_id}/${address_id}`, obj)
}