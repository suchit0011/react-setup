import http from "./apiUrl";

class TutorialDataService {

  getAll(apiurl) {
    console.log('my url',apiurl)
    return http.get(apiurl);
  }

  get(apiurl,id) {
    return http.get(`${apiurl}${id}`);
  }

  create(apiurl,data) {
    console.log('data changed',apiurl,data);
    return http.post(apiurl, data);
  }

  update(apiurl,id, data) {
    return http.put(`${apiurl}${id}`, data);
  }

  delete(apiurl,id) {
    return http.delete(`${apiurl}${id}`);
  }

  deleteAll(apiurl) {
    return http.delete(`${apiurl}`);
  }
}

export default new TutorialDataService();



