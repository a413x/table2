import {convertDate, formatDaysLeft} from '../utils/utils.js'

export function TableBody({data, colNames}) {
  const handleData = (data, col) => {
    const value = data[col.name]
    if(col.name === 'date') {
      return convertDate(value)
    }else if(col.name === 'daysleft'){
      return formatDaysLeft(value)
    }else {
      return value
    }
  }

  return (
    <div className = 'table-body'>
      <table>
        <tbody>
          {data.map((dataObj, ind) =>
            <tr key = {'tr-' + ind}>
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
