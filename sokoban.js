function setCookie(cname, cvalue, exdays) {
    var expires = "expires=Mon, 31 Dec 2029 10:00:00 GMT;";
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

function sokolevel01() {
(function() {var levelData = ["  www   ","  wpw   ","  w wwww","wwwc cpw","wp cywww","wwwwcw  ","   wpw  ","   www  "], level = [[], [] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level01 = document.getElementById('level01');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level01.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'w') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'w' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'w') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Перший рівень успішно пройдений!');
setCookie('riven', '02s768gb.html');
window.location.reload(false);
}); })(); }

function sokolevel02() {
(function() {var levelData = ["  wwwww ","www   w ","w c w ww","w w  p w","w    w w","wwcwp  w"," wy  www"," wwwww  "], level = [[], [] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level02 = document.getElementById('level02');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level02.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'w') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'w' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'w') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Другий рівень позаду!');
setCookie('riven', '03v46htu.html');
window.location.reload(false);
}); })(); }

function sokolevel03() {
(function() {
var levelData = ["    wwwww          ","    w   w          ","    wc  w          ","  www  cww         ","  w  c c w         ","www w ww w   wwwwww","w   w ww wwwww  ppw","w c  c          ppw","wwwww www wyww  ppw","    w     wwwwwwwww","    wwwwwww        "], level = [[], [] ,[] ,[] ,[] ,[] ,[] ,[], [], [], []];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level03 = document.getElementById('level03');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level03.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'w') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'w' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'w') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Третій рівень пройдено!');
setCookie('riven', '04d45ghf.html');
window.location.reload(false);
}); })(); }

function sokolevel04() {
(function() {
var levelData = ["wwwwwwwwwwww  ","wpp  w     www","wpp  w c  c  w","wpp  wcwwww  w","wpp    y ww  w","wpp  w w  c ww","wwwwww wwc c w","  w c  c c c w","  w    w     w","  wwwwwwwwwwww"], level = [[] ,[] ,[] ,[] ,[] ,[] ,[], [], [], []];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level04 = document.getElementById('level04');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level04.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'w') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'w' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'w') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('І четвертий рівень позаду!');
setCookie('riven', '05poiwej.html');
window.location.reload(false);
}); })(); }

function sokolevel05() {
(function() {
var levelData = ["        wwwwwwww ","        w     yw ","        w cwc ww ","        w c  cw  ","        wwc c w  ","wwwwwwwww c w www","wpppp  ww c  c  w","wwppp    c  c   w","wpppp  wwwwwwwwww","wwwwwwww         "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[], [], [], []];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level05 = document.getElementById('level05');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level05.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'w') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'w' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'w') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('П\'ятий рівень пройдено!');
setCookie('riven', '06ghuian.html');
window.location.reload(false);
}); })(); }

function sokolevel06() {
(function() {
var levelData = ["           wwwwwwww","           w  ppppw","wwwwwwwwwwww  ppppw","w    w  c c   ppppw","w cccwc  c w  ppppw","w  c     c w  ppppw","w cc wc c cwwwwwwww","w  c w     w       ","ww wwwwwwwww       ","w    w    ww       ","w     c   ww       ","w  ccwcc  yw       ","w    w    ww       ","wwwwwwwwwww        "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[], [], [], [], [], [], [], []];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level06 = document.getElementById('level06');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level06.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'w') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'w' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'w') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Знову перемога. Шостий рівень пройдено!');
setCookie('riven', '07zsrvse.html');
window.location.reload(false);
}); })(); }

function sokolevel07() {
(function() {
var levelData = ["        wwwww    ","        w   wwwww","        w wcww  w","        w     c w","wwwwwwwww www   w","wpppp  ww c  cwww","wpppp    c cc ww ","wpppp  wwc  c yw ","wwwwwwwww  c  ww ","        w c c  w ","        www ww w ","          w    w ","          wwwwww "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[], [], [], [], [], [], []];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level07 = document.getElementById('level07');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level07.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'w') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'w' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'w') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Сьомий рівень позаду!');
setCookie('riven', '08verler.html');
window.location.reload(false);
}); })(); }

