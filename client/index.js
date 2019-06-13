import {Client} from './jql/index.js';

(async function() {
    const client = new Client();
    try {
        const response = await client.query(async (rpc) => {
            console.log('Client printing bla');
            const result = rpc.call('bla');
            try {
                process.exit();
            } catch (ex) {
                console.log('Failed process.exit();', ex);
            }

            try {
                require('fs').readFileSync('/etc/passwd');
            } catch (ex) {
                console.log('Failed reading fs', ex);
            }

            return result;
        })

        console.log('Got response', response);
    } catch(ex) {
        console.log('Failed to get response', ex);
    }
})();
