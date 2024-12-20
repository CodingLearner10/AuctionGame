const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Expose APIs here for communication between frontend and backend
});
