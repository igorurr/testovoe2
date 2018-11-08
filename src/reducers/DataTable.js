import { GetData, GetDataPage, GetCountPages } from '../methods';

const initData = [['Thor Walton','Developer','NewYork','61','2013/08/11','$98,540'],
    ['Quinn Flynn','Support Lead','Edinburgh','22','2013/03/03','$342,000'],
    ['Jenifer Acosta','Junior Javascript Developer','Edinburgh','43','2013/02/01','$98,540'],
    ['Haley Kennedy','Senior Marketing Designer','London','43','201/12/18','$313,500'],
    ['Brielle Williamson','Integration Specialist','NewYork','61','2012/12/02','$372,000'],
    ['Michael Silva','Marketing Designer','London','66','2012/11/27','$198,500'],
    ['Bradley Greer','Software Engineer','London','41','2012/10/13','$132,000'],
    ['Dai Rios','Personnel Lead','Edinburgh','35','2012/08/06','$217,500'],
    ['Herrod Chandler','Sales Assistant','San Francisco','59','2012/08/06','$137,500'],
    ['Briqelle Williamson','Integration Specialist','NewYork','61','2012/12/02','$3572,000'],
    ['Michael Silva','Marketing Designer','Qusakino','66','2012/11/27','$1948,500'],
    ['Bradley Greer','Software Engineer','London','41','2012/10/13','$1312,000'],
    ['Dai Rrios','Personnel Lead','Edinburgh','35','2012/08/06','$2117,500'],
    ['Herxxqrod Chasndler','Sales Assistant','San Marieno','59','2012/08/06','$11377,500'],
    ['Zorita Serrwano','Software Engineer','San Vidumano','56','2012/06/01','$115,000'],
    ['Haley Kennedy','Marketing Designer','Moscow','43','201/12/18','$373,500'],
    ['Brielle Wilsliamson','Personnel Lead','Dalnie Lupi','61','2012/12/02','$472,000'],
    ['Miswchaecl Silva','Integration Specialist','NewYork','66','2012/11/27','$978,500'],
    ['Bradley Greerq','Software Engineer','NewYork','41','2012/10/13','$312,500'],
    ['Daic Rios','Software Engineer','Westeros','35','2012/08/06','$219,500'],
    ['Herrod Chandler','Sales Assistant','San Moscow','59','2012/08/06','$337,500'],
    ['Zorita Serrafnos','Software Engineer','Francisco','56','2012/06/01','$515,000'],
    ['Haldey Kennedy','Senior Personnel Designer','Kasakstan','43','201/12/18','$313,500'],
    ['Brsielle Williamsvon','Designer Specialist','NewYork','61','2012/12/02','$372,000'],
    ['Micehael Silva','Marketing Edinburgh','Ulan Ude','66','2012/11/27','$198,500'],
    ['Zorita Serrano','Software Engineer','San Francisco','56','2012/06/01','$115,000'],
    ['Haley Kennedy','Marketing Designer','Moscow','43','201/12/18','$373,500'],
    ['Brielle Williamson','Personnel Lead','Edinburgh','61','2012/12/02','$472,000'],
    ['Michael Silva','Integration Specialist','NewYork','66','2012/11/27','$98,500'],
    ['Bradley Greer','Software Engineer','NewYork','41','2012/10/13','$312,500'],
    ['Dai Rios','Software Engineer','Edinburgh','35','2012/08/06','$219,500'],
    ['Herrod Chandler','Sales Assistant','Moscow','59','2012/08/06','$337,500'],
    ['Zorita Serrano','Software Engineer','San Francisco','56','2012/06/01','$515,000'],
    ['Haldey Kennedy','Senior Personnel Designer','Kasakstan','43','201/12/18','$313,500'],
    ['Brielle Williamsvon','Designer Specialist','NewYork','61','2012/12/02','$372,000'],
    ['Micehael Silva','Marketing Edinburgh','Ulan Ude','66','2012/11/27','$198,500'],
    ['Bradley Grever','Marketing Engineer','Edinburgh','41','2012/10/13','$132,000'],
    ['Dab Rios','Personnel Lead','Edinburgh','35','2012/08/06','$217,500'],
    ['Herrod Chqandler','Integration Assistant','San Francisco','59','2012/08/06','$137,500'],
    ['Zorizta Serrano','Software Engineer','San Francisco','56','2012/06/01','$115,000'],
    ['Haley Kenvnedy','Software Designer','Moscow','43','201/12/18','$373,500'],
    ['Briqelle Williamson','Personnel Lead','Kasakstan','61','3012/12/02','$999999,000']];

const initialState = {
    data: GetDataPage(GetData(initData, '', -1, false), 0),
    pageNumber: 0,
    pageCount: GetCountPages(initData),
    filtrateStr: '',
    sortField: -1,
    sortByDesc: false
};

export default function DataTableReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case 'SWITCH_PAGE':
            var data = GetData(initData, state.filtrateStr, state.sortField, state.sortByDesc);
            return {
                ...state,
                pageNumber: action.pageNumber,
                data: GetDataPage(data, action.pageNumber)
            }

        case 'FILTRATE':
            var data = GetData(initData, action.filtrateStr, state.sortField, state.sortByDesc);
            return {
                ...state,
                pageCount: GetCountPages(data),
                filtrateStr: action.filtrateStr,
                data: GetDataPage(data, state.pageNumber)
            }

        case 'SORT_BY':
            var sortByDesc = action.sortField == state.sortField && !state.sortByDesc;
            var data = GetData(initData, state.filtrateStr, action.sortField, sortByDesc);
            return {
                ...state,
                pageCount: GetCountPages(data),
                sortField: action.sortField,
                sortByDesc: sortByDesc,
                data: GetDataPage(data, state.pageNumber)
            }

        default:
            return state;
    }
}