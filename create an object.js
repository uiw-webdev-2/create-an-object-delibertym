/**
 * Create a class for the Backpack object type.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
 import Dorm from "./dorm.js";

 const Land = new Dorm(
   "White",
   20,
   30,
   "Marble"
 );
 
 const content = `
  <main>
    <article>
      <h1>House</h1>
      <ul>
        <li>Color:${Land.color}</li>
        <li>Height:${Land.height}</li>
        <li>Width:${Land.width}</li>
        <li>Material:${Land.material}</li>
      </ul>
    </article>
  </main>`;
 
 document.body.innerHTML = content;