if (location.protocol == 'http:') // detect http
  location.href = location.href.replace(/^http:/, 'https:') // change the protocol from https:/ to http:
// reverse (https to http) can be found in /projekty/js/redirect.js
// credit: some guy on stackoverflow
