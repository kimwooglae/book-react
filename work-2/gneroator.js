function* minsu() {
    const myMsgs = ['안녕 나는 민수야', '만나서 반가워', '내일 영화 볼래?', '시간 안 되니?', '모레는 어때?'];
    for( const msg of myMsgs) {
        console.log('수지:', yield msg);
    }
}

function suji() {
    const myMsgs = ['', '안녕 나는 수지야', '그래 만나서 반가워', '...'];
    const gen = minsu();
    for(const msg of myMsgs) {
        console.log('민수:', gen.next(msg).value);
    }
}

suji();