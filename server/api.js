const funcA = function(arg) {
  console.log("boris was here" + arg);
  return "boris was here" + arg;
};

const funcB = function() {
  console.log("b");
};

module.exports = { funcA, funcB };
