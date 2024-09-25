import { createContext, useState } from "react";

export const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
export const TodoProvider = ({ children }) => {
    const [list, setList] = useState(["Learn React", "Build An App"]);
    const [task, setTask] = useState("");

    const addTask = () => {
        setList([...list, task]);
        console.log(list);
    }

    const onDelete = (index) => {
        console.log(index);
        const tempList = [...list];
        tempList.splice(index, 1);
        setList(tempList);
    }

    return (
        <TodoContext.Provider value={{ list, task, addTask, onDelete, setTask }}>
            {children}
        </TodoContext.Provider>
    );
}
