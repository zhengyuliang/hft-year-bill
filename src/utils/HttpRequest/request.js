/* eslint-disable prettier/prettier */
import axios from 'axios';
// import sessionManagement from '../SessionManagement'

const CAOYU = 'caoyu';
const LIUYI = 'liuyi';
const ZHENGYULIANG = 'zhengyuliang';
// const XIAOCONG = 'xiaocong';
// 超时时间 单位: ms
const timeoutCounter = 100000;

// 开发人员在这里输入开发人员和API地址，如果有开发人员，请在vue.config.js里配置新的代理
const Modules = {
    DATA: CAOYU + '/proc/report/year-report/2018', //账单数据信息
    LOGIN: LIUYI + '/v1/operation/h5/login',//登录
    SCODE: LIUYI + '/v1/operation/h5/sendsms',//验证码
    ACTIONDATA: ZHENGYULIANG + '/v1/stage/user/records'
}
/**
 * method: 'get' or 'post' , 'post'是默认值
 *
 * @param options
 * @returns {*}
 */
let request = (options) => {
    // const session = sessionManagement.getUserInfo()
    // if (session) {
    //     var {
    //         api_token,
    //         username
    //     } = session
    // }
    //default options, mixin options
    let opt = {
        method: 'post',
        // isTimeOut: false,
        // config: {
        //     headers: {
        //         'x-api-key': 'XpF1tKUX0CatqWK6uH9UU1CkZ1TNUwnN5USWT1ka'
        //     }
        // },
        ...options
    }
    // if (opt['urlParameter']) opt.url = opt.url.replace(/\{\w*\}/, opt.urlParameter);
    if (opt['urlParameter']) opt['url'] = _regit(opt['url'], opt['urlParameter'])
    if (opt.method === 'get') {
        //拼接参数
        opt['url'] = opt['url'] + encodeSearchParams(options['params']);
        opt.params = {

            ...opt.params,
            // ...opt.config
        };
    }
    // 超时处理
    let p1 = axios[opt.method](
        process.env.VUE_APP_HOST + opt['url'],
        opt['params'],
        opt['config'])
    let p_timeout = new Promise((resolve, reject) => {
        // if (!opt['isTimeOut']) { //如果是导入和复制门店请求就不要超时处理
        setTimeout(() => {
            // console.log('timeout');
            reject({
                msg: `服务器超时 ${timeoutCounter} 稍候重试`
            });
        }, timeoutCounter, 'time timeout');
        // }
    })
    return Promise.race([p1, p_timeout])
}

/**
 * 请求上传接口
 * @param file - input中选择的文件
 * @returns {*}
 */
let upload = (file) => {
    if (!file['name']) return false;
    return new Promise(resolve => {
        let formdata = new FormData()
        // 先向我们的后台发送要上传的文件名字，返回指定token后才能带着token上传到s3
        request({
            url: Modules.UPLOAD_AUTH,
            params: {
                feil_path: '',
                file_key: file['name']
            }
        }).then(res => {
            let auth = res.data.msg;
            // console.log('s3 key, res.data.msg.fields:', res.data.msg.url);
            formdata.append('key', auth.fields['key']);
            formdata.append('acl', auth.fields['acl']);
            formdata.append('success_action_status', '201');
            formdata.append('policy', auth.fields['policy']);
            formdata.append('x-amz-algorithm', auth.fields['x-amz-algorithm']);
            formdata.append('x-amz-credential', auth.fields['x-amz-credential']);
            formdata.append('x-amz-date', auth.fields['x-amz-date']);
            formdata.append('x-amz-signature', auth.fields['x-amz-signature']);
            formdata.append('file', file);
            formdata.auth = auth
            resolve(formdata)
        })
    });
};

let area = (options) => {
    return axios.get(process.env.VUE_APP_HOST + options['url'], {
        headers: {
            'Authorization': 'member YsfrkQGy21BCIvP2aLlqVZjHz9lpLaDfsKldpUmFGEsXRhx4ycd5uOBPS42cm3Yu',
        }
    })
}

/**
 * 抽取路由变量： e.g _regit('fjaiwef/{kk}/fjoie/{jj}', {kk: '111111',jj: 'f2222'})
 *              =====>  fjaiwef/111111/fjoie/f2222
 * @param str 要改变的url
 * @param obj 把要替换的变量和值拼成一个对象, 如果Obj是个字符串，仅替换遇到的第一个变量
 * @returns {*}
 * @private
 */
let _regit = (str, obj) => {
    if (typeof obj !== 'object') {
        str = str.replace(/\{\w*\}/, obj)
    } else {
        Object.entries(obj).map(entry => {
            const replace = '{' + entry[0] + '}'
            var re = new RegExp(replace, "g");
            str = str.replace(re, entry[1])
        })
    }
    return str
}
//get 参数进行拼接
let encodeSearchParams = (obj) => {
    const params = [];
    let url = '';
    Object.keys(obj).forEach((key) => {
        let value = obj[key]
        // 如果值为undefined我们将其置空
        if (typeof value != 'undefined' && value !== '') {
            params.push([key, encodeURIComponent(value)].join('='))
        }
    })
    if (params.length) {
        url = '?' + params.join('&')

    }
    return url;
}

export {
    request,
    upload,
    area,
    Modules,
}