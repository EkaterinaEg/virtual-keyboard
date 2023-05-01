// eslint-disable-next-line max-classes-per-file
const initialData = [
  { eventCode: 'Backquote', eventKey: '`', shiftKey: '~' },
  { eventCode: 'Digit1', eventKey: '1', shiftKey: '!' },
  { eventCode: 'Digit2', eventKey: '2', shiftKey: '@' },
  { eventCode: 'Digit3', eventKey: '3', shiftKey: '#' },
  { eventCode: 'Digit4', eventKey: '4', shiftKey: '$' },
  { eventCode: 'Digit5', eventKey: '5', shiftKey: '%' },
  { eventCode: 'Digit6', eventKey: '6', shiftKey: '^' },
  { eventCode: 'Digit7', eventKey: '7', shiftKey: '&' },
  { eventCode: 'Digit8', eventKey: '8', shiftKey: '*' },
  { eventCode: 'Digit9', eventKey: '9', shiftKey: '(' },
  { eventCode: 'Digit0', eventKey: '0', shiftKey: ')' },
  { eventCode: 'Minus', eventKey: '-', shiftKey: '_' },
  { eventCode: 'Equal', eventKey: '=', shiftKey: '+' },
  { eventCode: 'Backspace', eventKey: 'Backspace', shiftKey: 'Backspace' },
  { eventCode: 'Tab', eventKey: 'Tab', shiftKey: 'Tab' },
  { eventCode: 'KeyQ', eventKey: 'q', shiftKey: 'Q' },
  { eventCode: 'KeyW', eventKey: 'w', shiftKey: 'W' },
  { eventCode: 'KeyE', eventKey: 'e', shiftKey: 'E' },
  { eventCode: 'KeyR', eventKey: 'r', shiftKey: 'R' },
  { eventCode: 'KeyT', eventKey: 't', shiftKey: 'T' },
  { eventCode: 'KeyY', eventKey: 'y', shiftKey: 'Y' },
  { eventCode: 'KeyU', eventKey: 'u', shiftKey: 'U' },
  { eventCode: 'KeyI', eventKey: 'i', shiftKey: 'I' },
  { eventCode: 'KeyO', eventKey: 'o', shiftKey: 'O' },
  { eventCode: 'KeyP', eventKey: 'p', shiftKey: 'P' },
  { eventCode: 'BracketLeft', eventKey: '[', shiftKey: '{' },
  { eventCode: 'BracketRight', eventKey: ']', shiftKey: '}' },
  { eventCode: 'Backslash', eventKey: '\\', shiftKey: '|' },
  { eventCode: 'Delete', eventKey: 'Del', shiftKey: 'Del' },
  { eventCode: 'CapsLock', eventKey: 'CapsLock', shiftKey: 'CapsLock' },
  { eventCode: 'KeyA', eventKey: 'a', shiftKey: 'A' },
  { eventCode: 'KeyS', eventKey: 's', shiftKey: 'S' },
  { eventCode: 'KeyD', eventKey: 'd', shiftKey: 'D' },
  { eventCode: 'KeyF', eventKey: 'f', shiftKey: 'F' },
  { eventCode: 'KeyG', eventKey: 'g', shiftKey: 'G' },
  { eventCode: 'KeyH', eventKey: 'h', shiftKey: 'H' },
  { eventCode: 'KeyJ', eventKey: 'j', shiftKey: 'J' },
  { eventCode: 'KeyK', eventKey: 'k', shiftKey: 'K' },
  { eventCode: 'KeyL', eventKey: 'l', shiftKey: 'L' },
  { eventCode: 'Semicolon', eventKey: ';', shiftKey: ':' },
  { eventCode: 'Quote', eventKey: "'", shiftKey: '"' },
  { eventCode: 'Enter', eventKey: 'Enter', shiftKey: 'Enter' },
  { eventCode: 'ShiftLeft', eventKey: 'Shift', shiftKey: 'Shift' },
  { eventCode: 'KeyZ', eventKey: 'z', shiftKey: 'Z' },
  { eventCode: 'KeyX', eventKey: 'x', shiftKey: 'X' },
  { eventCode: 'KeyC', eventKey: 'c', shiftKey: 'C' },
  { eventCode: 'KeyV', eventKey: 'v', shiftKey: 'V' },
  { eventCode: 'KeyB', eventKey: 'b', shiftKey: 'B' },
  { eventCode: 'KeyN', eventKey: 'n', shiftKey: 'N' },
  { eventCode: 'KeyM', eventKey: 'm', shiftKey: 'M' },
  { eventCode: 'Comma', eventKey: ',', shiftKey: '<' },
  { eventCode: 'Period', eventKey: '.', shiftKey: '>' },
  { eventCode: 'Slash', eventKey: '/', shiftKey: '?' },
  { eventCode: 'ArrowUp', eventKey: '▲', shiftKey: '?' },
  { eventCode: 'ShiftRight', eventKey: 'Shift', shiftKey: 'Shift' },
  { eventCode: 'ControlLeft', eventKey: 'Ctrl', shiftKey: 'Ctrl' },
  { eventCode: 'MetaLeft', eventKey: 'Win', shiftKey: 'Win' },
  { eventCode: 'AltLeft', eventKey: 'Alt', shiftKey: 'Alt' },
  { eventCode: 'Space', eventKey: ' ', shiftKey: ' ' },
  { eventCode: 'AltRight', eventKey: 'Alt', shiftKey: 'Alt' },
  { eventCode: 'ArrowLeft', eventKey: '◄', shiftKey: '◄' },
  { eventCode: 'ArrowDown', eventKey: '▼', shiftKey: '▼' },
  { eventCode: 'ArrowRight', eventKey: '►', shiftKey: '►' },
  { eventCode: 'ControlRight', eventKey: 'Ctrl', shiftKey: 'Ctrl' },
];

