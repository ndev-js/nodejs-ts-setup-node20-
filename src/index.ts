import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.listen(process.env.SERVER_PORT, async () => {
  //dynamic imoport chalk
  const chalk = (await import("chalk")).default;

  console.log(chalk.greenBright(`server started successfully at ${process.env.SERVER_PORT} ✅`));
  if (process.env.SERVER_PORT) {
    console.log(chalk.bgCyan("ENv test success"));
  } else {
    console.log(chalk.bgRed("ENv test failed"));
  }
});
