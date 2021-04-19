class UserRepository {

	index = 1
	constructor(){

		this.index++

		console.log("constructor user repository")
	}

	destructor(){
		console.log("destructor")
	}
	get(){
		return "I am repository Hello awilix " + this.index
	}

}

module.exports = UserRepository;

