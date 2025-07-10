

import Counter from "@/component/Lesson 1/counter";
import ListOFItems from "@/component/Lesson 1/listOfItems";
import PasswordField from "@/component/Lesson 1/passwordField";
import StringConcatenation from "@/component/Lesson 1/stringConcatenation";
import ToggleButton from "@/component/Lesson 1/toogleButton";

export default function Home() {
  return (
    <>
      <StringConcatenation />
      <ListOFItems/>
      
      <Counter/>
      <ToggleButton/>
      <PasswordField/>
        
    </>
  );
}
