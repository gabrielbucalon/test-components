import { mount } from '@cypress/vue'
import App from './App.vue'

describe('App', () => {
  it('renders a message', () => {
    mount(App)
    cy.get('h1').should('have.text', 'teste')
  })
})