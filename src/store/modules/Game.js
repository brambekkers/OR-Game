export default {
    state: {
        gameStarted: false,
        actionPanel: false
    },
    getters: {
        gameStarted(s) {
            return s.gameStarted;
        },
        actionPanel(s) {
            return s.actionPanel;
        }
    },
    mutations: {
        gameStarted(s, val) {
            return s.gameStarted = val;
        },
        actionPanel(s, val) {
            return s.actionPanel = val;
        }
    },
    actions: {}
};
