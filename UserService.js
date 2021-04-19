const UserRepository = require("./UserRepository.js");

class UserService {

	// constructor(opts){
	constructor({userRepository}){
		this.userRepository = userRepository
		console.log("user service constructor")
	}

	start(){
		console.log(this.userRepository.get())

	}

	delete(){
		return "deleted"
	}
}

module.exports = UserService;

