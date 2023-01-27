logPromise();
logFirst();
logSecond();
logThird();
logLast();

function logPromise() {

    // Create Promise
    let myPromise = new Promise(function(resolve, reject) {
    
        try {
             
            let endIndex = 100000;
            for (let i = 0; i < endIndex; i++) {
                for (let j = 0; j < endIndex; j++) {            
                }
            }
            resolve("fired promise success");
    
        } catch (error) {
            reject("fired promise error");
        }
    
    });

    // Call Promise
    myPromise.then(
        // Function run if Promise resolve is called
        function(message) {console.log(message);},
        // Function run if Promise reject is called
        function(error) {console.log(error);}
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