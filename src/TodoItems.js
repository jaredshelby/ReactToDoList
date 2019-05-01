import React from "react";
 
class TodoItems extends React.Component {
  constructor(props) {
    super(props);

    // Using bind to ensure 'this' has the correct meaning
    this.createToDo = this.createToDo.bind(this);
  }

  // Function called by li onClick calls other function in ToDoList component
  remove(key) {
    this.props.remove(key);
  }

  // Function that returns JSX for li
  createToDo(item) {
    return <li className={item.priority} onClick={ () => this.remove(item.key)} 
    key={item.key}><span>X</span>{item.text}</li>
  }
 
  render() {
    // Entries method returns an array of all To Dos
    var todoEntries = this.props.entries;

    // Using map to create li for each To Do
    var listItems = todoEntries.map(this.createToDo);

    return (
      <div>
        <ul className="full-list">
            {listItems}
        </ul>
        {/*<button onClick={this.sortItems}>Sort By Priority</button>*/}
      </div>
    );
  }
};
 
export default TodoItems;