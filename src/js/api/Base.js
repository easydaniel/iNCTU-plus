import urlTool from 'url';
import uj from 'url-join';
import qs from 'query-string';
import { HOST, VERSION } from './Config';

const combinePayload = (res, payload) => Promise.resolve(
        res.then(r => ({
          ...r,
          request: payload,
        })),
    );

export default (url, options = {}) => {
  let u = uj(HOST, VERSION, url);
  let opt = { ...options };
  const { body } = options;
  const urlObject = urlTool.parse(u);
  if (!opt.method || opt.method.toLowerCase() === 'get') {
    urlObject.query = { ...qs.parse(urlObject.query), ...body };
    u = urlTool.format(urlObject);
    delete opt.body;
  }
  opt = { ...opt, credential: 'include' };
  return fetch(u, opt).then((res) => {
    const payload = combinePayload(res.json(), body);
    if (res.status >= 200 && res.status < 300) {
      return payload;
    }
    return Promise.reject(payload);
  });
};
