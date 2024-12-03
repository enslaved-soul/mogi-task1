import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// User routes
app.use('/users', userRoutes);

// Testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
