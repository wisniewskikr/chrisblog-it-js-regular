logFirst(logSecond);

function logFirst(callback) {
    callback();
    console.log('fired first');
}

function logSecond() {
    console.log('fired second');    
}