const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Index extends React.Component {

    render() {

        const { meat } = this.props

        return (
            <DefaultLayout title='All Meat' foodGroup='meats'>
          
                <h1>Meats Index Page</h1>
                <ul id='all-index'>
                    {meat.map((meats) => {
                        return (
                            <li key={meats._id}>
                                The <a href={`/meats/${meats._id}`}>{meats.name}</a> is {meats.type}.
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href='/meats/new'>Create a new meat</a>
                </nav>
            
            </DefaultLayout>
        )
    }
}

module.exports = Index