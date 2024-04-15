let sessionCache = {};

const addSession = (userId) => {
  sessionCache[userId] = { userId, bitcoinPrice: null };
};

const getSession = (userId) => {
  return sessionCache[userId];
};

const updateSession = (userId, bitcoinPrice) => {
  sessionCache[userId].bitcoinPrice = bitcoinPrice;
};

const deleteSession = (userId) => {
  delete sessionCache[userId];
};

module.exports = { addSession, getSession, updateSession, deleteSession };
