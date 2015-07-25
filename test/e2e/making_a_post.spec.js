/**
 * Created by zen on 15. 7. 24.
 */

var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;

describe('making a post', function() {
    it('logs in and creates new post', function() {
        // 홈페이지로 들어간다.
        browser.get('http://localhost:3001');
        // 로그인한다.
        element(by.css('nav .login')).click();
        // browser.pause(); // 사용자가 볼 수 있게 잠시 멈춤

        // 로그인 폼을 채우고 제출한다.
        element(by.model('username')).sendKeys('a1');
        element(by.model('password')).sendKeys('a1');
        element(by.css('form .btn')).click();

        // post 페이지로 이동 (추후 로그인 되면 자동으로 넘어가도록 변경 필요)
        element(by.css('nav .posts')).click();
        // 글 쓰기 페이지에서 새로운 글을 작성해 제출한다.
        var post = 'my new posts ' + Math.random();
        element(by.model('postBody')).sendKeys(post);
        element(by.css('form .btn')).click();

        // 사용자는 페이지에 처음으로 올라온 글을 읽을 수 있어야 한다.
        //element.all(by.css('ul.list-group li')).first().getText().then(function(text) {
        //    expect(text).to.contain(post);
        //});
        expect(element.all(by.css('ul.list-group li')).first().getText()).to.eventually.contain(post);
    });
});