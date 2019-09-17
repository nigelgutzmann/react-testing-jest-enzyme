import React from 'react';

import Child from './Child';

const App = React.memo(function App() {
    return (
        <div className="app">
            App (Parent)
            <Child prop="propVal"/>
        </div>
    );
});


export default App;
