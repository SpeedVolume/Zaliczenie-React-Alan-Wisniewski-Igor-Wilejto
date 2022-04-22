import React, { Component } from 'react';
import './program.css';
import Wynik from './wynik';
import Klawiatura from "./przyciski";

class App extends Component {
    constructor(){
        super();

        this.state = {
            wynik: "",
            text: "Podaj liczbę: ",
            error: ""
        };
    }
    
    onClick = przycisk => {

        if(przycisk === "="){
            this.licz()
        }

        else if(przycisk === "C"){
            this.resetowanie()
        }
        else if(przycisk === "CE"){
            this.cofnięcie()
        }

        else {
            this.setState({
                wynik:
             this.state.wynik + przycisk
            })
        }
    };
    
    resetowanie = () => {
        this.setState({
            wynik: ""
        })
    };


    licz = () => {
        try {
            this.setState({
                wynik:
             (eval(this.state.wynik) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                wynik:
             "Błąd!"
            })

        }
    };
    
    cofnięcie = () => {
        this.setState({
            wynik:
         this.state.wynik.slice(0, -1)
        })
    };
    componentDidMount = (e) => {
        const value = this.refs.number.value;
        console.log(value);
        fetch(`http://numbersapi.com/${value}/year?json`)
        .then(res => {
            if(res.ok) {
                return res
            }
            throw Error(res.status)
            })

        .then(res =>  res.json())
        .then(data => this.setState({
            text: "W tym roku: " + data.text
        }))
        .catch(err => console.log(err))
}   

    render() {
        return (
            <div>
                <div className="kalkulator_css">
                    <h1>Kalkulator: Alan Wiśniewski & Igor Wilejto PR2.2</h1>
                    <Wynik wynik={this.state.wynik}/>
                    <Klawiatura onClick={this.onClick}/>
                </div>
                <h2> Ciekawostki liczbowe </h2>
                <div className="ciekawostki">
                <input onChange={this.componentDidMount} type="text" ref="number" />
                <p> {this.state.text} </p>
                </div>
            </div>
            
        );
        
    }
    
}

export default App;