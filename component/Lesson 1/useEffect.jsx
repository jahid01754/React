import { useEffect } from "react";

export default function UseEffect(){

    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("component rendered");
    }, []);
    

    return(
        <>
            <div>
                <h1>Hello World</h1>
            </div>
        </>
    );
}