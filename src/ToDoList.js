import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import ToDo from './ToDo';
import download from'./download.json'

class ToDoList extends Component {
  state = {
    title :"",
    toDoLists : [],
  }
  
  componentDidMount() {

    // fetch(download)
    // .then(response => response.json())
    // .then(data => this.setState({toDoLists : data}));   
    this.setState({toDoLists : download});        
  }
    
  addNewTask = (event) => {
    event.preventDefault();

       if (this.state.toDo !== "") {    
        this.setState((prevState) => ({
          title :"",     
          toDoLists : [{title:prevState.title, completed:false, id:Math.random()},...prevState.toDoLists ]
        }))
      }
  }

  updateInput = (event) => {
    this.setState({
      title : event.target.value
    })
  }

  delelteList = (id) => {  
    this.setState((previousState) => ({
      toDoLists : previousState.toDoLists.filter((list) => {
        return list.id !== id;
      })
    }))
  }

  completeList = (id, title) => { 
    this.setState((previousState) => ({
      toDoLists : previousState.toDoLists.filter((list) => {
        return list.id !== id;
      })        
    }));

    this.setState((prevState) => ({
      toDoLists : [...prevState.toDoLists, {title:title, completed:true, id: Math.random()}]
    }))
  }
  
  inCompleteList = (id, title) => {  
    this.setState((previousState) => ({
      toDoLists : previousState.toDoLists.filter((list) => {
        return list.id !== id;
      })        
    }));

    this.setState((prevState) => ({
      toDoLists : [{title:title, completed:false, id:  Math.random()},...prevState.toDoLists]
    }))

  }
  
  render() {
    return (
      <div className="main">
        <h1>Make your ToDo List !</h1>
        <form onSubmit = {this.addNewTask}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.updateInput} 
            placeholder="Enter what you're going to do"
          />
          <button className="submitButton" type="submit">ADD</button>
        </form>
      
          <div>
            <div id="toDoTitle">TODO</div>
            <div>
                {this.state.toDoLists.filter( (list) => !list.completed).map( list =>
                  <ToDo key={list.id} completeList={this.completeList} delelteList={this.delelteList} title={list.title} 
                  id={list.id} isCompleted={list.completed}/>   
                )}
            </div>  
          </div>
         
            {this.state.toDoLists.filter( (list) => !list.completed).length === 0 &&  <div className="empty">Nothing to do</div>}
         
          <div>
            <div id="completedTitle">COMPLETED</div>
            <div>
              {this.state.toDoLists.filter( (list) => list.completed).map( list =>
                <ToDo key={list.id} inCompleteList={this.inCompleteList} delelteList={this.delelteList} title={list.title} 
                id={list.id} isCompleted={list.completed}/>   
              )} 
            </div>
          </div>

            {this.state.toDoLists.filter( (list) => list.completed).length === 0 &&  <div className="empty">Nothing completed</div>}      
      </div>
    );
  }
}

ToDo.propTypes = {
  delelteList: PropTypes.func.isRequired
};

export default ToDoList;


