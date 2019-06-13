const execute = require("./jql/index");
const { funcA } = require("./public-api");

(async function() {
  try {
    const newFunc = execute(a => {
      funcA(a);
    });

    newFunc(3);

    console.log("Got response", response);
  } catch (ex) {
    console.log("Failed to get response", ex);
  }
})();
