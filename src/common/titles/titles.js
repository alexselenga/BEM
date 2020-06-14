import {Block} from '../block';
import './titles.scss';

export class Titles extends Block {
// cols: [{ caption: 'Фото', classNames: 'reviews_col-img', ... }, { caption: 'Наименование товара', classNames: 'reviews_col-name', ... }, ...] //Заголовки полей

  constructor({cols, classList = [], container = null}) {
    super({tagName: 'section', className: 'titles', classList, container});

    for (const col of cols) {
      const container = Block.createElement({
        className: 'titles__title',
        classList: col.classNames.split(' '),
        container: this.elem
      });

      Block.createElement({
        className: 'titles__title-cell',
        container
      }).innerText = col.caption;
    }
  }
}
