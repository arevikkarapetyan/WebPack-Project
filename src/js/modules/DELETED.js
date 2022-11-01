import SELECT from "./SELECT";
export default async function (btn, UI, url,PATCH, DELETE, COMPLETE) {
    return await fetch("http://localhost:8888/history")
        .then(data => data.json())
        .then(data => data.forEach(obj => {
            btn.addEventListener("click", () => {
                UI.listsBlock.innerHTMl = "";
                UI.toHTML(obj.id, obj.title, obj.isComplete);
            });
        })).then(() => SELECT(PATCH, DELETE, COMPLETE, url, UI));
       
}