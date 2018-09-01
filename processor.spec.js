const expect = require('chai').expect;
const processor = require('./processor')

describe('processor.process', () => {

      it('should return 2 if <Hello world> is passed as message', () => {
        let inMsg =  {
            "message" : "Hello world."
        };
        
        const result = processor.process(inMsg);
        expect(result["no-of-words"]).to.equal(2);
      });
});