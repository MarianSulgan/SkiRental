import { handleActions } from 'redux-actions';
import { map } from 'lodash';
import * as c from '../../constants/constants';

const page = (key, url, title, active, hidden, icon) => {
    return { key, url, title, active, hidden, icon }
}

export const defaultState = [
    page(c.PAGE_HOME, '/', 'Menu', false, true),
    page(c.PAGE_RENT_NEW, '/rent-new', 'Nová výpožička', false, false, 'fa-bug'),
    page(c.PAGE_RENT_RUNNING, '/rent-running', 'Prebiehajúce výpožičky', false, false, 'fa-bullseye'),
    page(c.PAGE_RENT_CALENDAR, '/rent-calendar', 'Kalendár výpožičiek', false, false, 'fa-cog'),
    page(c.PAGE_DATABASE, '/database', 'Databáza', false, false, 'fa-cc'),
    page(c.PAGE_SERVICE_NEW, '/service-new', 'Nový servis', false, false, 'fa-clone'),
    page(c.PAGE_SERVICE_RUNNING, '/service-running', 'Prebiehajúci servis', false, false, 'fa-code'),
    page(c.PAGE_SERVICE_DONE, '/service-done', 'Ukončený servis', false, false, 'fa-download'),
    page(c.PAGE_SALE, '/sale', 'Predaj', false, false, 'fa-female'),
    page(c.PAGE_SETTINGS, '/settings', 'Nastavenia', false, false, 'fa-flag'),
    page(c.PAGE_IMPORT, '/import', 'Import dát', false, false, 'fa-inbox')
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
