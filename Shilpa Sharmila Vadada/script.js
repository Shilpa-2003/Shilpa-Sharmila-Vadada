/*// Get the containers and reset button
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const resetBtn = document.getElementById('resetBtn');

// Store the original state of container1
const originalItems = Array.from(container1.getElementsByClassName('item'));

// Add event listeners to the items in container1 for dragstart and dragend events
const items = container1.getElementsByClassName('item');
for (const item of items) {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
}

// Add event listeners to the container2 for dragover and drop events
container2.addEventListener('dragover', dragOver);
container2.addEventListener('drop', drop);

// Add event listener to the reset button
resetBtn.addEventListener('click', reset);

let draggedItem = null;

// Drag start event handler
function dragStart(event) {
  draggedItem = this;
  setTimeout(() => {
    this.style.display = 'none';
  }, 0);
}

// Drag end event handler
function dragEnd(event) {
  draggedItem.style.display = 'block';
  draggedItem = null;
}

// Drag over event handler to allow the drop
function dragOver(event) {
  event.preventDefault();
}

// Drop event handler
function drop(event) {
  event.preventDefault();
  
  // Append the dragged item to container2
  container2.appendChild(draggedItem);
  
  // Display success message
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.innerText = 'Item dropped successfully!';
  container2.appendChild(successMessage);
}

// Reset button event handler
function reset(event) {
  // Clear container2
  container2.innerHTML = '';

  // Reset container1 to its original state
  container1.innerHTML = '';
  for (const item of originalItems) {
    container1.appendChild(item);
  }
}


*/

// Get the containers and reset button
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const resetBtn = document.getElementById('resetBtn');

// Store the original state of container1
const originalItems = Array.from(container1.getElementsByClassName('item'));

// Add event listeners to the items in container1 for dragstart and dragend events
const items = container1.getElementsByClassName('item');
for (const item of items) {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
}

// Add event listeners to the container2 for dragover and drop events
container2.addEventListener('dragover', dragOver);
container2.addEventListener('drop', drop);

// Add event listener to the reset button
resetBtn.addEventListener('click', reset);

let draggedItem = null;

// Drag start event handler
function dragStart(event) {
  draggedItem = this;
  setTimeout(() => {
    this.style.display = 'none';
  }, 0);
}

// Drag end event handler
function dragEnd(event) {
  draggedItem.style.display = 'block';
  draggedItem = null;
}

// Drag over event handler to allow the drop
function dragOver(event) {
  event.preventDefault();
}

// Drop event handler
function drop(event) {
  event.preventDefault();
  
  // Append the dragged item to container2
  container2.appendChild(draggedItem);
  
  // Display success message
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.innerText = 'Item dropped successfully!';
  container2.appendChild(successMessage);

  // Remove the success message after 3 seconds
  setTimeout(() => {
    container2.removeChild(successMessage);
  }, 1000);
}

// Reset button event handler
function reset(event) {
  // Clear container2
  container2.innerHTML = '';

  // Reset container1 to its original state
  container1.innerHTML = '';
  for (const item of originalItems) {
    container1.appendChild(item);
  }
}
