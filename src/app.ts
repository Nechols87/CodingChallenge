import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

function generateRandomString(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

app.get('/', (req: Request, res: Response ) => {
    const { length } = req.query
    generateRandomString(Number(length))
    res.send(generateRandomString(Number(length || 5)));
});

app.listen(3000, () => console.log('server running'))