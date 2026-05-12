import { app } from "./app.js";
import { connectDB } from "./shared/database/connection.js";

async function startServer() {
    await connectDB();
    
    app.listen(3090, () => {
        console.log('*******************************');
        console.log('');
        console.log('Server is running at port 3090.');
        console.log('');
        console.log('*******************************');
    })
}

startServer();