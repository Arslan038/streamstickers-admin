<template>
  <div class="custom-sticker">
    <v-card>
      <v-card-text class="py-3">
        <h2 class="white--text fs--25 fw--700">
          Stickers
        </h2>
      </v-card-text>
    </v-card>

    <v-tabs
      v-model="tab"
      slider-color="pink"
      color="white"
      background-color="transparent"
      grow
    >
      <v-tab>
        <img
          src="@/assets/images/Layer 5.png"
          alt="custom"
        > <span class="pl-3">Custom</span>
      </v-tab>
      <v-tab>
        <img
          src="@/assets/images/Layer 6.png"
          alt="reward"
        > <span class="pl-3">Reward</span>
      </v-tab>
      <v-tab>
        <img
          src="@/assets/images/Layer 7.png"
          alt="power"
        > <span class="pl-3">Power</span>
        <v-chip
          color="pink"
          class="px-2 ml-3"
          rounded
          small
        >
          5
        </v-chip>
      </v-tab>
      <v-tab>
        <img
          src="@/assets/images/Layer 9.png"
          alt="global"
        > <span class="pl-3">Global</span>
        <v-chip
          color="pink"
          class="px-2 ml-3"
          rounded
          small
        >
          5
        </v-chip>
      </v-tab>
    </v-tabs>
    <v-divider></v-divider>

    <v-tabs-items
      v-model="tab"
    >
      <v-tab-item>
        <CustomStickers />
      </v-tab-item>
      <v-tab-item>
        <RewardStickers />
      </v-tab-item>
      <v-tab-item>
        <CustomStickers />
      </v-tab-item>
      <v-tab-item>
        <RewardStickers />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import CustomStickers from './Custom.vue'
import RewardStickers from './Reward.vue'

export default {
  components: {
    CustomStickers,
    RewardStickers,
  },
  data() {
    return {
      tab: 0,
    }
  },
}
</script>
