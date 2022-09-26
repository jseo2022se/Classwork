const React = require('react')

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>New Page</h1>
                <form action="/meats" method='POST'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name'></input>

                    <label htmlFor='type'>Type:</label>
                    <input type='text' id='type' name='type'></input>

                    <input type='submit' value="Create Meat"></input>
                </form>
            </div>
        ) 
    }
}

module.exports = New