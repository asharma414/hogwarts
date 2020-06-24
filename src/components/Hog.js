import React, { Component } from 'react'


export default class Hog extends Component {

    state = {
        toggle: false,
    }

    detailToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    hideThisHog = (e) => {
        e.target.parentElement.style.display = 'none'
    }

    render() {
        let { name, specialty, greased, weight } = this.props.hog
        let filename = name.toLowerCase().replace(/\s/g, '_')
        let pigImage = require(`../hog-imgs/${filename}.jpg`)
        return (
            <div style={{margin: '20px 0'}}>
            <button className='ui button' onClick={this.hideThisHog}>Hide this Hog</button>
            <div className="ui card" style={{margin: '0px 12px'}} onClick={this.detailToggle}>
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
                                {this.props.hog['highest medal achieved']}
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
            </div>
        )
    }
}
