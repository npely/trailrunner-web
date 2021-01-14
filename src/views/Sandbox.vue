<template>
  <v-container id="sandbox-container">
    <div class="row">
      <div class="col-6">
        <div class="v-container" align="right">
          <div id="field-selector">
            <v-row id="nav-button-group">
              <img src="@/assets/images/Logo.png" id="level-logo" />
              <v-btn
                text
                x-large
                class="nav-button"
                data-toggle="tooltip"
                @click="saveCustomLevel()"
                title="Save your level"
              >
                &#x1F4BE;
              </v-btn>
              <v-btn
                text
                x-large
                class="nav-button green--text"
                id="play-button"
                data-toggle="tooltip"
                @click="playCustomLevel()"
                title="Play your level"
              >
                &#x25B6;
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
            <div class="row selector-row">
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ground_1.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ground_2.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ground_3.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ground_4.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ground_5.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
            </div>
            <div class="row selector-row">
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ice_1.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ice_2.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ice_3.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ice_4.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ice_5.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
            </div>
            <div class="row selector-row">
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Snow_1.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Snow_2.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Snow_3.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ice_0.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ground_0.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
            </div>
            <div class="row selector-row">
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Wall.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Door_-10.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ground_1_P.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ice_1_P.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Snow_1_P.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="v-container">
          <div id="sandbox-map"></div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Sandbox",
  methods: {
    ...mapActions(["postCustomGame"]),
    playCustomLevel: function() {
      let type = "Wall";
      let value = -99;
      let pXPos = 0;
      let pYPos = 0;
      let dXPos = 0;
      let dYPos = 0;

      let fields = [];

      for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
          let kids = document.getElementById(`imgHolder-${x}${y}`).children;
          let image = kids[0];
          let uri = image.src.toString().split("/");
          let source = uri[uri.length - 1];
          let name = source.split(".");
          let params = name[0].split("_");
          if (params.length > 1) {
            type = params[0];
            console.log(type);
            value = parseInt(params[1]);
            console.log(value);
            if (type === "Door") {
              dXPos = x;
              dYPos = y;
            }
          } else {
            type = "Wall";
            value = -99;
          }
          fields.push({
            fieldvalue: value,
            fieldtype: type,
            fog: false
          });
          if (params.length > 2) {
            pXPos = y;
            pYPos = x;
          }
        }
      }
      let levelObj = {
        name: "CustomLevel",
        size: 10,
        PxPos: pXPos,
        PyPos: pYPos,
        DxPos: dXPos,
        DyPos: dYPos,
        WxPos: dXPos,
        WyPos: dYPos + 1
      };
      let level = {
        level: levelObj,
        fields: fields
      };
      console.log("THIS IS THE LEVEL");
      console.log(level);
      this.postCustomGame({ level });
    },
    saveCustomLevel: function() {},
    allowDrop: function(ev) {
      ev.preventDefault();
    },
    drag: function(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    },
    drop: function(ev) {
      ev.preventDefault();
      console.log(ev);
      let data = ev.dataTransfer.getData("text");
      console.log(data);
      let target = ev.target;
      let parent = ev.target.parentNode;
      parent.removeChild(target);
      let image = document.createElement("img");
      image.src = data;
      image.classList.add("game-field");
      image.addEventListener("drop", this.drop);
      image.addEventListener("dragover", this.allowDrop);
      parent.appendChild(image);
    }
  },
  computed: {
    ...mapGetters(["levelMap"])
  },
  watch: {
    levelMap: function() {
      this.$router.push("game");
    }
  },
  mounted: function() {
    let parent = document.getElementById("sandbox-map");
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
        let xy = x.toString() + y.toString();
        let imageHolder = document.createElement("div");
        imageHolder.id = "imgHolder-" + xy;
        let image = document.createElement("img");
        image.src = require("@/assets/images/fields/Wall.png");
        image.classList.add("game-field");
        image.id = "img-" + xy;
        image.addEventListener("drop", this.drop);
        image.addEventListener("dragover", this.allowDrop);
        imageHolder.append(image);
        col.append(imageHolder);
      }
    }
  }
};
</script>

<style scoped>
#sandbox-container {
  padding-top: 200px;
}

#level-logo {
  width: 32px;
  height: 32px;
  margin-top: 13px;
  margin-right: 30px;
}

#nav-button-group {
  justify-content: center;
  padding-bottom: 30px;
}

.nav-button {
  background: none;
  border: none;
  color: white;
  font-size: 25px;
}

#play-button {
  padding-top: 10px;
}

.nav-button:hover {
  transform: translate(0px, 1px);
}

.nav-button:focus {
  outline: none;
}

.v-btn.v-size--x-large {
  font-size: 2rem;
}

#sandbox-map {
  margin-right: 300px;
}

@media (max-width: 1330px) {
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
}
</style>
