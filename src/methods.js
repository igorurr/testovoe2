function SortByField( data, numField, isDesc ) {
    if( numField == -1 )
        return data;

    data.sort(function(a, b) {
        if( a[numField] > b[numField] )
            return isDesc ? -1 : 1;
        else if ( a[numField] < b[numField] )
            return isDesc ? 1 : -1;
        return 0;
    });

    return data;
}

function Filtrate( data, str ) {
    if( str == '' )
        return data;

    let ret = [];

    data.map( function (curRow, i, arrRow) {
        let isWas = false;
        curRow.map(function (curCol, j, arrCol) {
            if( !isWas && curCol.match(new RegExp( str )) != null ){
                ret[ret.length] = curRow;
                isWas = true;
                return;
            }
        } );
    } );

    return ret;
}

function GetDataPage( data, numPage ) {
    return data.slice( numPage*7, (numPage+1)*7 );
}

function GetData( data, filtrateStr, sortedField, isDesc ) {
    return SortByField( Filtrate( data, filtrateStr ), sortedField, isDesc );
}

function GetCountPages( data ) {
    return (data.length / 7) + (data.length%7 > 0 ? 1 : 0);
}

export { GetData, GetDataPage, GetCountPages }