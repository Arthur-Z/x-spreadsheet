import Dropdown from './dropdown';
import Icon from './icon';
import BorderPalette from './border_palette';

export default class DropdownBorder extends Dropdown {
  constructor() {
    const icon = new Icon('border-all');
    const borderPalette = new BorderPalette();
    borderPalette.change = () => {
      this.hide();
    };
    super(icon, 'auto', false, borderPalette.el);
  }
}