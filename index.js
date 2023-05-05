import PageContent from './js/PageContent.js';
import KeyboardLang from './js/KeyboardLang.js';
import {
  engData, rusData, letters, textButtons,
} from './js/data.js';

let pageLanguage;

const localStorageLanguage = window.localStorage.getItem('lang');

if (!localStorageLanguage) {
  window.localStorage.setItem('lang', 'rus');

  pageLanguage = 'rus';
} else {
  pageLanguage = localStorageLanguage;
}
// ____________________________________________________________________________
const generateButton = (btn) => {
  const button = document.createElement('button');
  button.className = `button ${btn.eventCode}`;
  button.setAttribute('type', 'button');
  // button.innerHTML = `${btn.eventKey}`;

  if (
    button.classList.contains('Backspace')
    || button.classList.contains('Enter')
    || button.classList.contains('ShiftLeft')
    || button.classList.contains('ShiftRight')
    || button.classList.contains('CapsLock')
  ) {
    button.classList.add('keyboard__button_wide');
  }
  if (button.classList.contains('Space')) {
    button.classList.add(
      'keyboard__button_widest',
    );
  } else {
    button.classList.add('keyboard__button');
  }
  return button;
};

const renderContainer = () => {
  const content = new PageContent();
  content.buildElements();
  // return Content;
};

const setAttribute = () => {
  const textarea = document.querySelector('.page__textarea');
  textarea.setAttribute('row', '10');
  textarea.setAttribute('cols', '50');
};

// ___________________________________________create span
const getKeyboardContainer = () => {
  const keyboard = document.querySelector('.page__keyboard');
  keyboard.innerHTML = '';
  return keyboard;
};
const generateButtons = (data) => {
  const buttons = [];
  data.forEach((button) => {
    buttons.push(button);
  });
  return buttons;
  //   console.log(buttons);
};
const renderButtons = () => {
  const keyboardContainer = getKeyboardContainer();
  generateButtons(engData).forEach((el) => {
    keyboardContainer.append(generateButton(el));
  });
};

function init() {
  renderContainer();
  renderButtons();
  setAttribute();
  document.querySelector('.page__textarea').focus();
}

init();

// ______________________________________________eng and rus keyboard
const generateKeyboard = (data) => {
  const keyboards = [];
  data.forEach((el) => {
    keyboards.push(new KeyboardLang(el));
  });
  return keyboards;
};

const renderKeyboardsToDom = () => {
  if (pageLanguage === 'eng') {
    generateKeyboard(engData).forEach((el) => document.querySelectorAll('.button').forEach((element) => {
      if (element.classList.contains(el.eventCode)) {
        // eslint-disable-next-line no-param-reassign
        element.innerHTML = '';
        element.append(el.generateEngElements());
        document.querySelector('.page__langLabel').innerHTML = 'EN';
        document.querySelector('.page__title').innerHTML = 'Virtual Keyboard';
        document.querySelector('.page__shortcut').innerHTML = 'Use Ctrl + Alt to change language';
      }
    }));
    pageLanguage = 'eng';
  } else if (pageLanguage === 'rus') {
    generateKeyboard(rusData).forEach((el) => document.querySelectorAll('.button').forEach((element) => {
      if (element.classList.contains(el.eventCode)) {
        // eslint-disable-next-line no-param-reassign
        element.innerHTML = '';
        element.append(el.generateRusElements());
        document.querySelector('.page__langLabel').innerHTML = 'RU';
        document.querySelector('.page__title').innerHTML = 'Виртуальная клавиатура';
        document.querySelector('.page__shortcut').innerHTML = 'Для переключения языка Ctrl + Alt';
      }
    }));
    pageLanguage = 'rus';
  }
};

renderKeyboardsToDom();
// ______________________________________change language
const changeLanguage = () => {
//   if (lang === "eng") {
//     lang = "rus";
//     localStorage.lang = "rus";
// } else if (lang === "rus") {
//     lang = "eng";
//     localStorage.lang = "eng";
// }
// // if (lang === "en") {
// //   keyboard = keys.en;
// //   localStorage.keyboard = "keys.en";
// //   langSwitcherElement.innerHTML = "EN";
// // } else if (lang === "ru") {
// //   keyboard = keys.ru;
// //   langSwitcherElement.innerHTML = "RU";
// //   localStorage.keyboard = "keys.ru";
// // }
  if (pageLanguage === 'eng') {
    pageLanguage = 'rus';
    window.localStorage.clear();
    window.localStorage.setItem('lang', 'rus');
  } else {
    pageLanguage = 'eng';
    window.localStorage.clear();
    window.localStorage.setItem('lang', 'eng');
  }
  renderKeyboardsToDom();
};

const buttons = document.querySelectorAll('.button');
const textarea = document.querySelector('.page__textarea');
const capsLock = document.querySelector('.CapsLock');
const shiftLeft = document.querySelector('.ShiftLeft');
const shiftRight = document.querySelector('.ShiftRight');

