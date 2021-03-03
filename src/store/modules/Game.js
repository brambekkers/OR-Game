export default {
    state: {
        gameStarted: false,
        actionPanel: false,
        gameFinished: false,
        startTime: null,
        finishTime: null
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
        startTime(s) {
            return s.startTime;
        },
        finishTime(s) {
            return s.finishTime;
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
        }
    },
    actions: {
        calculateScore({ getters }) {
            const timeDiff = (getters.finishTime - getters.startTime) / 1000;
            const timeScore = 1 / timeDiff;
            const trieScore = 1 / getters.tries;
            console.log("timeScore", timeScore);
            console.log("trieScore", trieScore);
            return Math.round(10000 * ((trieScore + timeScore) / 2));
        }
    }
};
