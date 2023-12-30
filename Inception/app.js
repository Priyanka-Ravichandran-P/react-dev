import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';

const AppLayout = () => (
<div className = "app-component">
    <Header/>
    <Body/>
</div>
);

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);