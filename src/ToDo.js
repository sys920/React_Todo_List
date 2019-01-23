import React, { Component} from 'react'
import PropTypes from 'prop-types';
import './App.css';

class ToDo extends Component {
  render(){
    return(
      <div>
        <div id="toDoText">
          {this.props.toDo} 
        </div> 

        { this.props.isCompleted ?
        <span > 
            <button  className="completeButton" onClick = { () => {this.props.inCompleteList(this.props.randomNum, this.props.toDo)} }>Incomplete</button>
            <button  className="delButton" onClick = { () => {this.props.delelteList(this.props.randomNum)} }>Delete</button>
        </span>
        :            
        <span>
          <button  className="completeButton" onClick = { () => {this.props.completeList(this.props.randomNum, this.props.toDo)} }>Complete</button>
          <button  className="delButton" onClick = { () => {this.props.delelteList(this.props.randomNum)} }>Delete</button> 
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