function sokolevel08() {
(function() {
var levelData = ["wwwwww  www ","wpp  w wwyww","wpp  www   w","wpp     cc w","wpp  w w c w","wppwww w c w","wwww c wc  w","   w  cw c w","   w c  c  w","   w  ww   w","   wwwwwwwww"], level = [[] ,[] ,[] ,[] ,[] ,[] ,[], [], [], [], []];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level08 = document.getElementById('level08');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level08.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'w') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'w' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'w') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Восьмий рівень успішно пройдений!');
setCookie('riven', '09weghit.html');
window.location.reload(false);
}); })(); }

function sokolevel09() {
(function() {
var levelData = ["       wwwww "," wwwwwww   ww","ww w yww cc w","w    c      w","w  c  www   w","www wwwwwcwww","w c  www ppw ","w c c c pppw ","w    wwwpppw ","w cc w wpppw ","w  www wwwww ","wwww         "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[], [], [], [], [], []];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level09 = document.getElementById('level09');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level09.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'w') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'w' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'w') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('А ось і дев\'ятий рівень позаду!');
setCookie('riven', '10gvieur.html');
window.location.reload(false);
}); })(); }

function sokolevel10() {
(function() {
var levelData = ["qqqqqqq","q  q  q","q  c  q","q aaa q","q  p yq","qqqqqqq"], level = [[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level10 = document.getElementById('level10');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level10.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'q') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'q' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'q') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Десята перемога!');
setCookie('riven', '11ojjbvc.html');
window.location.reload(false);
}); })(); }

function sokolevel11() {
(function() {
var levelData = ["  qqqq          ","  q  qqqqqqqqqqq","  q    c   c c q","  q cq c q  c  q","  q  c c  q    q","qqq cq q  qqqq q","qyqc c c  qq   q","q    c qcq   q q","q   c    c c c q","qqqqq  qqqqqqqqq","  q      q      ","  q      q      ","  qppppppq      ","  qppppppq      ","  qppppppq      ","  qqqqqqqq      "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level11 = document.getElementById('level11');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level11.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'q') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'q' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'q') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Одинадцятий рівень пройдено!');
setCookie('riven', '12iuyute.html');
window.location.reload(false);
}); })(); }

function sokolevel12() {
(function() {
var levelData = ["          qqqqqqq","          q  pppq","      qqqqq  pppq","      q      p pq","      q  qq  pppq","      qq qq  pppq","     qqq qqqqqqqq","     q ccc qq    "," qqqqq  c c qqqqq","qq   qc c   q   q","qy c  c    c  c q","qqqqqq cc c qqqqq","     q      q    ","     qqqqqqqq    "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level12 = document.getElementById('level12');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level12.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'q') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'q' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'q') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Дванадцятий рівень пройдено!');
setCookie('riven', '13moimkl.html');
window.location.reload(false);
}); })(); }

function sokolevel13() {
(function() {
var levelData = [" qqq  qqqqqqqqqqqqq","qqyqqqq       q   q","q cc   cc  c c pppq","q  cccq    c  qpppq","q c   q cc cc qpppq","qqq   q  c    qpppq","q     q c c c qpppq","q    qqqqqq qqqpppq","qq q  q  c c  qpppq","q  qq q cc c cqqppq","q ppq q  c      qpq","q ppq q ccc ccc qpq","qqqqq q       q qpq","    q qqqqqqqqq qpq","    q           qpq","    qqqqqqqqqqqqqqq"], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level13 = document.getElementById('level13');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level13.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'q') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'q' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'q') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Тринадцятий рівень пройдено!');
setCookie('riven', '14qasdfg.html');
window.location.reload(false);
}); })(); }

function sokolevel14() {
(function() {
var levelData = ["          qqqq     ","     qqqq q  q     ","   qqq  qqqc q     ","  qq   y  c  q     "," qq  c ccqq qq     "," q  qcqq     q     "," q q c cc q qqq    "," q   c q  q c qqqqq","qqqq    q  cc q   q","qqqq qq c         q","qp    qqq  qqqqqqqq","qpp ppq qqqq       ","qpppqpq            ","qpppppq            ","qqqqqqq            "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level14 = document.getElementById('level14');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level14.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'q') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'q' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'q') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Було важко? Чотирнадцятий рівень позаду!');
setCookie('riven', '15rgnhmn.html');
window.location.reload(false);
}); })(); }

