<template>
  <div class="media-youtube">
    <iframe
      :src="`https://www.youtube.com/embed/${videoId}`"
      class="media-youtube__player"
      frameborder="0"
    />
  </div>
</template>

<script>
export default {
  name: 'MediaYoutube',
  props: {
    video: {
      required: true,
      type: String,
    },
  },
  computed: {
    videoId() {
      return this.video.match(/^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#&?]*).*/)[2]
    },
  },
}
</script>

<style lang="stylus" scoped>
.media-youtube {
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  width: 100%;
}

.media-youtube__player {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
