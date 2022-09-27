const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Show extends React.Component {

    render() {

        const { name, color } = this.props.vegetable

        return (
            <DefaultLayout title={`${name} details`} foodGroup='vegetables'>
            
                <h1>Vegetable Details</h1>
                <p>
                    The {name} is {color}.
                </p>
                <nav>
                    <a href='/vegetables'>Back</a>
                </nav>
            
            </DefaultLayout>
        )
    }
}

module.exports = Show