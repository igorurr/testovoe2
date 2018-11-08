import React, {Component}  from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as DataTableActions from "../actions/DataTableActions";

class FiltrateSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    render() {
        return <input type="text" onChange={(evt)=>this.updateInputValue(evt,this)} />;
    }

    updateInputValue(evt,context) {
        context.setState({
            inputValue: evt.target.value
        });
        context.props.tableActions.Filtrate(evt.target.value);
    }
}


function mapStateToProps (state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        tableActions: bindActionCreators(DataTableActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltrateSearch);