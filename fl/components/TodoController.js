var React=require('react');
var Todo=require('./Todo')
var TodoActions=require('../action/TodoActions')

var TodoStore=require('../store/TodoStore')


var TodoController=React.createClass({
	getInitialState:function(){
		return{
			res:TodoStore.getAll()
		}
	},
	addTodo:function(text){
		TodoActions.addTodoItem(text)
	},
	addTotoChange:function(){
		var str=	TodoStore.getAll()
		this.setState({res:str})
	},
	render:function(){
		return(
			<Todo onClick={this.addTodo} name={this.state.res}/>
		)
	},
	componentDidMount:function(){
		TodoStore.emitChangeListener(this.addTotoChange)
	}
})



module.exports=TodoController;