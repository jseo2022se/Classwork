const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Show extends React.Component {

    render() {

        const { name, color, _id } = this.props.vegetable

        return (
            <DefaultLayout title={`${name} details`} foodGroup='vegetables'>
            
                <h1>Vegetable Details</h1>
                <p>
                    The {name} is {color}.
                </p>

                <button>
                    <a href={`/vegetables/${_id}/edit`}>Edit</a>
                </button>

                <form action={`/vegetables/${_id}?_method=DELETE`} method='POST'>
                    <input type='submit' value='Delete'></input>
                </form>

                <nav>
                    <a href='/vegetables'>Back</a>
                </nav>
            
            </DefaultLayout>
        )
    }
}

module.exports = Show