describe('Unit Test Suite', function() {
    var Questions;
    
    beforeEach(module('starter.services'));
        
    beforeEach(inject(function (_Questions_) {
        Questions = _Questions_;
    }));

    it('Unit Test Spec', inject(function(Questions) {
        expect(Questions).toBeDefined();
    }));
    
        it('Unit Test Spec', inject(function(Questions) {
        expect(Questions.all().length).toEqual(3);
    }));
});