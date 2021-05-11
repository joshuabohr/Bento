// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = ' Jonathan!';

// Here you can change your greetings
const gree1 = 'Buonanotte  ';
const gree2 = 'Buongiorno  ';
const gree3 = 'Buon pomeriggio  ';
const gree4 = 'Buona sera  ';
const gree5 = 'Buona sera  ';
const gree6 = 'Buona sera  ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + name;
} else {
  document.getElementById('greetings').innerText = gree4 + name;
}
