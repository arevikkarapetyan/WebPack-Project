export default async function (PATCH, DELETE, COMPLETE, url, ui) {
	PATCH(
		document.querySelectorAll(".editBtn"),
		document.querySelectorAll(".saveBtn"),
		document.querySelectorAll(".listsBlockItemContent"),
		url
	);
	DELETE(
		document.querySelectorAll(".removeBtn"),
		url,
		ui,
		document.querySelector(".yes"),
		document.querySelector(".no")
	);
	COMPLETE(
		url,
		document.querySelectorAll(".buttons input"),
		document.querySelectorAll(".listsBlockItemContent")
	);
}