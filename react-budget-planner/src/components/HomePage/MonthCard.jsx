import React from 'react';
import { Link } from 'react-router-dom';

const monthCard = (props) => {
    const { id, year, budget, balance } = props;
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    return (
        <div className="col-md-3">
            <div className="card text-white bg-secondary">
                <div className="card-body">
                    <blockquote className="card-blockquote">
                        <h2>{months[+id - 1]}</h2>
                        <h4>Year {year}</h4>
                        <label htmlFor="budget">Budget:</label>
                        <input className="col-md-9" name="budget" value={budget} disabled />
                        <label htmlFor="balance">Balance:</label>
                        <input className="col-md-9" name="balance" value={balance} disabled />
                        <div className="space-top">
                            <Link to={`/year/${year}/month/${id}`} className="btn btn-secondary">Details</Link>
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default monthCard