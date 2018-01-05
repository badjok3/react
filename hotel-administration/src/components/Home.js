import React, {Component} from 'react'
import HotelCard from './partials/HotelCard'
import {Link} from 'react-router-dom'

import {getPage} from '../api/hotel'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: []
        };

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    async getData(page = +this.props.match.params.page || 1) {
        let data = await getPage(page);
        this.setState({ hotels: data });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.match.params.page !== this.props.match.params.page) {
            this.getData(+nextProps.match.params.page);
        }
    }

    render() {
        const page = +this.props.match.params.page || 1;
        return (
            <div>
                <h2>Welcome to our website.</h2>
                {this.state.hotels.length === 0 ?
                    <p>Loading..</p> :
                    this.state.hotels.map(h => {
                        return <HotelCard key={h.id} hotel={h}/>
                    })}
                <div className="pagination">
                    {page > 1 && <Link className="btn btn-primary" to={"/view/" + (page - 1)}>&lt; Prev</Link>}
                    <Link className="btn btn-primary" to={"/view/" + (page + 1)}>Next &gt;</Link>
                </div>
            </div>
        )
    }
}

export default Home