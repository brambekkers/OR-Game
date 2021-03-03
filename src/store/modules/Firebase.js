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
        firebase: null,
        auth: null,
        db: null,
        storage: null,
        functions: null,
        watchers: []
    },

    getters: {
        watchers: (state) => state.watcher,
        firebase: (state) => state.firebase,
        auth: (state) => state.firebase.auth(),
        db: (state) => state.firebase.firestore(),
        storage: (state) => state.firebase.storage(),
        functions: (state) => state.firebase.functions()
    },

    mutations: {
        firebase: (state, firebase) => (state.firebase = firebase),
        watchers: (state, val) => state.watchers.push(val)
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
            this.dispatch("userWatcher");
        },
        userWatcher({ getters: { auth } }) {
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                    console.log("User signed in");
                } else {
                    console.log("Not signed in");
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
