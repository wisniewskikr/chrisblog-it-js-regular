logPromise();
logFirst();
logSecond();
logThird();
logLast();

function getPromise() {

    try {   

        let endIndex = 100000;
        for (let i = 0; i < endIndex; i++) {
            for (let j = 0; j < endIndex; j++) {            
            }
        }
        return Promise.resolve("fired promise success");

    } catch (error) {
        return Promise.reject("fired promise error");
    }

}

function logPromise() {

    let myPromise = getPromise();

    myPromise
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });

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