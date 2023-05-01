const initialData = [
  { eventCode: 'Backquote', eventKey: '`' },
  { eventCode: 'Digit1', eventKey: '1' },
  { eventCode: 'Digit2', eventKey: '2' },
  { eventCode: 'Digit3', eventKey: '3' },
  { eventCode: 'Digit4', eventKey: '4' },
  { eventCode: 'Digit5', eventKey: '5' },
  { eventCode: 'Digit6', eventKey: '6' },
  { eventCode: 'Digit7', eventKey: '7' },
  { eventCode: 'Digit8', eventKey: '8' },
  { eventCode: 'Digit9', eventKey: '9' },
  { eventCode: 'Digit0', eventKey: '0' },
  { eventCode: 'Minus', eventKey: '-' },
  { eventCode: 'Equal', eventKey: '=' },
  { eventCode: 'Backspace', eventKey: 'Backspace' },
  { eventCode: 'Tab', eventKey: 'Tab' },
  { eventCode: 'KeyQ', eventKey: 'q' },
  { eventCode: 'KeyW', eventKey: 'w' },
  { eventCode: 'KeyE', eventKey: 'e' },
  { eventCode: 'KeyR', eventKey: 'r' },
  { eventCode: 'KeyT', eventKey: 't' },
  { eventCode: 'KeyY', eventKey: 'y' },
  { eventCode: 'KeyU', eventKey: 'u' },
  { eventCode: 'KeyI', eventKey: 'i' },
  { eventCode: 'KeyO', eventKey: 'o' },
  { eventCode: 'KeyP', eventKey: 'p' },
  { eventCode: 'BracketLeft', eventKey: '[' },
  { eventCode: 'BracketRight', eventKey: ']' },
  { eventCode: 'Backslash', eventKey: '\\' },
  { eventCode: 'Delete', eventKey: 'Del' },
  { eventCode: 'CapsLock', eventKey: 'CapsLock' },
  { eventCode: 'KeyA', eventKey: 'a' },
  { eventCode: 'KeyS', eventKey: 's' },
  { eventCode: 'KeyD', eventKey: 'd' },
  { eventCode: 'KeyF', eventKey: 'f' },
  { eventCode: 'KeyG', eventKey: 'g' },
  { eventCode: 'KeyH', eventKey: 'h' },
  { eventCode: 'KeyJ', eventKey: 'j' },
  { eventCode: 'KeyK', eventKey: 'k' },
  { eventCode: 'KeyL', eventKey: 'l' },
  { eventCode: 'Semicolon', eventKey: ';' },
  { eventCode: 'Quote', eventKey: "'" },
  { eventCode: 'Enter', eventKey: 'Enter' },
  { eventCode: 'ShiftLeft', eventKey: 'Shift' },
  { eventCode: 'KeyZ', eventKey: 'z' },
  { eventCode: 'KeyX', eventKey: 'x' },
  { eventCode: 'KeyC', eventKey: 'c' },
  { eventCode: 'KeyV', eventKey: 'v' },
  { eventCode: 'KeyB', eventKey: 'b' },
  { eventCode: 'KeyN', eventKey: 'n' },
  { eventCode: 'KeyM', eventKey: 'm' },
  { eventCode: 'Comma', eventKey: ',' },
  { eventCode: 'Period', eventKey: '.' },
  { eventCode: 'Slash', eventKey: '/' },
  { eventCode: 'ArrowUp', eventKey: '▲' },
  { eventCode: 'ShiftRight', eventKey: 'Shift' },
  { eventCode: 'ControlLeft', eventKey: 'Ctrl' },
  { eventCode: 'MetaLeft', eventKey: 'Win' },
  { eventCode: 'AltLeft', eventKey: 'Alt' },
  { eventCode: 'Space', eventKey: ' ' },
  { eventCode: 'AltRight', eventKey: 'Alt' },
  { eventCode: 'ArrowLeft', eventKey: '◄' },
  { eventCode: 'ArrowDown', eventKey: '▼' },
  { eventCode: 'ArrowRight', eventKey: '►' },
  { eventCode: 'ControlRight', eventKey: 'Ctrl' },
];

