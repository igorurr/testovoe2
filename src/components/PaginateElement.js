import React, {Component} from 'react';

class PaginateElement extends Component {
    render() {
        let classes = this.props.isSelected ? 'Selected' : '';
        return <button className={classes} onClick={()=>{this.props.tableActions.SwitchPage(this.props.number)}}>{this.props.number+1}</button>;
    }
}

export default PaginateElement;