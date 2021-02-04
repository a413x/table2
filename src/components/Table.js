import {useState} from 'react'
import {TableHead, colNames} from './TableHead.js'
import {TableBody} from './TableBody.js'
import {Link} from './Link.js'
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
      <TableHead data = {data} sortCallback = {sortCallback}/>

      <div className = 'table-body-container'>
        <div className = 'first-col'>
          <table>
            <tbody>
              {dataToShow.map((dataObj, ind) =>
                <tr key = {'first-col-' + ind}><td>
                  <Link dataObj = {dataObj} onLinkClick = {onLinkClick} />
                </td></tr>
              )}
            </tbody>
          </table>
        </div>

        <TableBody data = {dataToShow} colNames = {colNames.slice(1)}/>
      </div>
    </div>
  );
}
