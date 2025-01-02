import {useOptimistic, useState, useTransition} from "react";

function UseOptimistic() {
    const [todos, setTodos] = useState([{id: 1, text: "DINH"}]);

    // Sử dụng `useOptimistic` để cập nhật trạng thái tạm thời
    const [optimisticTodos, updateOptimisticTodos] = useOptimistic(
        todos,
        (currentTodos, newTodo) => [...currentTodos, newTodo]
    );

    const [isPending, startTransition] = useTransition();

    const addTodo = (text) => {
        const newTodo = {id: Date.now(), text};

        // Cập nhật trạng thái tạm thời
        startTransition(() => {
            // Cập nhật trạng thái tối ưu trong một transition
            updateOptimisticTodos(newTodo);
        });


        // Gửi yêu cầu bất đồng bộ
        startTransition(() => {
            // Gửi yêu cầu bất đồng bộ
            setTimeout(() => {
                setTodos((prev) => [...prev, newTodo]);
            }, 1000);
        });
    };

    return (
        <div>
            <ul>
                {optimisticTodos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
            <button onClick={() => addTodo("New Task")}>
                {isPending ? "Adding..." : "Add Todo"}
            </button>
        </div>
    );
}

    export default UseOptimistic;
