import { mount } from '@cypress/vue'
import Counter from './Counter.vue'

describe('Counter', () => {
  it('renders a message', () => {
    const msg = 'Testandooooooooo'
    mount(Counter, {
      propsData: {
        msg
      }
    })
    
    cy.get('h2').should('have.text', msg)
  })
})
