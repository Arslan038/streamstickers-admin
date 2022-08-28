<template>
  <v-card
    min-height="280"
    class="character-bg"
  >
    <v-card-text>
      <v-row
        no-gutters
      >
        <v-col
          cols="12"
          lg="8"
        >
          <h3 class="fs--23 fw--500">
            How it works
          </h3>

          <!-- How it works content -->
          <slot name="text" />

          <template v-if="!reward">
            <h3 class="fs--18 fw--500">
              Unlock Slots
            </h3>
            <div class="d-flex justify-space-between mt-2 mb-1">
              <span class="info--text">10</span>
              <span class="info--text">75%</span>
              <span class="textColor--text">15</span>
            </div>
            <v-progress-linear
              v-model="power"
              background-color="purple"
              color="info"
              rounded
              height="18"
            ></v-progress-linear>
            <div class="d-flex justify-center align-center mt-1">
              <span class="pr-2 fs--13 fw--500 grey--text">10.000 / 15.000</span>
              <img
                src="@/assets/images/bits.png"
              />
            </div>
          </template>
        </v-col>
        <v-col
          cols="12"
          lg="4"
          class="d-none d-lg-block"
        >
          <img
            class="character"
            src="@/assets/images/Character.png"
            alt="Character"
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    reward: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      power: 75,
    }
  },
}
</script>

<style scoped>
.character-bg {
  position: relative;
  z-index: 2;
}

.character-bg img.character {
  position: absolute;
  bottom: -18px;
  right: -19px;
  z-index: 1;
}
</style>
