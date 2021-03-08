import firebaseConfig from "@/config/firebaseConfig";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import "firebase/performance";
import "firebase/analytics";

export default {
    state: {
        user: null,
        firebase: null,
        auth: null,
        db: null,
        storage: null,
        functions: null,
        watchers: []
    },

    getters: {
        watchers: (state) => state.watcher,
        user: (state) => state.user,
        firebase: (state) => state.firebase,
        auth: (state) => state.firebase.auth(),
        db: (state) => state.firebase.firestore(),
        storage: (state) => state.firebase.storage(),
        functions: (state) => state.firebase.functions()
    },

    mutations: {
        firebase: (state, firebase) => (state.firebase = firebase),
        watchers: (state, val) => state.watchers.push(val),
        user: (state, val) => (state.user = val)
    },

    actions: {
        async initializeApp({ getters, commit, dispatch }) {
            commit("firebase", await firebase.initializeApp(firebaseConfig));
            dispatch("signIn");
            getters.firebase.performance();
            getters.firebase.analytics();
            return true;
        },
        async signIn({ getters, dispatch }) {
            await getters.firebase.auth().signInAnonymously();
            dispatch("userWatcher");
        },
        userWatcher({ getters: { auth }, commit, dispatch }) {
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                    console.log("User signed in");
                    commit("user", user);
                    dispatch("scoresWatcher");
                } else {
                    console.log("Not signed in");
                    commit("user", null);
                }
            });
        },
        clearWatchers({ state }) {
            for (const watcher of state.watchers) {
                watcher();
            }
            state.watchers = [];
            return true;
        }
    }
};
