import React, {Component}  from 'react';

class DataTableColumn extends Component {
    render() {
        return <td>{this.props.value}</td>;
    }
}

export default DataTableColumn;