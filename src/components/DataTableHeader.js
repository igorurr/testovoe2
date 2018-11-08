import React, {Component}  from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

import DataTableHeaderColumn from './DataTableHeaderColumn';
import * as DataTableActions from "../actions/DataTableActions";

class DataTableHeader extends Component {
    render() {
        const columns = [['Name'],['Position'],['Office'],['Age'],['Start date'],['Salary']];
        const tableActions = this.props.tableActions;

        return <tr id="DataTableHeader">
            {columns.map( function (cur, i, arr) {
                return <DataTableHeaderColumn value={cur} columnId={i} tableActions={tableActions}/>
            } )}
        </tr>;
    }
}



function mapStateToProps (state) {
    return {
        sortField: state.sortField,
        sortByDesc: state.sortByDesc
    }
}

function mapDispatchToProps(dispatch) {
    return {
        tableActions: bindActionCreators(DataTableActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTableHeader);
