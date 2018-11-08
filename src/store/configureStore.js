import { createStore, applyMiddleware, combineReducers } from 'redux'

import DataTable from '../reducers/DataTable'

export default function configureStore(initialState) {

    const store = createStore(DataTable, initialState)

    return store
}
/*
export default combineReducers({
    DataTable
})*/