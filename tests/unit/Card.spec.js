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
    wrapper = shallowMount(Card, {
      localVue,
      mixins: [helper],
      propsData: {
        card: {
          title: 'Test',
          name: 'sink'
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
