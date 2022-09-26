const React = require('react')

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
            <div>
                <h1>Fruits Index Page</h1>
                <ul>
                    {fruits.map((fruit, i) => {
                        return (
                            <li key={i}>
                                The <a href={`/fruits/${i}`}>{fruit.name}</a> is {fruit.color}.
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href='/fruits/new'>Create a new fruit</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index