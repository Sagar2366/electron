'use strict'

const ipcRenderer = require('@electron/internal/renderer/ipc-renderer-internal')

// Note that while Chromium content APIs have observer for focus/blur, they
// unfortunately do not work for webview.

module.exports = function (guestInstanceId) {
  window.addEventListener('focus', () => {
    ipcRenderer.send('ELECTRON_GUEST_VIEW_MANAGER_FOCUS_CHANGE', true, guestInstanceId)
  })

  window.addEventListener('blur', () => {
    ipcRenderer.send('ELECTRON_GUEST_VIEW_MANAGER_FOCUS_CHANGE', false, guestInstanceId)
  })
}
