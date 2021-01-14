<template>
  <v-app id="app">
    <Header></Header>
    <div id="nav"></div>
    <router-view />
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "../../trailrunner-web/src/components/Footer";
export default {
  components: { Header, Footer }
};
</script>

<style>
@font-face {
  font-family: "Press Start P2";
  font-style: normal;
  font-weight: 600;
  src: url("assets/fonts/PressStart2P-Regular.ttf");
}

/*
    menu-region
 */

.col {
  flex-grow: 0 !important;
}

.menu-button {
  border: none;
  background: none;
  font-size: 50px;
  margin: auto;
  padding-bottom: 20px;
  width: fit-content;
  text-align: center;
  font-family: "Press Start P2";
  color: firebrick;
  transform: perspective(200px) rotateX(10deg);
  letter-spacing: 0.1em;
  user-select: none;
  text-shadow: 0 -1px 0 #000, 0 1px 0 #8f130d, 0 2px 0 #82110c, 0 3px 0 #7d100b,
    0 4px 0 #750f0b, 0 5px 0 #6e0e0a, 0 6px 0 #630d09, 0 7px 0 #5c0c08,
    0 8px 0 #540b08, 0 9px 0 #4d0a07, 0 10px 0 #470906, 0 11px 0 #3b0805,
    0 12px 0 #330704, 0 13px 0 #290603, 0 14px 0 #240502, 0 15px 0 #1c0402;

  transition: text-shadow 0.2s ease 0.2s, transform 0.2s ease 0.2s,
    letter-spacing 0.3s ease 0.3s;
}

.menu-button:hover {
  transition: text-shadow 0.3s ease, transform 0.1s ease,
    letter-spacing 0.1s ease;
  text-shadow: 0 0 0 #5c0c08, 0 1px 0 #540b08, 0 2px 0 #4d0a07,
    0 3px 3px rgba(0, 0, 0, 0.9);
  transform: translate(0px, 15px) perspective(200px) rotateX(10deg);
  letter-spacing: 0.125em;
}

.menu-button:focus {
  outline: none;
}

.menu-button-blue {
  border: none;
  background: none;
  font-size: 50px;
  margin: auto;
  padding-bottom: 20px;
  width: fit-content;
  text-align: center;
  font-family: "Press Start P2";
  color: #c0d4ee;
  transform: perspective(200px) rotateX(10deg);
  letter-spacing: 0.1em;
  user-select: none;
  text-shadow: 0 -1px 0 #000, 0 1px 0 #c0d4ee, 0 2px 0 #99bce9, 0 3px 0 #95baea,
    0 4px 0 #9ebee7, 0 5px 0 #79a5de, 0 6px 0 #6b9ad7, 0 7px 0 #6595d2,
    0 8px 0 #4f82c4, 0 9px 0 #4879b8, 0 10px 0 #3e73b7, 0 11px 0 #2d70b7,
    0 12px 0 #2873ba, 0 13px 0 #1a73ba, 0 14px 0 #1a73ba, 0 15px 0 #0971ba;

  transition: text-shadow 0.2s ease 0.2s, transform 0.2s ease 0.2s,
    letter-spacing 0.3s ease 0.3s;
}

.menu-button-blue:hover {
  transition: text-shadow 0.3s ease, transform 0.1s ease,
    letter-spacing 0.1s ease;
  text-shadow: 0 0 0 #6595d2, 0 1px 0 #4f82c4, 0 2px 0 #4879b8,
    0 3px 3px rgba(0, 0, 0, 0.9);
  transform: translate(0px, 15px) perspective(200px) rotateX(10deg);
  letter-spacing: 0.125em;
}

.menu-button-blue:focus {
  outline: none;
}

.menu-button-white {
  border: none;
  background: none;
  font-size: 50px;
  margin: auto;
  padding-bottom: 20px;
  width: fit-content;
  text-align: center;
  font-family: "Press Start P2";
  color: #ffffff;
  transform: perspective(200px) rotateX(10deg);
  letter-spacing: 0.1em;
  user-select: none;
  text-shadow: 0 -1px 0 #000, 0 1px 0 #ffffff, 0 2px 0 #eaeaea, 0 3px 0 #d7d7d7,
    0 4px 0 #c8c8c8, 0 5px 0 #b3b3b3, 0 6px 0 #a7a7a7, 0 7px 0 #989898,
    0 8px 0 #8d8d8d, 0 9px 0 #808080, 0 10px 0 #6b6b6b, 0 11px 0 #6b6b6b,
    0 12px 0 #626262, 0 13px 0 #535353, 0 14px 0 #454545, 0 15px 0 #3c3c3c;

  transition: text-shadow 0.2s ease 0.2s, transform 0.2s ease 0.2s,
    letter-spacing 0.3s ease 0.3s;
}

.menu-button-white:hover {
  transition: text-shadow 0.3s ease, transform 0.1s ease,
    letter-spacing 0.1s ease;
  text-shadow: 0 0 0 #989898, 0 1px 0 #808080, 0 2px 0 #6b6b6b,
    0 3px 3px rgba(0, 0, 0, 0.9);
  transform: translate(0px, 15px) perspective(200px) rotateX(10deg);
  letter-spacing: 0.125em;
}

.menu-button-white:focus {
  outline: none;
}

/*
    end of menu-region
 */

li {
  margin: 0 0 15px 0;
}

#app {
  background-image: url("assets/images/background.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.control-panel {
  margin-top: 54px;
  float: top;
}

#level-logo {
  width: 30px;
  height: 30px;
}

.game-field {
  width: 55px;
  height: 55px;
}

#field-selector {
  width: 550px;
  height: 550px;
  color: white;
  font-family: "Press Start P2";
  font-size: 0.5em;
  background: rgba(44, 44, 44, 0.75);
}

.selector-row {
  margin-bottom: 25px;
}

#back-to-main {
  color: white;
  text-shadow: none;
  font-size: 30px;
  background: none;
  border: none;
  margin-top: 30px;
  font-family: "Press Start P2";
  text-shadow: 0 -1px 0 #000, 0 1px 0 #999999, 0 2px 0 #777777, 0 3px 0 #555555,
    0 4px 0 #333333;
}

#back-to-main:hover {
  transform: translate(0px, 5px);
}

.no-padding {
  padding: 0 !important;
  margin: 0 !important;
}

.row {
  justify-content: center;
  margin: -7px !important;
}

.message {
  margin-top: 15%;
}

.navbar-inner {
  background: transparent;
}

.sandbox-nav {
  margin-top: 10%;
  margin-left: 10%;
  margin-right: 10%;
  background: black;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

@media (max-width: 1330px) {
  #trailRunner-header {
    font-size: 50px;
  }

  .game-field {
    width: 45px;
    height: 45px;
  }

  #field-selector {
    width: 450px;
    height: 450px;
  }
}

@media (max-width: 800px) {
  #trailRunner-header {
    text-align: center;
    font-size: 35px;
    font-max-size: medium;
    font-min-size: medium;
    font-family: "Press Start P2";
    color: firebrick;
    letter-spacing: 0.1em;
    user-select: none;
    text-shadow: 0 -1px 0 #000, 0 1px 0 #8f130d, 0 2px 0 #7d100b,
      0 3px 0 #6e0e0a, 0 4px 0 #5c0c08, 0 5px 0 #4d0a07, 0 6px 0 #3b0805,
      0 7px 0 #290603, 0 8px 0 #1c0402;
  }

  .game-field {
    width: 30px;
    height: 30px;
  }

  #field-selector {
    width: 300px;
    height: 300px;
  }

  .game-field {
    width: 30px;
    height: 30px;
  }

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
