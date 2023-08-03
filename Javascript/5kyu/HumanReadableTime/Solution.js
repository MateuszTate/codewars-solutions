function humanReadable (seconds) {
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let min = Math.floor(minutes % 60);
    let secs = Math.floor(seconds % 60);
    if(hours<10) hours = '0'+hours; // add zero before number if its smaller than 10, to make it looking like on digital clock feg. instead returning 8:5 it is 08:05
    if(min<10) min = '0'+min;
    if(secs<10) secs = '0'+secs;
    return `${hours}:${min}:${secs}`;
  }

console.log(humanReadable(45296));