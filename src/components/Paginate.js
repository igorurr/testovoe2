import React, {Component}  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PaginateElement from './PaginateElement';
import * as DataTableActions from "../actions/DataTableActions";

class Paginate extends Component {
    render() {
        let pe = [];

        for( let i=0; i<this.props.pageCount; i++ )
            pe[pe.length] = <PaginateElement number={i} isSelected={i==this.props.pageNumber} tableActions={this.props.tableActions} />;

        return <footer id="Pagination">
            <button className="Previous" onClick={this.props.pageNumber-1>=0 ? ()=>this.props.tableActions.SwitchPage(this.props.pageNumber-1):null}>Previous</button>
            {pe}
            <button className="Next" onClick={this.props.pageNumber+1<this.props.pageCount ? ()=>this.props.tableActions.SwitchPage(this.props.pageNumber+1):null}>Next</button>
        </footer>;
    }
}



function mapStateToProps (state) {
    return {
        pageNumber: state.pageNumber,
        pageCount: state.pageCount
    }
}

function mapDispatchToProps(dispatch) {
    return {
        tableActions: bindActionCreators(DataTableActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginate);