import inquirer from 'inquirer';

async function getUserInput() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your name?',
        },
        {
            type: 'password',
            name: 'password',
            message: 'Enter your password:',
        },
        {
            type: 'list',
            name: 'color',
            message: 'Choose your favorite color:',
            choices: ['Red', 'Green', '
