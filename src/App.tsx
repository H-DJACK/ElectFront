import React from 'react';
import axios from "axios";

const getData = async () => {
  try {
    const data  = await axios.get(
      'https://kf.kobotoolbox.org/api/v2/assets/aRqFzMJVJpLqFozSAyhqoa/data/?format=json', {
         auth: {
          username: 'antoinekes',
          password : 'kes2022'
         }
      });
    console.log(data);
    
  }catch (error){
    console.log(error);
  }

}

getData()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

    </div>
  );
}

export default App;
