class Timer {
    constructor(startBtn, pauseBtn, timeInput,callback) {
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        this.timeInput = timeInput;
        if (callback) {
            this.onSatrt=callback.onSatrt;
            this.onTick=callback.onTick;
            this.onComplete=callback.onComplete;
        }
        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
    }
    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 50)
        if ( this.onSatrt) {
            this.onSatrt()
        }
    }
    tick=()=>{
        if (this.timeRemaining==0) {
            this.pause();
            return;
        }
        this.timeRemaining=this.timeRemaining - .05;
        if ( this.onTick) {
            this.onTick()
        }
       
    }
    pause = () => {
        if ( this.onComplete) {
            this.onComplete()
        }
        clearInterval(this.interval);
    }
    get timeRemaining() {
        return parseFloat(this.timeInput.value);
    }
    set timeRemaining(time) {
        this.timeInput.value = time.toFixed(2);
    }



}
let sBtn=document.querySelector('#start');
let pBtn=document.querySelector('#pause');
let tInput=document.querySelector('#time');

let circle=document.querySelector('#circle');
let perimeter=circle.getAttribute('r') * 2 * Math.PI;

 circle.setAttribute('stroke-dasharray',perimeter);
 let currentOffset=0
let time=new Timer(sBtn,pBtn,tInput,{
    onSatrt(){
        console.log('start');
        circle.setAttribute('stroke-dashoffset',-50);
        
    },
    onTick(){
        console.log('tick');
         currentOffset=currentOffset-50
        circle.setAttribute('stroke-dashoffset',currentOffset);
    },
    onComplete(){
        console.log('complete');
        
    }
});
