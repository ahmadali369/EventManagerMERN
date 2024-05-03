import "dotenv/config";
import express from "express";
import cors from "cors";

import db from "./db/db.mjs";
import authRouter from "./routes/auth-router.mjs";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);


db().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
