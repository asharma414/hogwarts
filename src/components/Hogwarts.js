import React, { Component } from 'react'
import Hog from './Hog'

export default class Hogwarts extends Component {
    render() {
        return (
            <div>
                {this.props.hogs.map(hog => <Hog key={hog.name} hog={hog} />)}
            </div>
        )
    }
}
