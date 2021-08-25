"use strict";

import MooSick from "../dist/index.js";


async function test() {
    const api = new MooSick.MooSick();
    await api.initialize();
}

test()



// * keeps the scripts alive
setInterval(function () {
	console.log("timer that keeps nodejs processing running");
}, 1000 * 60 * 60);
