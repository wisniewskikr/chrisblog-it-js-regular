logAsync();
logAsyncAwait();
logFirst();
logSecond();
logThird();
logLast();

async function runAsyncOperation() {

    let endIndex = 100000;
    for (let i = 0; i < endIndex; i++) {
        for (let j = 0; j < endIndex; j++) {            
        }
    }

    return "fired async";    
}

async function runAsync() {
    console.log("start async");
    const message = runAsyncOperation();
    console.log("end async");
    return message;
}

async function runAsyncAwait() {
    console.log("start async await");
    // Keyworkd await - inside async funciton waits for result of another async function
    const message = await runAsyncOperation();
    console.log("end async await");
    return message;
}

function logAsync() {

    runAsync().then(
        function(message) {console.log(message);}
    );
    
}

function logAsyncAwait() {

    runAsyncAwait().then(
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