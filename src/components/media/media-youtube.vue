<template>
  <iframe
    src="`https://www.youtube.com/embed/${videoId}`"
    frameborder="0"
  />
</template>

<script>
export default {
  name: 'MediaYoutube',
  props: {
    videoId: {
      required: true,
      type: String,
    },
  },
}
</script>
