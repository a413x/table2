import LinkImg from '../icons/link.svg'
import '../styles/Link.css';

export function Link({dataObj, onLinkClick}) {
  const onClick = (e) => {
    e.preventDefault()
    onLinkClick(dataObj._id)
  }
  return (
    <div className = 'table-link'>
      <img src = {LinkImg} alt = 'link' />
      <a href = '/' onClick = {onClick}>
        {dataObj.number}
      </a>
    </div>
  );
}
