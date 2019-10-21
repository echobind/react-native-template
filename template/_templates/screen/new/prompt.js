// see types of prompts:
// https://github.com/SBoudrias/Inquirer.js#prompt-types
//
// and for examples for prompts:
// https://github.com/SBoudrias/Inquirer.js/tree/master/examples
module.exports = [
  {
    type: "list",
    name: "componentType",
    message: "SFC or Class?",
    choices: ["SFC", "Class"],
    default: "SFC"
  }
];
