import '../../styles/Details.css';
import {DetailsLeft} from './DetailsLeft.js'
import {DetailsRight} from './DetailsRight.js'

const visits = [
  {
    source: 'yandex',
    medium: 'organic',
    campaign: '',
    content: '',
    term: '',
    date: '2021-01-10 12:43:57'
  },
  {
    source: 'yandex',
    medium: 'organic',
    campaign: '',
    content: '',
    term: '',
    date: '2021-01-10 13:42:00'
  },
  {
    source: 'google',
    medium: 'display',
    campaign: '',
    content: '',
    term: '',
    date: '2021-01-10 11:43:57'
  },
]

export function Details({ dataObj, show, onClose }) {
  return (
    <div className = {(!show ? 'details-hidden ' : '') + 'details'}>
      <DetailsLeft dataObj = {dataObj} onClose = {onClose} />
      <DetailsRight visits = {visits} />
    </div>
  );
}
