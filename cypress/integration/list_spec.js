describe('list.ejs', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:3000')
    cy.get('#view-users').click() 
  })

  it('has the title "List of Users"', function() {
    cy.get('title').contains('List of Users')
  })

  it('has h1 "List of Users"', function() {
    cy.get('h1').contains('List of Users')
  })

  it('shows a list of users in the database', function() {
    cy.get('body').contains('John')
  })

  it('has button to return to index.ejs', function() {
    cy.get('#index').click()
    cy.get('title').contains('Web Development API Task - Heather Stock')
  })
})