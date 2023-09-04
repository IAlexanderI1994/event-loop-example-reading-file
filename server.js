const express = require('express');
const fs = require('fs/promises');
const fsSync = require('fs');

const app = express();
const PORT = 3000;

// Asynchronous route using fs/promises
app.get('/read-file', async (req, res) => {
  try {

      for (let i=0; i < 50; i ++ ) {
        await fs.readFile('largefile.txt', 'utf-8');
      }
    res.send('Complete');
  } catch (error) {
    res.status(500).send('Error reading file: ' + error.message);
  }

});

app.get('/hello', async (req, res) => {
  try {
    res.send('Hello');
  } catch (error) {
    res.status(500).send('Error reading file: ' + error.message);
  }
});

// Synchronous route using readFileSync
app.get('/read-file-sync', (req, res) => {
  try {

    for (let i=0; i < 50; i ++ ) {
      fsSync.readFileSync('largefile.txt', 'utf-8');
    }
    res.send('Complete')
  } catch (error) {
    res.status(500).send('Error reading file: ' + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
