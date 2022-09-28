const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')
// class component
class Show extends React.Component {

    render() {

        // Object Destructuring
        // const name = this.props.fruit.name
        // const color = this.props.fruit.color
        // const readyToEat = this.props.fruit.readyToEat

        const { name, color, readyToEat, _id } = this.props.fruit

        return (
            <DefaultLayout title={`${name} details`} foodGroup="fruits">
            
                <h1>Fruit Details</h1>
                <p>
                    The {name} is {color}.
                </p>
                <p>
                    {readyToEat ? "It's ready to eat": "It is not ready to eat"}
                </p>

                <button>
                    <a href={`/fruits/${_id}/edit`}>Edit</a>
                </button>

                <form action={`/fruits/${_id}?_method=DELETE`} method='POST'>
                    <input type='submit' value='Delete'></input>
                </form>

                <nav>
                    <a href='/fruits'>Back</a>
                </nav>
           
            </DefaultLayout>
        )
    }
}

module.exports = Show