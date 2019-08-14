import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';
import Row from "reactstrap/es/Row";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">

            <h3>Le compteur est  à : {count} </h3>
            <Row className="justify-content-center ">
            <Button className="col-2 m-1"
                color="danger"
                onClick={() => setCount(count - 1)}>
                -1
            </Button>
            <Input
                className="col-5 text-center m-1"
                name="count"
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value))}
            />
            <Button
                className="col-2 m-1"
                color="success"
                onClick={() => setCount(count + 1)}>
                +1
            </Button>
            </Row>
        </div>
    );
}

export default Counter;

