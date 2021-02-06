import {groupPanels} from './groupPanels.js'
import '../../styles/DetailsRight.css';

export function DetailsRight({ visits }) {
  const renderedPanels = groupPanels(visits)
  return (
    <div className = 'details-right'>
      <p className = 'highlight-text'>Мультиканальная цепочка</p>
      <p>Все посещения за период ретроспективного окна</p>
      {renderedPanels.map((visitInfo, ind) =>
        <div  key = {'panel-' + ind} className = 'panel-container'>
          <div className = 'panel' >
            <p className = 'highlight-text'>
              <img src = {visitInfo.icon} alt = 'conpany-icon' />
              {visitInfo.source + '/' + visitInfo.medium}
            </p>
            <p>Source/Medium: {visitInfo.source + '/' + visitInfo.medium}</p>
            <p>Campaign: {visitInfo.campaign}</p>
            <p>Content: {visitInfo.campaign}</p>
            <p>Term: {visitInfo.term}</p>
            <div className = 'date'>{visitInfo.date}</div>
            {visitInfo.count > 1 &&
              <div className = 'count'>{visitInfo.count}</div>
            }
          </div>
          {visitInfo.count > 1 && <div className = 'shadow'></div>}
        </div>
      )}
    </div>
  );
}
