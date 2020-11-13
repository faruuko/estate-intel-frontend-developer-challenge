import ProjectBadge from '../../components/ProjectBadge/index.vue';

export default {
  name: 'Home',
  components: {
    ProjectBadge,
  },
  computed: {
    getProjects() {
      return this.$store.getters.GET_PROJECTS;
    },
  },
  mounted() {
    this.$store.dispatch('FETCH_PROJECTS');
  },
};
