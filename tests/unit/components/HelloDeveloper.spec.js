import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
// Components
import HelloDeveloper from '@/components/HelloDeveloper.vue'

describe('HelloDeveloper component', () => {
  let wrapper

  function initWrapper({ props } = {}) {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
      state: {
        someState: {
          loading: false
        }
      },
      getters: {},
      actions: {},
      mutations: {}
    })

    wrapper = shallowMount(HelloDeveloper, {
      propsData: {
        ...props
      },
      localVue,
      store
    })
  }

  it.each`
    developer
    ${'bot'}
  `('developer welcome text is "$developer", when prop developer is "$developer"', ({ developer }) => {
    // Arrange
    const props = {
      developer
    }
    initWrapper({ props })

    // Assert
    expect(wrapper.text()).toContain(developer)
  })
})
