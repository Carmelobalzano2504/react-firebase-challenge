import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import './App.css';
import './main.css';
import Header from './Header';
import MainContent from './MainContent';


export default function App() {
  const [ homes, SetHomes ] = useState([]);
  const [ search, SetSearch ] = useState('');
  const ref = firebase.firestore().collection('homes');


  function getHomes() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
     SetHomes(items) 
     console.log(items);
    });
  }

  const result = homes.find(home => home === search);
  


  const HandleSearch = e => {  
    e.preventDefault();
   console.log(search);
   
  }


   useEffect(() => {
    getHomes()
  }, []);

  
    return (
      <>
      <div className="app">
        <Header />
        <div className="content-wrapper">
          <MainContent 
            HandleSearch={HandleSearch}
            search={search}
            SetSearch={SetSearch}
            homes={homes}
            result={result}
          />
        </div>
      

      </div>
      </>
    );
     
}



  // function handleSearchChange(event){
  //   setSearchTerm(event.target.value);
  // }

  

  //   function getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  // }