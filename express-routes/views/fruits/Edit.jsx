const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        // let fruit = this.props.fruit
        let { fruit } = this.props

        // console.log(fruit)

        return (
            <DefaultLayout title='edit a fruit' foodGroup="fruits">
                <h1>Edit Page</h1>
                <form action={`/fruits/${fruit._id}?_method=PUT`} method='POST'>
                    
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' defaultValue={ fruit.name }></input>

                    <label htmlFor='color'>Color:</label>
                    <input type='text' id='color' name='color' defaultValue={ fruit.color }></input>

                    <label htmlFor='readyToEat'>Is Ready To Eat:</label>
                    <input type='checkbox' id='readyToEat' name='readyToEat' defaultChecked={ fruit.readyToEat }></input>

                    <input type='submit' value="Edit Fruit"></input>
                </form>
            </DefaultLayout>
        ) 
    }
}

module.exports = Edit