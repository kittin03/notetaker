import axios from 'axios';

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos');
};

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username);
};

// var promiseObj = getRepos('tyler');
// promiseObj.then(function(data) {
//   // function gets invoked when the promise is resolved
//   console.log(data);
// });

var helpers = {
  getGithubInfo(username) {
    return axios.all([getRepos(username), getUserInfo(username)])
    // when both promises get resolved the function below runs
      .then(function(arr){
        return {
          repos: arr[0].data,
          bio: arr[1].data
        }
      });
  }
};

export default helpers;
