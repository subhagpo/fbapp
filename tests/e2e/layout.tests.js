describe('Define your Suite', function() {  
 
    it('Define your Spec', function() {
        var loginButton = element(by.id("login"));
        loginButton.click();
        
        //expect the greetings.
        var greetings = element(by.id("displayName"));
        expect(greetings.getText()).toContain("Subhag");
    })
});