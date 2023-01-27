import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,  //храним ИНДЕКС активного цвета
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  }; // поверх записуємо індекс активної кнопки - по кліку

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    } // функция - добавяляет класс на активную кнопку с цветом

    return optionClasses.join(' ');
  };

    render() {
    //   деструктурируємо властивості зі стайту та покращуємо код:
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)} // см вище - функция додавання класу за умовою (окремий метод классу)
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)} // по кліку передаємо інлайн функцію!!! - аноноимну стрілочну функцію, а не просто виклик функції
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;