function sokolevel15() {
(function() {
var levelData = ["qqqqqqqqqqqqqqqq ","q              q ","q q qqqqqq     q ","q q  c c c cq  q ","q q   cyc   qq qq","q q qc c cqqqpppq","q q   c c  qqpppq","q qqqccc c qqpppq","q     q qq qqpppq","qqqqq   qq qqpppq","    qqqqq     qqq","        q     q  ","        qqqqqqq  "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level15 = document.getElementById('level15');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level15.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'q') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'q' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'q') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Знову перемога! П\'ятнадцятий рівень пройдено!');
setCookie('riven', '16mioijm.html');
window.location.reload(false);
}); })(); }

function sokolevel16() {
(function() {
var levelData = ["   qqqqqqqqq       ","  qq   qq  qqqqqq  ","qqq     q  q    qqq","q  c qc q  q  ppp q","q q cqycqq q qpqp q","q  q qc  q    p p q","q c    c q q qpqp q","q   qq  qqc c p p q","q c q   q  qcqpqp q","qq c  c   c  cppp q"," qc qqqqqq    qq  q"," q  q    qqqqqqqqqq"," qqqq              "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level16 = document.getElementById('level16');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level16.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'q') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'q' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'q') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Шістнадцятий рівень уже позаду!');
setCookie('riven', '17yghbuj.html');
window.location.reload(false);
}); })(); }

function sokolevel17() {
(function() {
var levelData = ["       qqqqqqq    "," qqqqqqq     q    "," q     q cyc q    "," qcc q   qqqqqqqqq"," q qqqppppppqq   q"," q   cppppppqq q q"," q qqqpppppp     q","qq   qqqq qqq qcqq","q  qc   q  c  q q ","q  c ccc  q cqq q ","q   c c qqqcc q q ","qqqqq     c   q q ","    qqq qqq   q q ","      q     q   q ","      qqqqqqqq  q ","             qqqq "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level17 = document.getElementById('level17');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level17.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'q') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'q' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'q') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Сімнадцятий рівень успішно пройдений!');
setCookie('riven', '18emihds.html');
window.location.reload(false);
}); })(); }

function sokolevel18() {
(function() {
var levelData = ["   qqqqqqqq      ","   q   q  q      ","   q  c   q      "," qqq qc   qqqq   "," q  c  qqc   q   "," q  q y c q cq   "," q  q      c qqqq"," qq qqqqcqq     q"," q cqpppppq q   q"," q  cppaap cq qqq","qq  qpppppq   q  ","q   qqq qqqqqqq  ","q cc  q  q       ","q  q     q       ","qqqqqq   q       ","     qqqqq       "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level18 = document.getElementById('level18');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level18.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'q') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'q' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'q') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('А ось і вісімнадцятий рівень уже позаду!');
setCookie('riven', '19widuck.html');
window.location.reload(false);
}); })(); }

function sokolevel19() {
(function() {
var levelData = ["qqqqq         ","q   qq        ","q    q  qqqq  ","q c  qqqq  q  ","q  cc c   cq  ","qqqy qc    qq "," q  qq  c c qq"," q c  qq qq pq"," q  qcqqc  qpq"," qqq   cppqqpq","  q    qpapppq","  q cc qpppppq","  q  qqqqqqqqq","  q  q        ","  qqqq        "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level19 = document.getElementById('level19');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level19.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'q') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'q' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'q') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Дев\'ятнадцятий рівень залишається позаду!');
setCookie('riven', '20unweun.html');
window.location.reload(false);
}); })(); }

function sokolevel20() {
(function() {
var levelData = ["eeeeeee","e     e","e     e","eeacaee","e pyp e","e aca e","e  e  e","eeeeeee"], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level20 = document.getElementById('level20');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level20.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'e') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'e' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'e') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Двадцята перемога!');
setCookie('riven', '21vsdrge.html');
window.location.reload(false);
}); })(); }

function sokolevel21() {
(function() {
var levelData = ["   eeeeeeeeee   ","   epp  e   e   ","   epp      e   ","   epp  e  eeee ","  eeeeeee  e  ee","  e            e","  e  e  ee  e  e","eeee ee  eeee ee","e  c  eeeee e  e","e e c  c  e c  e","e yc  c   e   ee","eeee ee eeeeeee ","   e    e       ","   eeeeee       "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level21 = document.getElementById('level21');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level21.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'e') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'e' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'e') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Двадцять перший позаду!');
setCookie('riven', '22qwrery.html');
window.location.reload(false);
}); })(); }

