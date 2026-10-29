import {test,expect} from 'vitest';import {selectCompanies} from './catalog';
test('filter is case insensitive, bounded and recovers from a stale page',()=>{const items=[{name:'Alpha'},{name:'Beta'}];expect(selectCompanies(items,'AL',5,1)).toMatchObject({items:[items[0]],total:1,page:1,pages:1});expect(selectCompanies(items,'none',1,10).items).toEqual([]);});
