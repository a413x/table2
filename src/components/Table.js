import {useState} from 'react'
import {TableHead, colNames} from './TableHead.js'
import {Link} from './Link.js'
import {convertDate, formatDaysLeft} from '../utils/utils.js'
import '../styles/Table.css';
import '../styles/Scrollbars.css';

export function Table({ data, dataToShow, sortCallback }) {
  const [selectedData, setSelectedData] = useState(data[0])

  const onLinkClick = (id) => {
    setSelectedData(
      data.filter(dataObj => dataObj.id === id)
    )
  }
  const handleData = (data, col) => {
    const value = data[col.name]
    if(col.name === 'date') {
      return convertDate(value)
    }else if(col.name === 'daysleft'){
      return formatDaysLeft(value)
    }else if(col.name === 'number'){
      return <Link dataObj = {data} onLinkClick = {onLinkClick} />
    }else {
      return value
    }
  }

  return (
    <div className = 'table-container'>
      <table className = 'table'>
        <TableHead data = {data} sortCallback = {sortCallback} />
        <tbody>
          {dataToShow.map((dataObj, ind) =>
            <tr key = {'tr-' + dataObj._id}>
              {colNames.map((colObj, ind) =>
                <td key = {ind}>
                  {handleData(dataObj, colObj)}
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
