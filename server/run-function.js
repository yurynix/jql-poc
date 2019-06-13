const { VM } = require("vm2");
const fetch = require("node-fetch");
module.exports = async function runFunction(functionString, args) {
  console.log("EXECUTE", functionString, args);
  const vm = new VM({
    timeout: 3 * 1000,
    require: {
      external: true
    },
    sandbox: {
      ...require("./api"),
      console: {
        log: (...args) => {
          console.log("Client requested to print:", ...args);
        }
      }
    }
  });

  const code = `
  const func = ${functionString};
  func(...[${args}]);
   `;

  console.log(code);
  const sandboxedFunction = vm.run(code);

  const result = await sandboxedFunction(rpc);
  console.log("func result", typeof result, result);

  return result;
};
