import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
// Components
import HelloDeveloper from '@/components/HelloDeveloper.vue'

Vue.use(Vuex)

describe('HelloDeveloper component', () => {
  let wrapper
  let store

  const DEFAULT_PROPS = {
    developer: 'default value'
  }

  const DEFAULT_STORE_CONFIG = {
    state: {
      someState: {
        loading: false
      }
    },
    getters: {},
    actions: {},
    mutations: {}
  }

  function initWrapper({ props } = {}) {
    const storeConfig = {
      ...DEFAULT_STORE_CONFIG
    }

    store = new Vuex.Store(storeConfig)

    wrapper = shallowMount(HelloDeveloper, {
      propsData: {
        ...DEFAULT_PROPS,
        ...props
      },
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
