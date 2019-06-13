export class Client {
    constructor() {
        console.log('Client::ctor')
    }

    async query(func) {
        if (typeof func !== 'function') {
            throw new Error('Only passing a function is supported');
        }

        const functionString = func.toString();

        const data = {
            function: functionString
        };

        return fetch('http://localhost:3000/process-query', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(response => response.json()); // parses JSON response into native Javascript objects 
    }
}