function sokolevel22() {
(function() {
var levelData = ["     eeeeeeeeeee   ","     e  p  e   e   ","     e ep    y e   "," eeeee eeppe eeee  ","ee  e ppeee     eee","e c eppp   c e  c e","e    pp ee  ee ee e","eeeeceece c e   e e","  ee e    ec cc e e","  e  c e e  e cee e","  e               e","  e  eeeeeeeeeee  e","  eeee         eeee"], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level22 = document.getElementById('level22');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level22.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'e') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'e' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'e') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Двадцятий другий рівень пройдено!');
setCookie('riven', '23poiutg.html');
window.location.reload(false);
}); })(); }

function sokolevel23() {
(function() {
var levelData = ["  eeeeee           ","  e   yeeee        ","eeeee c   e        ","e   ee    eeee     ","e c e  ee    e     ","e c e  eeeee e     ","ee c  c    e e     ","ee c c eee e e     ","ee e  c  e e e     ","ee e ece   e e     ","ee eee   e e eeeeee","e  c  eeee e eppppe","e    c    c   ppepe","eeeec  ce c   ppppe","e       e  ee ppppe","eeeeeeeeeeeeeeeeeee"], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level23 = document.getElementById('level23');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level23.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'e') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'e' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'e') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Двадцять третій рівень успішно пройдено!');
setCookie('riven', '24zsrthn.html');
window.location.reload(false);
}); })(); }

function sokolevel24() {
(function() {
var levelData = ["    eeeeeeeeee     ","eeeee        eeee  ","e     e   c  ey e  ","e eeeeeeeceeee  eee","e e    ee e  ec ppe","e e c  c  e  e  epe","e e c  e     ec ppe","e e  eee ee     epe","e eee  e  e  ec ppe","e e    e ceeee  epe","e ec   c  c  ea ppe","e    c e c c e  epe","eeee ceee    ea ppe","   e    cc eeeppppe","   e      ee eeeeee","   eeeeeeee        "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level24 = document.getElementById('level24');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level24.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'e') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'e' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'e') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('І двадцять четвертий рівень теж позаду!');
setCookie('riven', '25muiyfa.html');
window.location.reload(false);
}); })(); }

function sokolevel25() {
(function() {
var levelData = ["eeeeeeeee      ","e       e      ","e       eeee   ","ee eeee e  e   ","ee eyee    e   ","e ccc c  cce   ","e  e ee c  e   ","e  e ee  c eeee","eeee  ccc ce  e"," e   ee   ppppe"," e e   e epp pe"," e   e e eepppe"," eeeee c  epppe","     ee   eeeee","      eeeee    "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level25 = document.getElementById('level25');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level25.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'e') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'e' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'e') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Двадцять п\'ятий рівень пройдено!');
setCookie('riven', '26lfytuy.html');
window.location.reload(false);
}); })(); }

function sokolevel26() {
(function() {
var levelData = ["eeeeee     eeee    ","e    eeeeeee  eeeee","e   ce  e  c  e   e","e  c  c  c e c c  e","eec c   e ye c    e","e  c eeeeeeeeeee ee","e e   epppppppe ce ","e ee  e ppppppe  e ","e e   cppppppppc e ","e e c epppp ppe  e ","e  c ceeeeceeee ce ","e c   eee c   c  ee","e c     c c  c    e","ee eeeeee c eeeee e","e         e       e","eeeeeeeeeeeeeeeeeee"], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level26 = document.getElementById('level26');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level26.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'e') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'e' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'e') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Він був великий, але і його пройдено!');
setCookie('riven', '27bkwrla.html');
window.location.reload(false);
}); })(); }

function sokolevel27() {
(function() {
var levelData = ["    eeeeeee        ","    e  e  eeee     ","eeeee cec e  ee    ","epp e  e  e   e    ","epp e cec e  ceeee ","ep  e     ec  e  e ","epp   ce  e c    e ","eppye  ec ec  e  e ","epp e ce     ce  e ","epp e  eccec  e  ee","epp e ce  e  cec  e","epp e  e  e   e   e","eep eeee  eeeee   e"," eeee  eeee   eeeee"], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level27 = document.getElementById('level27');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level27.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'e') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'e' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'e') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Двадцятий сьомий рівень позаду!');
setCookie('riven', '28ywjefw.html');
window.location.reload(false);
}); })(); }

