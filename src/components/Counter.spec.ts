import { mount } from '@cypress/vue'
import Counter from './Counter.vue'

describe('Counter', () => {
  it('renders a message', () => {
    mount(Counter)
    // cy.get('h2').should('have.text', msg)
  })
})
