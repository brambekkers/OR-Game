export default {
    state: {
        gameStarted: false
    },
    getters: {
        gameStarted(s) {
            return s.gameStarted;
        }
    },
    mutations: {
        gameStarted(s, val) {
            return (s.gameStarted = val);
        }
    },
    actions: {}
};
