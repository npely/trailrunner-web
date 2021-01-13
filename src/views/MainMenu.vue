<template>
  <v-container id="mainMenu" class="message">
    <v-row>
      <button @click="$router.push('level')" class="menu-button">
        New Game
      </button>
    </v-row>
    <v-row>
      <button type="submit" class="menu-button">Load Game</button>
    </v-row>
    <v-row>
      <button @click="$router.push('about')" class="menu-button">
        About Game
      </button>
    </v-row>
    <v-row>
      <button @click="$router.push('sandbox')" class="menu-button">
        Sandbox
      </button>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MainMenu"
};
</script>

<style>
@media (max-width: 800px) {
  .menu-button {
    border: none;
    background: none;
    font-size: 40px;
    margin: auto;
    padding-bottom: 20px;
    width: 100%;
    text-align: center;
    font-family: "Press Start P2";
    color: firebrick;
    transform: perspective(200px) rotateX(10deg);
    letter-spacing: 0.1em;
    user-select: none;
    text-shadow: 0 -1px 0 #000, 0 1px 0 #8f130d, 0 2px 0 #750f0b,
      0 3px 0 #630d09, 0 4px 0 #540b08, 0 5px 0 #470906, 0 6px 0 #330704,
      0 7px 0 #240502;

    transition: text-shadow 0.2s ease 0.2s, transform 0.2s ease 0.2s,
      letter-spacing 0.3s ease 0.3s;
  }
}
</style>
