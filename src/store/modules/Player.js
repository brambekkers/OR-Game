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
        removePlayerPos(s) {
            s.playerPos--;
        },
        addTrie(s) {
            s.tries++;
        },
        addTries(s, val) {
            s.tries += val;
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
            if (num > 0) {
                for (let i = 0; i < num; i++) {
                    await dispatch("makeStep");

                    // If player is finished
                    if (getters.playerPos >= 35) {
                        commit("playerPos", 35);
                        dispatch("playerWins");
                        break;
                    }
                }
            } else {
                console.log(num);
                for (let i = 0; i > num; i--) {
                    await dispatch("removeStep");
                }
            }
            // After roll is complete
            setTimeout(() => {
                commit("actionPanel", true);
            }, 1000);
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
        removeStep({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit("removePlayerPos");
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
