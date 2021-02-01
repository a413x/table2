import {Total} from './Total.js'

export const colNames = [
  {name: 'number', title: 'Номер'},
  {name: 'date', title: 'Дата и время'},
  {name: 'proceeds', title:'Выручка'},
  {name: 'profit', title: 'Прибыль'},
  {name: 'daysleft', title: 'Дней до сделки'}
]

export function TableHead({data}) {
  return (
    <thead>
      <tr>
        {colNames.map((col, ind) =>
          <th key = {'th-'+ind}>
            {col.title}
          </th>
        )}
      </tr>
      <Total data = {data} />
    </thead>
  );
}
