import '../../styles/Details.css';

export function Details({ dataObj, show, onClose }) {
  const onCloseClick = (e) => {
    e.preventDefault()
    onClose()
  }
  return (
    <div className = {(!show ? 'details-hidden ' : '') + 'details'}>
      <a href = '/' onClick = {onCloseClick}>Скрыть детали</a>
    </div>
  );
}
