const React = require('react')

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>New Page</h1>
                <form action="/vegetables" method='POST'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name'></input>

                    <label htmlFor='color'>Color:</label>
                    <input type='text' id='color' name='color'></input>

                    <input type='submit' value="Create Vegetable"></input>
                </form>
            </div>
        ) 
    }
}

module.exports = New