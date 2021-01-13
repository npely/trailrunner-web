<template>
  <v-container id="level-selection-button-group" class="message">
    <v-row>
      <button
        class="menu-button"
        id="selectLevel1"
        @click="executeFetchLevel(1)"
      >
        Level 1
      </button>
    </v-row>
    <v-row>
      <button
        class="menu-button"
        id="selectLevel2"
        @click="executeFetchLevel(2)"
      >
        Level 2
      </button>
    </v-row>
    <v-row>
      <button
        class="menu-button"
        id="selectLevel3"
        @click="executeFetchLevel(3)"
      >
        Level 3
      </button>
    </v-row>
    <v-row>
      <button
        class="menu-button"
        id="selectLevel4"
        @click="executeFetchLevel(4)"
      >
        Level 4
      </button>
    </v-row>
    <v-row>
      <button
        class="menu-button-blue"
        id="selectLevel5"
        @click="executeFetchLevel(5)"
      >
        Level 5
      </button>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LevelSelection",
  methods: {
    ...mapActions(["fetchLevel"]),
    executeFetchLevel: function(levelId) {
      this.fetchLevel({ levelId });
    }
  },
  computed: {
    ...mapGetters(["levelMap"])
  },
  watch: {
    levelMap: function() {
      this.$router.push("game");
    }
  }
};
</script>

<style scoped></style>
