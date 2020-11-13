<template>
  <div class='home'>
    <StatusPill type='primary' />
  </div>
</template>

<script>
import StatusPill from '../components/StatusPill.vue';

export default {
  name: 'Home',
  components: {
    StatusPill,
  },
};
</script>
