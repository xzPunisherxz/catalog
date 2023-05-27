const cardDate = document.querySelectorAll('.add-date');

function getDateInfo(date) {
    function getNumberWeek(date) {

  let date1 = new Date(date);
  date1.setDate(1);
 let firstDay = date1.getDay();

 
return firstDay
}
    let days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ];
    let months = [
        " ",
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря"
    ]
    let date2 = new Date(date);
    let year = date2.getFullYear();
    let month = date2.getMonth() + 1;
    let dayMonth = date2.getDate();
    let dayWeek = date2.getDay();
    
    let weekOfNumber = Math.ceil((dayMonth + getNumberWeek(date) -1) / 7);

    cardDate.forEach(elem => elem.textContent = days[dayWeek] + ", " + weekOfNumber + " неделя " + months[month] + " " + year + " года ") }
getDateInfo("05.20.2023")

