const promise = new Promise(function (resolve, reject) {
    const age = 18;
    if(age > 20) {
        resolve(age); // fulfilled 상태가 됨.
    } else {
        reject(new Error('나이가 너무 어립니다.'));
    }
});

promise
    .then(function (resolvedData) {
    console.log(resolvedData);
    })
    .catch(function (err) {
        console.log(err);
    })