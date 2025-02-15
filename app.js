document.addEventListener('DOMContentLoaded', function(){
    var rootTime = document.querySelector("time");
    var rootDate = document.querySelector("date");

    // Hiển thị đúng ngày mong muốn (10 DAYS)
    rootDate.textContent = "1069 DAYS";

    function olock() {
        var hrs = 11,  // Giờ cố định
            min = 26,  // Phút cố định
            sec = 30;  // Giây cố định

        rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
    } 
    olock();
});
