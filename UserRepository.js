class UserRepository {

	constructor(){
		console.log("constructor user repository")
	}

	destructor(){
		console.log("destructor")
	}
	get(){
		return "Hello awilix"
	}

}

module.exports = UserRepository;

