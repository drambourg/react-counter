import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Le compteur est  à : {count} </p>

            <button onClick={() => setCount(count - 1)}>
                -1
            </button>
            <input
                name="count"
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value))}
            />
            <button onClick={() => setCount(count + 1)}>
                +1
            </button>
        </div>
    );
}

export default Counter;

