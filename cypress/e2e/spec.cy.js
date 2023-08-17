describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('Adding a new task', () => {
    cy.contains('Add Task').click()
    cy.get('.todo-list').contains('Do dishes').should('exist')
  })

  /*it('Adding a new task', () => {
    cy.window().then(($win) => {
      cy.stub($win, 'prompt').returns('Diska')
      cy.contains('Add Task').click()
    })
    cy.get('.todo-list').contains('Diska').should('exist')
  })

  it('Adding multiple tasks', () => {
    cy.window().then(($win) => {
      cy.stub($win, 'prompt').returns('Diska')
      cy.contains('Add Task').click()
    })

    cy.window().then(($win2) => {
      cy.stub($win2, 'prompt').returns('Diska')
      cy.contains('Add Task').click()
    })

    cy.get('.todo-list').contains('Diska')
  })*/


})
