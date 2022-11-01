export default function (removeBtnArray, url, UI) {
	removeBtnArray.forEach(btn => {
		btn.addEventListener("click", (e) => {
			UI.modalWrapper.classList.add("active");
			UI.modalYes.addEventListener("click", async (e) => {
				const fakeID = btn.parentElement.previousElementSibling.firstElementChild.textContent;
				const input = btn.parentElement.previousElementSibling.lastElementChild;
				btn.parentElement.parentElement.remove();
				await fetch(`${url}/${parseInt(fakeID)}`, {
					method: "DELETE"
				});

				await fetch(`http://localhost:8888/history`, {
					method: "POST",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify({ title: input.value })
				});
				
			});
			UI.modalNo.addEventListener("click", () => {
				UI.modalWrapper.classList.remove("active");
			});
		});
	});
}