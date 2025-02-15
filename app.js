function olock() {
    var hrs = 11,  // Giờ cố định
        min = 26,  // Phút cố định
        sec = 30;  // Giây cố định

    rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
}
