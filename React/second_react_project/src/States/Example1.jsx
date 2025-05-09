import { useState } from 'react';
function Example1() {
                   let [name,setName]=useState('Raj');

    return (
        <div>
            <h1>{name}</h1>
            <h3>Example 1</h3>
            <button onClick={()=>{setName("Sachin")}}>Click Me!</button>
            <p>This is example of state in react.</p>
        </div>
    )
}
export default Example1;