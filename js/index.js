function changeimg() {
    const img=[
        'url(../assests/1.jpg)',
        'url(../assests/2.jpg)',
        'url(../assests/3.jpg)',
        'url(../assests/4.jpg)',
        'url(../assests/5.jpg)',
        'url(../assests/6.jpg)',
        'url(../assests/7.jpg)',
        'url(../assests/8.jpg)',
        'url(../assests/9.jpg)',
        'url(../assests/10.jpg)',
        'url(../assests/11.jpg)',
        'url(../assests/12.jpg)',
        'url(../assests/13.jpg)',
        'url(../assests/14.jpg)',
        'url(../assests/15.jpg)',
        'url(../assests/16.jpg)'
    ]
    const selection=document.querySelector('.banner');
    const bg = img[Math.floor(Math.random()*img.length)];
    
    selection.style.backgroundImage=bg;
}
setInterval(changeimg,1000)