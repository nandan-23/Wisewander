function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Pad with 0 if needed
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds;
}

// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);
