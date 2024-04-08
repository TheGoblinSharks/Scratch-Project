// server.js
import express from 'express';
const app = express();
const port = process.env.PORT || 5000;

const arrayData = {
  array: [0, 1, 2, 3, 4],
  currentIndex: 0
};

// Endpoint to serve the array data
app.get('/array', (req, res) => {
  // Fix the unused variable by removing 'req'
  res.json(arrayData);
});

// Serve static files from the React app
app.use(express.static('build'));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  // Fix the undefined variable by using 'path.join' instead of '__dirname'
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.sendFile('build/index.html', { root: __dirname });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
