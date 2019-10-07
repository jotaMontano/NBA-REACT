import * as React from "react"
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes';

const App = () => {
    
    return(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
