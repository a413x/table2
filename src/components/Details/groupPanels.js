import {sortData, convertDate} from '../../utils/utils.js'
import {setIcons} from './setIcons.js'

function formatPanelFields(visitInfo){
  const output = {...visitInfo}
  for(let field in output){
    if(output[field] === '') {
      output[field] = '(not set)'
    }else if(output[field] === 'date'){
      output[field] = convertDate(output[field])
    }
  }
  output.icon = setIcons(visitInfo)
  return output
}

export function groupPanels(visits){
  const output = []
  const sortedVisits = sortData(visits, 'date', 'desc')
  const uniq = []
  const uniqCount = {}
  //calculate visits count of all types
  sortedVisits.forEach((visit) => {
    const mediumSource = visit.source + '/' + visit.medium
    if(!uniq.includes(mediumSource)){
      uniq.push(mediumSource)
      uniqCount[mediumSource] = 1
    }else{
      uniqCount[mediumSource] ++
    }
  })
  //build an output with last visit of unique type
  //and the number of visits of this type
  uniq.forEach((mediumSource) => {
    const [source, medium] = mediumSource.split('/')
    const firstFound = sortedVisits.find((visit) =>
      visit.source === source && visit.medium === medium
    )
    firstFound.count = uniqCount[mediumSource]
    output.push(formatPanelFields(firstFound))
  })
  return output
}
