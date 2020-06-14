import {Block} from '../block';
import './cols.scss';

export class Cols extends Block {
/*
  cols: [{ classNames: 'reviews_col-img', ... }, { classNames: 'reviews_col-name', ... }, ...] //Классы заголовков полей
  elRow: [imgElement, nameElement, ...] //DOM-элементы полей
*/

  constructor({cols, elemRow, classList = [], container = null}) {
    super({className: 'cols', classList, container});

    for (const [iEl, el] of elemRow.entries()) {
      const classNames = iEl < cols.length && cols[iEl].classNames ? cols[iEl].classNames : 'cols_col-wrapper';

      Block.createElement({
        className: 'cols__col',
        classList: classNames.split(' '),
        container: this.elem
      }).append(el);
    }
  }
}
