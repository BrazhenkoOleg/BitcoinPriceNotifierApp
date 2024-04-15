const axios = require('axios');
const nodemailer = require('nodemailer');

const fetchBitcoinPrice = async () => {
  try {
    const response = await axios.get('https://min-api.cryptocompare.com/');
    return response.data.bitcoinPrice;
  } catch (error) {
    console.error('Error fetching bitcoin price:', error);
    throw error;
  }
};

const sendEmail = async (userId, bitcoinPrice) => {
  try {
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = { fetchBitcoinPrice, sendEmail };
