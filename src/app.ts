import express, { Application, Request, Response } from 'express';

const app: Application = express();

// Generates a random string based on the length of the string that is inputed
function generateRandomString(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

// Handles get request with possible query param length from front end and sends back result. Defaults to 5
app.get('/', (req: Request, res: Response ) => {
    const { length } = req.query
    generateRandomString(Number(length))
    res.send(generateRandomString(Number(length || 5)));
});

// Make sure server is running
app.listen(3000, () => console.log('server running'))