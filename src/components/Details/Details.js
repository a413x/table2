import '../../styles/Details.css';
import {DetailsLeft} from './DetailsLeft.js'
import {DetailsRight} from './DetailsRight.js'

export function Details({ dataObj, show, onClose }) {
  return (
    <div className = {(!show ? 'details-hidden ' : '') + 'details'}>
      <DetailsLeft dataObj = {dataObj} onClose = {onClose} />
      <DetailsRight visits = {dataObj.visits} />
    </div>
  );
}
