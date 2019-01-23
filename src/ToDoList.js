import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import ToDo from './ToDo';

class ToDoList extends Component {
  state = {
    toDo :"",
    toDoLists : []
  }
  
  formSubmit = (event) => {
    event.preventDefault();

       if (this.state.toDo !== "") {    
        this.setState((prevState) => ({
          toDo :"",     
          toDoLists : [...prevState.toDoLists, {toDo:prevState.toDo, completed:false, randomNum: Math.random()}]
        }))
      }
  }

  updateInput = (event) => {
    this.setState({
      toDo : event.target.value
    })
  }

  delelteList = (randomNum) => {  
    this.setState((previousState) => ({
      toDoLists : previousState.toDoLists.filter((list) => {
        return list.randomNum !== randomNum;
      })
    }))
  }

  completeList = (randomNum, toDo) => { 
    this.setState((previousState) => ({
      toDoLists : previousState.toDoLists.filter((list) => {
        return list.randomNum !== randomNum;
      })        
    }));

    this.setState((prevState) => ({
      toDoLists : [...prevState.toDoLists, {toDo:toDo, completed:true, randomNum: Math.random()}]
    }))
  }
  
  inCompleteList = (randomNum, toDo) => {  
    this.setState((previousState) => ({
      toDoLists : previousState.toDoLists.filter((list) => {
        return list.randomNum !== randomNum;
      })        
    }));

    this.setState((prevState) => ({
      toDoLists : [...prevState.toDoLists, {toDo:toDo, completed:false, randomNum: Math.random()}]
    }))

  }

  render() {
    return (
      <div className="main">
        <h1>Make your ToDo List !</h1>
        <form onSubmit = {this.formSubmit}>
          <input
            type="text"
            value={this.state.toDo}
            onChange={this.updateInput} 
            placeholder="Enter what you're going to do"
          />
          <button className="submitButton" type="submit">ADD</button>
        </form>
      
          <div>
            <div id="toDoTitle">TODO </div>
            <div>
                {this.state.toDoLists.filter( list => list.completed !== true).slice(0).reverse().map( list =>
                  <ToDo key={list.toDo} completeList={this.completeList} delelteList={this.delelteList} toDo={list.toDo} 
                  randomNum={list.randomNum} isCompleted={list.completed}/>   
                )}
            </div>  
          </div>
         
            {this.state.toDoLists.filter( list => list.completed !== true).length === 0 &&  <div className="empty">Nothing to do</div>}
         
          <div>
            <div id="completedTitle">COMPLETED</div>
            <div>
              {this.state.toDoLists.filter( list => list.completed === true).map( list =>
                <ToDo key={list.toDo} inCompleteList={this.inCompleteList} delelteList={this.delelteList} toDo={list.toDo} randomNum={list.randomNum} isCompleted={list.completed}/>   
              )} 
            </div>
          </div>

            {this.state.toDoLists.filter( list => list.completed === true).length === 0 &&  <div className="empty">Nothing completed</div>}      
      </div>
    );
  }
}

ToDo.propTypes = {
  delelteList: PropTypes.func.isRequired
};

export default ToDoList;


