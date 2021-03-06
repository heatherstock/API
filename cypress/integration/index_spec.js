describe('index.ejs', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:3000') 
  })

  it('has the title "Web Development API Task - Heather Stock"', function() {
    cy.get('title').contains('Web Development API Task - Heather Stock')
  })

  it('has h1 "Web Development API Task"', function() {
    cy.get('h1').contains('Web Development API Task')
  })

  it('allows user details to be input', function() {
    cy.get('#input-forename').type('John')
    cy.get('#input-surname').type('Smith')
    cy.get('#input-email').type('johnsmith@test.com')
  })

  it('allows user to be added to the database', function() {
    cy.get('#add-user').click()
  })

  it('has button to view users', function() {
    cy.get('#view-all').click()
    cy.get('body').contains('Smith, John')
  })
})