function ShiftLeftPressed() {
  shiftLeft.classList.toggle('caps');
  capsLock.classList.remove('caps');
  shiftRight.classList.remove('caps');
  buttons.forEach((el) => {
    el.firstChild.firstChild.classList.add('hidden');
    el.firstChild.lastChild.classList.remove('hidden');
  });
  if (shiftLeft.classList.contains('caps')) {
    buttons.forEach((el) => {
      el.firstChild.firstChild.classList.add('hidden');
      el.firstChild.lastChild.classList.remove('hidden');
    });
  } else {
    buttons.forEach((el) => {
      el.firstChild.firstChild.classList.remove('hidden');
      el.firstChild.lastChild.classList.add('hidden');
    });
  }
}
function ShiftRightPressed() {
  shiftRight.classList.toggle('caps');
  capsLock.classList.remove('caps');
  shiftLeft.classList.remove('caps');
  buttons.forEach((el) => {
    el.firstChild.firstChild.classList.add('hidden');
    el.firstChild.lastChild.classList.remove('hidden');
  });

  if (shiftRight.classList.contains('caps')) {
    buttons.forEach((el) => {
      el.firstChild.firstChild.classList.add('hidden');
      el.firstChild.lastChild.classList.remove('hidden');
    });
  } else {
    buttons.forEach((el) => {
      el.firstChild.firstChild.classList.remove('hidden');
      el.firstChild.lastChild.classList.add('hidden');
    });
  }
}
function capsLockPressed() {
  capsLock.classList.toggle('caps');
  shiftRight.classList.remove('caps');
  shiftLeft.classList.remove('caps');
  if (capsLock.classList.contains('caps')) {
    buttons.forEach((el) => {
      if (letters.includes(el.firstChild.lastChild.textContent)) {
        el.firstChild.firstChild.classList.add('hidden');
        el.firstChild.lastChild.classList.remove('hidden');
      } else {
        el.firstChild.firstChild.classList.remove('hidden');
        el.firstChild.lastChild.classList.add('hidden');
      }
    });
  } else {
    buttons.forEach((el) => {
      el.firstChild.firstChild.classList.remove('hidden');
      el.firstChild.lastChild.classList.add('hidden');
    });
  }
}

// ________________________________________________Logic
let elementDown;
let shiftDown;

function logic() {
  const cursor = textarea.selectionStart;
  textarea.selectionStart = textarea.selectionEnd;
  if (!textButtons.includes(elementDown)) {
    if (capsLock.classList.contains('caps')) {
      textarea.value = textarea.value.slice(0, textarea.selectionStart)
  + elementDown.toUpperCase() + textarea.value.slice(textarea.selectionEnd);
    } else if (
      (!textButtons.includes(shiftDown)
    && (shiftLeft.classList.contains('caps')))
  || (!textButtons.includes(shiftDown)
    && (shiftRight.classList.contains('caps')))) {
      textarea.value = textarea.value.slice(0, textarea.selectionStart)
      + shiftDown
      + textarea.value.slice(textarea.selectionEnd);
    } else {
      textarea.value = textarea.value.slice(0, textarea.selectionStart)
    + elementDown + textarea.value.slice(textarea.selectionEnd);
    }

    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = textarea.selectionStart;
  }

  if (elementDown === 'Tab') {
    if (textarea.selectionStart === textarea.value.length) {
      textarea.value += '    ';
    } else {
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)
      }    ${textarea.value.slice(textarea.selectionEnd)}`;
      textarea.selectionStart = cursor + 4;
    }

    textarea.selectionEnd = textarea.selectionStart;
  }
  if (elementDown === 'Backspace') {
    textarea.value = textarea.value.slice(0, textarea.selectionStart - 1)
  + textarea.value.slice(textarea.selectionEnd);

    textarea.selectionStart = (cursor - 1);
    textarea.selectionEnd = textarea.selectionStart;
  }

  if (elementDown === 'Enter') {
    if (textarea.selectionStart === textarea.value.length) {
      textarea.value += '\n';
    } else {
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)
      }\n${textarea.value.slice(textarea.selectionEnd)}`;
    }

    textarea.selectionStart = (cursor + 1);

    textarea.selectionEnd = textarea.selectionStart;
  }
  if (elementDown === 'Del') {
    textarea.value = textarea.value.slice(0, textarea.selectionStart)
  + textarea.value.slice(textarea.selectionEnd + 1);

    textarea.selectionStart = (cursor);
    textarea.selectionEnd = textarea.selectionStart;
  }
}
// __________________________________________________keydown
document.addEventListener('keydown', (event) => {
  elementDown = document.querySelector(`.${event.code}`).firstChild.firstChild.textContent;
  shiftDown = document.querySelector(`.${event.code}`).firstChild.lastChild.textContent;

  event.preventDefault();
  buttons.forEach((element) => {
    element.classList.remove('active');
  });
  // console.log(event.code);
  document.querySelector(`.${event.code}`).classList.add('active');

  logic();

  if (event.altKey && event.ctrlKey) {
    changeLanguage();
    capsLock.classList.remove('caps');
    shiftRight.classList.remove('caps');
    shiftLeft.classList.remove('caps');
  }
  if (event.code === 'ShiftLeft') {
    ShiftLeftPressed();
  }
  if (event.code === 'ShiftRight') {
    ShiftRightPressed();
  }
  if (event.code === 'CapsLock') {
    capsLockPressed();
  }
});

// ______________________________________keyup

document.addEventListener('keyup', (event) => {
  buttons.forEach((element) => {
    element.classList.remove('active');
  });

  document.querySelector(`.${event.code}`).classList.remove('active');
});

// __________________________________________________mouse click

buttons.forEach((element) => element.addEventListener('click', (event) => {
  textarea.focus();

  buttons.forEach((el) => {
    el.classList.remove('active');
  });
  event.currentTarget.closest('.button').classList.add('active');
  event.currentTarget.closest('.button').classList.remove('active');

  elementDown = event.currentTarget.firstChild.firstChild.textContent;
  shiftDown = event.currentTarget.firstChild.lastChild.textContent;

  logic();

  if (event.currentTarget.classList.contains('ShiftLeft')) {
    ShiftLeftPressed();
  }
  if (event.currentTarget.classList.contains('ShiftRight')) {
    ShiftRightPressed();
  }

  if (event.currentTarget.classList.contains('CapsLock')) {
    capsLockPressed();
  }
}));
