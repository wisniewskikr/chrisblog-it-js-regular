logSetTimeout();
logFirst();
logSecond();
logThird();
logLast();

function logSetTimeout() {

    setTimeout(()=>{
        console.log('fired timeout');
    },0);

}

function logFirst() {
    console.log('fired first');
}

function logSecond() {
    console.log('fired second');    
}

function logThird() {    

    let endIndex = 100000;
    for (let i = 0; i < endIndex; i++) {
        for (let j = 0; j < endIndex; j++) {            
        }
    }
    console.log('fired third');

}

function logLast() {
    console.log('fired last');
}