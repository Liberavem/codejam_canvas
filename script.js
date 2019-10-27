let img = new Image(256, 256);
img.src = 'Icons/image.png';

function getData() {
    fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json')
        .then(response => response.json())
        .then(result => drawCanvasSecond(result));
}

function getDataSecond() {
    fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json')
        .then(response => response.json())
        .then (data => data.map( arr =>(arr.map(x => `#${x}`))))
        .then(result => drawCanvasFirst(result));

}


let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let btn_load_4x4 = document.getElementById('first');
btn_load_4x4.addEventListener('click', () => getDataSecond());

let btn_load_32x32 = document.getElementById('second');
btn_load_32x32.addEventListener('click', () => getData());

let btn_load_256x256 = document.getElementById('third');
btn_load_256x256.addEventListener('click', () => drawCanvasThird());

function drawCanvasFirst(A) {
    let width = A[0].length,
        height = A.length,
        scale = 64;

    canvas.width = width * scale;
    canvas.height = height * scale;

    for (var row = 0; row < height; row++) {
        for (var col = 0; col < width; col++) {
            ctx.fillStyle = A[row][col];
            ctx.fillRect(col * scale, row * scale, scale, scale);
        }
    }
}

function drawCanvasSecond(A) {
    let width = A[0].length,
        height = A.length,
        scale = 8;

    canvas.width = width * scale;
    canvas.height = height * scale;

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < height; col++) {
            ctx.fillStyle = "rgba(" + A[row][col][0] + "," + A[row][col][1] + "," + A[row][col][2] + "," + (A[row][col][3]) + ")";
            ctx.fillRect(col * scale, row * scale, scale, scale);
        }
    }
}

function drawCanvasThird() {
    ctx.drawImage(img, 0, 0, 256, 256);
}

