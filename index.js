const express = require('express');
const { handleUserConnection, getUserBitcoinPrice } = require('./userController');
const { fetchBitcoinPrice, sendEmail } = require('./utils');
const { addSession, getSession, updateSession, deleteSession } = require('./sessionController');
const { startWebSocketServer } = require('./websocketServer');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/connect', handleUserConnection);

app.get('/bitcoin-price/:userId', getUserBitcoinPrice);

startWebSocketServer();

setInterval(async () => {
  const bitcoinPrice = await fetchBitcoinPrice();
  const users = getSession();
  for (const userId in users) {
    const session = users[userId];
    if (session && Math.abs(session.bitcoinPrice - bitcoinPrice) >= 100) {
      await sendEmail(userId, bitcoinPrice);
    }
    updateSession(userId, bitcoinPrice);
  }
}, 60000);

app.get('/', (req, res) => {
  res.send('Welcome to the Bitcoin Price Notifier App!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
