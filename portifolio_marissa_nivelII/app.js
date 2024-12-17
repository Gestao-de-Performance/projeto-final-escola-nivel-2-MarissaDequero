
var onda1 = document.getElementById('onda1')
var onda2 = document.getElementById('onda2')
var onda3 = document.getElementById('onda3')
var onda4 = document.getElementById('onda4')

window.addEventListener('scroll', function(){
    var rolagemPos = window.scrollY

    onda1.style.backgroundPositionX = 400 + rolagemPos * 4 + 'px';
    onda2.style.backgroundPositionX = 300 + rolagemPos * -4 + 'px';
    onda3.style.backgroundPositionX = 200 + rolagemPos * 2 + 'px';
    onda4.style.backgroundPositionX = 100 + rolagemPos * -2 + 'px';
})
              
        let items = document.querySelectorAll('.skills .item');
        let next = document.getElementById('next');
        let prev = document.getElementById('prev');
        
        let active = 3;
        function loadShow(){
            let stt = 0;
            items[active].style.transform = `none`;
            items[active].style.zIndex = 1;
            items[active].style.filter = 'none';
            items[active].style.opacity = 1;
            for(var i = active + 1; i < items.length; i++){
                stt++;
                items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
                items[i].style.zIndex = -stt;
                items[i].style.filter = 'blur(5px)';
                items[i].style.opacity = stt > 2 ? 0 : 0.6;
            }
            stt = 0;
            for(var i = active - 1; i >= 0; i--){
                stt++;
                items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
                items[i].style.zIndex = -stt;
                items[i].style.filter = 'blur(5px)';
                items[i].style.opacity = stt > 2 ? 0 : 0.6;
            }
        }
        loadShow();
        next.onclick = function(){
            active = active + 1 < items.length ? active + 1 : active;
            loadShow();
        }
        prev.onclick = function(){
            active = active - 1 >= 0 ? active - 1 : active;
            loadShow();
        }