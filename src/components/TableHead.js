export const colNames = [
  {name: 'number', title: 'Номер'},
  {name: 'date', title: 'Дата и время'},
  {name: 'proceeds', title:'Выручка'},
  {name: 'profit', title: 'Прибыль'},
  {name: 'daysleft', title: 'Дней до сделки'}
]

export function TableHead() {
  return (
    <thead>
      <tr>
        {colNames.map((col, ind) =>
          <th key = {'th-'+ind}>
            {col.title}
          </th>
        )}
      </tr>
    </thead>
  );
}
