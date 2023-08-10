import { app, Menu, MenuItemConstructorOptions } from 'electron';

const menuTemplate = [
  {
    label: 'dockit',
    submenu: [
      {
        label: 'About dockit',
        selector: 'dockit:',
      },
      {
        type: 'separator',
      },
      {
        label: 'Services',
        submenu: [],
      },
      {
        type: 'separator',
      },
      {
        label: 'Hide App',
        accelerator: 'CmdOrCtrl+H',
        selector: 'hide:',
      },
      {
        label: 'Hide Others',
        accelerator: 'CmdOrCtrl+Shift+H',
        selector: 'hideOtherApplications:',
      },
      {
        label: 'Show All',
        selector: 'unhideAllApplications:',
      },
      {
        type: 'separator',
      },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: () => app.quit(),
      },
    ],
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',
        selector: 'undo:',
      },
      {
        label: 'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',
        selector: 'redo:',
      },
      {
        type: 'separator',
      },
      {
        label: 'Cut',
        accelerator: 'CmdOrCtrl+X',
        selector: 'cut:',
      },
      {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
        selector: 'copy:',
      },
      {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
        selector: 'paste:',
      },
      {
        label: 'Select All',
        accelerator: 'CmdOrCtrl+A',
        selector: 'selectAll:',
      },
    ],
  },
  {
    label: 'Window',
    submenu: [
      {
        label: 'Minimize',
        accelerator: 'Command+M',
        selector: 'performMiniaturize:',
      },
      {
        label: 'Close',
        accelerator: 'Command+W',
        selector: 'performClose:',
      },
      {
        type: 'separator',
      },
      {
        label: 'Bring All to Front',
        selector: 'arrangeInFront:',
      },
    ],
  },
] as Array<MenuItemConstructorOptions>;

export const createMenu = () => {
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
};
