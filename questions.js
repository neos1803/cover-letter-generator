const questions = (type = "default") => {
  if (type === "default") {
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
  if (type === 'projects') {
    return [
      {
        type: "input",
        name: "name",
        message: "What was the project name work in?"
      },
      {
        type: "input",
        name: "description",
        message: "Please describe something about the project about!"
      },
      {
        type: "confirm",
        name: "anotherProject",
        message: "Do you want to add another project experience (just hit enter for YES)?"
      },
    ]
  }
  if (type === 'stacks') {
    return [
      {
        type: "input",
        name: "name",
        message: "What was the technology you used in the project you work in?"
      },
      {
        type: "confirm",
        name: "anotherStack",
        message: "Do you want to add another tech stack (just hit enter for YES)?"
      },
    ]
  } else {
    return [
      {
        type: "input",
        name: "name",
        message: "What is your full name?"
      },
      {
        type: "list",
        name: "sex",
        message: "What is your sex?",
        choices: [
          "Female",
          "Male",
          "Non-binary"
        ]
      },
      {
        type: "input",
        name: "age",
        message: "How old are you?"
      },
      {
        type: "input",
        name: "address",
        message: "State your current address."
      },
      {
        type: "input",
        name: "phone_number",
        message: "What is your phone number?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?"
      },
      {
        type: "input",
        name: "applied_company",
        message: "Where do you apply?"
      },
      {
        type: "input",
        name: "applied_position",
        message: "What position do you apply?"
      },
      {
        type: "input",
        name: "years_of_exp",
        message: "How many years have you work?"
      },
      {
        type: "input",
        name: "current_company",
        message: "Where do you work currently?"
      },
      {
        type: "input",
        name: "current_position",
        message: "What position do you currently work as?"
      },
    ]
  }
}

module.exports = questions;
