const container = document.createElement("div");
container.classList.add("init");
document.body.appendChild(container);


for(let i=0;i<16*16;i++){
    const sq = document.createElement("div");
    sq.setAttribute('id','box')
    sq.setAttribute('style','aspect-ratio:1;min-width:16px;margin:0;padding:0;flex:1 0 auto;')
    sq.setAttribute('style','flex-basis:'+100/16+'%');
    container.appendChild(sq);
}

const boxes = document.querySelectorAll('#box').forEach(item => {
    item.addEventListener("mouseover", function(e){
        e.target.style.background = "black";
    });
});

let x;
const button = document.getElementById("button-1").addEventListener('click',()=>{
    x = prompt("Enter no. of tiles (not more than 100) : ");
    if(x>100){
        alert('error');
        return;
    }
    const i = document.querySelectorAll("#box").forEach(item => {
        item.remove();
    });

    

    for(let i=0;i<x*x;i++){
        const sq = document.createElement("div");
        sq.setAttribute('id','box')
        sq.setAttribute('style','aspect-ratio:1;min-width:16px;margin:0;padding:0;flex:1 0 auto;')
        sq.setAttribute('style','flex-basis:'+100/x+'%');
        container.appendChild(sq);
    }
    const boxes = document.querySelectorAll('#box').forEach(item => {
        item.addEventListener("mouseover", function(e){
            e.target.style.background = "black";
        });
    });
    
});