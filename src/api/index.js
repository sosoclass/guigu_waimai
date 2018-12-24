/**
 * Created by 93659 on 2018/12/22.
 */
import ajax from './ajax'

const BASE = '/api';
//获取地址经纬度
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`);
//获取食品分类信息
export const reqCategorys = () => ajax(BASE + `/index_category`);
//获取商铺列表信息
export const reqShops = (longitude, latitude) => ajax(BASE + '/shops', {longitude, latitude});
//用户名密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE + '/login_pwd', {name, pwd, captcha}, 'POST');
//发送短息验证码
export const reqSendCode = (phone) => ajax(BASE + '/sendcode', {phone});
//手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax(BASE + '/login_sms', {phone, code}, 'POST');

//根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE + '/userinfo');
//用户登出
export const reqLogout =() => ajax(BASE+'/logout');

