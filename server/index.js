const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const runFunction = require("./run-function");

app.use(cors());

// parse application/json
app.use(bodyParser.json());

app.post("/process-query", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const result = await runFunction(data.body, data.args);
    res.json({
      ok: true,
      result
    });
  } catch (ex) {
    res.json({
      ok: false,
      error: ex
    });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
