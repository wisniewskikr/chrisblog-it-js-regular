logAsync();
logFirst();
logSecond();
logThird();
logLast();

async function runAsync() {

    let endIndex = 100000;
    for (let i = 0; i < endIndex; i++) {
        for (let j = 0; j < endIndex; j++) {            
        }
    }

    return "fired async";    
}

function logAsync() {

    runAsync().then(
        function(message) {console.log(message);}
    );
    
}

function logFirst() {
    console.log('fired first');
}

function logSecond() {
    console.log('fired second');    
}

function logThird() {    
    console.log('fired third');
}

function logLast() {
    console.log('fired last');
}