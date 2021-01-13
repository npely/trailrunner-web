<template>
  <v-container id="game-container">
    <v-row id="nav-button-group">
      <img src="@/assets/images/Logo.png" id="level-logo" />
      <v-btn
        text
        x-large
        class="nav-button"
        @click="saveGame()"
        data-toggle="tooltip"
        title="Save the game"
      >
        &#x1F4BE;
      </v-btn>
      <v-btn
        text
        x-large
        id="hardcore-button"
        class="nav-button"
        data-toggle="tooltip"
        title="Change the difficulty"
        @click="hardcoreModeToggle()"
      >
        &#x1f47c;
      </v-btn>
      <v-btn
        text
        x-large
        class="nav-button"
        @click="$router.push('/')"
        data-toggle="tooltip"
        title="Go back to main menu"
      >
        &#x1F6AA;
      </v-btn>
    </v-row>
    <LevelMap></LevelMap>
    <v-container id="move-button-group">
      <v-row>
        <v-btn text class="move-button white--text" @click="walk('up')">
          &#x2191;
        </v-btn>
      </v-row>
      <v-row id="lower-move-buttons">
        <v-btn text class="move-button white--text" @click="walk('left')">
          &#x2190;
        </v-btn>
        <v-btn text class="move-button white--text" @click="walk('down')">
          &#x2193;
        </v-btn>
        <v-btn text class="move-button white--text" @click="walk('right')">
          &#x2192;
        </v-btn>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import LevelMap from "@/components/LevelMap";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TrailRunner",
  components: { LevelMap },
  methods: {
    ...mapActions(["makeMove", "switchHardcoreMode", "saveGame"]),
    walk: function(moveDirection) {
      this.makeMove({ moveDirection });
    },
    hardcoreModeToggle: function() {
      this.switchHardcoreMode();
      let hardcoreButton = document.getElementById("hardcore-button");
      if (this.hardcoreMode.hardcoreMode) {
        hardcoreButton.innerHTML = String.fromCodePoint(parseInt("128128"));
      } else {
        hardcoreButton.innerHTML = String.fromCodePoint(parseInt("128124"));
      }
    },
    saveGame: function() {
      this.saveGame();
    }
  },
  computed: {
    ...mapGetters(["hardcoreMode"])
  }
};
</script>

<style scoped>
#game-container {
  padding-top: 200px;
}

#level-logo {
  width: 32px;
  height: 32px;
  margin-top: 13px;
  margin-right: 30px;
}

#nav-button-group {
  padding-bottom: 10px;
}

.nav-button {
  background: none;
  border: none;
  color: white;
  font-size: 50px;
  margin-right: 70px;
}

.nav-button:hover {
  transform: translate(0px, 1px);
}

.nav-button:focus {
  outline: none;
}

#lower-move-buttons {
  padding-top: 15px;
}

.move-button {
  color: white;
  border: 3px solid white;
  text-shadow: none;
  font-size: 30px;
  backgroundcolor: rgba(34, 34, 64, 0.75);
  text-align: center;
  width: fit-content;
  text-shadow: 0 -1px 0 #000, 0 1px 0 #999999, 0 2px 0 #888888, 0 3px 0 #777777,
    0 4px 0 #666666;
}

.move-button:hover {
  transform: translate(0px, 5px);
}

#move-button-group {
  text-align: center;
  font-family: "Press Start P2", serif;
  padding-top: 30px;
  margin: auto;
}

.v-btn.v-size--x-large {
  font-size: 2rem;
}

@media (max-width: 1330px) {
  .move-button {
    font-size: 20px;
  }

  .nav-button {
    font-size: 15px;
  }
}

@media (max-width: 800px) {
  .move-button {
    font-size: 10px;
    border: 2px solid white;
  }

  #move-button-group {
    text-align: center;
    font-family: "Press Start P2", serif;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: auto;
  }

  .nav-button {
    font-size: 10px;
  }
}
</style>
