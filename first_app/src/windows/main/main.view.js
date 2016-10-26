// Client-side of our application
const {ipcRenderer} = require('electron')

function buttonPressed () {
  // Send asynchronously a message
  // ipcRenderer.sendSync to send it synchronously
  ipcRenderer.send('toggle-insert-view');
};
