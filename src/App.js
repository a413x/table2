import './styles/App.css';
import {default as json} from './__mock_data__/data.json'
import {useState} from 'react'
import {sortData} from './utils/utils.js'

import {Table} from './components/Table.js'
import {PagesNav} from './components/PagesNav.js'

export const rowsOnPage = 20

function App() {
  const [data, setData] = useState(json)
  const [page, setPage] = useState(1)

  const sortCallback = (col, order) => {
    const sortedData = sortData(data, col.name, order)
    setData(sortedData)
  }

  const pageChangeCallback = (newPage) => {
    setPage(newPage)
  }

  let from = (page-1)*rowsOnPage;
  const dataToShow = data.slice(from, from + rowsOnPage)

  return (
    <div className = 'container'>
      <Table
        data = {data}
        dataToShow = {dataToShow}
        sortCallback = {sortCallback}
      />
      <PagesNav
        page = {page}
        onPageChange = {pageChangeCallback}
        dataLength = {data.length}
      />
    </div>
  );
}

export default App;
