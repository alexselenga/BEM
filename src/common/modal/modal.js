import {Block} from '../block';
import './modal.scss';

export class Modal extends Block {
  constructor({
                id,
                title = '',
                escKey = true,
                showHeader = true,
                classList = [],
                container = document.body
  }) {
    super({tagName: 'section', className: 'modal', classList, container});
    this.elem.dataset.modal = id;

    if (!document.querySelector('.modal__overlay')) {
      this.overlay = Block.createElement({tagName: 'section', className: 'modal__overlay', container: document.body});
    }

    if (showHeader) {
      this.header = Block.createElement({tagName: 'section', className: 'modal__header', container: this.elem});
      this.title = Block.createElement({className: 'modal__title', container: this.header}).innerText = title;
      this.close = Block.createElement({className: 'modal__close', container: this.header}).innerHTML = '&times;';
    }

    this.content = Block.createElement({tagName: 'section', className: 'modal__content', container: this.elem});

    this.elem.addEventListener('click', event => event.target.closest('.modal__close') && this.hide(event));
    this.overlay.addEventListener('click', event => this.hide(event));
    document.addEventListener('keyup', event => event.key === 'Escape' && escKey && this.hide(event));

    this.id = id;
  }

  remove() {
    this.overlay.remove();
    super.remove();
  }

  show(event = undefined) {
    event && event.preventDefault();
    this.elem.classList.add('modal_active');
    this.overlay.classList.add('modal_active');
  }

  hide(event = undefined) {
    event && event.preventDefault();
    this.elem.classList.remove('modal_active');
    this.overlay.classList.remove('modal_active');
  }

  registerRef(elem) {
    elem.dataset.modal = this.id;
    elem.addEventListener('click', event => this.show(event));
  }
}