const textButtons = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Tab', 'CapsLock', 'Shift', 'Control', 'Meta', 'Alt', 'Shift', 'Enter', 'Backspace', 'Delete', 'Del', 'Ctrl', 'Win', 'Space'];

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
  // button.innerHTML = `${btn.eventKey}`;

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
  return button;
};

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

class KeyboardLang {
  constructor({ eventCode, eventKey, shiftKey }) {
    this.eventCode = eventCode;
    this.eventKey = eventKey;
    this.shiftKey = shiftKey;
  }

  generateEngElements() {
    let template = '';
    const engKeyboard = document.createElement('span');
    engKeyboard.className = 'eng';

    // eslint-disable-next-line no-unused-expressions
    this.eventKey
    && (template += `<span class="elDown">${this.eventKey}</span>`);

    // eslint-disable-next-line no-unused-expressions
    this.shiftKey
    && (template += `<span class="shiftDown hidden">${this.shiftKey}</span>`);

    template += '</span>';
    engKeyboard.innerHTML = template;
    return engKeyboard;
  }
}

const generateKeyboard = (data) => {
  const keyboards = [];
  data.forEach((el) => {
    keyboards.push(new KeyboardLang(el));
  });
  return keyboards;
  // console.log(keyboards);
};

const renderKeyboardsToDom = () => {
  generateKeyboard(initialData).forEach((el) => document.querySelectorAll('.button').forEach((element) => {
    if (element.classList.contains(el.eventCode)) {
      element.append(el.generateEngElements());
    }
  }));
};
renderKeyboardsToDom();

const buttons = document.querySelectorAll('.button');
const textarea = document.querySelector('.page__textarea');
const capsLock = document.querySelector('.CapsLock');

window.addEventListener('keydown', (event) => {
  event.preventDefault();
  buttons.forEach((element) => {
    element.classList.remove('active');
  });
  // console.log(event.code);
  document.querySelector(`.${event.code}`).classList.add('active');

  const cursor = textarea.selectionStart;

  if (!textButtons.includes(event.key)) {
    // console.log(textarea.innerHTML);
    // const cursor = textarea.selectionStart;

    textarea.value = textarea.value.slice(0, textarea.selectionStart)
    + event.key + textarea.value.slice(textarea.selectionEnd);

    textarea.selectionStart = cursor + 1;

    textarea.selectionEnd = textarea.selectionStart;
  }
  if (event.code === 'Tab') {
    if (textarea.selectionStart === textarea.value.length) {
      textarea.value += '    ';
    } else {
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)
      }    ${textarea.value.slice(textarea.selectionEnd)}`;
      textarea.selectionStart = cursor;
    }

    textarea.selectionEnd = textarea.selectionStart;
  }
  if (event.code === 'Backspace') {
    // const cursor = textarea.selectionStart;
    textarea.selectionStart = textarea.selectionEnd;

    textarea.value = textarea.value.slice(0, textarea.selectionStart - 1)
    + textarea.value.slice(textarea.selectionEnd);

    textarea.selectionStart = (cursor - 1);
    textarea.selectionEnd = textarea.selectionStart;
  }
  if (event.code === 'CapsLock') {
  // console.log('caps');
    capsLock.classList.toggle('caps');
  }
  if (event.code === 'Enter') {
    // console.log(event.code);
    if (textarea.selectionStart === textarea.value.length) {
      textarea.value += '\n';
    } else {
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)
      }\n${textarea.value.slice(textarea.selectionEnd)}`;
    }

    textarea.selectionStart = (cursor + 50);
    textarea.selectionEnd = textarea.selectionStart;
  }
  if (event.code === 'Delete') {
    textarea.selectionStart = textarea.selectionEnd;

    textarea.value = textarea.value.slice(0, textarea.selectionStart)
    + textarea.value.slice(textarea.selectionEnd + 1);

    textarea.selectionStart = (cursor);
    textarea.selectionEnd = textarea.selectionStart;
  }
  if (event.code === 'ArrowLeft') {
    textarea.value = `${textarea.value.slice(0, textarea.selectionStart)
    }◄${textarea.value.slice(textarea.selectionEnd)}`;

    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = textarea.selectionStart;
    // textarea.value += '◄';
  }
  if (event.code === 'ArrowRight') {
    // textarea.value += '►';
    textarea.value = `${textarea.value.slice(0, textarea.selectionStart)
    }►${textarea.value.slice(textarea.selectionEnd)}`;

    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = textarea.selectionStart;
  }
  if (event.code === 'ArrowUp') {
    // textarea.value += '▲';
    textarea.value = `${textarea.value.slice(0, textarea.selectionStart)
    }▲${textarea.value.slice(textarea.selectionEnd)}`;

    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = textarea.selectionStart;
  }
  if (event.code === 'ArrowDown') {
    // textarea.value += '▼';
    textarea.value = `${textarea.value.slice(0, textarea.selectionStart)
    }▼${textarea.value.slice(textarea.selectionEnd)}`;

    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = textarea.selectionStart;
  }
});

