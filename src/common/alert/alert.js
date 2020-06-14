import {Block} from "../block";
import './alert.scss';

export class Alert extends Block {
  constructor({caption, sign = '!', classList = [], container = null}) {
    super({tagName: 'aside', className: 'alert', classList, container});

    Block.createElement({
      className: 'alert__sign',
      container: this.elem
    }).innerText = sign;

    Block.createElement({
      className: 'alert__caption',
      container: this.elem
    }).innerText = caption;
  }
}
