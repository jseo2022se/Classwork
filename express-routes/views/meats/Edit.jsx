const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { meats } = this.props

        return (
            <DefaultLayout title='edit a meat' foodGroup='meats'>
           
                <h1>Edit Page</h1>
                <form action={`/meats/${meats._id}?_method=PUT`} method='POST'>
                    
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' defaultValue={ meats.name }></input>

                    <label htmlFor='type'>Type:</label>
                    <input type='text' id='type' name='type' defaultValue={ meats.type }></input>

                    <input type='submit' value="Edit Meat"></input>
                </form>
            
            </DefaultLayout>
        ) 
    }
}

module.exports = Edit