// ______________________________________Keyup implementation

window.addEventListener('keyup', (event) => {
  buttons.forEach((element) => {
    element.classList.remove('active');
  });

  document.querySelector(`.${event.code}`).classList.remove('active');
});

// mouse click
buttons.forEach((element) => element.addEventListener('click', (event) => {
  event.preventDefault();
  textarea.focus();

  const cursor = textarea.selectionStart;
  textarea.selectionStart = textarea.selectionEnd;

  buttons.forEach((el) => {
    el.classList.remove('active');
  });
  event.currentTarget.closest('.button').classList.add('active');

  const val = event.currentTarget.firstChild.firstChild.textContent;
  //  const valHidden = event.currentTarget.firstChild.lastChild.textContent;

  if (!textButtons.includes(val)) {
    if (document.querySelector('.CapsLock').classList.contains('caps')
    || document.querySelector('.ShiftLeft').classList.contains('caps')
    || document.querySelector('.ShiftRight').classList.contains('caps')) {
      textarea.value = textarea.value.slice(0, textarea.selectionStart)
    + val.toUpperCase() + textarea.value.slice(textarea.selectionEnd);
    } else {
      textarea.value = textarea.value.slice(0, textarea.selectionStart)
      + val + textarea.value.slice(textarea.selectionEnd);
    }

    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = textarea.selectionStart;
  }

  if (val === 'Tab') {
    if (textarea.selectionStart === textarea.value.length) {
      textarea.value += '    ';
    } else {
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)
      }    ${textarea.value.slice(textarea.selectionEnd)}`;
      textarea.selectionStart = cursor;
    }

    textarea.selectionEnd = textarea.selectionStart;
  }
  if (val === 'Backspace') {
    textarea.value = textarea.value.slice(0, textarea.selectionStart - 1)
    + textarea.value.slice(textarea.selectionEnd);

    textarea.selectionStart = (cursor - 1);
    textarea.selectionEnd = textarea.selectionStart;
  }
  if (val === 'CapsLock') {
    // console.log('caps');
    capsLock.classList.toggle('caps');
    document.querySelector('.ShiftRight').classList.remove('caps');
    document.querySelector('.ShiftLeft').classList.remove('caps');
  }
  if (val === 'Enter') {
    if (textarea.selectionStart === textarea.value.length) {
      textarea.value += '\n';
    } else {
      textarea.value = `${textarea.value.slice(0, textarea.selectionStart)
      }\n${textarea.value.slice(textarea.selectionEnd)}`;
    }

    textarea.selectionStart = (cursor + 50);
    textarea.selectionEnd = textarea.selectionStart;
  }
  if (val === 'Del') {
    textarea.value = textarea.value.slice(0, textarea.selectionStart)
    + textarea.value.slice(textarea.selectionEnd + 1);

    textarea.selectionStart = (cursor);
    textarea.selectionEnd = textarea.selectionStart;
  }
  if (event.currentTarget.classList.contains('ShiftLeft')) {
    document.querySelector('.ShiftLeft').classList.toggle('caps');
    document.querySelector('.CapsLock').classList.remove('caps');
    document.querySelector('.ShiftRight').classList.remove('caps');
  }
  if (event.currentTarget.classList.contains('ShiftRight')) {
    document.querySelector('.ShiftRight').classList.toggle('caps');
    document.querySelector('.CapsLock').classList.remove('caps');
    document.querySelector('.ShiftLeft').classList.remove('caps');
  }
}));
