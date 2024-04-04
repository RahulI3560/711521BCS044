import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMjE2NzczLCJpYXQiOjE3MTIyMTY0NzMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjAzZjllYmFjLTE1YzItNDczYS1iMGQ3LTBlNTc4NGYwYTM4YSIsInN1YiI6ImtpdC4yNS4yMWJjczAzMkBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjAzZjllYmFjLTE1YzItNDczYS1iMGQ3LTBlNTc4NGYwYTM4YSIsImNsaWVudFNlY3JldCI6InV0eE9MS1VkcUN0cG5odUEiLCJvd25lck5hbWUiOiJNdXRodUthbWFsZXNoIiwib3duZXJFbWFpbCI6ImtpdC4yNS4yMWJjczAzMkBnbWFpbC5jb20iLCJyb2xsTm8iOiI3MTE1MjFiY3MwMzIifQ.bLKRdyKcPNNYV1Xu-tmSXITaRPSNEuMZgXr3eWn-kTw";

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/data", (req, res) => {
    axios.get("http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1000", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((r) => {
        const jd = r.data;
        res.json(jd);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});