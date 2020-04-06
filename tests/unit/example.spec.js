import { shallowMount } from '@vue/test-utils'
import HelloDeveloper from '@/components/HelloDeveloper.vue'

describe('HelloDeveloper.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloDeveloper, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
