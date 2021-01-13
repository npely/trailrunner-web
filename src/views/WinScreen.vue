<template>
  <div class="container-fluid">
    <div class="message">
      <div id="win-message">
        <p>
          Congrats!<br />
          <br />
          You've found your way
          <br />
          <br />
          out of the dungeon
        </p>
      </div>
    </div>
    <div class="row">
      <button @click="$router.push('/')" id="back-to-main" type="submit">
        Back to Main Menu
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WinScreen"
};
</script>

<style scoped>
#win-message {
  display: block;
  width: auto;
  height: auto;
  text-align: center;
  font-size: 50px;
  font-family: "Press Start P2";
  color: yellow;
  transform: rotateX(4deg);
  letter-spacing: 0.1em;
  user-select: none;
  text-shadow: 0 -1px 0 #cfa60c, 0 1px 0 #ffd230, 0 2px 0 #facc25,
    0 3px 0 #f7c81b, 0 4px 0 #e8bb15, 0 5px 0 #d9af14, 0 6px 0 #d6ac0f,
    0 7px 0 #cfa60c, 0 8px 0 #c7a00c, 0 9px 0 #bf990a, 0 10px 0 #b38f09,
    0 11px 0 #a68408, 0 12px 0 #9e7e08, 0 13px 0 #9e7e08, 0 14px 0 #9e7e08,
    0 15px 0 #9e7e08;

  transition: text-shadow 0.3s ease 0.3s, transform 0.3s ease 0.3s,
    letter-spacing 0.3s ease 0.5s;
}
</style>
