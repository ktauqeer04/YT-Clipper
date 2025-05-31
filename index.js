const { download } = require('./download');
const { convert } = require('./worker');


function worker(){
    download('https://www.youtube.com/watch?v=EorTOKX1420');
}

worker();