/**
 * Created by 93659 on 2018/12/22.
 */
import ajax from './ajax'

const BASE = '/api';

export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`);

export const reqCategorys = () => ajax(BASE + `/index_category`);

export const reqShops = (longitude, latitude) => ajax(BASE + '/shops', {longitude, latitude});
