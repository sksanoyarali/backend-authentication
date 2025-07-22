import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
import db from "./utils/db.js"
// import all routes
import userRoutes from "./routes/user.routes.js"
const app = express()

const port=process.env.PORT || 3000;
app.use(cors({
    origin:process.env.BASE_URL,
    methods:['GET','POST','DELETE','OPTIONS'],
    allowedHeaders:['Content-Type','Authorization'],
    credentials:true,
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/', (req, res) => {
  res.send('cohort');
})

app.get("/sonu",(req,res)=>{
    res.send("sanoyar route");
})
db();

app.use("/api/v1/users",userRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