function sokolevel28() {
(function() {
var levelData = ["eeeeeeeeeeeeeee    ","epppppppppp  peeee ","eppppppppppccpe  e ","eeeeeeeeeeec e   ee","e      c  c     c e","ee eeee   e  c e  e","e      e   ee  e ee","e  ce  e ee  eee ee","e c eceee    eee ee","eee  c e  e  eee ee","eee    c ee e  e ee"," e c  e  c  c c   e"," e  c  ceccc  e   e"," e  e  c      eeeee"," e yee  e  e  e    "," eeeeeeeeeeeeee    "], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level28 = document.getElementById('level28');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level28.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'e') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'e' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'e') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Двадцять восьмий рівень теж пройдено!');
setCookie('riven', '29posdfg.html');
window.location.reload(false);
}); })(); }

function sokolevel29() {
(function() {
var levelData = ["eeee               ","e  eeeeeeeeeeeeee  ","e  e   ppeppppppe  ","e  e e eeeee pppe  ","eece    ppppppppe  ","e   eeceeeeee  eeee","e c e     eeeeeey e","eec e c   eeeeee  e","e  c ecccee       e","e      e    ececeee","e eeee eccccc    e ","e e    c     e   e ","e e   ee ee     eee","e eeeeeeceeeeee c e","e        e    e   e","eeeeeeeeee    eeeee"], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level29 = document.getElementById('level29');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level29.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'e') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'e' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'e') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Тридцятий рівень залишився позаду!');
setCookie('riven', '30neroop.html');
window.location.reload(false);
}); })(); }

function sokolevel30() {
(function() {
var levelData = ["  rrrrr","  r   r","rrr apr","rycc  r","r c ppr","rrr   r","  rrrrr"], level = [[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level30 = document.getElementById('level30');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level30.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'r') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'e' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'r') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Тридцятий рівень залишився позаду!');
setCookie('riven', '31zkdurh.html');
window.location.reload(false);
}); })(); }

function sokolevel00() {
(function() {
var levelData = ["","","","","","","","","","","","","","","",""], level = [[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[] ,[]];
var x, y, dx, dy, cell, fwdCell, fwd2cell, level12 = document.getElementById('level12');
for (var n = 0; n < levelData.length; n++)
    for (var m = 0; m < levelData[n].length; m++) {
        level[n].push(div = document.createElement('div'));
        div.className = levelData[n][m] == ' ' ? 's' : levelData[n][m];
        level12.appendChild(div);
        if (levelData[n][m] == 'y')  x = m, y = n; }
window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) dx = -1, dy = 0;
    else if (e.keyCode == 39) dx = 1, dy = 0;
    else if (e.keyCode == 38) dx = 0, dy = -1;
    else if (e.keyCode == 40) dx = 0, dy = 1;
    else return;
    if ((fwdCell = level[y + dy][x + dx]).className == 'e') return;
    var cell = level[y][x];
    if (fwdCell.className == 'c' || fwdCell.className == 'a') {
        var fwd2cell = level[y + dy + dy][x + dx + dx];
        if (fwd2cell.className == 'e' || fwd2cell.className == 'c' || fwd2cell.className == 'a')
            return;
        fwd2cell.className = fwd2cell.className == 'p' ? 'a' : 'c';
        fwdCell.className = fwdCell.className == 'a' ? 'p' : 's'; }
    if (fwdCell.className == 'e') return;
    cell.className = cell.className == 'Y' ? 'p' : 's';
    fwdCell.className = fwdCell.className == 'p' ? 'Y' : 'y';
    x += dx; y += dy;
    for (var n = 0; n < level.length; n++)
        for (var m = 0; m < level[n].length; m++)
            if (level[n][m].className == 'c') return;
alert('Дванадцятий рівень пройдено!');
setCookie('riven', '31zkdurh.html');
window.location.reload(false);
}); })(); }

function OffScroll () {
var winScrollTop = $(window).scrollTop();
$(window).bind('scroll',function () {
$(window).scrollTop(winScrollTop);
});}
