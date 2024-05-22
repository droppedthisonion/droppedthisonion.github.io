const terminalContent = document.querySelector('.terminal-content');
const commandInput = document.querySelector('.command-input');

let commands = {};

async function loadCommands() {
  const response = await fetch('assets/csv/commands.csv');
  const csvData = await response.text();
  const lines = csvData.trim().split('\n');

  for (const line of lines) {
    const [command, response] = line.split(',');
    commands[command] = response;
  }
}

function appendOutput(output, className = '') {
  terminalContent.innerHTML += `<div class="${className}">${output}</div>`;
}

function processCommand(command) {
  appendOutput(`> ${command}`, 'command');

  if (command === 'help') {
    appendOutput('Available commands:');
    appendOutput('- help: Display available commands');
    appendOutput('- date: Display current date and time');
    appendOutput('- clear: Clear the terminal screen');
    appendOutput('Or try these commands for a special message:');
    appendOutput('hello, love, miss, hug, kiss, beautiful, smile, amazing, adventure, caring, strong, dream, happiness, gratitude, bestie, cuddle, future, laughter, partner, trust, home, duck, butt, baby, onion');
  } else if (command === 'date') {
    const currentDate = new Date().toLocaleString();
    appendOutput(currentDate);
  } else if (command === 'clear') {
    terminalContent.innerHTML = '';
  } else if (command in commands) {
    appendOutput(commands[command]);
  } else {
    appendOutput(`Unknown command: ${command}`, 'error');
  }
}

commandInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const command = commandInput.value.trim();
    processCommand(command);
    commandInput.value = '';
    terminalContent.scrollTop = terminalContent.scrollHeight;
  }
});

document.addEventListener('DOMContentLoaded', loadCommands);

appendOutput('SWAG Machine');
appendOutput('Type "help" to see available commands.');