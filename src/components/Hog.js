import React, { Component } from 'react'


export default class Hog extends Component {

    state = {
        toggle: false
    }

    detailToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        let { name, specialty, greased, weight } = this.props.hog
        let filename = name.toLowerCase().replace(/\s/g, '_')
        let pigImage = require(`../hog-imgs/${filename}.jpg`)
        return (
            <div className="ui card" onClick={this.detailToggle}>
                <div className="image">
                    <img src={pigImage} alt="" />
                </div>
                <div className="content">
                    <a className="header">{name}</a>
                    {this.state.toggle ?
                        <div>
                            <div className="meta">
                                <span className="date">{weight}</span>
                            </div>
                            <div className="description">
                                {specialty}
                            </div>
                            <div className="extra content">
                                {this.props.hog['highest medal achieved']} and {greased ? 'I am greased' : "I'm not greased"}
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}