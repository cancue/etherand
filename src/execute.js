const exec = require("child_process").exec

const execute = (command) => {
  exec(command, (err, stdout, stderr) => {
    process.stdout.write(stdout)
  })
}

module.exports = execute
