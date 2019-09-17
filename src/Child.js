import React from 'react';


const Child = React.memo(function Child() {
    return (
        <div className="child">
            Child
        </div>
    )
});

export default Child;
