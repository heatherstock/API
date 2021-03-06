describe('view_user.ejs', function() {
  before(function() {
    cy.visit('http://localhost:3000')
    cy.get('#input-forename').type('John')
    cy.get('#input-surname').type('Doe')
    cy.get('#input-email').type('johndoe@test.com')
    cy.get('#add-user').click()
    cy.get('#view-all').click()
  })

  it('successfully loads', function() {
    cy.get('#edit-user').click()
  })

  it('has the title "View User"', function() {
    cy.get('title').contains('View / Edit User')
  })

  it('has h1 "View User"', function() {
    cy.get('h1').contains('View / Edit User')
  })

  it('displays users details', function() {
    cy.get('body').contains('johndoe@test.com')
  })

  it('allows user details to be changed', function() {
    cy.get('#input-forename').clear()
    cy.get('#input-forename').type('Harry')
  })

  it('allows new information to be added to the database', function() {
    cy.get('#update').click()
    cy.get('body').contains('Harry')
  })

  it('has button to return to add user page', function() {
    cy.get('#index').click()
    cy.get('title').contains('Web Development API Task - Heather Stock')
  })

  it('has button to return to view list of all users', function() {
    cy.get('#view-all').click()
    cy.get('#edit-user').click()
    cy.get('#view-all').click()
    cy.get('title').contains('List of Users')
  })
})