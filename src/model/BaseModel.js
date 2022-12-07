import axios from "axios";

class BaseModel {
  baseUrl = "";

  constructor() {
    this.baseUrl = process.env.REACT_APP_BASE_URL;
  }

  get(request) {
    return this.request({
      method: "get",
      ...request,
      data: null,
    });
  }

  post(request) {
    return this.request({
      method: "post",
      ...request,
      params: null,
    });
  }

  delete(request) {
    return this.request({
      method: "delete",
      ...request,
      params: null,
    });
  }

  put(request) {
    return this.request({
      method: "put",
      ...request,
      params: null,
    });
  }

  custom(request) {
    return this.request(request);
  }

  async request({ baseUrl, method, path, headers, data, params }) {
    let authorization = localStorage.getItem("access_token");

    let baseHeaders = {
      "Content-Type": "application/json",
    };

    if (authorization) {
      baseHeaders["Authorization"] = `Bearer ${authorization}`;
    }

    let mergeHeaders = {
      ...baseHeaders,
      ...headers,
    };

    try {
      let request = {
        url: `${baseUrl || this.baseUrl}/${path}`,
        method,
        params,
        data,
        headers: mergeHeaders,
      };

      const response = await axios(request);

      return response.data;
    } catch (error) {
      return null;
    }
  }
}

export default BaseModel;
