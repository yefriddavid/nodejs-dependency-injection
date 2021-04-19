const Container = require("./ContainerAwilix.js");

class Child {

	constructor(){
		//this.userService = userService
	}
	async run (){
	child = await Container().resolve("child")
	child2 = await Container().resolve("child")
		child.run()
		child2.run()



	}

}

module.exports = Child
//const user1 = new User();



