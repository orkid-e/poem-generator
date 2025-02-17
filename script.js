function generatePoem(event) {
    event.preventDefault()

    new Typewriter("#poem", {
        strings: ["Poem goes here"],
        autoStart: true,
        delay: "natural",
        cursor: "",
        pauseFor:(100000),
      });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement=addEventListener("submit", generatePoem)