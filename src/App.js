import './App.css';
import json from './__mock_data__/data.js'
import {useState, useEffect} from 'react'

import {Table} from './components/Table.js'

const parsedData = JSON.parse(json);

function App() {
  const [data, setData] = useState(parsedData)

  useEffect(() => {
  })

  return (
    <div className = 'container'>
      <Table data = {data} />
    </div>
  );
}

export default App;
