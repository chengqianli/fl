
var EventEmitter=require('events').EventEmitter;
var assign=require('object-assign');

var TodoStore=assign({},EventEmitter.prototype,{
	todos:[],
	addTodoItemHandle:function(text){
		this.todos.push(text)
	},
	emitChange:function(){
		this.emit('change')
	},
	emitChangeListener:function(callback){
		this.on('change',callback)
	},
	getAll:function(){
		return this.todos;
	}	
})


module.exports=TodoStore;

