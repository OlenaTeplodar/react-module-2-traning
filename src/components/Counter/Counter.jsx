import React from 'react';
import './Counter.css';
import Controls from './Controls';
import Value from './Value';

class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0, // значення за замовчуванням
    }
    
    static propTypes = {
        //прописуємо типи за замовчуванням
    }

    state = {
    value: this.props.initialValue, // початкове значення передано як пропс (у файлі Арр - при передачі компонента)
}

  handleIncrement = () => {
    //   this.setState({
    //     value: 10,
    //   }); //так просто перезаписуємо поверх першого значення! Передаємо лише той параметр, який потрібно змінити
      this.setState(prevState => {
          return { value: prevState.value + 1, };
      }); // так ми враховуємо існуюче значення - через функцію! 
  };

  handleDecrement = () => {
      this.setState(prevState => ( { value: prevState.value - 1} ));
    };
    
  render() {
    return (
        <div className="Counter">
            
            <Value value={this.state.value} />
        {/* <span className="CounterValue">{this.state.value}</span> */}

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <div className="CounterControls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;