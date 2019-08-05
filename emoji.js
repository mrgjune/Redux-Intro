

window.onload = function (evt) {
    const emojiContainer = document.getElementById("emoji");
    console.log(evt)

    const defaultFace = store.getState().mood;
    emojiContainer.innerText =defaultFace
    


    document.querySelector("#happy")
        .addEventListener("click", function () {
            store.dispatch({ type: "HAPPY" });
            const happy = store.getState().mood;
            emojiContainer.innerText = happy;

        });
    document.querySelector("#sad")
        .addEventListener("click", function () {
            store.dispatch({ type: "SAD" });
            const sad = store.getState().mood;
            emojiContainer.innerText = sad;
        });
    document.querySelector("#angry")
        .addEventListener("click", function () {
            store.dispatch({ type: "ANGRY" });
            const angry = store.getState().mood;
            emojiContainer.innerText = angry;
        });

    document.querySelector("#confused")
        .addEventListener("click", function () {
            store.dispatch({ type: "CONFUSED" });
            const confused = store.getState().mood;
            emojiContainer.innerText = confused;
        });

}