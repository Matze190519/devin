console.log('Devin AI System initialized');

function greetUser(name) {
  return `Hello ${name}, welcome to Devin AI!`;
}

const version = '1.0.0';
console.log(`System version: ${version}`);

module.exports = {
  greetUser,
  version
};
