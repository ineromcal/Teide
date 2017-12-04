import moment from 'moment'

export default function currentDate(tipo){
  if(tipo=="date"){
    return moment(new Date()).utcOffset('+00:00').format('DD MMM YYYY');
  }else if(tipo=="time"){
    return moment(new Date()).utcOffset('+00:00').format('HH:mm');
  }

}
