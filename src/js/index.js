"use strict";

import UI from "./modules/ui";
import POST from "./modules/POSTMethod";
import GET from "./modules/GETMethod";
import PATCH from "./modules/PATCHMethod";
import DELETE from "./modules/DELETEMethod";
import COMPLETE from "./modules/complete";
import FILTER from "./modules/FILTER";
import SELECT from "./modules/SELECT";
import DELETED from "./modules/DELETED";

async function engine () {
	const url = "http://localhost:8888/todos";

	UI.start();

	const { form, screenInput } = UI;

	await POST(form, screenInput, url);
	await GET(UI, url);
	await SELECT(PATCH, DELETE, COMPLETE, url, UI);
	await FILTER(
		document.querySelectorAll("[data-filter]"),
		url,
		UI,
		PATCH, 
		DELETE, 
		COMPLETE,
	);
	await DELETED(document.querySelector(".deleted"), UI, url, PATCH, DELETE, COMPLETE);
}

engine();