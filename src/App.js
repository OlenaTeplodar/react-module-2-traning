
import React, { Component } from "react";
// import Counter from "components/Counter";
// import Dropdown from "components/Dropdown";
// import ColorPicker from "components/ColorPicker";
import TodoList from "components/TodoList";
import initialtodos from './todos.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];


// const App = () => {
//   <>
//     <h1>Состояние компонента</h1>
    
// <ColorPicker options={colorPickerOptions} />

//     <Counter initialValue={10} />

//     <Dropdown />
//   </>
// }
class App extends Component {
  state = {
    todos: initialtodos
  };
  
  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
     //повератємо до масиву тільки ті елементи, в яких id не співпадають. якщо співпав - видаляємо
  }

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce((total, todo) => ( todo.completed ? total + 1 : total ), 0,);

    return (
       <>
        <h1>Состояние компонента</h1>
        <div>
          <p>Общее количество: {totalTodoCount}</p>
          <p>Количество выполненных: {completedTodoCount}</p>
    </div>
      
      <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
  </>
    );
  }
}




export default App;