import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko nimi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
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
const Yhteensa = ({ osat }) => {
    return (
        <p>yhteensä {osat.reduce((summa, uusia) => ({ tehtavia: summa.tehtavia + uusia.tehtavia })).tehtavia} tehtävää</p>
    )
}

const App = () => {
    const kurssit = [
        {
            nimi: 'Half Stack -sovelluskehitys',
            id: 1,
            osat: [
                {
                    nimi: 'Reactin perusteet',
                    tehtavia: 10,
                    id: 1
                },
                {
                    nimi: 'Tiedonvälitys propseilla',
                    tehtavia: 7,
                    id: 2
                },
                {
                    nimi: 'Komponenttien tila',
                    tehtavia: 14,
                    id: 3
                }
            ]
        },
        {
            nimi: 'Node.js',
            id: 2,
            osat: [
                {
                    nimi: 'Routing',
                    tehtavia: 3,
                    id: 1
                },
                {
                    nimi: 'Middlewaret',
                    tehtavia: 7,
                    id: 2
                }
            ]
        }
    ]
    return (
        <div>
            {kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi} />)}
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)