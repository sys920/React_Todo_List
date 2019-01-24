import React, { Component} from 'react'
import PropTypes from 'prop-types';
import './App.css';

class ToDo extends Component {
  render(){
    return(
      <div>
        <div id="toDoText">
          {this.props.title} 
        </div> 

        { this.props.isCompleted ?
        <span > 
            <button  className="completeButton" onClick = { () => {this.props.inCompleteList(this.props.id, this.props.title)} }>Incomplete</button>
            <button  className="delButton" onClick = { () => {this.props.delelteList(this.props.id)} }>Delete</button>
        </span>
        :            
        <span>
          <button  className="completeButton" onClick = { () => {this.props.completeList(this.props.id, this.props.title)} }>Complete</button>
          <button  className="delButton" onClick = { () => {this.props.delelteList(this.props.id)} }>Delete</button> 
        </span>
        }

      </div>     
    );
  }
}

ToDo.propTypes = {
  toDo: PropTypes.string.isRequired
};

export default ToDo;