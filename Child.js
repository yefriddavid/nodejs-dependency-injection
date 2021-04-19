const Container = require("./ContainerAwilix.js");

class Child {

	constructor(){
		//this.userService = userService
	}
	run (){
	let user = Container.resolve("userRepository")
		//child2 = await Container().resolve("child")
		return user.get()
		//child2.run()



	}

}

module.exports = Child
//const user1 = new User();



