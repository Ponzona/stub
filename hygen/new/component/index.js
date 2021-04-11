module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'page_name',
        message: 'What is the page name?'
      },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const absPath = `src/pages`
        return { ...answers, absPath }
      })
  }
}