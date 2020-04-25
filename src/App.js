import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import CreatUser from './component/CreateUser'
import CreateExercise from './component/CreateExercise'
import ExerciseList from './component/ExerciseList'
import EditExercise from './component/EditExercise'


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
      <br />
      <Route exact path="/" component={ExerciseList} />
      <Route exact path="/user" component={CreatUser} />
      <Route exact path="/create" component={CreateExercise} />
      <Route exact path="/edit/:id" component={EditExercise} />
      </div>
    </Router>
  );
}

export default App;
