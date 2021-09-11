import axios from "axios";

class BackendAPI {

    static login(username, password) {

        return axios
            .post(
                '/api-token-auth/',
                {
                    username: username,
                    password: password
                }
            )

    }

    static getMoods(token) {

        return axios
            .get(
                '/api/moods/',
                {
                    headers: {
                        'Authorization': 'Token ' + token
                    }
                })

    }

    static getUsers(token) {

        return axios
            .get(
                '/api/users/',
                {
                    headers: {
                        'Authorization': 'Token ' + token
                    }
                })

    }

}

export default BackendAPI;
