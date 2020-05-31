import React, {useEffect, useState} from 'react';
import './App.css';

import API from '@aws-amplify/api'

function App() {
  const [people, updatePeople] = useState([])
  async function callApi() {
    try {
      const peopleData = await API.get('mainapi', '/people')
      console.log('People Data: ', peopleData)
      updatePeople(peopleData.people)
    } catch (err) {
      console.log({ err })
    }
  }

  useEffect(() => {
    callApi()
  }, [])

  return (
    <div className="App">
      <h1>Hello World ...!!!</h1>
      {
        people.map((p, i) => <h2>{p.name}</h2>)
      }
    </div>
  );
}

export default App;
