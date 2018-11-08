import React, {Component}  from 'react';

import FiltrateSearch from './FiltrateSearch';

class Filtrate extends Component {
    render() {
        return <header id="Filtrate">
            <div className="Search">Search:</div>
            <FiltrateSearch />
            <button>search</button>
        </header>;
    }
}

export default Filtrate;