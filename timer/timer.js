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
            this.onSatrt(this.timeRemaining)
        }
    }
    tick=()=>{
        if (this.timeRemaining==0) {
            this.pause();
            return;
        }
        this.timeRemaining=this.timeRemaining - .05;
        if ( this.onTick) {
            this.onTick(this.timeRemaining)
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
