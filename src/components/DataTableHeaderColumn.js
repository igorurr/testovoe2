import React, {Component}  from 'react';

class DataTableHeaderColumn extends Component {
    render() {
        return <td><a href="#" onClick={()=>this.props.tableActions.SortBy(this.props.columnId)}>{this.props.value}</a></td>;
    }
}

export default DataTableHeaderColumn;
