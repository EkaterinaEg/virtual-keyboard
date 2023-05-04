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

  generateRusElements() {
    let template = '';
    const rusKeyboard = document.createElement('span');
    rusKeyboard.className = 'rus';

    // eslint-disable-next-line no-unused-expressions
    this.eventKey
      && (template += `<span class="elDown">${this.eventKey}</span>`);

    // eslint-disable-next-line no-unused-expressions
    this.shiftKey
      && (template += `<span class="shiftDown hidden">${this.shiftKey}</span>`);

    template += '</span>';
    rusKeyboard.innerHTML = template;
    return rusKeyboard;
  }
}
export default KeyboardLang;
