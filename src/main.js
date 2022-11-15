import { setupZoo } from "./js/setupZoo";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1>Zoo</h1>
  <div class="zoo">
    <h2>Make your favorite animal speak!</h2>

    <label for="phrase">
      Phrase:
      <input type="text" id="phrase" name="phrase" placeholder="Set a phrase" />
    </label>

    <ul class="zoo-list">
      <li data-id="wookie" data-type="animal">
        <img src="/animals/chewie.png" alt="lion" width="70px" height="70px" />
        <h3>Wookie</h3>
      </li>
      <li data-id="lion" data-type="animal">
        <img src="/animals/lion.png" alt="lion" width="70px" height="70px" />
        <h3>Lion</h3>
      </li>
      <li data-id="snake" data-type="animal">
        <img src="/animals/snake.png" alt="lion" width="70px" height="70px" />
        <h3>Snake</h3>
      </li>
      <li data-id="tiger" data-type="animal">
        <img src="/animals/tiger.png" alt="lion" width="70px" height="70px" />
        <h3>Tiger</h3>
      </li>
      <li data-id="elephant" data-type="animal">
        <img src="/animals/elephant.png" alt="lion" width="70px" height="70px" />
        <h3>Elephant</h3>
      </li>
      <li data-id="wolf" data-type="animal">
        <img src="/animals/wolf.png" alt="lion" width="70px" height="70px" />
        <h3>Wolf</h3>
      </li>
    </ul>
    <div class="phrase hidden" id="phrase-output">
      <h3 id="animal-selected"></h3>
      <h4 id="phrase-spoken"></h4>
    </div>
  </div>
`;

setupZoo({
  $phrase: document.querySelector("#phrase"),
  $animals: document.querySelectorAll("[data-type='animal']"),
  $outputContainer: document.querySelector("#phrase-output"),
  $animalSelected: document.querySelector("#animal-selected"),
  $phraseSpoken: document.querySelector("#phrase-spoken"),
});
