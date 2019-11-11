/* eslint-disable no-useless-escape */
import $ from 'jquery'
import { regExpConfig, } from '@configs/regular.config'

let serverHost = 'http://zyxel.router/'
// let serverHost = 'http://customer.premise.equipment/'
if (process.env.NODE_ENV === 'production') { // 发布环境
  serverHost = ''
}

const get = (url) => {
  return $.ajax({
    url: serverHost + url,
    type: 'Get',
    timeout: 12000,
    cache: false,
    datatype: 'xml',
  })
}

const post = (url, data, timeout) => {
  if(!timeout) timeout = 15000
  return $.ajax({
    url: `${serverHost}${url}`,
    type: 'Post',
    timeout: timeout,
    cache: false,
    datatype: 'xml',
    data: data,
  })
}

const pageGrid = {
  formLabel: {
    xl: { span: 3, },
    lg: { span: 5, },
    md: { span: 5, },
    sm: { span: 12, },
  },
}

const globalData = {
  fota_st: 0,
}
function XSSResolveCannotParseChar(xmlStr) {
  return xmlStr.replace(/(&|'|"|>|<|\/|\(|\))/g, function($0, $1) {
    return {
      '&': '&amp;',
      '\'': '&#39;',
      '"': '&quot;',
      '<': '&lt;',
      '>': '&gt;',
      '/': '&#x2F;',
      '(': '&#40;',
      ')': '&#41;',
    }[$1];
  });
}
const regURL = (str)=> {
  const reg = '(((https|http|ftp|rtsp|mms):&#x2F;&#x2F;)|(www\\.)){1}[\x21-\x7E]*';
  const matchURL = new RegExp(reg, 'ig');
  str = XSSResolveCannotParseChar(str);
  let $1_href
  return str.replace(matchURL, function($1) {
    $1_href = $1.indexOf('&#x2F;&#x2F;') === -1 ? 'http://' + $1 : $1;
    if($1_href.charAt($1_href.length - 1) === '=' && $1_href.charAt($1_href.length - 2) !== '=') {
      $1_href = $1_href.substring(0, $1_href.length - 1);
    }
    return '<a href=\'' + $1_href + '\' style=\'text-decoration:underline;\' target=\'_blank\' onclick=\'javascript:stopBubble(event)\'>' + $1 + '</a>';
  });
}

function mac_check(macaddr) {
  macaddr = macaddr.toUpperCase();
  if (macaddr.length !== 12 && macaddr.length !== 17) return false;
  if (macaddr === '00-00-00-00-00-00' || macaddr === '00:00:00:00:00:00' || macaddr === 'FF-FF-FF-FF-FF-FF' || macaddr === 'FF:FF:FF:FF:FF:FF') return false;
  const reg = /^[A-Fa-f0-9]{12}$/
  const reg1 = /^[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}$/;
  const reg2 = /^[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}$/;
  if (reg.test(macaddr)) {
    return true;
  }
  else if (reg1.test(macaddr)) {
    return true;
  } else if (reg2.test(macaddr)) {
    return true;
  } else {
    return false;
  }
}

function isNull(str) {
  if (str === '')
    return true;
  else return false;
}

function isMask(strIP) {
  if (isNull(strIP)) return false;
  if (!regExpConfig.isMask.exec(strIP)) {
    return false;
  }
  const laststr = strIP.split('.');
  for (let i = 0; i < 4; i++) {
    const d = parseInt(laststr[i]);
    if (!(d === 0 || d === 128 || d === 192 || d === 224 || d === 240 || d === 248 || d === 252 || d === 254 || d === 255)) {
      return false;
    }
    if (d === 0 && i === 0) return false;
  }
  return true;
}

function IsURL(str_url){
  str_url=str_url.toLowerCase();
  //str_url="https://iotacs.jioconnect.com:8443/ftacs-digest/ACS";
  const strRegex = '^((https|http|ftp|rtsp|mms)?://)'
  + '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?'
  + '(([0-9]{1,3}.){3}[0-9]{1,3}'
  + '|'
  + '\\[((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\\]'
  + '|'
  + '([0-9a-z_!~*\'()-]+.)*'
  + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].'
  + '[a-z]{2,6})' // first level domain- .com or .museum
  + '(:[0-9]{1,5})?' //
  + '((/?)|' // a slash isn't required if there is no file name
  + '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
  const re=new RegExp(strRegex);
  //re.test()
  if (re.test(str_url)){
    return (true);
  }else{
    return (false);
  }
}

export { pageGrid, get, post, mac_check, isMask, IsURL, serverHost, globalData, regURL,}