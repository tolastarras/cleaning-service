import { shallowMount, createLocalVue } from '@vue/test-utils'

import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

import Card from '@/components/Card'
import helper from '@/mixins/helper'

const localVue = createLocalVue()
localVue.use(Vuex)

Vue.use(Vuetify)

describe('Card', () => {
  let wrapper

  beforeEach(() => {
    const store = new Vuex.Store()

    wrapper = shallowMount(Card, {
      localVue,
      store,
      mixins: [helper],
      propsData: {
        card: {
          title: 'Test',
          image: 'sink.jpg'
        }
      }
    })
  })

  it('is instantiated', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders without breaking', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
