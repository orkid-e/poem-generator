function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: "15",
        cursor: "",
        pauseFor:(100000),
      });
}

function generatePoem(event) {
    event.preventDefault()

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "4c0ff2fd9eo01d24aa2b0f71ef013t53";
    let context = "You are a poem expert and love to write simple and short poems. Your mission is to generate a 4 line poem in basic HTML, and eperate each line with a <br/>. Do not include a title. Do not include any markdown. Sign the poem at the end with 'SheCodes AI' inside an <em> element. Make sure to follow user instructions.";
    let prompt = `Generate a short romantic poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector ("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="blink"> 🤍 Generating a poem for you... </div>`;

    console.log("Generating poem");
    console.log(`Prompt: $[prompt]`)
    console.log(`Context: $[context]`)

    axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement=addEventListener("submit", generatePoem)