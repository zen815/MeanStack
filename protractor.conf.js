/**
 * Created by zen on 15. 7. 24.
 */

exports.config = {
    framework: 'mocha',
    specs: [
        'test/e2e/**/*.spec.js'
    ],
    // mocha 에서 나타나는 timeout 버그를 피하는 루틴 향후 버전업 시 삭제 가능
    mochaOpts: {
        enableTimeouts: false
    },
    //프로트랙터가 서버를 시작하도록 하는 루틴
    onPrepare: function() {
        process.env.PORT = 3001; // 테스트용 서버는 port 3001로 실
        require('./server');
    }
}