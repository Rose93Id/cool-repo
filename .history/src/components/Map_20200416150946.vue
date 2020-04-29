<template>
    <div></div>
</template>

<script>
import ArcGISMap from 'esri/Map';
import MapView from 'esri/views/MapView';

export default {
    name: 'web-map',
    mounted() {
      const map = new ArcGISMap({
        basemap: 'topo-vector'
      });
      this.view = new MapView({
        container: this.$el,
        map: map,
        center: [-118, 34],
        zoom: 8
      });
    },
    beforeDestroy() {
      // destroy the map view
      if (this.view) {
        this.view.container = null;
      }
    }
};
</script>

<style lang="scss" scoped>
div {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}
</style>