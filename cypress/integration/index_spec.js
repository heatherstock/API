describe('index.ejs', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:3000') 
  })

  it('has the title "Web Development API Task - Heather Stock"', function() {
    cy.get('title').contains('Web Development API Task - Heather Stock')
  })
})