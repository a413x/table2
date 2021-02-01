import './App.css';
import json from './__mock_data__/data.js'
import {useState, useEffect} from 'react'

const parsedData = JSON.parse(json);

function App() {
  const [data, setData] = useState(parsedData)

  useEffect(() => {
  })

  return (
    <div className="App">
    </div>
  );
}

export default App;
