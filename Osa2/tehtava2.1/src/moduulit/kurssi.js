import React from 'react'

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

export default Kurssi