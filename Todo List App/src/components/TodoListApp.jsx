import React, { useState, useEffect } from 'react';

const TodoListApp = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    // Load todos from localStorage when the app mounts
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    // Save todos to localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = () => {
        if (todo.trim() !== '') {
            const newTodo = { text: todo, completed: false };
            setTodos([...todos, newTodo]);
            setTodo('');
        } else {
            alert('Please enter a task');
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const handleToggleTodo = (index) => {
        const newTodos = todos.map((t, i) =>
            i === index ? { ...t, completed: !t.completed } : t
        );
        setTodos(newTodos);
    };

    const handleEditTodo = (index) => {
        const newTodoText = prompt('Edit your task:', todos[index].text);
        if (newTodoText !== null && newTodoText.trim() !== '') {
            const newTodos = todos.map((t, i) =>
                i === index ? { ...t, text: newTodoText } : t
            );
            setTodos(newTodos);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-400 p-4">
            <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    📝 Todo List
                </h1>
                <div className="flex mb-4 gap-2">
                    <input
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
                        placeholder="Enter your task"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <button
                        onClick={handleAddTodo}
                        className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
                    >
                        Add
                    </button>
                </div>
                <ul className="space-y-3">
                    {todos.map((t, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg shadow-sm"
                        >
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={t.completed}
                                    onChange={() => handleToggleTodo(index)}
                                    className="mr-2 w-5 h-5"
                                />
                                <span className={t.completed ? 'line-through text-gray-500 break-words' : 'break-words'}>
                                    {t.text}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEditTodo(index)}
                                    className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteTodo(index)}
                                    disabled={!t.completed}
                                    className={`px-3 py-1 rounded-lg transition ${
                                        t.completed
                                            ? 'bg-red-500 text-white hover:bg-red-600'
                                            : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                    }`}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                {todos.length === 0 && (
                    <p className="text-center text-gray-400 mt-4">No tasks yet!</p>
                )}
            </div>
        </div>
    );
};

export default TodoListApp;
