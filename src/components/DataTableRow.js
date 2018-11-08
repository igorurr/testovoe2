import React, {Component}  from 'react';

import DataTableColumn from './DataTableColumn';

class DataTableRow extends Component {
    render() {
        return <tr>{this.props.values.map( function (cur, i, arr) {
            return <DataTableColumn value={cur} />
        } )}</tr>;
    }
}

export default DataTableRow;