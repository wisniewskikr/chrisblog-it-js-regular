// logFirst();
// logSecond();
// logThird();
// logLast();

// function logFirst() {
//     console.log('fired first');
// }

// function logSecond() {

//     setTimeout(()=>{
//         console.log('fired timeout');
//     },0);

//     console.log('fired second');
    
// }

// function logThird() {    

//     let endIndex = 100000;
//     for (let i = 0; i < endIndex; i++) {
//         for (let j = 0; j < endIndex; j++) {            
//         }
//     }
//     console.log('fired third');

// }

// function logLast() {
//     console.log('fired last');
// }

logFirst(logSecond);

function logFirst(callback) {
    callback();
    console.log('fired first');
}

function logSecond() {
    console.log('fired second');    
}