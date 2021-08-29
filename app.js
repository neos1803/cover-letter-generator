const inquirer = require("inquirer");
const questions = require("./questions");

const program = () => {
  inquirer.prompt(questions())
    .then((v) => {
      if (v.task === "Test") console.log("Program is running fine.")
      if (v.task === "Generate") console.log("Sorry, it's still under construction.")
    })
    .catch((e) => console.log(e))
}

program();