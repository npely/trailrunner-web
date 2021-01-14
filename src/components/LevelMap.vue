<template>
  <div id="level-map"></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import router from "../router/index";

export default {
  name: "LevelMap",
  methods: {
    ...mapActions(["makeMove"]),
    moveUpdate: function() {
      console.log(this.changedFields);
      let newPlayerField = document.getElementById(
        `col-${this.changedFields.newPlayerY},${this.changedFields.newPlayerX}`
      );
      let oldPlayerField = document.getElementById(
        `col-${this.changedFields.PlayerY},${this.changedFields.PlayerX}`
      );
      let doorFieldCol = document.getElementById(
        `col-${this.changedFields.doorY},${this.changedFields.doorX}`
      );
      if (this.changedFields.newPlayerField.fieldvalue === -1) {
        this.updateField(
          oldPlayerField,
          this.changedFields.playerField.fieldvalue,
          this.changedFields.playerField.fieldtype,
          this.changedFields.playerY.toString() +
            this.changedFields.playerX.toString(),
          false,
          this.changedFields.playerField.fog
        );
        this.updateField(
          newPlayerField,
          this.changedFields.newPlayerField.fieldvalue,
          this.changedFields.newPlayerField.fieldtype,
          this.changedFields.newPlayerY.toString() +
            this.changedFields.newPlayerX.toString(),
          true,
          this.changedFields.playerField.fog
        );
        setTimeout(function() {
          router.push("lose");
        }, 400);
        return null;
      } else if (
        this.changedFields.newPlayerField.fieldvalue === 9 ||
        this.changedFields.newPlayerField.fieldvalue === 19
      ) {
        this.updateField(
          oldPlayerField,
          this.changedFields.playerField.fieldvalue,
          this.changedFields.playerField.fieldtype,
          this.changedFields.playerY.toString() +
            this.changedFields.playerX.toString(),
          false,
          this.changedFields.playerField.fog
        );
        this.updateField(
          doorFieldCol,
          this.changedFields.newPlayerField.fieldvalue,
          "Door",
          this.changedFields.doorY.toString() +
            this.changedFields.doorX.toString(),
          true,
          this.changedFields.newPlayerField.fog
        );
        setTimeout(function() {
          router.push("win");
        }, 400);
        return null;
      } else {
        this.updateField(
          newPlayerField,
          this.changedFields.newPlayerField.fieldvalue,
          this.changedFields.newPlayerField.fieldtype,
          this.changedFields.newPlayerY.toString() +
            this.changedFields.newPlayerX.toString(),
          true,
          this.changedFields.newPlayerField.fog
        );
      }
      this.updateField(
        oldPlayerField,
        this.changedFields.playerField.fieldvalue,
        this.changedFields.playerField.fieldtype,
        this.changedFields.playerY.toString() +
          this.changedFields.playerX.toString(),
        false,
        this.changedFields.playerField.fog
      );
      if (this.changedFields.levelFieldSum === 0) {
        this.updateField(
          doorFieldCol,
          this.changedFields.doorField.fieldvalue,
          this.changedFields.doorField.fieldtype,
          this.changedFields.doorY.toString() +
            this.changedFields.doorX.toString(),
          false,
          false
        );
      } else {
        this.updateField(
          doorFieldCol,
          this.changedFields.doorField.fieldvalue,
          this.changedFields.doorField.fieldtype,
          this.changedFields.doorY.toString() +
            this.changedFields.doorX.toString(),
          false,
          false
        );
      }
      if (this.changedFields.isSliding) {
        this.walk(this.moveDirection);
      }
    },
    walk: function(moveDirection) {
      this.makeMove({ moveDirection });
    },
    updateField: function(
      parent,
      fieldValue,
      fieldType,
      xy,
      isPlayerOnField,
      fog
    ) {
      let image = document.getElementById(`img-${xy}`);
      image.src = require("@/assets/" +
        this.setFieldImage(
          parent,
          fieldValue,
          fieldType,
          isPlayerOnField,
          fog
        ));
    },
    buildField: function(
      parent,
      fieldValue,
      fieldType,
      xy,
      isPlayerOnField,
      fog
    ) {
      let image = document.createElement("img");
      image.src = require("@/assets/" +
        this.setFieldImage(
          parent,
          fieldValue,
          fieldType,
          isPlayerOnField,
          fog
        ));
      image.classList.add("game-field");
      image.id = "img-" + xy;
      parent.append(image);
    },
    setFieldImage: function(
      parent,
      fieldValue,
      fieldType,
      isPlayerOnField,
      fog
    ) {
      let myPicture = "images/fields/";
      if (fieldValue >= -20 && fieldValue <= 20) {
        if (fieldType === "Door" || !isPlayerOnField) {
          if (fog) {
            myPicture += fieldType + "_" + "Fog" + ".png";
          } else {
            myPicture += fieldType + "_" + fieldValue + ".png";
          }
        } else {
          myPicture += fieldType + "_" + fieldValue + "_P.png";
        }
      } else {
        myPicture += "Wall.png";
      }
      return myPicture;
    }
  },
  computed: {
    ...mapGetters(["levelMap", "changedFields", "moveDirection"])
  },
  watch: {
    changedFields: function() {
      this.moveUpdate();
    }
  },
  mounted: function() {
    console.log("IN LEVELMAP NOW");
    console.log(this.levelMap);
    let parent = document.getElementById("level-map");
    for (let x = 0; x < 10; x++) {
      let row = document.createElement("div");
      row.classList.add("row");
      row.classList.add("justify-content-center");
      row.id = "row-" + x.toString();
      parent.append(row);
      for (let y = 0; y < 10; y++) {
        let col = document.createElement("div");
        col.classList.add("col");
        col.classList.add("no-padding");
        col.id = "col-" + x + "," + y;
        row.append(col);
        let field = this.levelMap.fields[x * 10 + y];
        let xy = x.toString() + y.toString();
        this.buildField(
          col,
          field.fieldvalue,
          field.fieldtype,
          xy,
          this.levelMap.level.PxPos === y && this.levelMap.level.PyPos === x,
          field.fog
        );
      }
    }
  }
};
</script>

<style scoped>
.col {
  flex-grow: 0 !important;
}

.game-field {
  width: 55px;
  height: 55px;
}

.no-padding {
  padding: 0 !important;
  margin: 0 !important;
}

.row {
  justify-content: center;
}

@media (max-width: 1330px) {
  .game-field {
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 800px) {
  .game-field {
    width: 30px;
    height: 30px;
  }
}
</style>
