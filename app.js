var getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){
    scrollpoint();
};

function scrollpoint(){
    var getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop);
    var getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight);
    var getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight);

    var calcheight = getscrollheight - getclientheight;
    // console.log(calcheight);

    var calfinal = Math.round(getscrolltop * 100 / calcheight);
    // console.log(calfinal);

    getprogressbar.style.width = `${calfinal}%`;
}

function printme(){
    window.print();
}