const textButtons = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Tab', 'CapsLock', 'Shift', 'Control', 'Meta', 'Alt', 'Shift', 'Enter', 'Backspace', 'Delete', 'Del', 'Ctrl', 'Win', 'Space'];
// const data = [
//   "`",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "0",
//   "-",
//   "=",
//   "Backspace",
//   "Tab",
//   "q",
//   "w",
//   "e",
//   "r",
//   "t",
//   "y",
//   "u",
//   "i",
//   "o",
//   "p",
//   "[",
//   "]",
//   "\\",
//   "Del",
//   "Capslock",
//   "a",
//   "s",
//   "d",
//   "f",
//   "g",
//   "h",
//   "j",
//   "k",
//   "l",
//   ";",
//   "'",
//   "Enter",
//   "Shift",
//   "z",
//   "x",
//   "c",
//   "v",
//   "b",
//   "n",
//   "m",
//   ",",
//   ".",
//   "/",
//   "arup",
//   "Shift",
//   "Ctrl",
//   "Win",
//   "Alt",
//   "Space",
//   "Alt",
//   "arleft",
//   "arbot",
//   "arright",
//   "Ctrl",
// ];

class PageKeyboard {
  constructor() {
    this.container = '';
    this.title = '';
    this.textarea = '';
    this.keyboard = '';
  }

  buildElements() {
    this.container = this.createDomNode(this.container, 'div', 'container');
    this.title = this.createDomNode(this.title, 'p', 'page__title');
    this.title.innerHTML = 'Виртуальная клавиатура';
    this.textarea = this.createDomNode(
      this.textarea,
      'textarea',
      'page__textarea',
    );
    this.keyboard = this.createDomNode(this.keyboard, 'div', 'page__keyboard');
    this.appendElements();
  }

  appendElements() {
    document.body.append(this.container);
    this.container.append(this.title);
    this.container.append(this.textarea);
    this.container.append(this.keyboard);
  }

  // eslint-disable-next-line class-methods-use-this
  createDomNode(node, element, ...classes) {
    // eslint-disable-next-line no-param-reassign
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }
}

const generateButton = (btn) => {
  const button = document.createElement('button');
  button.className = `button ${btn.eventCode}`;
  button.setAttribute('type', 'button');
  button.innerHTML = `${btn.eventKey}`;
  if (
    button.classList.contains('Backspace')
    || button.classList.contains('Enter')
    || button.classList.contains('ShiftLeft')
    || button.classList.contains('ShiftRight')
    || button.classList.contains('CapsLock')
  ) {
    button.classList.add('keyboard__button_wide', 'keyboard__button_dark');
  }
  if (button.classList.contains('Space')) {
    button.classList.add(
      'keyboard__button_widest',
      'keyboard__button_dark',
    );
  }
  if (
    button.classList.contains('Tab')
      || button.classList.contains('Delete')
      || button.classList.contains('ControlLeft')
      || button.classList.contains('ControlRight')
      || button.classList.contains('MetaLeft')
      || button.classList.contains('AltLeft')
      || button.classList.contains('AltRight')
  ) {
    button.classList.add('keyboard__button', 'keyboard__button_dark');
  } else {
    button.classList.add('keyboard__button');
  }
  // const lineBreak =
  //   ["Backspace", "Delete", "Enter", "ShiftRight"].indexOf(button) !== -1;
  //   if(lineBreak) {

  //   }
  return button;
};

//   generateButtons() {
//     let buttonboard = document.createElement("div");
//     buttonboard.className = "buttonboard";

