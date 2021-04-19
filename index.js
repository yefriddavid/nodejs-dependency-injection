//const Child = require("./Child.js");
const container = require("./ContainerAwilix.js");


( async () => {

	child = new Child();
	//child = await container().resolve("child")
	//child2 = await container().resolve("child")
	//child2 = await container.resolve("child")

	child.run()

	console.log("the end");
} )()

