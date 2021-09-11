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

    static getAllMoods(token) {

        return axios
            .get(
                '/api/moods/',
                {
                    headers: {
                        'Authorization': 'Token ' + token
                    }
                })

    }

    static getAllUsers(token) {

        return axios
            .get(
                '/api/users/',
                {
                    headers: {
                        'Authorization': 'Token ' + token
                    }
                }
            )

    }

}

export default BackendAPI;
