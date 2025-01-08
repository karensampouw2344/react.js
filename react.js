import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jxs'
import './index.css'

ReactDOM.render(<App/>,document.getElementById('root')), render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

function FruitList() {
    const fruits = [
        { id: 1, name: "Apple", calories: 95 },
        { id: 2, name: "Orange", calories: 45 },
        { id: 3, name: "Banana", calories: 105 },
        { id: 4, name: "Coconut", calories: 159 },
        { id: 5, name: "Pineapple", calories: 37 },
    ];

    // Map over the array to render list items dynamically
    const listItems = fruits.map((fruit) => (
        <li key={fruit.id}>
            {fruit.name} - {fruit.calories} calories
        </li>
    ));

    // Return the ordered list
    return (
        <div>
            <h2>Fruit List</h2>
            <ol>{listItems}</ol>
        </div>
    );
}

export default FruitList;
