const { getSession } = require('./sessionController'); 

const handleUserConnection = async (req, res) => {
  const { userId } = req.body;
  addSession(userId);
  res.send('Connected successfully');
};

const getUserBitcoinPrice = async (req, res) => {
  const { userId } = req.params;
  const session = getSession(userId); 

  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }

};

module.exports = { handleUserConnection, getUserBitcoinPrice };
