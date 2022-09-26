const React = require('react')

// class component
class Show extends React.Component {

    render() {

        // Object Destructuring
        // const name = this.props.fruit.name
        // const color = this.props.fruit.color
        // const readyToEat = this.props.fruit.readyToEat

        const { name, color, readyToEat } = this.props.fruit

        return (
            <div>
                <h1>Show Page testing testing testing</h1>
                <p>
                    The {name} is {color}.
                </p>
                <p>
                    {readyToEat ? "It's ready to eat": "It is not ready to eat"}
                </p>
                <nav>
                    <a href='/fruits'>Back</a>
                </nav>
            </div>
        )
    }
}

module.exports = Show