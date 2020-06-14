import {Block} from "../block";
import './button.scss';

export class Button extends Block {
  constructor({caption, classList = [], container = null}) {
    super({className: 'button', classList, container});
    this.elem.type = 'button';
    this.elem.innerText = caption;
  }
}
