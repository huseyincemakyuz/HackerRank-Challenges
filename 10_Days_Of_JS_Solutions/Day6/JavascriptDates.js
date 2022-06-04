// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName=['Sunday','Monday','Tuesday','Wednesday',
    'Thursday','Friday','Saturday']
    let date=new Date(dateString)
    
    return dayName[date.getDay()];
}
