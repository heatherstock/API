describe('view_user.ejs', function() {
  before(function() {
    cy.visit('http://localhost:3000')
    cy.get('#input-forename').type('John')
    cy.get('#input-surname').type('Doe')
    cy.get('#input-email').type('johndoe@test.com')
    cy.get('#view-all').click()
  })

  it('successfully loads', function() {
    cy.get('#view-user').click()
  })

  it('has the title "View User"', function() {
    cy.get('title').contains('View User')
  })

  it('has h1 "View User"', function() {
    cy.get('h1').contains('View User')
  })
})