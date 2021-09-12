import axios from 'axios';

class BackendAPI {

    //// Authentication ////

    static login(username, password) {

        return axios.post(
            '/api-token-auth/',
            {
                username: username,
                password: password
            }
        )

    }

    //// Aggregate ////

    static getAllMoods(token, userID) {

        return axios.get(
            '/api/moods/',
            createAuthHeader(token)
        ).then((response) => {
            response.data = response.data.filter(mood => mood.user === userID)
            return response
        })

    }

    static getAllUsers(token) {

        return axios.get(
            '/api/users/',
            createAuthHeader(token)
        )

    }

    //// Moods ////

    static getMood(token, moodID) {

        return axios.get(
            `/api/moods/${moodID}/`,
            createAuthHeader(token)
        )

    }

    static createMood(token, moodType, scale, description, userID) {

        // Curl command for reference:
        // curl http://127.0.0.1:8000/PlotYourVibe/api/moods/ -H 'Authorization: Token d9f33fb636c489e78fc7f11e84101ab0bd95561b' --data $'mood=H&scale=0.5&description=yes&timestamp=2021-09-11T21:28:59.065675Z&user=1'

        return axios.post(
            '/api/moods/',
            {
                mood: moodType,
                scale: scale,
                description: description,
                timestamp: Date.now(),
                user: userID
            },
            createAuthHeader(token)
        )

    }

    static updateMood(token, moodID, moodType, scale, description, userID) {

        return axios.put(
            `/api/moods/${moodID}/`,
            {
                mood: moodType,
                scale: scale,
                description: description,
                timestamp: Date.now(),
                user: userID
            },
            createAuthHeader(token)
        )

    }

    static deleteMood(token, moodID) {

        return axios.delete(
            `/api/moods/${moodID}`,
            createAuthHeader(token)
        )

    }

    //// User ////

    static getUser(token, userID) {

        return axios.get(
            `/api/users/${userID}/`,
            createAuthHeader(token)
        )

    }

}

function createAuthHeader(token) {

    return {
        headers: {
            'Authorization': 'Token ' + token
        }
    }

}

export default BackendAPI;
