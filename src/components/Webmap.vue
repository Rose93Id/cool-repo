<template>
  <div>
    <div id="info">
      <span id="name"></span>
      <br />
      <span id="population"></span>
    </div>
  </div>
</template>

<script>
import { loadModules } from "esri-loader";

export default {
  name: "Webmap",
  mounted() {
    this.loadMap();
  },
  methods: {
    loadMap() {
      let that = this;
      // lazy load the required ArcGIS API for JavaScript modules and CSS
      loadModules(
        ["esri/WebMap", "esri/views/MapView", "esri/layers/FeatureLayer"],
        {
          css: true
        }
      ).then(([WebMap, MapView, FeatureLayer]) => {
        const popLayer = new FeatureLayer({
          url:
            "http://services1.arcgis.com/fmHX9ccIIF8PZl0H/arcgis/rest/services/Australia_Population/FeatureServer/0",
          outFields: ["*"]
        });
        const map = new WebMap({
          portalItem: {
            id: "ff9d44d201ff4ad48e90871ba4ad6f55"
          },
          layers: [popLayer]
        });
        const view = new MapView({
          container: this.$el,
          map: map,
          zoom: 4,
          highlightOptions: {
            color: "red"
          }
        });
        view.ui.add("info", "top-right");
        // add highlight on mouse hover******************************************
        view
          .when()
          .then(function() {
            return popLayer.when();
          })
          .then(function(layer) {
            //  const renderer = layer.renderer.clone();
            //renderer.symbol.width = 4;
            // renderer.symbol.color = [128, 128, 128, 0.8];
            // layer.renderer = renderer;

            // Set up an event handler for pointer-down (mobile)
            // and pointer-move events (mouse)
            // and retrieve the screen x, y coordinates

            return view.whenLayerView(layer);
          })
          .then(function(layerView) {
            view.on("pointer-move", eventHandler);
            view.on("pointer-down", eventHandler);

            let highlight, currentPop, currentName;

            function eventHandler(event) {
              // the hitTest() checks to see if any graphics in the view
              // intersect the x, y coordinates of the pointer
              view.hitTest(event).then(getGraphics);
            }

            function getGraphics(response) {
              // the topmost graphic from the popLayer
              // and display select attribute values from the
              // graphic to the user
              if (response.results.length) {
                const graphic = response.results.filter(function(result) {
                  return result.graphic.layer === popLayer;
                })[0].graphic;

                const attributes = graphic.attributes;
                const name = attributes.STE_NAME;
                const population = attributes.POP;

                if (
                  highlight &&
                  (currentName !== name || currentPop !== population)
                ) {
                  highlight.remove();
                  highlight = null;
                  return;
                }

                if (highlight) {
                  return;
                }

                document.getElementById("info").style.visibility = "visible";
                document.getElementById("name").innerHTML = name;
                document.getElementById("population").innerHTML =
                  "Population:" + population;

                // highlight all features belonging to the same hurricane as the feature
                // returned from the hitTest
                const query = layerView.createQuery();
                query.where =
                  "POP = " + population + " AND STE_NAME = '" + name + "'";
                layerView.queryObjectIds(query).then(function(ids) {
                  if (highlight) {
                    highlight.remove();
                  }
                  highlight = layerView.highlight(ids);
                  currentName = name;
                  that.$store.dispatch("setName", name);
                  currentPop = population;
                  that.$store.dispatch("setPop", population);
                });
              } else {
                // remove the highlight if no features are
                // returned from the hitTest
                if (highlight) {
                  highlight.remove();
                  highlight = null;
                }
                document.getElementById("info").style.visibility = "hidden";
              }
            }
          });
      });
    }
  },

  beforeDestroy() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }
};
</script>

<style scoped>
div {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#info {
  background-color: black;
  opacity: 0.75;
  color: orange;
  font-size: 18pt;
  padding: 8px;
  visibility: hidden;
}
</style>
