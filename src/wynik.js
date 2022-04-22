import React, {Component} from 'react';
//niniejszy plik eksportuje wynik do głównego pliku "program.js"
class Wynik extends Component {


    render() {
        let {wynik} = this.props;
        return (
            <div className="wynik">
               <p>{wynik}</p>
            </div>
    )
        ;
    }
}


export default Wynik;