logAsync();
logFirst();
logSecond();
logThird();
logLast();

async function getAsync() {

    try {   

        let endIndex = 100000;
        for (let i = 0; i < endIndex; i++) {
            for (let j = 0; j < endIndex; j++) {            
            }
        }
        return "fired async success";

    } catch (error) {
        return Promise.reject("fired async error");
    }

}

function logAsync() {

    let myAsync = getAsync();

    myAsync
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