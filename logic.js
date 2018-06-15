var children = document.querySelector('.wrap').children,
winBlock = document.querySelector('.win');

var chacked, id1, id2;

eventForEvery(children,"click",whatId);
var test = setInterval(isFinished, 100);

function whatId () {
    if (this.classList.contains("checked")){
        return false;
    } else {
    if (id1){
        id2 = this.id;
        this.classList.add('checked');
    } else {
        id1 = this.id;
        this.classList.add('checked');
    }
    if (id1 && id2){
        setTimeout(forTimeout, 500, id1,id2);
        id1 = undefined;
        id2 = undefined;
    }
}
    function forTimeout (a,b) {
        if(comparison(a,b)){
            let colection = document.querySelectorAll('.checked');
            for (let i = 0; i < colection.length; i++){
                colection[i].classList.add("hide");
            }
        } else {
            let colection = document.querySelectorAll('.checked');
            for (let i = 0; i < colection.length; i++){
                colection[i].classList.remove('checked');
            }
        }    
        function comparison(a,b) {
            if (a == b) {
                return true;
            } else {
                return false;
            }
        }
    }
}
function eventForEvery (arr,event,func) {
    for (let i = 0; i < arr.length; i++){
        arr[i].addEventListener(event,func);
    }
}
function isFinished(){
    let j = 0;
    for (let i = 0; i < children.length; i++) {
        if(children[i].classList.contains('hide')){
        j++;
        }            
    }
    if (j == children.length){
        wrapper.style.display = "none";
        winBlock.style.display = "block";
        clearInterval(test);
        
    }
}
