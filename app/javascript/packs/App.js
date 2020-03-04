import React from 'react'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap'

import ProductList from '../components/Product'
import Help from '../components/Help'
function App(props) {
    return (
        <div>
            <h1>This is app component</h1>
            <BrowserRouter>
                <Link to='/products'>Products</Link>
                <Link to='/help'>Help</Link>

                <Switch>
                    <Route path='/products' component={ProductList} />
                    <Route path='/help' component={Help} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App