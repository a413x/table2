import './styles/App.css';
import json from './__mock_data__/data.js'
import {useState} from 'react'
import {sortData} from './utils/utils.js'

import {Table} from './components/Table.js'

const parsedData = JSON.parse(json);

function App() {
  const [data, setData] = useState(parsedData)

  const sortCallback = (col, order) => {
    const sortedData = sortData(data, col.name, order)
    setData(sortedData)
  }

  return (
    <div className = 'container'>
      <Table data = {data} sortCallback = {sortCallback}/>
    </div>
  );
}

export default App;
