import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div style={{margin: '10px 10px'}}>
                <button style={{margin: '30px 30px'}} className='ui button' onClick={this.props.toggleGreased}>Toggle the greased hogs!</button>
                <button style={{margin: '30px 30px'}} className='ui button' onClick={this.props.sortByName}>Sort the Hogs by Name!</button>
                <button style={{margin: '30px 30px'}} className='ui button' onClick={this.props.sortByWeight}>Sort the Hogs by Weight!</button>
            </div>
        )
    }
}
