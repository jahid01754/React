"use client";

import Counter from "@/component/Lesson 1/counter";
import ListOFItems from "@/component/Lesson 1/listOfItems";
import PasswordField from "@/component/Lesson 1/passwordField";
import StringConcatenation from "@/component/Lesson 1/stringConcatenation";
import SwitchTheme from "@/component/Lesson 1/switchTheme";
import ToggleButton from "@/component/Lesson 1/toogleButton";
import ToDoList from "@/component/Lesson 2/todoList";
import TodoListRadioButtton from "@/component/Lesson 2/todoListRadioButton";
import TodoApp from "@/component/TodoApp/TodoApp";

export default function Home() {
  return (
    <>
      {/* <StringConcatenation />
      <ListOFItems />

      <Counter />
      <ToggleButton />

      <ToDoList />
      <TodoListRadioButtton />

      <PasswordField />
      <SwitchTheme /> */}

      <TodoApp />
    </>
  );
}
