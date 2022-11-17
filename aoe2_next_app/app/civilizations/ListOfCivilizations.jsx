const fetchCivs = () => {
    return fetch(`${process.env.REACT_APP_AOE2_API_BASE_URL}/civilizations`, {cache: 'no-store'})
    .then(res=>res.json())
}
export async function ListofCivilizations() {
    const {civilizations} = await fetchCivs()
    return civilizations.splice(0,5).map(civ => (
        <article key={civ.id}>
            <h2>{civ.name}</h2>
                    <h3>{civ.army_type}</h3>
                    <p>
                        {civ.team_bonus}.
                        {civ.civilization_bonus}
                    </p>

                </article>
    ))
}