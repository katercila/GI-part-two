import React from 'react';
import { Component } from 'react'; //specific item from librabry 
import './App.css';
import BasicInfo from './BasicInfo'

// class BasicInfo extends React.Component {
//   render() {
//     const { name, number, dateOfBirth } = this.props.person;
//     return (
//       <div className="info">
//         <p>Name: {name}</p>
//         <p>Number: {number}</p>
//         <p>Date of Birth: {dateOfBirth}</p>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       people: [
//         {
//                   name: 'Katerin Ercila',
//                   number: '1234567890',
//                   dateOfBirth: 'November 1, 2023'
//                 },
//                 { name: 'Emen Edmond',
//                 number: '1234567890',
//                 dateOfBirth: 'April 1, 2016'
//                 },
//                 { name: 'Lucy Lou',
//                 number: '1234567890',
//                 dateOfBirth: 'November 15, 2019'
//                 }
//       ]
//     };
//   }

//   render() {
//     const peopleList = this.state.people.map((person, index) => (
//       <div className="container" key={index}>
//         <div className="info">
//           <BasicInfo person={person} />
//         </div>
//       </div>
//     ));
//     return <div>{peopleList}</div>;
//   }
// }

// ----VERY EASY----

class App extends Component {
  render(){
    return (
    <div className="App">
      <ul>
        <li> name: Kat </li>
        <li> age: 12 </li>
        <li> number: 10 </li>
      </ul>
    </div>
    )

}
}
// ----EASY/MEDIUM-----
class App extends Component {
  constructor(props) {
    super(props); //passes props from parent. parent -> child
    this.state = {
     person: [
     {
      name: 'Kat',
      age: 10,
      number: 10
     },
     person: {
      name: 'Lucy',
      age: 20,
      number: 110
     },
     person: {
      name: 'Emem',
      age: 8,
      number: 90
     }
    ]
    }
  }
  render() {
const favPeople = this.state.people.map((person, index) => (
  <div key={index}>
    <BasicInfo person = {person} />
  </div>
))



  render() {
    return(
      <BasicInfo person = {this.state.person} />
      {favPeopele}
    )
  }
}

export default App;
