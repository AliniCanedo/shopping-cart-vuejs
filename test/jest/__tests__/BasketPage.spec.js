import { describe, expect, test } from '@jest/globals'
import { mount } from '@vue/test-utils'

describe('BasketPage', () => {
  // The component to test
  const ProductComponent = {
    template: '<div class="grand-total">{{ total }}</div>',
    props: ['total']
  }

  test('displays message', () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(ProductComponent, {
      propsData: {
        total: 'Total do pedido: R$ 109.95'
      }
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Total do pedido: R$ 109.95')
  })
})
