import { handleActions } from 'redux-actions';
import { map } from 'lodash';
import * as c from '../../constants/constants';

export const defaultState = [
    { key: c.PAGE_HOME, url: '/', title: 'Menu', active: false, hidden: true },
    { key: c.PAGE_RENT_NEW, url: '/rent-new', title: 'Nová výpožička', active: false, hidden: false },
    { key: c.PAGE_RENT_RUNNING, url: '/rent-running', title: 'Prebiehajúce výpožičky', active: false, hidden: false },
    { key: c.PAGE_RENT_CALENDAR, url: '/rent-calendar', title: 'Kalendár výpožičiek', active: false, hidden: false },
    { key: c.PAGE_DATABASE, url: '/database', title: 'Databáza', active: false, hidden: false },
    { key: c.PAGE_SERVIS_NEW, url: '/servis-new', title: 'Nový servis', active: false, hidden: false },
    { key: c.PAGE_SERVIS_RUNNING, url: '/servis-running', title: 'Prebiehajúci servis', active: false, hidden: false },
    { key: c.PAGE_SERVIS_DONE, url: '/servis-done', title: 'Ukončený servis', active: false, hidden: false },
    { key: c.PAGE_SALE, url: '/sale', title: 'Predaj', active: false, hidden: false },
    { key: c.PAGE_SETTINGS, url: '/settings', title: 'Nastavenia', active: false, hidden: false },
    { key: c.PAGE_IMPORT, url: '/import', title: 'Import dát', active: false, hidden: false },
];

export default handleActions({
    [c.SET_PAGE]: (state, { payload }) => {
        return [
            ...map(state, page => {
                return {
                    ...page,
                    active: payload === page.key
                }
            })
        ]
    },
}, defaultState);
