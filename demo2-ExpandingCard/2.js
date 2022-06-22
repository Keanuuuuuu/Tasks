const panels = document.querySelectorAll('.panel')

panels.forEach(function(panel){
    panel.addEventListener('click',function(){
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(function(panel){
        panel.classList.remove('active')
    })
}

window.onload = function(){
    var mouseMove = document.getElementById("mouseMove");
    document.onmousemove = function(event){
        event = event||window.event;
        var left = event.clientX;
        var top = event.clientY;
        mouseMove.style.left = left+"px";
        mouseMove.style.top = top+"px";
    };
};