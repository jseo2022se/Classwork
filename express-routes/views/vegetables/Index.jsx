const React = require('react')

class Index extends React.Component {

    render() {

        const { vegetables } = this.props



        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <ul>
                    {vegetables.map((vegetable, i) => {
                        return (
                            <li key={i}>
                                The <a href={`/vegetables/${i}`}>{vegetable.name}</a> is {vegetable.color}.
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href='/vegetables/new'>Create a new vegetable</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index