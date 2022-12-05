export const uniqueDates = (tasks) => {
    const unique = []

    tasks.forEach( tasks => {
      if( !unique.includes(tasks.dateFormat)){
        unique.push(task.dateFormat);
        }
   });
   return unique
}; 


export const orderDates = (dates) => {
  return dates.sort( (a,b) => {
    const firstDate = moment(a, "DD/MM/YYYY");
    const secondDate = moment(b, "DD/MM/YYYY");
    return firstDate - secondDate
  });
};