
var AppDispatcher=require('../dispatch/AppDispatcher')

var TodoActions={
	addTodoItem:function(text){
		AppDispatcher.dispatch({
			actionType:'ADD_TODO_ITEM',
			text:text
		})	
	}	
}



module.exports=TodoActions;