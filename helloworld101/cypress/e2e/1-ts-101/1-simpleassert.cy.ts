// Describe is for Entire Test suite 
describe('Simple assert', () =>
{
    // it is for the test case
    it('Checks if two numbers are equal', () =>
        {
            expect(2).equal(2)
        }
    )
});

describe('This is to help understand a test case breakup', ()=>
{
    it('if numbers are not equal to each other' , () =>
    {
        expect(1).not.equal(3);
    })

});