import React from "react";
import TodoItems from "./TodoItems";
import PrioritySelector from "./PrioritySelector";
 
class TodoList extends React.Component {
	constructor(props) {
		super(props);

		// Items array to store To Dos
		this.state = {
			items: []
		};

		// Using bind to ensure 'this' has the correct meaning - need to research this more to fully understand
		this.addToDo = this.addToDo.bind(this);
		this.removeToDo = this.removeToDo.bind(this);
	}

	addToDo(e) {
	  if (this.inputText.value !== "") {

	  	// Creating a new To Do as an object with text and key
	    var newToDo = {
	      text: this.inputText.value,
	      key: Date.now() + '-' + this.prioritySelect.state.value, // Using Date to set unique key for each item, adding priority to eventually add sorting
	      priority: this.prioritySelect.state.value
	    };
	 		
	 		// Adding new To Do 
	    this.setState( prevState => {
	      return { 
	        items: prevState.items.concat(newToDo)
	      };
	    });
	   
	   	// Clear out input text
	    this.inputText.value = "";
	  }
	     
	  e.preventDefault();
	}

	// Using filter to remove To Do using unique Date key
	removeToDo(key) {
	  var remainingToDos = this.state.items.filter(function (item) {
	    return (item.key !== key);
	  });
	 
	 	// Items array set to remaining To Dos after filtering 
	  this.setState({
	    items: remainingToDos
	  });
	}

  render() {
    return (
      <div className="todoListContainer">
        <div className="header">
        	<h1>To Do List</h1>
          <form onSubmit={this.addToDo}>
        		{/* Still trying to understand how the below works exactly, reference here: https://reactjs.org/docs/refs-and-the-dom.html */}
            <input ref={ a => this.inputText = a}
            placeholder="Add a To Do">
            </input>
            <PrioritySelector ref={ b => this.prioritySelect = b}/>
            <button type="submit"> + </button>
          </form>
        </div>
        <TodoItems entries={this.state.items} 
        						remove={this.removeToDo}/>
      </div>
    );
  }
}
 
export default TodoList;