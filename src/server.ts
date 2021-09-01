import express from "express";

const app = express();

app.get("/test", (req, resp) => {

    return resp.json({
        message: 'Hello World!'
    })
});

app.listen(3000, () => {
    console.log('Server running on port 3000!');
});