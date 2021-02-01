import {TableHead, colNames} from './TableHead.js'
import '../styles/Table.css';

export function Table({ data }) {
  return (
    <table className = 'table'>
      <TableHead />
      <tbody>
        {data.map((dataObj, ind) =>
          <tr key = {'tr-' + ind}>
            {colNames.map((colObj, ind) =>
              <td key = {ind}>
                { dataObj[colObj.name] }
              </td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  );
}
