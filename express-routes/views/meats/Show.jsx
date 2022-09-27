const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

// class component
class Show extends React.Component {

    render() {

        const { name, type } = this.props.meats

        return (
            <DefaultLayout title={`${name} details`} foodGroup='meats'>
            
                <h1>Meat Details</h1>
                <p>
                    The {name} is {type}.
                </p>
                <nav>
                    <a href='/meats'>Back</a>
                </nav>
            
            </DefaultLayout>
        )
    }
}

module.exports = Show