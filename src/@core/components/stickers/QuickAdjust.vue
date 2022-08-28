<template>
  <v-card min-height="280">
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
            :max="10000"
            thumb-label
            hide-details
          ></v-slider>
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
            :max="10000"
            thumb-label
            color="pink"
            hide-details
          ></v-slider>
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
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="secondary"
                dark
                v-bind="attrs"
                class="px-5 px-sm-15"
                small
                v-on="on"
              >
                {{ bits }} <v-icon>{{ arrow }}</v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item
                v-for="item in bitList"
                :key="item"
                @click="bits = item"
              >
                <v-list-item-title>
                  {{ item }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
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
      bitList: [100, 150],
    }
  },
}
</script>
