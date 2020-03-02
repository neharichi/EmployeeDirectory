import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    console.log("GETUSERS")
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
