import React from 'react'
import { Button } from 'antd'

class Counter extends React.Component {
    
    state = {
        count: 0,
        message: 'hola'
    }

    handleClick = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }

    handleReset = () => {
        this.setState({count: 0});
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <Button type="primary" onClick={this.handleClick}>Contador</Button>
                <Button type="secondary" onClick={this.handleReset}>Resetear</Button>
            </div>
        )
    }
}

export default Counter