'use strict'
const { formatters } = use('Validator')
class StoreUser {
  get rules () {
    return {
      username: 'required|max:100',
      email: 'required|email|max:200|unique:users,email',
      password: 'required|max:100'
    }
  }

  get validateAll () {
    return true
  }

  get formatter(){
    return formatters.JsonApi
  }
}

module.exports = StoreUser
