import {useState} from 'react'
import {Total} from './Total.js'

export const colNames = [
  {name: 'number', title: 'Номер'},
  {name: 'date', title: 'Дата и время'},
  {name: 'proceeds', title:'Выручка'},
  {name: 'profit', title: 'Прибыль'},
  {name: 'daysleft', title: 'Дней до сделки'}
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
    <thead>
      <tr>
        {colNames.map((col, ind) =>
          <th key = {'th-'+ind} onClick = {() => onClick(col)}>
            {col.title}
            {activeCol.name === col.name &&
              <span className = 'sorted'>
                {activeCol.order === 'asc' ? '↓' : '↑'}
              </span>
            }
          </th>
        )}
      </tr>
      <Total data = {data} />
    </thead>
  );
}
