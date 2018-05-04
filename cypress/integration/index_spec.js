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

  it('has button to view users', function() {
    cy.get('#view-users').click()
    cy.get('title').contains('List of Users')
  })
})

// describe('Add a User', function() {
//   before(function() {
//     cy.visit('http://localhost:3000')
//   })
  
//   it('Allows a user to be added to the database', function() {
//     cy.get('#input-forename').type('John')
//     cy.get('#input-surname').type('Smith')
//     cy.get('#input-email').type('johnsmith@test.com')
//     cy.get('#add-user').click()
//     cy.get('body').contains('User added')
//   })
// // })
// describe('Viewing users', function() {

// })