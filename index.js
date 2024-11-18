const PORT = 8000;

const express = require("express");
const cors = require("cors");

const app = express();

// CORS 설정: 특정 도메인만 허용
// const corsOptions = {
//   origin: "https://tasks-front-1ogt.vercel.app", // 허용할 프론트엔드 도메인
//   methods: ["GET", "POST", "PUT", "DELETE"], // 허용할 HTTP 메서드
//   allowedHeaders: ["Content-Type", "Authorization"], // 허용할 헤더
//   credentials: true, // 쿠키 허용
// };

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("node deploy test 3");
});

app.use(require("./routes/getRoutes"));
app.use(require("./routes/deleteRoutes"));
app.use(require("./routes/postRoutes"));
app.use(require("./routes/updateRoutes"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
