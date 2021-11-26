import React from 'react';

const Filter = ({filterChangeHandler}) =>
    <div>
        filter shown with <input onChange={filterChangeHandler}/>
    </div>
;

export default Filter;
