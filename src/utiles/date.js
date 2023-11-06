import moment from "moment";


export const getNowDateTime = () => {
  return moment().format('YYYY-MM-DD HH:mm:ss')
};

export function dateFormat(date){
  if(!date)return
  return moment(date).format('YYYY-MM-DD');
}

export function dateTimeFormat(date){
  if(!date){
    return 
  }
  let result = moment(date).format('YYYY-MM-DD HH:mm')
  return result;
}

export function dateFulltimeFormat(date){
  if(!date){
    return 
  }
  let result = moment(date).format('YYYY-MM-DD HH:mm:ss')
  return result;
}

export function hourFormat(date){
  if(!date){
    return 
  }
  let result = moment(date).format('HH:mm')
  return result;
}
export function timeFormat(date){
  if(!date){
    return 
  }
  let result = moment(date).format('HH:mm:ss')
  return result;
}

export function dateFormatHangul(date){
  let result = moment(date).format('YYYY년 MM월 DD일')
  return result;
}

export function getWesternAge(birthday){
  if(!birthday){
    return
  }
  let today = new Date();
	let birthDay = new Date(birthday);
	let age = today.getFullYear() - birthDay.getFullYear();
	
	let todayMonth = today.getMonth() + 1;
	let birthMonth = birthDay.getMonth() + 1;
	
	if (birthMonth > todayMonth || (birthMonth === todayMonth && birthDay.getDate() >= today.getDate())) {
		age--;
	} 
	return age;
}


export function dateFormatValid(date){
  return moment(date, 'YYYY-MM-DD',true).isValid();
}


export function dateTimeSubtract(startDate , endDate){
  if(!startDate || !endDate)return;
  
  const start = moment(startDate , 'YYYY-MM-DD HH:mm:ss')
  const end = moment(endDate , 'YYYY-MM-DD HH:mm:ss')

  let result = moment.duration(end.diff(start)).asMinutes()
  return result;
}