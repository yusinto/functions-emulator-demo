const greet = (req, res) => {
  console.log('hello world from the emulator!');
  res.send('ok google');
};

module.exports = {
  greet,
};