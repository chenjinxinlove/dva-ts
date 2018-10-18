const host = window.location.host;
let baseUrl = 'http://dev.com';
if (host === 'test.com') {
  baseUrl = 'http://test.com';
} else if (host === 'y.com') {
  baseUrl = 'http://y.com';
}

export default baseUrl;
