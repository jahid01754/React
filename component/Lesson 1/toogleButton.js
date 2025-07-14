"use client";

// import { useState } from "react";

// export default function ToggleButton(){
//     const [active, setActive] = useState(false)

//     const handleToggle = () => {
//         setActive((prev) => (!prev))
//     }
//     return(
//         <div>
//             <button className="border p-4 rounded-full" onClick={handleToggle}>Button is {active ? "On" : "Off"}</button>
//         </div>
//     );
// }

import { useState } from "react";

export default function ToggleButton() {
  const [state, setState] = useState({
    title: "Off",
    activeStatus: false,
  });

  const handleToggle = () => {
    setState((prev) => ({
      title: prev.activeStatus ? "On" : "Off",
      activeStatus: !prev.activeStatus,
    }));
  };
  return (
    <div className="flex justify-center items-center mt-10">
      <button className="border p-4 rounded-full" onClick={handleToggle}>
        Button is {state.title}
      </button>
    </div>
  );
}
