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
  { eventCode: 'Space', eventKey: 'Space' },
  { eventCode: 'AltRight', eventKey: 'Alt' },
  { eventCode: 'ArrowLeft', eventKey: '◄' },
  { eventCode: 'ArrowDown', eventKey: '▼' },
  { eventCode: 'ArrowRight', eventKey: '►' },
  { eventCode: 'ControlRight', eventKey: 'Ctrl' },
];
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
function init() {
  renderContainer();
  renderButtons();
  setAttribute();
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
};

init();


// init();
// functionality
// let but = []
// document.onkeydown = function(event) {
// but.push(`eventCode: ${event.code}, eventKey: ${event.key}`);
// }
// console.log(but);

const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const textarea = document.querySelector('.page__textarea');
// console.log(textarea);

// console.log(document.querySelector(".KeyF"));
// console.log(document.querySelector(".event.code"));
document.body.addEventListener('keydown', function(event) {


  document.querySelector(`.${event.code}`).classList.add("active");
  
});
document.body.addEventListener('keyup', function(event) {

  buttons.forEach(function (element) {
    element.classList.remove("active");
  });
  document.querySelector(`.${event.code}`).classList.remove("active");
  
});
  //  for (let i=0 ; i <buttons.length ; i++) {
  //   buttons[i].classList.add("active");

    // console.log(buttons[0]);
 //UpperCase() method returns the value of the string converted to uppercase
      // if(buttons[i].innerHTML == index.key.toUpperCase()){
      //     buttons[i].classList.add('active')
      // };
  
// textarea.innerHTML += index.key
//   if(index.key =='Backspace'){
//     textarea.innerHTML=textarea.innerHTML.slice(0 , -10)
//   }
// })
// window.addEventListener('keyup' , function(index){
//   for(let j=0 ; j<buttons.length ; j++){
//       if(buttons[j].innerHTML == index.key.toUpperCase()){
//           buttons[j].classList.remove('active')
//       }
//   }
// });
