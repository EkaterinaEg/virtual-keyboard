class PageContent {
  constructor() {
    this.container = '';
    this.title = '';
    this.textarea = '';
    this.keyboard = '';
    this.shortcut = '';
    this.langLabel = '';
  }

  buildElements() {
    this.container = this.createDomNode(this.container, 'div', 'container');
    this.title = this.createDomNode(this.title, 'p', 'page__title');
   

    this.textarea = this.createDomNode(
      this.textarea,
      'textarea',
      'page__textarea',
    );
    this.keyboard = this.createDomNode(this.keyboard, 'div', 'page__keyboard');
    this.shortcut = this.createDomNode(this.shortcut, 'p', 'page__shortcut');
    this.shortcut.innerHTML = 'Use Ctrl + Alt to change language';
    this.langLabel = this.createDomNode(this.langLabel, 'p', 'page__langLabel');

    this.appendElements();
  }

  appendElements() {
    document.body.append(this.container);
    this.container.append(this.title);
    this.container.append(this.textarea);
    this.container.append(this.keyboard);
    this.container.append(this.shortcut);
    this.container.append(this.langLabel);
  }

  // eslint-disable-next-line class-methods-use-this
  createDomNode(node, element, ...classes) {
    // eslint-disable-next-line no-param-reassign
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }
}
export default PageContent;
