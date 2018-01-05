import React, {Component} from 'react'
import PokemonField from './formFields/PokemonField'
import Input from './formFields/Input'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            pokemonName: '',
            pokemonImg: '',
            pokemonInfo: '',
            data: []
        }

    }

    createPokemon(e) {
        e.preventDefault()

        let payload = {
            pokemonName: this.state.pokemonName,
            pokemonImg: this.state.pokemonImg,
            pokemonInfo: this.state.pokemonInfo
        }

        this.pokemonToServer(payload)
    }

    componentWillUpdate() {
        fetch('http://localhost:5000/pokedex/pokedex')
            .then(data => {
                return data.json()
            })
            .then(d => {

                this.setState({data: d.pokemonColection})
            })
    }

    pokemonToServer(payload) {
        fetch('http://localhost:5000/pokedex/create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                return res.json()
            })
            .then(d => {
                console.log(d);
            })
    }

    componentDidMount() {
        fetch('http://localhost:5000/pokedex/pokedex')
            .then(data => {
                return data.json()
            })
            .then(d => {
                this.setState({data: d.pokemonColection})
            })
    }

    render() {
        let validName = this.state.pokemonName !== '';
        let validImage = this.state.pokemonImg.startsWith('http');
        let validContent = this.state.pokemonInfo.length > 3 &&
            this.state.pokemonInfo.length < 50;

        return (
            <div>
                <form onSubmit={this.createPokemon.bind(this)}>
                    <Input
                        data='pokeName'
                        name='Pokemon Name'
                        func={e => {
                            this.setState({pokemonName: e.target.value})
                        }
                        }
                        valid={validName}
                    />
                    <Input
                        data='pokeImage'
                        name='Pokemon Image'
                        func={e => {
                            this.setState({pokemonImg: e.target.value})
                        }
                        }
                        valid={validImage}
                    />
                    <Input
                        data='pokeBio'
                        name='Pokemon Info'
                        func={e => {
                            this.setState({pokemonInfo: e.target.value})
                        }
                        }
                        valid={validContent}
                    />

                    <input
                        style={({"display": (validContent && validImage && validName) ? '' : 'none'})}
                        type="submit"
                        value="Create Pokemon"
                    />
                </form>
                <div style={({ display: 'inline-block' })}>
                    {
                        this.state.data.map((x, index) => {
                            return <PokemonField key={index} data={x} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Home