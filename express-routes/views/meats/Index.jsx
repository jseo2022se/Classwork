const React = require('react')

class Index extends React.Component {

    render() {

        const { meat } = this.props

        return (
            <div>
                <h1>Meats Index Page</h1>
                <ul>
                    {meat.map((meats, i) => {
                        return (
                            <li key={i}>
                                The <a href={`/meats/${i}`}>{meats.name}</a> is {meats.type}.
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href='/meats/new'>Create a new meat</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index