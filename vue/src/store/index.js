import axios from "axios";
import { createStore } from "vuex";
import axiosClient from "../axios";
const tmpSurvey = [
    {
        id: 1,
        title: "TheCodeholic YouTube channel content",
        slug: "thecodeholic-youtube-channel-content",
        status: "draft",
        image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
        description:
            "My name is Zura.<br>I am Web Developer with 9+ years of experience, free educational content creator, CTO, Lecturer and father of two wonderful daughters.<br><br>The purpose of the channel is to share my several years of experience with beginner developers.<br>Teach them what I know and make my experience as a lesson for others.",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expired_date: "2021-12-31 18:00:00",
        questions: [
            {
                id: 1,
                type: "select",
                question: "Select your country?",
                description: null,
                data: {
                    multiple: false,
                    options: [
                        {
                            uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
                            text: "USA",
                        },
                        {
                            uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
                            text: "Georgia",
                        },
                        {
                            uuid: "b5c09733-a49e-460a-ba8a-526863010729",
                            text: "Germany",
                        },
                        {
                            uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513",
                            text: "India",
                        },
                        {
                            uuid: "8d14341b-ec2b-4924-9aea-bda6a53b51fc",
                            text: "United Kingdom",
                        },
                    ],
                },
            },
            {
                id: 2,
                type: "checkbox",
                question:
                    "Which language videos do you want to see on my channel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        {
                            uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
                            text: "JavaScript",
                        },
                        {
                            uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
                            text: "PHP",
                        },
                        {
                            uuid: "b5c09733-a49e-460a-ba8a-526863010729",
                            text: "HTML + CSS",
                        },
                        {
                            uuid: "b5c09733-a49e-460a-ba8a-526863010729",
                            text: "All of the above",
                        },
                        {
                            uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513",
                            text: "Everything Zura thinks will be good",
                        },
                    ],
                },
            },
            {
                id: 3,
                type: "checkbox",
                question:
                    "Which PHP framework videos do you want to see on my channel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        {
                            uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
                            text: "Laravel",
                        },
                        {
                            uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
                            text: "Yii2",
                        },
                        {
                            uuid: "b5c09733-a49e-460a-ba8a-526863010729",
                            text: "Codeigniter",
                        },
                        {
                            uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513",
                            text: "Symfony",
                        },
                    ],
                },
            },
            {
                id: 4,
                type: "radio",
                question: "Which Laravel Framework do you love most?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        {
                            uuid: "31132230-29e0-4857-84ed-417542c7c8dd",
                            text: "Laravel 5",
                        },
                        {
                            uuid: "0ab85f86-15ee-4ec0-ba42-793daf243a5d",
                            text: "Laravel 6",
                        },
                        {
                            uuid: "748fd679-d983-4d73-8d7b-7bb4abd22254",
                            text: "Laravel 7",
                        },
                        {
                            uuid: "f1864724-1009-4bed-94a1-3cfe93dfb82a",
                            text: "Laravel 8",
                        },
                    ],
                },
            },
            {
                id: 5,
                type: "checkbox",
                question:
                    "What type of projects do you want to see on my channel built with Laravel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        // {
                        //     uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
                        //     text: "REST API",
                        // },
                        // {
                        //     uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
                        //     text: "E-commerce",
                        // },
                        // {
                        //     uuid: "b5c09733-a49e-460a-ba8a-526863010729",
                        //     text: "Real Estate",
                        // },
                        // {
                        //     uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513",
                        //     text: "All of the above",
                        // },
                    ],
                },
            },
            {
                id: 6,
                type: "text",
                question: "What do you think about TheCodeholic channel?",
                description:
                    "Write your honest opinion. Everything is anonymous.",
                data: {},
            },
        ],
    },
    {
        id: 2,
        title: "Laravel 8",
        slug: "laravel-8",
        status: "draft",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
        description: `Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.`,
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expired_date: "2021-12-31 18:00:00",
        questions: [],
    },
    {
        id: 2,
        id: 3,
        title: "Vue 3",
        slug: "vue-3",
        status: "active",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
        description: `Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.`,
        created_at: "2021-12-21 17:00:00",
        updated_at: "2021-12-21 17:00:00",
        expired_date: "2021-12-31 00:00:00",
        questions: [],
    },
    {
        id: 3,
        id: 4,
        title: "Tailwind 3",
        slug: "tailwind-3",
        status: "active",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
        description: `A utility-first CSS framework packed with classes like <code>flex</code>, <code>pt-4</code>, <code>text-center</code> and <code>rotate-90</code> that can be composed to build any design, directly in your markup.`,
        created_at: "2021-12-21 14:00:00",
        updated_at: "2021-12-21 14:00:00",
        expired_date: "2021-12-31 00:00:00",
        questions: [],
    },
];
const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        dashboard: {
            loading: false,
            data: {},
        },
        surveys: {
            loading: false,
            links: [],
            data: [],
        },
        currentSurvey: {
            loading: false,
            data: {},
        },
        questionTypes: ["text", "select", "radio", "textarea", "checkbox"],
        notification: {
            show: false,
            type: null,
            message: null,
        },
    },

    getters: {},
    mutations: {
        saveSurvey: (state, survey) => {
            // console.log(survey);

            state.surveys = [...state.surveys, survey.data];
        },
        updateSurvey: (state, survey) => {
            state.surveys = state.surveys.map((s) => {
                if (s.id == survey.data.id) {
                    return survey.data;
                }
                return s;
            });
        },
        setDashboardLoading(state, isLoading) {
            state.dashboard.loading = isLoading;
        },
        setDashboardData(state, data) {
            state.dashboard.data = data;
        },
        setSurveys(state, surveys) {
            state.surveys.data = surveys.data;
            state.surveys.links = surveys.meta.links;
        },
        setSurveysLoading(state, isLoading) {
            state.surveys.loading = isLoading;
        },
        setCurrentSurvey: (state, survey) => {
            state.currentSurvey.data = survey.data;
        },
        setCurrentSurveyLoading: (state, isLoading) => {
            state.currentSurvey.loading = isLoading;
        },
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem("TOKEN");
        },
        setUser: (state, userData) => {
            state.user.data = userData.user;
            state.user.token = userData.token;
            sessionStorage.setItem("TOKEN", userData.token);
        },
        notify(state, { type, message }) {
            state.notification.type = type;
            state.notification.message = message;
            state.notification.show = true;

            setTimeout(() => {
                state.notification.show = false;
            }, 3000);
        },
    },
    actions: {
        register({ commit }, user) {
            // return fetch("http://127.0.0.1:8000/api/register", {
            //     headers: {
            //         "Content-Type": "application/json",
            //         Accept: "application/json",
            //     },
            //     method: "POST",
            //     body: JSON.stringify(user),
            // })
            //     .then((res) => res.json())
            //     .then((res) => {
            //         commit("setUser", res);
            //         return res;
            //     })
            //     .catch((err) => {
            //         return err;
            //     });

            return axiosClient.post("/register", user).then(({ data }) => {
                commit("setUser", data);
                return data;
            });
        },
        login({ commit }, user) {
            //method 1
            // return fetch("http://127.0.0.1:8000/api/login", {
            //     headers: {
            //         "Content-Type": "application/json",
            //         Accept: "application/json",
            //     },
            //     method: "POST",
            //     body: JSON.stringify(user),
            // })
            //     .then((res) => res.json())
            //     .then((res) => {
            //         commit("setUser", res);
            //         return res;
            //     });

            //method 2
            // return axios
            //     .post("http://127.0.0.1:8000/api/login", user)
            //     .then((res) => {
            //         commit("setUser", res);
            //         return res;
            //     });

            //method 3
            return axiosClient.post("/login", user).then(({ data }) => {
                commit("setUser", data);
                return data;
            });
        },
        logout({ commit }) {
            return axiosClient.post("/logout").then((res) => {
                commit("logout");
                return res;
            });
        },
        saveSurvey({ commit }, survey) {
            let response;
            delete survey.image_url;
            if (survey.id) {
                console.log("updated");
                response = axiosClient
                    .put(`/surveys/${survey.id}`, survey)
                    .then((res) => {
                        // console.log(res);
                        commit("setCurrentSurvey", res.data);
                        // commit("updateSurvey", res.data);
                        return res;
                    });
            } else {
                console.log("created");
                response = axiosClient.post("/surveys", survey).then((res) => {
                    // console.log(res);
                    commit("setCurrentSurvey", res.data);
                    // commit("saveSurvey", res.data);
                    return res;
                });
            }
            return response;
        },
        getDashboardData({ commit }) {
            commit("setDashboardLoading", true);
            return axiosClient
                .get("/dashboard")
                .then((res) => {
                    commit("setDashboardLoading", false);
                    commit("setDashboardData", res.data);
                    return res;
                })
                .catch((err) => {
                    commit("setDashboardLoading", false);
                    throw err;
                });
        },
        getSurveys({ commit }, { url = null } = {}) {
            url = url || "/surveys";
            commit("setSurveysLoading", true);
            return axiosClient
                .get(url)
                .then((res) => {
                    commit("setSurveysLoading", false);
                    commit("setSurveys", res.data);
                    return res;
                })
                .catch((err) => {
                    throw err;
                });
        },
        getSurvey({ commit }, id) {
            commit("setCurrentSurveyLoading", true);
            return axiosClient
                .get(`/surveys/${id}`)
                .then((res) => {
                    commit("setCurrentSurvey", res.data);
                    commit("setCurrentSurveyLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setCurrentSurveyLoading", false);
                    throw err;
                });
        },
        deleteSurvey({ commit }, id) {
            return axiosClient.delete(`/surveys/${id}`);
        },
        getSurveyBySlug({ commit }, slug) {
            commit("setCurrentSurveyLoading", true);
            return axiosClient
                .get(`/survey-by-slug/${slug}`)
                .then((res) => {
                    commit("setCurrentSurvey", res.data);
                    commit("setCurrentSurveyLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setCurrentSurveyLoading", false);
                    throw err;
                });
        },
        saveSurveyAnswer({ commit }, { surveyId, answers }) {
            return axiosClient.post(`/survey/${surveyId}/answer`, {
                answers,
            });
            // .then((res) => {
            //     // commit('setSurveyAnswer',res.data)
            //     return res;
            // })
            // .catch((err) => {
            //     throw err;
            // });
        },
    },
    modules: {},
});
export default store;
