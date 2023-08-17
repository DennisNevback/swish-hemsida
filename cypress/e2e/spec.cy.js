describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  it('Adding multiple new tasks', () => {
    cy.window().then(($win) => {
      cy.stub($win, 'prompt').returns('Diska')
      cy.get('.day').first().contains('Add Task').click()
      cy.get('.day').first().contains('Add Task').click()
      cy.get('.day').last().contains('Add Task').click()
    })
    cy.get('.todo-list').contains('Diska').should('exist')
    cy.get('.day').last().click()
    cy.get('.todo-list').contains('Diska').should('exist')
    cy.get('.task-count').first().contains('2')
    cy.get('.task-count').last().contains('1')
  })
  it('Delete tasks', () => {
    cy.window().then(($win) => {
      cy.stub($win, 'prompt').returns('Diska')
      cy.get('.day').first().contains('Add Task').click()
      cy.get('.day').first().contains('Add Task').click()
      cy.get('.day').last().contains('Add Task').click()
      cy.get('.day').last().contains('Add Task').click()
      cy.get('.day').first().click()
      cy.get('.todo-list ul li').first().contains('Delete').click()
      cy.get('.day').last().click()
      cy.get('.todo-list ul li').last().contains('Delete').click()
    })
    cy.get('.todo-list').contains('Diska').should('exist')
    cy.get('.day').last().click()
    cy.get('.todo-list').contains('Diska').should('exist')
    cy.get('.task-count').first().contains('1')
    cy.get('.task-count').last().contains('1')

  })

})
