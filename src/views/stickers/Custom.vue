<template>
  <div>
    <v-row class="mt-5">
      <v-col
        cols="12"
        md="6"
        lg="7"
        xl="8"
      >
        <HowItWorks>
          <template #text>
            <p class="fs--13 fw--400">
              Use this area to upload Reward Stickers for your channel.
              Like achievements, your viewers can unlock the ability to use these rewards as they use bits on stickers. For best results, add Reward Stickers that are both unique and special for your channel.
            </p>
          </template>
        </HowItWorks>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="5"
        xl="4"
      >
        <QuickAdjust />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="sticker in stickers"
        :key="sticker.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <Sticker :sticker="sticker" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HowItWorks from '@/@core/components/stickers/HowItWorks.vue'
import QuickAdjust from '@/@core/components/stickers/QuickAdjust.vue'
import Sticker from '@/@core/components/stickers/Sticker.vue'

export default {
  components: {
    HowItWorks,
    QuickAdjust,
    Sticker,
  },
  data() {
    return {
      tab: 0,
      stickers: [
        {
          id: 1,
          uploaded: true,
          unlocked: true,
        },
        {
          id: 2,
          uploaded: true,
          unlocked: true,
        },
        {
          id: 3,
          uploaded: false,
          unlocked: true,
        },
        {
          id: 4,
          uploaded: false,
          unlocked: false,
          value: 240000,
        },
      ],
    }
  },
}
</script>
