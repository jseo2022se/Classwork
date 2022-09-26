const React = require('react')

class Show extends React.Component {

    render() {

        const { name, color } = this.props.vegetable

        return (
            <div>
                <h1>Show Page testing testing testing</h1>
                <p>
                    The {name} is {color}.
                </p>
                <nav>
                    <a href='/vegetables'>Back</a>
                </nav>
            </div>
        )
    }
}

module.exports = Show