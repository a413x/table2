import {useState} from 'react'
import {TableHead, colNames} from './TableHead.js'
import {FirstColumn} from './FirstColumn.js'
import {TableBody} from './TableBody.js'
import {Details} from './Details/Details.js'
import {setScroll} from '../utils/utils.js'
import '../styles/Table.css';
import '../styles/Scrollbars.css';

export function Table({ data, dataToShow, sortCallback }) {
  const [selectedData, setSelectedData] = useState(data[0])
  const [showDetails, setShowDetails] = useState(false)

  const onLinkClick = (id) => {
    const selected = data.filter(dataObj => dataObj._id === id)[0]
    setSelectedData(selected)
    setShowDetails(true)
  }
  const onDetailsClose = () => {
    setScroll()
    setShowDetails(false)
  }

  return (
    <div className = 'table-container'>
      <TableHead data = {data} sortCallback = {sortCallback}/>

      <div className = 'table-body-container'>
        <FirstColumn
          dataToShow = {dataToShow}
          onLinkClick = {onLinkClick}
          showDetails = {showDetails}
          selectedData = {selectedData}
        />
        <div className = 'body-details-container'>
          <TableBody
            data = {dataToShow}
            colNames = {colNames.slice(1)}
          />
          <Details
            dataObj = {selectedData}
            show = {showDetails}
            onClose = {onDetailsClose}
          />
        </div>
      </div>

    </div>
  );
}
