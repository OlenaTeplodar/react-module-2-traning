import React, {Component} from "react";
import './Dropdown.css';

class Dropdown extends Component {
    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({ visible: !prevState.visible, }));
    };  // буде одна функція та одна кнопка
    // show = () => {
    //     this.setState({ visible: true });
    // };

    // hide = () => {
    //     this.setState({ visible: false });
    // }

    render() {
        return (
          <div className="Dropdown">
            <button
              type="button"
              className="Dropdown__toggle"
              onClick={this.toggle}
            >
                    {/* TOGGLE */}
                    {this.state.visible ? 'Скрыть' : 'Показать'}
                    {/* // рендер тексту кнопки за умовою */}
            </button>
            {/* <button
              type="button"
              className="Dropdown__toggle"
              onClick={this.show}
            >
              Показать
            </button>

            <button
              type="button"
              className="Dropdown__toggle"
              onClick={this.hide}
            >
              Скрыть
            </button> */}
            {this.state.visible && (
              <div className="Dropdown__menu">Выпадающее меню</div>
            )}{' '}
            // рендер за умовою
          </div>
        );
    }
}

export default Dropdown;