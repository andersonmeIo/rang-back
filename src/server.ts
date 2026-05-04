import { app } from "./app.js";

function startServer() {


    
    app.listen(3090, () => {
        console.log('*******************************');
        console.log('');
        console.log('Server is running at port 3090.');
        console.log('');
        console.log('*******************************');
    })
}

startServer();