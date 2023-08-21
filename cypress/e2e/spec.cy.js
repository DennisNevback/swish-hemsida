describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  it('Adding multiple new tasks', () => {
    cy.window().then(($win) => {
      cy.stub($win, 'prompt').returns('Diska')

      // Adding tasks on the first day
      cy.get('.day').first().contains('Add Task').click()
      cy.get('.day').first().contains('Add Task').click()

      // Adding tasks on the last day
      cy.get('.day').last().contains('Add Task').click()
    })

    //Running checks
    cy.get('.todo-list').contains('Diska').should('exist')
    cy.get('.day').last().click()
    cy.get('.todo-list').contains('Diska').should('exist')
    cy.get('.task-count').first().contains('2')
    cy.get('.task-count').last().contains('1')
  })
  it('Delete tasks', () => {
    cy.window().then(($win) => {
      cy.stub($win, 'prompt').returns('Diska')

      // Adding tasks on the first day
      cy.get('.day').first().contains('Add Task').click()
      cy.get('.day').first().contains('Add Task').click()

      // Adding tasks on the first day
      cy.get('.day').last().contains('Add Task').click()
      cy.get('.day').last().contains('Add Task').click()
      
      // Deleting tasks on the first day
      cy.get('.day').first().click()
      cy.get('.todo-list ul li').first().contains('Delete').click()

      // Deleting tasks on the last day
      cy.get('.day').last().click()
      cy.get('.todo-list ul li').last().contains('Delete').click()
    })

    //Running checks
    cy.get('.todo-list').contains('Diska').should('exist')
    cy.get('.day').last().click()
    cy.get('.todo-list').contains('Diska').should('exist')
    cy.get('.task-count').first().contains('1')
    cy.get('.task-count').last().contains('1')
  })
 it('Edit task', () => {
  cy.window().then(($win) => {
    const promptStub = cy.stub($win, 'prompt') // Stubbing the 'prompt' function to simulate user input during tests
    
    // Adding task on the first day (brings up the prompt window)
    cy.get('.day').first().contains('Add Task').click()
    // Pre-defining the first (0) user input to "dansa" in the prompt window
    promptStub.onCall(0).returns('Dansa')
    // Adding task on the first day (brings up the prompt window)
    cy.get('.day').first().contains('Add Task').click()
    // Pre-defining the second (1) user input to "dansa" in the prompt window
    promptStub.onCall(1).returns('Dansa')
    // clicks on last day
    cy.get('.day').last().click()

    cy.get('.day').last().contains('Add Task').click()
    promptStub.onCall(2).returns('Dansa')
    cy.get('.day').last().contains('Add Task').click()
    promptStub.onCall(3).returns('Dansa')

    cy.get('.day').first().click()

    promptStub.onCall(4).returns('Diska')
    cy.get('.todo-list ul li').first().contains('Edit').click()
    cy.wait(100)
    
    //Running checks
    cy.get('.todo-list ul li').first().contains('Diska').should('exist')
    
    cy.get('.day').last().click()

    promptStub.onCall(5).returns('Göra mat')
    cy.get('.todo-list ul li').last().contains('Edit').click()
    cy.get(100)

    //Running checks
    cy.get('.todo-list ul li').last().contains('Göra mat').should('exist')
  });
});
});