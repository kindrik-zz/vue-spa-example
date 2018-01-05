<template>
  <b-container>
  <b-row>
    <b-col lg="6" class="mb-3">
      <b-input-group>
        <b-input-group-button>
          <b-button>Go!</b-button>
        </b-input-group-button>
        <b-form-input type="text" placeholder="Search for..." />
      </b-input-group>
    </b-col>
    <b-col lg="6" class="mb-3">
      <b-input-group>
        <b-form-input type="text" placeholder="Search for..." />
        <b-input-group-button>
          <b-button>Go!</b-button>
        </b-input-group-button>
      </b-input-group>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="6" class="mb-3">
      <b-input-group>
        <b-input-group-button>
          <b-button variant="success">Love It</b-button>
        </b-input-group-button>
        <b-form-input type="text" placeholder="Product" />
        <b-input-group-button>
          <b-button variant="danger">Hate It</b-button>
        </b-input-group-button>
      </b-input-group>
    </b-col>
    <b-col lg="6" class="mb-3">
      <b-input-group>
        <b-form-input type="text" placeholder="Product" />
        <b-input-group-button>
          <b-button variant="success">Add</b-button>
          <b-button variant="danger">Remove</b-button>
        </b-input-group-button>
      </b-input-group>
    </b-col>
  </b-row>
</b-container>

<!-- input-group-buttons.vue -->
</template>
