import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
//import axios from 'axios';


class App extends Component {
    state = {
        todos: [
            {
                "id": uuid.v4(),
                "title": "delectus aut autem",
                "completed": false
            },
            {
                "id": uuid.v4(),
                "title": "quis ut nam facilis et officia qui",
                "completed": true
            },
            {
                "id": uuid.v4(),
                "title": "fugiat veniam minus",
                "completed": false
            },
            {
                "id": uuid.v4(),
                "title": "fugiat veniam minus",
                "completed": false
            },
            {
                "id": uuid.v4(),
                "title": "quis ut nam facilis et officia qui",
                "completed": true
            },
        ]
    }
    //Toggle Complete
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed= !todo.completed
            }
            return todo;

        })  });
    }
    //Delete Todo
    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }
    //Add Todo
    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo]});
    }


            render() {
                return (
                <Router>    
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props =>(
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo} />
                                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                            </React.Fragment>
                        )}/> 
                         <Route path="/about" component={About}/> 
                    </div>
                </Router>
                );
            }
}

export default App;





















