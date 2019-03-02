import React, { Component } from 'react';
import axios from 'axios';

const apiBaseUrl = `https://api.datamuse.com/words?ml=`

class Inspire extends Component{
    constructor(){
        super();
        this.state = {
            wordResults: ""
        }
        this.findWords = this.findWords.bind(this)
    }

    componentDidMount() {
        const url = `https://api.datamuse.com/words?ml=`
        axios.get(url)
            .then((wordData)=>{
                console.log(wordData)
                let wordArray = wordData[0].word
                console.log(wordArray)
            })
    }

    findWords(e){
        e.preventDefaul(e)
        const wordToSearch = document.getElementById('wordSearch').value
        // NOOOOO!!!! ^^ do it by changing state to type, not this way! see idea list for syntax!
        const url = apiBaseUrl + wordToSearch
        axios.get(url)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                const results = myJson.results;
                console.log(results)
            })
    }

    render(){
        return(
            <div className="container">
                <h2>Word Farm</h2> 
                <form onSubmit={this.findWords} className="add-box">
                    <input type="text" id="wordSearch" placeholder="Idea" value={this.state.idea} />
                    <button type="submit" className="btn btn-primary">Get Prettier Words!</button>
                </form>
                



            </div>
            
        )
    }
}

export default Inspire;