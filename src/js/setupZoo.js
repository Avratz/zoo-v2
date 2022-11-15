import { Elephant, Lion, Snake, Tiger, Wolf, Wookie } from "./animals";

/**
 * Summary: This function sets up the zoo, instantiating the animals and adding event listeners to the animals and the phrase input.
 * @param { Object } elements - The elements to be used in the setup.
 * @param { HTMLElement } elements.$phrase Phrase input element
 * @param { NodeList<HTMLElement> } elements.$animals List of animal elements
 * @param { HTMLElement } elements.$outputContainer Container of the output
 * @param { HTMLElement } elements.$animalSelected Element to display the selected animal
 * @param { HTMLElement } elements.$phraseSpoken Element to display the spoken phrase
 */
export function setupZoo({
  $phrase,
  $animals,
  $outputContainer,
  $animalSelected,
  $phraseSpoken,
}) {
  let animals = {
    wookie: new Wookie(),
    lion: new Lion(),
    snake: new Snake(),
    tiger: new Tiger(),
    elephant: new Elephant(),
    wolf: new Wolf(),
  };

  let selectedAnimal, phrase;

  $phrase.addEventListener("keyup", (event) => {
    phrase = event.target.value.trim();
    renderOutput();
  });

  $animals.forEach((element) => {
    element.addEventListener("click", () => {
      $animals.forEach((element) => element.classList.remove("selected"));
      element.classList.add("selected");
      selectedAnimal = animals[element.dataset.id];
      renderOutput();
    });
  });

  function renderOutput() {
    if (selectedAnimal && phrase) {
      $outputContainer.classList.remove("hidden");
      $animalSelected.innerHTML = selectedAnimal.name + " says:";
      $phraseSpoken.innerHTML = selectedAnimal.speak(phrase);
    } else {
      $outputContainer.classList.add("hidden");
    }
  }
}
