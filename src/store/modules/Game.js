export default {
    state: {
        gameStarted: false,
        actionPanel: false,
        highscorePanel: false,
        gameFinished: false,
        overviewPanel: false,
        startTime: null,
        finishTime: null,
        scores: []
    },
    getters: {
        gameStarted(s) {
            return s.gameStarted;
        },
        gameFinished(s) {
            return s.gameFinished;
        },
        actionPanel(s) {
            return s.actionPanel;
        },
        highscorePanel(s) {
            return s.highscorePanel;
        },
        overviewPanel(s) {
            return s.overviewPanel;
        },
        startTime(s) {
            return s.startTime;
        },
        finishTime(s) {
            return s.finishTime;
        },
        scores(s) {
            return s.scores;
        }
    },
    mutations: {
        gameStarted(s, val) {
            s.gameStarted = val;
            s.startTime = new Date();
        },
        gameFinished(s, val) {
            s.gameFinished = val;
            s.finishTime = new Date();
        },
        actionPanel(s, val) {
            s.actionPanel = val;
        },
        highscorePanel(s, val) {
            s.highscorePanel = val;
        },
        overviewPanel(s, val) {
            s.overviewPanel = val;
        }
    },
    actions: {
        calculateScore({ getters }) {
            const timeDiff = (getters.finishTime - getters.startTime) / 1000;
            const timeScore = 1 / timeDiff;
            const trieScore = 1 / getters.tries;
            return Math.round(10000 * ((trieScore + timeScore) / 2));
        },
        submitScore({ getters }, { score, name }) {
            const uid = getters?.user?.uid;
            if (uid) {
                getters.db.collection(`scores`).add({
                    score,
                    name,
                    uid
                });
            }
        },
        scoresWatcher({ getters, state }) {
            getters.db.collection("scores").onSnapshot((querySnapshot) => {
                state.scores = [];
                querySnapshot.forEach((doc) => {
                    state.scores.push(doc.data());
                });
            });
        },
        resetGame({ state, commit }) {
            state.actionPanel = false;
            state.highscorePanel = false;
            state.gameStarted = false;
            state.gameFinished = false;
            state.startTime = null;
            state.finishTime = null;
            state.score = 0;
            commit("playerPos", 0);
        }
    }
};
