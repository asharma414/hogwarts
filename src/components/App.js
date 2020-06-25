import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Hogwarts from "./Hogwarts";
import Filter from './Filter';

class App extends Component {
    state = {
        data: hogs,
        ascendWeight: null,
        ascendName: null
    }

    toggleGreased = () => {
        if (this.state.data === hogs) {
            let greased = this.state.data.filter((h) => h.greased)
            this.setState({data: greased})
        } else {
            this.setState({data: hogs})
        }
    }

    sortByName = () => {
        if (this.state.ascendName) {
            let sortedName = this.state.data.sort((h1, h2) => {return (h2.name.localeCompare(h1.name))})
            this.setState({data: sortedName, ascendName: false})
        } else {
            let sortedName = this.state.data.sort((h1, h2) => {return (h1.name.localeCompare(h2.name))})
            this.setState({data: sortedName, ascendName: true})
        }


    }

    sortByWeight = () => {

        if (this.state.ascendWeight) {
            let sortedWeight = this.state.data.sort((h1, h2) => {return (h2.weight - h1.weight)})
            this.setState({data: sortedWeight, ascendWeight: false})
        } else {
            let sortedWeight = this.state.data.sort((h1, h2) => {return (h1.weight - h2.weight)})
            this.setState({data: sortedWeight, ascendWeight: true})
        }
    }

    // randomPigGif(e) {
    //     // debugger
    //     let a = e.target.parentElement
    //     // console.log(this)
    //     let pigApi = "https://api.giphy.com/v1/gifs/search?api_key=LAllYPRW3tRajO0YKmQaCRCYWFfxw1Vs&q=pig&limit=10"
    //     fetch(pigApi, {
    //         headers : { 
    //           'Content-Type': 'application/json',
    //           'Accept': 'application/json'
    //          }
      
    //       }).then(res => res.json()).then(data => { 
    //         //   data.data[Math.floor(Math.random() * 9)].embed_url
    //         //   let img = document.createElement('img')
    //         // let a = e.target.parentElement

    //         let img = React.createElement('img', {src: data.data[Math.floor(Math.random() * 9)].embed_url})
    //         // console.log(this)
    //         // console.log(e.target)
    //         // console.log(e.target.parentElement)
    //         // console.log(e.target.parentElement.nextElementSibling)

    //         //   a.nextElementSibling.appendChild(img)

    //     })
    //       //Math.floor(Math.random() * 9)
    // }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter toggleGreased={this.toggleGreased} sortByName={this.sortByName} sortByWeight={this.sortByWeight}
        randomPigGif={this.randomPigGif}/>
        <Hogwarts hogs={this.state.data}/>
      </div>
    );
  }
}

export default App;
