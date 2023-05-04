const engData = [
  {
    eventCode: 'Backquote', eventKey: '`', shiftKey: '~',
  },
  {
    eventCode: 'Digit1', eventKey: '1', shiftKey: '!',
  },
  {
    eventCode: 'Digit2', eventKey: '2', shiftKey: '@',
  },
  {
    eventCode: 'Digit3', eventKey: '3', shiftKey: '#',
  },
  {
    eventCode: 'Digit4', eventKey: '4', shiftKey: '$',
  },
  {
    eventCode: 'Digit5', eventKey: '5', shiftKey: '%',
  },
  {
    eventCode: 'Digit6', eventKey: '6', shiftKey: '^',
  },
  {
    eventCode: 'Digit7', eventKey: '7', shiftKey: '&',
  },
  { eventCode: 'Digit8', eventKey: '8', shiftKey: '*' },
  {
    eventCode: 'Digit9', eventKey: '9', shiftKey: '(',
  },
  {
    eventCode: 'Digit0', eventKey: '0', shiftKey: ')',
  },
  {
    eventCode: 'Minus', eventKey: '-', shiftKey: '_',
  },
  {
    eventCode: 'Equal', eventKey: '=', shiftKey: '+',
  },
  {
    eventCode: 'Backspace', eventKey: 'Backspace', shiftKey: 'Backspace',
  },
  {
    eventCode: 'Tab', eventKey: 'Tab', shiftKey: 'Tab',
  },
  {
    eventCode: 'KeyQ', eventKey: 'q', shiftKey: 'Q',
  },
  {
    eventCode: 'KeyW', eventKey: 'w', shiftKey: 'W',
  },
  {
    eventCode: 'KeyE', eventKey: 'e', shiftKey: 'E',
  },
  {
    eventCode: 'KeyR', eventKey: 'r', shiftKey: 'R',
  },
  {
    eventCode: 'KeyT', eventKey: 't', shiftKey: 'T',
  },
  {
    eventCode: 'KeyY', eventKey: 'y', shiftKey: 'Y',
  },
  {
    eventCode: 'KeyU', eventKey: 'u', shiftKey: 'U',
  },
  {
    eventCode: 'KeyI', eventKey: 'i', shiftKey: 'I',
  },
  {
    eventCode: 'KeyO', eventKey: 'o', shiftKey: 'O',
  },
  {
    eventCode: 'KeyP', eventKey: 'p', shiftKey: 'P',
  },
  {
    eventCode: 'BracketLeft', eventKey: '[', shiftKey: '{',
  },
  {
    eventCode: 'BracketRight', eventKey: ']', shiftKey: '}',
  },
  {
    eventCode: 'Backslash', eventKey: '\\', shiftKey: '|',
  },
  {
    eventCode: 'Delete', eventKey: 'Del', shiftKey: 'Del',
  },
  {
    eventCode: 'CapsLock', eventKey: 'CapsLock', shiftKey: 'CapsLock',
  },
  {
    eventCode: 'KeyA', eventKey: 'a', shiftKey: 'A',
  },
  {
    eventCode: 'KeyS', eventKey: 's', shiftKey: 'S',
  },
  {
    eventCode: 'KeyD', eventKey: 'd', shiftKey: 'D',
  },
  {
    eventCode: 'KeyF', eventKey: 'f', shiftKey: 'F',
  },
  {
    eventCode: 'KeyG', eventKey: 'g', shiftKey: 'G',
  },
  {
    eventCode: 'KeyH', eventKey: 'h', shiftKey: 'H',
  },
  {
    eventCode: 'KeyJ', eventKey: 'j', shiftKey: 'J',
  },
  {
    eventCode: 'KeyK', eventKey: 'k', shiftKey: 'K',
  },
  {
    eventCode: 'KeyL', eventKey: 'l', shiftKey: 'L',
  },
  {
    eventCode: 'Semicolon', eventKey: ';', shiftKey: ':',
  },
  {
    eventCode: 'Quote', eventKey: "'", shiftKey: '"',
  },
  {
    eventCode: 'Enter', eventKey: 'Enter', shiftKey: 'Enter',
  },
  {
    eventCode: 'ShiftLeft', eventKey: 'Shift', shiftKey: 'Shift',
  },
  {
    eventCode: 'KeyZ', eventKey: 'z', shiftKey: 'Z',
  },
  {
    eventCode: 'KeyX', eventKey: 'x', shiftKey: 'X',
  },
  {
    eventCode: 'KeyC', eventKey: 'c', shiftKey: 'C',
  },
  {
    eventCode: 'KeyV', eventKey: 'v', shiftKey: 'V',
  },
  {
    eventCode: 'KeyB', eventKey: 'b', shiftKey: 'B',
  },
  {
    eventCode: 'KeyN', eventKey: 'n', shiftKey: 'N',
  },
  {
    eventCode: 'KeyM', eventKey: 'm', shiftKey: 'M',
  },
  {
    eventCode: 'Comma', eventKey: ',', shiftKey: '<',
  },
  {
    eventCode: 'Period', eventKey: '.', shiftKey: '>',
  },
  {
    eventCode: 'Slash', eventKey: '/', shiftKey: '?',
  },
  {
    eventCode: 'ArrowUp', eventKey: '▲', shiftKey: '▲',
  },
  {
    eventCode: 'ShiftRight', eventKey: 'Shift', shiftKey: 'Shift',
  },
  {
    eventCode: 'ControlLeft', eventKey: 'Ctrl', shiftKey: 'Ctrl',
  },
  {
    eventCode: 'MetaLeft', eventKey: 'Win', shiftKey: 'Win',
  },
  {
    eventCode: 'AltLeft', eventKey: 'Alt', shiftKey: 'Alt',
  },
  {
    eventCode: 'Space', eventKey: ' ', shiftKey: ' ',
  },
  {
    eventCode: 'AltRight', eventKey: 'Alt', shiftKey: 'Alt',
  },
  {
    eventCode: 'ArrowLeft', eventKey: '◄', shiftKey: '◄',
  },
  {
    eventCode: 'ArrowDown', eventKey: '▼', shiftKey: '▼',
  },
  {
    eventCode: 'ArrowRight', eventKey: '►', shiftKey: '►',
  },
  {
    eventCode: 'ControlRight', eventKey: 'Ctrl', shiftKey: 'Ctrl',
  },
];
const rusData = [
  { eventCode: 'Backquote', eventKey: 'ё', shiftKey: 'Ё' },
  { eventCode: 'Digit1', eventKey: '1', shiftKey: '!' },
  { eventCode: 'Digit2', eventKey: '2', shiftKey: '"' },
  { eventCode: 'Digit3', eventKey: '3', shiftKey: '№' },
  { eventCode: 'Digit4', eventKey: '4', shiftKey: ';' },
  { eventCode: 'Digit5', eventKey: '5', shiftKey: '%' },
  { eventCode: 'Digit6', eventKey: '6', shiftKey: ':' },
  { eventCode: 'Digit7', eventKey: '7', shiftKey: '?' },
  { eventCode: 'Digit8', eventKey: '8', shiftKey: '*' },
  { eventCode: 'Digit9', eventKey: '9', shiftKey: '(' },
  { eventCode: 'Digit0', eventKey: '0', shiftKey: ')' },
  { eventCode: 'Minus', eventKey: '-', shiftKey: '_' },
  { eventCode: 'Equal', eventKey: '=', shiftKey: '+' },
  { eventCode: 'Backspace', eventKey: 'Backspace', shiftKey: 'Backspace' },
  { eventCode: 'Tab', eventKey: 'Tab', shiftKey: 'Tab' },
  { eventCode: 'KeyQ', eventKey: 'й', shiftKey: 'Й' },
  { eventCode: 'KeyW', eventKey: 'ц', shiftKey: 'Ц' },
  { eventCode: 'KeyE', eventKey: 'у', shiftKey: 'У' },
  { eventCode: 'KeyR', eventKey: 'к', shiftKey: 'К' },
  { eventCode: 'KeyT', eventKey: 'е', shiftKey: 'Е' },
  { eventCode: 'KeyY', eventKey: 'н', shiftKey: 'Н' },
  { eventCode: 'KeyU', eventKey: 'г', shiftKey: 'Г' },
  { eventCode: 'KeyI', eventKey: 'ш', shiftKey: 'Ш' },
  { eventCode: 'KeyO', eventKey: 'щ', shiftKey: 'Щ' },
  { eventCode: 'KeyP', eventKey: 'з', shiftKey: 'З' },
  { eventCode: 'BracketLeft', eventKey: 'x', shiftKey: 'Х' },
  { eventCode: 'BracketRight', eventKey: 'ъ', shiftKey: 'Ъ' },
  { eventCode: 'Backslash', eventKey: '\\', shiftKey: '/' },
  { eventCode: 'Delete', eventKey: 'Del', shiftKey: 'Del' },
  { eventCode: 'CapsLock', eventKey: 'CapsLock', shiftKey: 'CapsLock' },
  { eventCode: 'KeyA', eventKey: 'ф', shiftKey: 'Ф' },
  { eventCode: 'KeyS', eventKey: 'ы', shiftKey: 'Ы' },
  { eventCode: 'KeyD', eventKey: 'в', shiftKey: 'В' },
  { eventCode: 'KeyF', eventKey: 'а', shiftKey: 'А' },
  { eventCode: 'KeyG', eventKey: 'п', shiftKey: 'П' },
  { eventCode: 'KeyH', eventKey: 'р', shiftKey: 'Р' },
  { eventCode: 'KeyJ', eventKey: 'о', shiftKey: 'О' },
  { eventCode: 'KeyK', eventKey: 'л', shiftKey: 'Л' },
  { eventCode: 'KeyL', eventKey: 'д', shiftKey: 'Д' },
  { eventCode: 'Semicolon', eventKey: 'ж', shiftKey: 'Ж' },
  { eventCode: 'Quote', eventKey: 'э', shiftKey: 'Э' },
  { eventCode: 'Enter', eventKey: 'Enter', shiftKey: 'Enter' },
  { eventCode: 'ShiftLeft', eventKey: 'Shift', shiftKey: 'Shift' },
  { eventCode: 'KeyZ', eventKey: 'я', shiftKey: 'Я' },
  { eventCode: 'KeyX', eventKey: 'ч', shiftKey: 'Ч' },
  { eventCode: 'KeyC', eventKey: 'с', shiftKey: 'С' },
  { eventCode: 'KeyV', eventKey: 'м', shiftKey: 'М' },
  { eventCode: 'KeyB', eventKey: 'и', shiftKey: 'И' },
  { eventCode: 'KeyN', eventKey: 'т', shiftKey: 'Т' },
  { eventCode: 'KeyM', eventKey: 'ь', shiftKey: 'Ь' },
  { eventCode: 'Comma', eventKey: 'б', shiftKey: 'Б' },
  { eventCode: 'Period', eventKey: 'ю', shiftKey: 'Ю' },
  { eventCode: 'Slash', eventKey: '.', shiftKey: ',' },
  { eventCode: 'ArrowUp', eventKey: '▲', shiftKey: '▲' },
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
const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F',
  'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю'];

export { engData };
export { rusData };
export { textButtons };
export { letters };
