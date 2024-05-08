interface ApiInterface {
  method: string;
  data?: any;
}

class Api {
  constructor() {}
  logout() {
    localStorage.clear();
    sessionStorage.clear();
  }

  request(url: string, options: ApiInterface) {
    const URL = `${url}`;
    options = options || {};
    const fetchOptions = {
      method: options.method || 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    };
    const fetchOptionsWithPost = {
      method: options.method || 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options.data),
    };
    const header =
      options.method === 'POST' ||
      options.method === 'PUT' ||
      options.method === 'DELETE'
        ? fetchOptionsWithPost
        : fetchOptions;
    return fetch(URL, header).then((res) => {
      if (!res.ok) {
        if (res.status === 401) {
          this.logout();
          return res.json().then((res: any) => {
            return {
              error: res,
            };
          });
        } else {
          if (res.status === 403 || res.status === 404) {
            return res.json().then((res: any) => {
              return {
                error: res,
              };
            });
          } else if (res.status === 423) {
            const error = {
              body: res.statusText,
            };
            return error;
          } else if (res.status === 422) {
            return res.json().then((res: any) => {
              return {
                error: res,
              };
            });
          } else if (res.status === 409) {
            return res.json().then((res: any) => {
              return {
                error: res,
              };
            });
          } else if (res.status === 500) {
            const error = {
              body: res.statusText,
            };
            return error;
          } else if (res.status === 504) {
            const error = {
              body: res.statusText,
            };
            return error;
          } else if (res.status === 412) {
            return res.json();
          } else if (res.status === 400) {
            return res.json();
          }
        }
        throw Error(res.statusText);
      }
      return res.json();
    });
  }
}

export const FetchApi = new Api();
