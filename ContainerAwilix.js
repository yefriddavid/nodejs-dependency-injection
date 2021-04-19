const UserRepository = require("./UserRepository.js");
const UserService = require("./UserService.js");
const Child = require("./Child.js");
const { createContainer, asClass } = require('awilix');

//const createAppContainer = () => {
/*const container = createContainer();

  container.register({
    userRepository: asClass(UserRepository),
    userService: asClass(UserService),
	  //child: asClass(Child)

	  /*userRepository: asClass(UserRepository).singleton(),
    userService: asClass(UserService).singleton(),
    child: asClass(Child).singleton()
  });
*/
//return container
//};


 (async () => {
	 //const Container = await createAppContainer();
 
	 //console.log(createAppContainer)
	 //const userService = await Container.resolve('userService');
 	
	 //userService.start()
 
 })()

//module.exports = createAppContainer;
//module.exports = container;
module.exports = createContainer()
    .register({
	    /*userRepository: asClass(UserRepository),
    userService: asClass(UserService),*/
	  //child: asClass(Child)

	  userRepository: asClass(UserRepository).singleton(),
	    userService: asClass(UserService).singleton()//,
	    //child: asClass(Child).singleton()
  });



//const user1 = new User();



