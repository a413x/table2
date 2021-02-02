import {rowsOnPage} from '../App.js'
import '../styles/PagesNav.css';

export function PagesNav({page, dataLength, onPageChange}) {
  const pagesCount = Math.ceil(dataLength/rowsOnPage)

  const pageClick = (page) => {
    onPageChange(page)
  }

  const navClick = (inc) => {
    onPageChange(page + inc)
  }

  const renderedPages = []
  for(let i = 1; i <= pagesCount; i++){
    renderedPages.push(
      <button
        key = {'nav-btn' + i}
        className = {page === i ? 'navpage-highlight' : ''}
        onClick = {() => pageClick(i)}>
        {i}
      </button>
    )
  }

  const prevEnable = (page !== 1)
  const nextEnable = (page !== pagesCount)

  return (
    <div className = 'pages'>
      <button
        onClick = {() => navClick(-1)}
        disabled = {prevEnable ? null : true}>
        ◀
      </button>
      {renderedPages}
      <button
        onClick = {() => navClick(1)} disabled = {nextEnable ? null : true}>
        ▶
      </button>
    </div>
  );
}
