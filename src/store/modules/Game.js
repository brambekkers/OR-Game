export default {
    state: {
        throwButton: false,
        gameStarted: false,
        actionPanel: false,
        choosePanel: false,
        chooseAction: null,
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
        throwButtonVal(s) {
            return s.throwButton;
        },
        actionPanel(s) {
            return s.actionPanel;
        },
        choosePanel(s) {
            return s.choosePanel;
        },
        chooseAction(s) {
            return s.chooseAction;
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
        throwButton(s, val) {
            s.throwButton = val;
        },
        actionPanel(s, val) {
            s.actionPanel = val;
        },
        choosePanel(s, val) {
            s.choosePanel = val;
        },
        chooseAction(s, val) {
            s.chooseAction = val;
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
