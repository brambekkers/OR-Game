export default {
    state: {
        playerPos: 0
    },
    getters: {
        playerPos(s) {
            return s.playerPos;
        }
    },
    mutations: {
        addPlayerPos(s) {
            return s.playerPos++;
        }
    },
    actions: {
        async movePlayer({ dispatch }, num) {
            for (let i = 0; i < num; i++) {
                await dispatch("makeStep");
            }
        },
        makeStep({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit("addPlayerPos");
                    resolve();
                }, 300);
            });
        }
    }
};
