
setInterval(()=>{
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    hh.style.strokeDashoffset = 510 - (510 * h) /12;
    //12 hrs clock
    mm.style.strokeDashoffset = 630 - (630 * m) /12;
    //60 minutes
    ss.style.strokeDashoffset = 760 - (760 * s) /12;
    //60 seconds
})


