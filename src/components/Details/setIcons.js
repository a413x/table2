import Ya from '../../icons/yandex.svg'
import Google from '../../icons/google.svg'
import NotSet from '../../icons/notSet.svg'

export function setIcons(visitInfo){
  const source = visitInfo.source
  if(source === 'yandex'){
    return Ya
  }else if(source === 'google'){
    return Google
  }else {
    return NotSet
  }
}
