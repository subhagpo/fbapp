describe('Define your Suite', function() {  
 
    it('Define your Spec', function() {
        var loginButton = element(by.id("login"));
        loginButton.click();
        
        //expect greetings to contain expected text
        var greeting = element(by.id("displayName"));
        expect(greeting.getText()).toContain("Subhag");
    })
});