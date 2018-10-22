import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = ({kurssi}) => (
    <div>
        <h1>{kurssi.nimi}</h1>
    </div>
)

const Sisalto = ({ kurssi }) => (
    <div>
        {kurssi.osat.map((osa, i) => <Osa key={i} {...osa} />)}
    </div>
)

const Osa = ({ nimi, tehtavia }) => (
    <div>
        <p>{nimi} {tehtavia}</p>
    </div>
)

const Yhteensa = ({ kurssi }) => (
    <div>
        <p>yhteensä {kurssi.osat.reduce((x, y) => ({ tehtavia: x.tehtavia + y.tehtavia })).tehtavia} tehtavää</p>
    </div>
)

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto kurssi={kurssi} />
            <Yhteensa kurssi={kurssi} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
