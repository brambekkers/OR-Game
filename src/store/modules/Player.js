const stepSound = new Audio(require("@/assets/sounds/step.ogg"));

export default {
    state: {
        playerPos: 0,
        tries: 0,
        score: 0,
        name: ""
    },
    getters: {
        playerPos(s) {
            return s.playerPos;
        },
        tries(s) {
            return s.tries;
        },
        score(s) {
            return s.score;
        },
        name(s) {
            return s.name;
        }
    },
    mutations: {
        playerPos(s, val) {
            s.playerPos = val;
        },
        addPlayerPos(s) {
            s.playerPos++;
        },
        addTrie(s) {
            s.tries++;
        },
        score(s, val) {
            s.score = val;
        },
        name(s, val) {
            s.name = val;
        }
    },
    actions: {
        async movePlayer({ getters, dispatch, commit }, num) {
            for (let i = 0; i < num; i++) {
                await dispatch("makeStep");

                // If player is finished
                if (getters.playerPos >= 35) {
                    commit("playerPos", 35);
                    dispatch("playerWins");
                    break;
                }
            }
        },
        makeStep({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit("addPlayerPos");
                    stepSound.play();
                    resolve();
                }, 300);
            });
        },
        async playerWins({ getters, commit, dispatch }) {
            commit("gameFinished", true);
            commit("score", await dispatch("calculateScore"));
            dispatch("submitScore", { score: getters.score, name: getters.name });
        }
    }
};
