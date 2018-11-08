function SwitchPage( number ) {
    return {
        type: 'SWITCH_PAGE',
        pageNumber: number
    }
}

function Filtrate( str ) {
    return {
        type: 'FILTRATE',
        filtrateStr: str
    }
}

function SortBy( field, isDesc ) {
    return {
        type: 'SORT_BY',
        sortField: field
    }
}

export { SwitchPage, Filtrate, SortBy }