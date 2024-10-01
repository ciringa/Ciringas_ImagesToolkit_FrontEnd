import { app, BrowserWindow } from 'electron/main';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
// Substitui __dirname com essa abordagem
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'scr/preload.js')
    }
  })
  win.setMenu(null)
  win.loadURL('http://localhost:5173/')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})