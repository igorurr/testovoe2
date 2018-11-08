import React, {Component}  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DataTableHeader from './DataTableHeader';
import DataTableRow from './DataTableRow';

import * as DataTableActions from '../actions/DataTableActions'

/*class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [['0','1','2'],['3','4','5'],['6','7','8']]};
    }
    render() {
        return <table id="DataTable">
            <DataTableHeader />
            {this.state.data.map( function (cur, i, arr) {
                return <DataTableRow values={cur} />
            } )}
        </table>;
    }
}*/

class DataTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //this.props.tableActions.SwitchPage(3);
        return <table id="DataTable">
            <DataTableHeader />
            {this.props.data.map( function (cur, i, arr) {
                return <DataTableRow values={cur} />
            } )}
        </table>;
    }
}


function mapStateToProps (state) {
    return {
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        tableActions: bindActionCreators(DataTableActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);