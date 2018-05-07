describe('list.ejs', function() {
  before(function() {
    cy.visit('http://localhost:3000')
    cy.get('#input-forename').type('Harry')
    cy.get('#input-surname').type('Jones')
    cy.get('#input-email').type('harryjones@test.com')
    cy.get('#add-user').click()
  })

  it('successfully loads', function() {
    cy.get('#view-all').click() 
  })

  it('has the title "List of Users"', function() {
    cy.get('title').contains('List of Users')
  })

  it('has h1 "List of Users"', function() {
    cy.get('h1').contains('List of Users')
  })

  it('has a button to view / edit user details', function() {
    cy.get('#edit-user').click()
    cy.get('title').contains('View / Edit User')
  })

  it('has button to return to add users page', function() {
    cy.get('#view-all').click()
    cy.get('#index').click()
    cy.get('title').contains('Web Development API Task - Heather Stock')
  })

  it('has a button to delete a user', function() {
    cy.get('#view-all').click()
    cy.get('#delete-user').click()
    cy.get('#delete-user').click()
    cy.get('body').should('not.contain', 'Jones, Harry')
  })
})