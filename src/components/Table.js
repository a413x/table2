import {useState} from 'react'
import {TableHead} from './TableHead.js'
import {TableBody} from './TableBody.js'
import '../styles/Table.css';
import '../styles/Scrollbars.css';

export function Table({ data, dataToShow, sortCallback }) {
  const [selectedData, setSelectedData] = useState(data[0])

  const onLinkClick = (id) => {
    setSelectedData(
      data.filter(dataObj => dataObj.id === id)
    )
  }

  return (
    <div className = 'table-container'>
      <table className = 'table'>
        <TableHead data = {data} sortCallback = {sortCallback} />
        <TableBody data = {dataToShow} onLinkClick = {onLinkClick} />
      </table>
    </div>
  );
}
