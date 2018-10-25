import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko nimi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
        </div>
    )
}
const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Otsikko = ({ nimi }) => <h1>{nimi}</h1>
const Sisalto = ({ osat }) => {
    const sisalto = osat.map(osa => <Osa key={osa.id} osa={osa.nimi} tehtavia={osa.tehtavia} />)
    return (
        <div>
            {sisalto}
        </div>
    )
}
const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.kurssi.osat.reduce((summa, uusia) => ({ tehtavia: summa.tehtavia + uusia.tehtavia })).tehtavia} tehtävää</p>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                id: 1,
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                id: 2,
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                id: 3,
                nimi: 'Komponenttien tila',
                tehtavia: 14
            },
            {
                id: 4,
                nimi: 'Uusi osa',
                tehtavia: 99
            }
        ]
    }
    return (
        <div>
            <Kurssi kurssi={kurssi} />
            <Yhteensa kurssi={kurssi} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)