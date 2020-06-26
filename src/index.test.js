import {expect} from 'chai';
import jsdom from 'jsdom';

//file system: a feature that comes along with node that enables interaction with the file system using node
import fs from 'fs';
describe ('Our first test', function(){
  it('should pass', function(){
    expect(true).to.equals(true);
  });
});

describe('index.html', function(){
  it('should say hello', function(done){

    //holding the content of the index.html file in memory
    const index = fs.readFileSync('./src/index.html', "utf-8");

    //create the jsdom enviroment
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Hello World');
      done();
      window.close();
    })
  })
})
