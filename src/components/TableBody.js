import {Link} from './Link.js'
import {colNames} from './TableHead.js'
import {convertDate, formatDaysLeft} from '../utils/utils.js'

export function TableBody({data, onLinkClick}) {
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
  );
}
