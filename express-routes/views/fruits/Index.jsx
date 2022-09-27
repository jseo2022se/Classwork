const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Index extends React.Component {

    render() {

        // console.log(this.props)

        // Object Destructuring
        // same as const fruits = this.props.fruits
        const { fruits } = this.props

        // map method
        /*
            - loops over data
            - manipulates data at each index
            - returns new array with new data
        */
        /*
            [
                { name: 'Pear' ...},
                { name: 'Banana' ...},
                { name: 'Apple' ...}
            ]
        */

            // After we map over it

       /*
            [element, element, element]
       */

        return (
            <DefaultLayout title='All Fruit' foodGroup='fruits'>
                <h1>Fruits Index Page</h1>
                <ul id='all-index'>
                    {fruits.map((fruit) => {
                        return (
                            <li key={fruit._id}>
                                The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}.
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href='/fruits/new'>Create a new fruit</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index