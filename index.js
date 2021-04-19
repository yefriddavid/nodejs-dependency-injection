const Child = require("./Child.js");
//const container = require("./ContainerAwilix.js");



child1 = new Child();
child2 = new Child();
child3 = new Child();
//child = await container().resolve("child")
//child2 = await container().resolve("child")
//child2 = await container.resolve("child")
let one = child1.run()
let two = child2.run()
let three = child3.run()

console.log(one);
console.log(two);
console.log(three);

console.log("the end");

