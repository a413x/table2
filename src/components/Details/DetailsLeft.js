import LinkImg from '../../icons/link.svg'
import {colNames} from '../TableHead.js'
import {handleData} from '../TableBody.js'

export function DetailsLeft({ dataObj, onClose }) {
  const onCloseClick = (e) => {
    e.preventDefault()
    onClose()
  }
  return (
    <div className = 'details-left'>
      <p><a href = '/' onClick = {onCloseClick}>Скрыть детали</a></p>
      <p className = 'deal-number'>
        Сделка №{dataObj.number}<img src = {LinkImg} alt = 'link' />
      </p>
      <p>Информация о сделке</p>
      <table>
        <tbody>
          {colNames.map((colObj, ind) =>
            <tr key = {ind}>
              <td>{colObj.title}</td>
              <td>{handleData(dataObj,colObj)}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
