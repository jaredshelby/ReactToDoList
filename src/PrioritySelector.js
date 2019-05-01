import React from "react";

class PrioritySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'low-priority'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
          <select className="select-css" value={this.state.value} onChange={this.handleChange}>
              <option value="low-priority">Low Priority</option>
              <option value="medium-priority">Medium Priority</option>
              <option value="high-priority">High Priority</option>
          </select>
    );
  }
}

export default PrioritySelector;