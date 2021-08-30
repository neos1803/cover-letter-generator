const inquirer = require("inquirer");
const questions = require("./questions");
const GeneratePdf = require("./generate-pdf");

let output = {};
let project_exp = [];
let tech_stacks = [];
const program = () => {
  inquirer.prompt(questions())
    .then((v) => {
      if (v.task === "Test") console.log("Program is running fine.")
      if (v.task === "Generate") {
        inquirer.prompt(questions("others"))
          .then(async (answers) => {
            output = {
              ...answers
            };
            await askProject();
            await GeneratePdf.toPdfFile("back-end-template.hbs", {
              strong_name: output.name.toUpperCase(),
              sex: output.sex,
              age: output.age,
              address: output.address,
              phone_number: output.phone_number,
              email: output.email,
              name: output.name,
              applied_company: output.applied_company,
              applied_position: output.applied_position,
              years_of_exp: output.years_of_exp,
              current_position: output.current_position,
              current_company: output.current_company,
              number_of_projects: output.number_of_projects,
              projects_exp: output.project_exp,
              tech_stacks: output.tech_stacks
            });
          }).then(() => console.log("Your PDF has been generated"))
      }
    })
    .catch((e) => console.log(e))
}

const askProject = () => {
  return new Promise(async (resolve, reject) => {
    return inquirer.prompt(questions("projects"))
      .then((answers) => {
        project_exp.push({
          name: answers.name,
          description: answers.description
        });
        if (answers.anotherProject) resolve(askProject())
        else {
          output['project_exp'] = project_exp;
          resolve(askStacks());
        }
      })
  })
}

const askStacks = () => {
  return new Promise(async (resolve, reject) => {
    return inquirer.prompt(questions("stacks"))
      .then((answers) => {
        tech_stacks.push(answers.name)
        if (answers.anotherStack) resolve(askStacks());
        else resolve(output['tech_stacks'] = tech_stacks.join(","));
      })
    })
}

program();