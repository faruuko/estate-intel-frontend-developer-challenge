import ProjectBadge from '../../components/ProjectBadge/index.vue';

export default {
  name: 'Home',
  components: {
    ProjectBadge,
  },
  mounted() {
    this.$store.dispatch('FETCH_PROJECTS');
  },
};
