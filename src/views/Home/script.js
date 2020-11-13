import ProjectBadge from '../../components/ProjectBadge/index.vue';

export default {
  name: 'Home',
  data() {
    return {
      ongoing_projects: {},
    };
  },
  components: {
    ProjectBadge,
  },
  mounted() {
    this.$store.dispatch('FETCH_PROJECTS');
  },
  watch: {
    '$store.getters.GET_PROJECTS': function () {
      this.ongoing_projects = this.$store.getters.GET_PROJECTS.filter((project) => project.status === 'Under construction');
    },
  },
};
