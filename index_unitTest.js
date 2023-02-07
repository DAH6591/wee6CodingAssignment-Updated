//test to see if the myFirstCard function within Class Card runs without errors
let expect = chai.expect;

describe('WarCardGameFunction', function() {
    describe('#myFirstCard', function() {
        it('should return suit, value and face value of the card', function(){
            let c = new Card('Hearts', 9, "9");
            expect(c.myFirstCard()).to.equal("Hearts, 9, 9");
        });
    });
});

