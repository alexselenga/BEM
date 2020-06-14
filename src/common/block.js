export class Block {
  constructor({tagName = 'div', className = '', classList = [], container = null}) {
    this.elem = Block.createElement({tagName, className, classList, container});
    this.elem[Block.symbol] = this; //Позволит обращаться к объекту блока посредством свойства DOM элемента elem[Block.symbol]
  }

  static createElement({tagName = 'div', className = '', classList = [], container = null} = {}) {
    if (!tagName) return '';

    const elem = document.createElement(tagName);
    if (container) container.append(elem);

    const classNames = classList.join(' ');
    if (className) elem.className = className;
    if (classNames) elem.className += ' ' + classNames;

    return elem;
  }

  remove() {
    if (this.elem) this.elem.remove();
  }
}

//Позволит обращаться к объекту блока посредством свойства DOM элемента elem[Block.symbol]
Block.symbol = Symbol('Block');
