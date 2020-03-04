import React from 'react'
import axios from 'axios'
import {Table} from 'reactstrap'
class ProductList extends React.Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        axios.get('/products/get_prod') 
            .then((res) => {
                console.log(res.data.data)
                const products = res.data.data
                this.setState({ products })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <h1>I am Product component</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map(product => {
                                return (
                                    <tr key={product.id}>
                                        <td>{ product.id }</td>
                                        <td>{ product.name }</td>
                                        <td>{ product.description }</td>
                                    </tr>
                                )
                                
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
 }

 export default ProductList