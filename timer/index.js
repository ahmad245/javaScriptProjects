
let sBtn=document.querySelector('#start');
let pBtn=document.querySelector('#pause');
let tInput=document.querySelector('#time');

let circle=document.querySelector('#circle');
let perimeter=circle.getAttribute('r') * 2 * Math.PI;

 circle.setAttribute('stroke-dasharray',perimeter);
 let currentOffset=0;
 let total=0;
let time=new Timer(sBtn,pBtn,tInput,{
    onSatrt(totalTime){
        total=totalTime
        console.log('start');
        circle.setAttribute('stroke-dashoffset',-1);
        
    },
    onTick(timeRimaning){
        console.log('tick');
         currentOffset=currentOffset-1
        circle.setAttribute('stroke-dashoffset',perimeter * timeRimaning / total -perimeter);
    },
    onComplete(){
        console.log('complete');
        
    }
});
