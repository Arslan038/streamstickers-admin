<template>
  <v-card height="265">
    <v-card-text>
      <h3 class="mb-3">
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
                class="px-15"
                small
                v-on="on"
              >
                {{ bits }}
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
          cols="4"
          class=""
        >
          <v-btn
            depressed
            color="pink"
            block
          >
            <span>Apply</span>
          </v-btn>
        </v-col>
        <v-col
          cols="4"
          class="px-2"
        >
          <v-btn
            depressed
            color="pink"
            block
            outlined
          >
            Enable All
          </v-btn>
        </v-col>
        <v-col
          cols="4"
          class=""
        >
          <v-btn
            depressed
            color="pink"
            block
            outlined
          >
            Disable All
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      stickiness: 50,
      volume: 50,
      bits: 100,
      bitList: [100, 150],
    }
  },
}
</script>
