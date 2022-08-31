<template>
  <v-card
    class="quick-adjust"
  >
    <v-card-text>
      <h3 class="mb-3 fs--23 fw--500">
        Quick Adjust
      </h3>
      <v-row
        align="center"
        no-gutters
      >
        <v-col
          cols="5"
          md="4"
          xl="3"
        >
          <span class="fs--14 fw--500">Stickiness:</span>
        </v-col>
        <v-col
          cols="7"
          md="8"
          xl="9"
        >
          <v-slider
            v-model="stickiness"
            color="pink"
            :min="0"
            :max="100"
            thumb-label
            hide-details
          >
            <template #thumb-label>
              <span class="px-2">{{ stickiness }}%</span>
            </template>
          </v-slider>
        </v-col>
        <v-col
          cols="5"
          md="4"
          xl="3"
          class="mt-3 mb-3"
        >
          <span class="fs--14 fw--500">Volume:</span>
        </v-col>
        <v-col
          cols="7"
          md="8"
          xl="9"
          class="mt-3 mb-3"
        >
          <v-slider
            v-model="volume"
            :min="0"
            :max="100"
            thumb-label
            color="pink"
            hide-details
          >
            <template #thumb-label>
              <span class="px-2">{{ volume }}%</span>
            </template>
          </v-slider>
        </v-col>
        <v-col
          cols="5"
          md="4"
          xl="3"
        >
          <span class="fs--14 fw--500">Bits: </span>
        </v-col>
        <v-col
          cols="7"
          md="8"
          xl="9"
          class="pl-2"
        >
          <v-menu
            offset-y
            class="bits-btn"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="secondary"
                class="px-0"
                small
                dark
                v-bind="attrs"
                v-on="on"
              >
                <template #default>
                  <div class="d-flex align-center">
                    <span class="px-10 px-lg-5 px-xl-10">{{ bits }}</span>
                    <v-divider
                      vertical
                      class="mx-2"
                    ></v-divider>
                    <v-icon class="mr-2">
                      {{ arrow }}
                    </v-icon>
                  </div>
                </template>
              </v-btn>
            </template>
            <v-list
              dense
              color="purple"
              class="bits-dropdown"
            >
              <v-list-item
                v-for="bit in bitList"
                :key="bit"
                @click="bits = bit"
              >
                {{ bit }}
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- <v-btn
            color="secondary"
            class="bits-btn px-0"
            dark
            small
            depressed
            @click="dropdown = !dropdown"
          >
            <template #default>
              <div class="d-flex align-center">
                <span class="px-10">{{ bits }}</span>
                <v-divider
                  vertical
                  class="mx-2"
                ></v-divider>
                <v-icon class="mr-2">
                  {{ arrow }}
                </v-icon>
              </div>

              <div
                v-if="dropdown"
                class="bits-dropdown purple"
              >
                <v-list dense>
                  <v-list-item
                    v-for="bit in bitList"
                    :key="bit"
                    @click="bits = bit"
                  >
                    {{ bit }}
                  </v-list-item>
                </v-list>
              </div>
            </template>
          </v-btn> -->
        </v-col>
      </v-row>
      <v-row
        class="mt-9"
        no-gutters
      >
        <v-col
          cols="12"
          sm="4"
        >
          <v-btn
            depressed
            color="pink"
            block
            class="grid-btn"
          >
            <span>Apply</span>
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          class="px-sm-2 my-2 my-sm-0"
        >
          <v-btn
            depressed
            color="pink"
            block
            outlined
            class="grid-btn"
          >
            Enable All
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          class=""
        >
          <v-btn
            depressed
            color="pink"
            block
            outlined
            class="grid-btn"
          >
            Disable All
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiChevronDown } from '@mdi/js'

export default {
  data() {
    return {
      arrow: mdiChevronDown,
      stickiness: 50,
      volume: 50,
      bits: 100,
      dropdown: false,
      bitList: [],
    }
  },

  created() {
    this.bitList = []
    for (let i = 5; i <= 10000; i += 20) {
      this.bitList.push(i)
    }
  },
}
</script>

<style scoped>
.quick-adjust {
  min-height: 280px !important;
}
@media screen and (max-width: 1364px) and (min-width: 1264px) {
  .quick-adjust {
    min-height: 290px !important;
  }
}

@media screen and (max-width: 978px) and (min-width: 960px) {
  .quick-adjust {
    min-height: 290px !important;
  }
}

.bits-btn {
  position: relative;
}

.bits-dropdown {
  height: 200px;
  overflow-y: scroll;
}
</style>
