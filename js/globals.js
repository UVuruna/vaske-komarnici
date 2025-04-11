export function loadGlobals () {
  return {
    LOGO: document.getElementById('logo'),
    MENU: document.getElementById('menu-icon'),
    BUTTONS: document.querySelectorAll('button'),
    LightFrames: document.querySelectorAll(
      '#about_us, .selectFrame > *:not(:first-child), #footer'
    ),
    ListItems: document.querySelectorAll('li strong'),
    videos: document.querySelectorAll('.video-loop'),
    signs: document.querySelectorAll('.fa-ban')
  }
}

export const ThemeList = ['morning', 'noon', 'afternoon', 'night']

const currentDate = new Date()
const minutes = currentDate.getMinutes()
const Time = currentDate.getHours() + minutes / 60
localStorage.setItem('Time', Time)

if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', ThemeList[1])
}

export const ThemeColors = {
  morning: {
    primary: 'rgb(35, 88, 141)',
    secondary: 'rgb(245, 255, 255)',
    primaryElement: 'rgb(35, 130, 35)',
    secondaryElement: 'rgb(28, 84, 28)'
  },
  noon: {
    primary: 'rgb(100, 100, 100)',
    secondary: 'rgb(255, 254, 245)',
    primaryElement: 'rgb(180,135,30)',
    secondaryElement: 'rgb(140,100,0)'
  },
  afternoon: {
    primary: 'rgb(104, 65, 25)',
    secondary: 'rgb(255, 252, 248)',
    primaryElement: 'rgb(150, 60, 60)',
    secondaryElement: 'rgb(130, 28, 28)'
  },
  night: {
    primary: 'rgb(70, 70, 70)',
    secondary: 'rgb(252, 248, 255)',
    primaryElement: 'rgb(100, 60, 160)',
    secondaryElement: 'rgb(60, 35, 130)'
  }
}
