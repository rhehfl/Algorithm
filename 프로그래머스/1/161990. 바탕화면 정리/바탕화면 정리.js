function solution(wallpaper) {
    let lux, luy = 51, rdx = -1, rdy = -1;
    let isFind = false;
    
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            //시작 행 찾기
            if (!isFind && wallpaper[i][j] === '#') {
               lux = i;
               isFind = true;
            }
            //끝 행 찾기
            if (i > rdx && wallpaper[i][j] === '#') {
               rdx = i;
            }
            //시작 열 찾기
            if (j < luy && wallpaper[i][j] === '#') {
                luy = j;
            }
            //끝 열 찾기
            if (j > rdy && wallpaper[i][j] === '#') {
                rdy = j;
            }
        }
        
    }
    return [lux, luy, rdx + 1, rdy + 1];
}