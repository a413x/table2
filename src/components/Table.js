import {TableHead, colNames} from './TableHead.js'
import '../styles/Table.css';

export function Table({ data, sortCallback }) {
  return (
    <div className = 'table-container'>
      <table className = 'table'>
        <TableHead data = {data} sortCallback = {sortCallback} />
        <tbody>
          {data.map((dataObj, ind) =>
            <tr key = {'tr-' + dataObj._id}>
              {colNames.map((colObj, ind) =>
                <td key = {ind}>
                  { dataObj[colObj.name] }
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
