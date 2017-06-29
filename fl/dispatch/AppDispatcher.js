
var Dispatcher=require('flux').Dispatcher;
var AppDispatcher=new Dispatcher()
var TodoStore=require('../store/TodoStore')

AppDispatcher.register(function(action){
	switch (action.actionType){
		case 'ADD_TODO_ITEM':
			TodoStore.addTodoItemHandle(action.text)
			TodoStore.emitChange()
		break;
	}	
})

module.exports=AppDispatcher;