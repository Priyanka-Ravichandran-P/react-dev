import React from 'react';
import ReactDOM  from 'react-dom/client';

const TitleComponent = () => (<h1 className='components'>Components</h1>)
const HeadingComponent = () => (
    <div id = 'container'>
        {/* Babel Understands and Transpiles the code */}
        <TitleComponent/> 
        {"Hello"}
        {100 + 100}
        <h2 id = 'heading' className = 'heading'>Rendering Heading Component </h2>
    </div> 
)
const root =  ReactDOM.createRoot(document.getElementById("root"));
// When it is component render inside TimeRanges, babel will transpile. If it is an react element then keep it like that
root.render(<HeadingComponent/>);