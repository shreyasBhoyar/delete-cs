const inquirer = require("inquirer")

const displayPrompt = async() => {
    const questions = [
      {
        type: "input",
        name: "api_key",
        message: "Enter API key of stack",
      },
      {
        type: "input",
        name: "management_token",
        message: "Enter Management Token of Source Stack",
      }
    ];
  
    return inquirer.prompt(questions).then((ans) => {
      return ans;
    });
  };

module.exports = displayPrompt;