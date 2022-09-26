const React = require('react')

// class component
class Show extends React.Component {

    render() {

        const { name, type } = this.props.meats

        return (
            <div>
                <h1>Show Page testing testing testing</h1>
                <p>
                    The {name} is {type}.
                </p>
                <nav>
                    <a href='/meats'>Back</a>
                </nav>
            </div>
        )
    }
}

module.exports = Show