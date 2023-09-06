import React, {useState} from 'react';
import classes from './index.module.scss';

const Counter = () => {
    const [value, setValue] = useState(0)

    return (
        <div>
            {value}
            <button className={classes.button} onClick={() => setValue((prevValue) => prevValue += 1)}>Increment</button>
        </div>
    );
};

export default Counter;