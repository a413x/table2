import {useState} from 'react'
import {Total} from './Total.js'
import '../styles/TableHead.css';
import Arrow from '../icons/arrow.svg'

export const colNames = [
  {name: 'number', title: 'Номер'},
  {name: '_id', title: "ID"},
  {name: 'date', title: 'Дата и время'},
  {name: 'proceeds', title:'Выручка', func: 'sum'},
  {name: 'profit', title: 'Прибыль', func: 'sum'},
  {name: 'daysleft', title: 'Дней до сделки', func: 'aver'},
  {name: 'sessions', title: 'Сессий в цепочке', func: 'aver'}
]

export function TableHead({data, sortCallback}) {
  const [activeCol, setActiveCol] = useState({name:'', order: 'asc'})

  const onClick = (col) => {
    let order = activeCol.order
    if(activeCol.name === col.name){
      order = order === 'asc' ? 'desc' : 'asc'
    }else{
      order = 'asc'
    }
    setActiveCol({name: col.name, order: order})
    sortCallback(col, order)
  }

  return (
    <div className = 'table-head'>
      <table>
        <thead>
          <tr className = 'header'>
            {colNames.map((col, ind) =>
              <th key = {'th-'+ind} onClick = {() => onClick(col)}>
                {col.title}
                {activeCol.name === col.name &&
                  <img src = {Arrow}
                    alt = 'arrow'
                    className = {activeCol.order === 'asc' ? 'sorted-asc' : ''}
                  />}
              </th>
            )}
          </tr>
          <Total data = {data} />
        </thead>
      </table>
    </div>
  );
}
