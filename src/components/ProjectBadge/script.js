export default {
  name: 'ProjectBadge',
  props: {
    status: {
      type: String,
      default: 'Invalid status',
    },
  },
  computed: {
    badgeStatus() {
      switch (this.status) {
        case 'On hold':
          return 'badge-main__red';
        case 'Site Clearing':
          return 'badge-main__brown';
        case 'Completed':
          return 'badge-main__green';
        case 'Under construction':
          return 'badge-main__yellow';
        case 'Conceptual':
          return 'badge-main__purple';
        case 'Implementation':
          return 'badge-main__blue';
        default:
          return 'badge-main__default';
      }
    },
  },
};
