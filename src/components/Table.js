import {TableHead, colNames} from './TableHead.js'
import {convertDate} from '../utils/utils.js'
import '../styles/Table.css';

export function Table({ data, sortCallback }) {
  const handleData = (data, col) => {
    const value = data[col.name]
    if(col.name === 'date') {
      return convertDate(value)
    }else {
      return value
    }
  }

  return (
    <div className = 'table-container'>
      <table className = 'table'>
        <TableHead data = {data} sortCallback = {sortCallback} />
        <tbody>
          {data.map((dataObj, ind) =>
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
