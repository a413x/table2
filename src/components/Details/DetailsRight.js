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
            <p><b>Source/Medium:</b> {visitInfo.source + '/' + visitInfo.medium}</p>
            <p><b>Campaign:</b> {visitInfo.campaign}</p>
            <p><b>Content:</b> {visitInfo.campaign}</p>
            <p><b>Term:</b> {visitInfo.term}</p>
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
