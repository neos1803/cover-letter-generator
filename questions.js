const questions = () => {
  return [
    {
      type: "list",
      name: "task",
      message: "What do you want to do?",
      choices: [
        "Test", 
        "Generate"
      ]
    }
  ]
}

module.exports = questions;