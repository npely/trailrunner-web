<template>
  <div class="container-fluid">
    <div class="message justify-content-center">
      <div id="Game-Description">
        <fieldset id="Rules">
          <legend>Rules</legend>
          <ul>
            <li>TrailRunner is a logic-based puzzle game.</li>
            <li>The objective is to escape the dungeon without dying.</li>
            <li>
              Each field in the dungeon has a number on it, which represents the
              times you are allowed to step on the specific field.
            </li>
            <li>Every time you leave the field the number decreases.</li>
            <li>
              Once the field reaches 0, it breaks and you are not allowed to
              step back onto it. If you do, you lose.
            </li>
            <li>
              The door to the dungeon only opens once every field is broken, so
              you need to think about every step, to not block your own way and
              still make your way out!
            </li>
            <li>
              Once you walk on a field of ice, you will slide until you reach a
              non-ice field,<br />
              bump against a Wall or die!
            </li>
            <li>
              If hardcore-mode is activated, you can only walk 3 times in a row
              in the same direction,<br />
              otherwise an earthquake will destroy all fields!
            </li>
          </ul>
        </fieldset>
      </div>
    </div>
    <div class="row">
      <button id="back-to-main" @click="$router.push('/')">
        Back to Main Menu
      </button>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#Game-Description {
  color: white;
  font-family: "Press Start P2";
  font-size: 1em;
  width: fit-content;
}

#Rules {
  background: rgba(34, 34, 34, 0.75);
}
</style>
