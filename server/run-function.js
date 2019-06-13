const {VM} = require('vm2');
const fetch = require('node-fetch');
module.exports = async function runFunction(functionString) {
    const rpc = { 
        call :(param) => {
        console.log('Got param!', param);
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
        }
    }

    const vm = new VM({
        timeout: 3 * 1000,
        sandbox: {
            wix: {
            },
            console: {
                log: (...args) => {
                    console.log('Client requested to print:', ...args)
                }
            }
        }
    });

    const sandboxedFunction = vm.run(functionString);
    
    const result = await sandboxedFunction(rpc);
    console.log('func result', typeof result, result);

    return result;
}