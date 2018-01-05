<template>
  <b-container fluid>

    <h5 class="my-3">Placement</h5>
    <b-row>
      <b-col md="4" class="py-4 text-center"
           v-for="placement in placements" :key="placement">
        <b-btn :id="'exPopover1-'+placement" variant="primary">
          {{ placement }}
        </b-btn>
        <b-popover :target="'exPopover1-'+placement"
                   :placement="placement"
                   title="Popover!"
                   triggers="hover focus"
                   :content="`Placement ${placement}`">
        </b-popover>
      </b-col>
    </b-row>

    <h5 class="my-3">Content via properties or slots</h5>
    <b-row>
      <b-col md="6" class="py-4 text-center">
        <b-btn id="exPopover2" variant="primary">Using properties</b-btn>
        <b-popover target="exPopover2"
            title="Prop Examples"
            triggers="hover focus"
            content="Embedding content using properties is easy">
        </b-popover>
      </b-col>
      <b-col md="6" class="py-4 text-center">
        <b-btn id="exPopover3" variant="primary">Using slots</b-btn>
        <b-popover target="exPopover3" triggers="hover focus">
           <template slot="title">Content via Slots</template>
           Embedding content <span class="text-danger">using slots</span>
           affords you <em>greater <strong>control.</strong></em> and
           basic HTML support.
        </b-popover>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
  data () {
    return {
      placements: [
        'topright', 'top', 'topleft',
        'bottomright', 'bottom', 'bottomleft',
        'righttop', 'right', 'lefttop',
        'rightbottom', 'left', 'leftbottom'
      ]
    }
  }
}
</script>

<!-- popover-1.vue -->
