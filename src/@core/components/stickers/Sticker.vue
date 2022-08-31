<template>
  <v-card
    height="460"
  >
    <v-card-text>
      <template v-if="sticker.uploaded && sticker.unlocked">
        <div
          class="sticker-header text-center mb-3"
        >
          <h4 class="fs--18 fw--300">
            Long Sticker
          </h4>
          <h4 class="fs--18 fw--300">
            Name
          </h4>
          <v-icon
            size="36"
            color="grey"
            class="drag-icon"
          >
            {{ drag }}
          </v-icon>
        </div>
        <div class="text-center">
          <img
            width="120"
            src="@/assets/images/boom.png"
          />
        </div>
        <div class="d-flex justify-space-between align-center">
          <span class="fs--14 fw--500 mt-2">
            Enable:
          </span>
          <v-switch
            hide-details
            small
            color="pink"
          ></v-switch>
        </div>

        <v-row
          align="center"
          no-gutters
        >
          <v-col
            cols="5"
            md="5"
            xl="4"
          >
            <span class="fs--14 fw--500">Stickiness: </span>
          </v-col>
          <v-col
            cols="7"
            md="7"
            xl="8"
            class="text-right"
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
            md="5"
            xl="4"
          >
            <span class="fs--14 fw--500">Volume: </span>
          </v-col>
          <v-col
            cols="7"
            md="7"
            xl="8"
            class="text-right"
          >
            <v-slider
              v-model="vol"
              color="pink"
              :min="0"
              :max="100"
              thumb-label
              hide-details
            >
              <template #thumb-label>
                <span class="px-2">{{ vol }}%</span>
              </template>
            </v-slider>
          </v-col>
        </v-row>
        <v-row
          no-gutters
          class="mt-3"
          align="center"
        >
          <v-col
            cols="6"
            class="pr-1"
          >
            <v-btn
              color="secondary"
              depressed
              block
              class="grid-btn"
            >
              <v-icon>{{ volume }}</v-icon> Play
            </v-btn>
          </v-col>
          <v-col
            cols="6"
            class="pl-1"
          >
            <v-btn
              depressed
              color="secondary"
              outlined
              block
              class="grid-btn"
            >
              <v-icon>{{ volume }}</v-icon> <span class="textColor--text">Replace</span>
            </v-btn>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col
            cols="4"
            md="4"
          >
            <span class="fs--14 fw--500">Bits: </span>
          </v-col>
          <v-col
            cols="8"
            md="8"
            class="text-right"
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
          </v-col>
        </v-row>
        <v-row
          no-gutters
          class="mt-4"
        >
          <v-col
            cols="9"
            md="9"
            class="pr-1"
          >
            <v-btn
              depressed
              color="pink"
              block
            >
              <span>Replace</span>
            </v-btn>
          </v-col>
          <v-col
            cols="3"
            lg="3"
            class="pl-1 text-right"
          >
            <v-btn
              color="secondary"
              depressed
              class="white--text px-0"
              style="min-width: 50px"
            >
              <v-icon>{{ deleteIcon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </template>
      <template v-if="!sticker.uploaded && sticker.unlocked">
        <div
          class="sticker-header text-center mb-3"
        >
          <h4 class="fs--18 fw--300">
            Slot 3
          </h4>
          <v-icon
            size="36"
            color="grey"
            class="drag-icon"
          >
            {{ drag }}
          </v-icon>
        </div>
        <div class="upload-area d-flex align-center justify-center">
          <!-- <img
            src="@/assets/images/add.png"
            width="50%"
            alt="Add"
          > -->
          <v-btn
            fab
            color="pink"
            x-large
            width="110"
            height="110"
          >
            <v-icon size="34">
              {{ plusIcon }}
            </v-icon>
          </v-btn>
        </div>
        <v-btn
          block
          depressed
          color="pink"
        >
          <span>Upload</span>
        </v-btn>
      </template>
      <template v-if="!sticker.uploaded && !sticker.unlocked">
        <div
          class="sticker-header text-center mb-3"
        >
          <h4 class="fs--18 fw--300">
            Slot 4
          </h4>
          <v-icon
            size="36"
            color="grey"
            class="drag-icon"
          >
            {{ drag }}
          </v-icon>
        </div>
        <div class="unlock-area d-flex align-center justify-center">
          <!-- <img
            src="@/assets/images/icon_lock.png"
            alt="Unlock"
          > -->
          <v-btn
            fab
            color="lightpurple"
            x-large
            width="110"
            height="110"
          >
            <v-icon
              size="34"
              color="blue"
            >
              {{ lock }}
            </v-icon>
          </v-btn>
        </div>
        <v-btn
          block
          depressed
          color=""
          class="py-7 text-normal lock-btn"
        >
          <div>
            <span class="grey--text">Unlocks at </span> <br>
            <div class="d-flex align-center justify-center">
              <span class="grey--text pr-2">{{ sticker.value }}</span>
              <img
                src="@/assets/images/bits.png"
              />
            </div>
          </div>
        </v-btn>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiChevronDown, mdiDelete, mdiDrag, mdiLock, mdiPlus, mdiVolumeLow } from '@mdi/js'

export default {
  props: {
    sticker: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      deleteIcon: mdiDelete,
      plusIcon: mdiPlus,
      arrow: mdiChevronDown,
      volume: mdiVolumeLow,
      lock: mdiLock,
      drag: mdiDrag,
      bits: 100,
      vol: 50,
      stickiness: 50,
      bitList: [100, 150],
      dropdown: false,
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
.upload-area {
  height: 345px;
}
.unlock-area {
  height: 330px;
}

.sticker-header {
  position: relative;
  z-index: 0;
}

.sticker-header .drag-icon {
  position: absolute;
  top: 0px;
  right: 0px;
}

.bits-btn {
  position: relative;
}

.bits-dropdown {
  height: 200px;
  overflow-y: scroll;
}
</style>
