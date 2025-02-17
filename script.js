function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: "15",
        cursor: "",
        pauseFor:(100000),
      });
}

// defining generatePoem
function generatePoem(event) {
    event.preventDefault()

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "4c0ff2fd9eo01d24aa2b0f71ef013t53";
    let context = "You are a creative poem expert and love to write poems. Your mission is to generate a 4 line poem in basic HTML. Seperate each line. Do not include a title. Sign the poem at the end with 'SheCodes AI' inside an <em> element. Do not include any extra characters. Make sure to stick to specific user topic choice.";
    let prompt = `Generate a short poem about ${instructionsInput}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem");
    console.log(`Prompt: $[prompt]`)
    console.log(`Context: $[context]`)

    axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement=addEventListener("submit", generatePoem)