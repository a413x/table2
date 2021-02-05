import '../../styles/Details.css';
import {DetailsLeft} from './DetailsLeft.js'

export function Details({ dataObj, show, onClose }) {
  return (
    <div className = {(!show ? 'details-hidden ' : '') + 'details'}>
      <DetailsLeft dataObj = {dataObj} onClose = {onClose} />
      <div className = 'details-right'></div>
    </div>
  );
}
