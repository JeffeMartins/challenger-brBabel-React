import React from 'react';
import ApplicationBar from "./components/applicationBar/applicationBar";
import Home from "./screens/home/home";

const App: React.FC = () => {
    return (
        <div style={{height: '100%', width: '100%'}}>
            <ApplicationBar/>
            <div style={{padding: 20, paddingLeft: "5%", paddingRight: "5%"}}>
                <Home/>
            </div>
        </div>
    );
}

export default App;
