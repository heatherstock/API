describe('list.ejs', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:3000')
    cy.get('#view-all').click() 
  })

  it('has the title "List of Users"', function() {
    cy.get('title').contains('List of Users')
  })

  it('has h1 "List of Users"', function() {
    cy.get('h1').contains('List of Users')
  })

  it('has a button to view user details', function() {
    cy.get('#view-user').click()
    cy.get('title').contains('View User')
  })

  it('has a button to edit user details', function() {
    cy.visit('http://localhost:3000')
    cy.get('#view-all').click()
    cy.get('#edit-user').click()
    cy.get('title').contains('Edit User')
  })

  it('has button to return to index.ejs', function() {
    cy.visit('http://localhost:3000')
    cy.get('#view-all').click()
    cy.get('#index').click()
    cy.get('title').contains('Web Development API Task - Heather Stock')
  })
})