var React=require('react');
var Todo=React.createClass({
	addItem:function(){
		this.props.onClick(this.refs.ipt.value)	 
	},
	render:function(){
		var todoList=this.props.name.map(function(item,i){
			return <li key={i}>{item}</li>
		})
		return(
			<div>
				<input type="text" ref='ipt'/>
				<button onClick={this.addItem}>添加</button>
				<ul>
					{todoList}
				</ul>
			</div>
		)
	}
})


module.exports=Todo;