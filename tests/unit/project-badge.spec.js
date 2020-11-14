import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ProjectBadge from '../../src/components/ProjectBadge/index.vue';

describe('ProjectBadge.vue', () => {
  it("Renders 'On hold' badge", () => {
    const status = 'On hold';
    const wrapper = shallowMount(ProjectBadge, {
      propsData: { status },
    });
    expect(wrapper.text()).to.include(status);
    expect(wrapper.classes()).to.contain('badge-main__red');
  });

  it("Renders 'Site Clearing' badge", () => {
    const status = 'Site Clearing';
    const wrapper = shallowMount(ProjectBadge, {
      propsData: { status },
    });
    expect(wrapper.text()).to.include(status);
    expect(wrapper.classes()).to.contain('badge-main__brown');
  });

  it("Renders 'Completed' badge", () => {
    const status = 'Completed';
    const wrapper = shallowMount(ProjectBadge, {
      propsData: { status },
    });
    expect(wrapper.text()).to.include(status);
    expect(wrapper.classes()).to.contain('badge-main__green');
  });

  it("Renders 'Under construction' badge", () => {
    const status = 'Under construction';
    const wrapper = shallowMount(ProjectBadge, {
      propsData: { status },
    });
    expect(wrapper.text()).to.include(status);
    expect(wrapper.classes()).to.contain('badge-main__yellow');
  });

  it("Renders 'Conceptual' badge", () => {
    const status = 'Conceptual';
    const wrapper = shallowMount(ProjectBadge, {
      propsData: { status },
    });
    expect(wrapper.text()).to.include(status);
    expect(wrapper.classes()).to.contain('badge-main__purple');
  });

  it("Renders 'Implementation' badge", () => {
    const status = 'Implementation';
    const wrapper = shallowMount(ProjectBadge, {
      propsData: { status },
    });
    expect(wrapper.text()).to.include(status);
    expect(wrapper.classes()).to.contain('badge-main__blue');
  });

  it("Renders 'Invalid status' badge when no status props is passed.", () => {
    const wrapper = shallowMount(ProjectBadge, {});
    expect(wrapper.text()).to.include('Invalid status');
    expect(wrapper.classes()).to.contain('badge-main__default');
  });
});
