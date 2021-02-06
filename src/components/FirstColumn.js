import {Link} from './Link.js'

export function FirstColumn({
  dataToShow, showDetails, onLinkClick, selectedData
  }) {
  const highlightRow = (dataObj) => {
    return selectedData._id === dataObj._id && showDetails
  }
  return (
    <div className = {(showDetails ? 'first-col-scroll ' : '') + 'first-col'}>
      <table>
        <tbody>
          {dataToShow.map((dataObj, ind) =>
            <tr
              key = {'first-col-' + ind}
              className = {highlightRow(dataObj) ? 'row-highlight' : ''}
            >
              <td>
                <Link dataObj = {dataObj} onLinkClick = {onLinkClick} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
