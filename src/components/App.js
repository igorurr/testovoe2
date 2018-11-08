import React, {Component}  from 'react';

import Filtrate from './Filtrate';
import DataTable from './DataTable';
import Paginate from './Paginate';

class App extends Component {
  render() {
    return <div>
      <Filtrate />
      <DataTable />
      <Paginate />
    </div>;
  }
}

export default App;
