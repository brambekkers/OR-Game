import { createStore } from "vuex";

// modules
import Game from "./modules/Game";
import Player from "./modules/Player";

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: { Player, Game }
});