//     // Creates HTML for an icon
//
const renderContainer = () => {
  const pageContent = new PageKeyboard();
  pageContent.buildElements();
  // return pageContent;
};
const setAttribute = () => {
  const textarea = document.querySelector('.page__textarea');
  textarea.setAttribute('row', '5');
  textarea.setAttribute('cols', '50');
};

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
  generateButtons(initialData).forEach((el) => {
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
// window.onload = function() {
//   renderContainer();
//   renderButtons();
//   setAttribute();

// const but = [];
// document.onkeydown = function (event) {
//   but.push(`eventCode: ${event.code}, eventKey: ${event.key}`);
// };
// console.log(but);

const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const textarea = document.querySelector('.page__textarea');
// const keyboard = document.querySelector('.page__keyboard');
const capsLock = document.querySelector('.CapsLock');

// document.body.addEventListener("click", () => {
//   textarea.focus();
// });
// Keybord button press

window.addEventListener('keydown', (event) => {
  event.preventDefault();
  buttons.forEach((element) => {
    element.classList.remove('active');
  });
  // console.log(event.code);
  document.querySelector(`.${event.code}`).classList.add('active');

  // console.log(textarea.selectionStart);
  // }
  if (!textButtons.includes(event.key)) {
    // console.log(textarea.innerHTML);
    textarea.value = textarea.value.slice(0, textarea.selectionStart)
    + event.key + textarea.value.slice(textarea.selectionEnd);
  }
  if (event.code === 'Tab') {
    textarea.value += '    ';
  }
  if (event.code === 'Backspace') {
    const cursor = textarea.selectionStart;
    textarea.selectionStart = textarea.selectionEnd;
    textarea.value = textarea.value.slice(0, textarea.selectionStart - 1)
    + textarea.value.slice(textarea.selectionEnd);
    textarea.selectionStart = (cursor - 1);
    textarea.selectionEnd = (cursor - 1);
  }
  if (event.code === 'CapsLock') {
  // console.log('caps');
    capsLock.classList.toggle('caps');
  }
  if (event.code === 'Enter') {
    // console.log(event.code);
    textarea.value += '\n';
  }
  if (event.code === 'Delete') {
    const cursor = textarea.selectionStart;
    textarea.selectionStart = textarea.selectionEnd;
    textarea.value = textarea.value.slice(0, textarea.selectionStart)
    + textarea.value.slice(textarea.selectionEnd + 1);
    textarea.selectionStart = (cursor - 1);
    textarea.selectionEnd = (cursor - 1);
  }
  if (event.code === 'ArrowLeft') {
    textarea.value += '◄';
  }
  if (event.code === 'ArrowRight') {
    textarea.value += '►';
  }
  if (event.code === 'ArrowUp') {
    textarea.value += '▲';
  }
  if (event.code === 'ArrowDown') {
    textarea.value += '▼';
  }

  // if (event.code === 'ShiftLeft' && event.code.startsWith('Key')) {
  //   // console.log(event.code);
  //   textarea.value += event.key.toUpperCase()
  // };
});

window.addEventListener('keyup', (event) => {
  buttons.forEach((element) => {
    element.classList.remove('active');
  });
  document.querySelector(`.${event.code}`).classList.remove('active');
});

// buttons.forEach((element) => {
//   element.addEventListener('click', function() {
//     console.log('hi');
//   })
//   element.classList.remove('active');
//   // element.classList.remove('active');
//   element.addEventListener('click', (event) => {
//     event.target.classList.add('active')
//   //   buttons.forEach((element) => {
//   //     element.classList.remove('active');
//   //   })
//   // element.classList.add('active')
//     })
//   })
// let cur = event.target;
// console.log("mousedown");
// console.log(cur);
// // console.log(event.code);
// cur.classList.add('active');
// console.log(element.textContent);
// console.log(document.querySelector(`.${event.code}`));
// if (!textButtons.includes(event.key)) {
//   textarea.innerHTML += event.key;
// }

// buttons.forEach((element) => {
//   element.addEventListener('mouseup', (event) => {
//     let cur = document.querySelector(".active")
//     console.log('mouseup');
//  console.log(cur);
//     cur.classList.remove('active')
//     let cur = document.querySelector('.active');
//     // console.log(cur);
//     cur.classList.remove('active');
// //     // console.log(element.textContent);
// //     // console.log(document.querySelector(`.${event.code}`));
// //     // if (!textButtons.includes(event.key)) {
// //     //   textarea.innerHTML += event.key;
// //     // }

// keyboard.addEventListener('mousedown', (event) => {
//   buttons.forEach((element) => {
//     element.classList.remove('active');
//   });
//   document.querySelector('.event.target.textContent').classList.remove('active');
// });
// buttons.forEach(element =>
// element.addEventListener('mousedown', function() {
// element.classList.add('active');
// if (!textButtons.includes(element.textContent)) {
//         textarea.innerHTML += element.textContent;
//       }
// });
// element.addEventListener('mouseup', function() {
//   element.classList.remove('active');
// });)
// buttons.forEach(element =>
//   element.addEventListener('mouseup', function() {
//   element.classList.remove('active');
//   })
//   );
// event.target.classList.remove('active'));
// this.addclass('active')
// keyboard.addEventListener('mouseup', (event) =>
// event.target.classList.remove('active'));
// buttons.forEach((element) => {

//     element.classList.remove("active");

//   element.addEventListener('click', (event) => {
//     // console.log(event.target);
//     // event.target.classList.remove("active");
//     // buttons.forEach(el => el.classList.remove('active'));
//     event.target.classList.toggle('active');

//      if (!textButtons.includes(event.target.textContent)) {
//       textarea.innerHTML += event.target.textContent;
//     }
//   });
//        // console.log(event.target);
//       // buttons.forEach(el => el.classList.remove('active'))
//       // console.log(event.target);
//     // event.target.classList.add("active");
//     // if(event.target.classList.contains("active")) {
//     //   event.tarfet.classList.remove('active')
//     // }

//   });
// if(element.classList.contains("active")) {
//  element.classList.remove("active")
// }

// buttons.forEach(el =>
//   el.addEventListener('click', function(event) {
//     console.log(event.target);
//   }

//   ))
