<template>
  <div class="container-fluid">
    <div class="message">
      <div id="lose-message">
        <p>
          You died!<br />
          <br />
          GAME OVER<br />
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
  name: "LoseScreen"
};
</script>

<style scoped>
#lose-message {
  display: block;
  width: auto;
  height: auto;
  padding: 0;
  text-align: center;
  font-size: 50px;
  font-family: "Press Start P2";
  color: firebrick;
  transform: rotateX(5deg);
  letter-spacing: 0.1em;
  user-select: none;
  text-shadow: 0 -1px 0 #000, 0 1px 0 #8f130d, 0 2px 0 #82110c, 0 3px 0 #7d100b,
    0 4px 0 #750f0b, 0 5px 0 #6e0e0a, 0 6px 0 #630d09, 0 7px 0 #5c0c08,
    0 8px 0 #540b08, 0 9px 0 #4d0a07, 0 10px 0 #470906, 0 11px 0 #3b0805,
    0 12px 0 #330704, 0 13px 0 #290603, 0 14px 0 #240502, 0 15px 0 #1c0402,
    0 22px 30px #450603, 0 22px 30px #450603, 0 22px 15px #450603,
    0 11px 15px #450603, 0 15px 20px #450603, 0 15px 11px #450603,
    0 16px 11px #450603;

  transition: text-shadow 0.3s ease 0.3s, transform 0.3s ease 0.3s,
    letter-spacing 0.3s ease 0.3s;
}
</style>
