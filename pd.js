const ELM_RECT_SIZE = 60;
const ELM_SPACER = 2;
function drawOneElement(ctx, elm) {
    ctx.fillStyle = "#c8a2c8";
    var x = (elm.xpos - 1) * (ELM_RECT_SIZE + ELM_SPACER);
    var y = (elm.ypos - 1) * (ELM_RECT_SIZE + ELM_SPACER);
    ctx.fillRect(x, y, ELM_RECT_SIZE, ELM_RECT_SIZE);
    ctx.fillStyle = "#000000";
    ctx.font = '12px serif';
    y = y + 12;
    ctx.fillText(elm.number, x + 2, y);
    ctx.font = 'bold 20px serif';
    var w = ctx.measureText(elm.symbol).width;
    y = y + 17;
    ctx.fillText(elm.symbol, x + ELM_RECT_SIZE / 2 - w / 2, y);
    ctx.font = '9px serif';
    var w = ctx.measureText(elm.name).width;
    y = y + 12;
    ctx.fillText(elm.name, x + ELM_RECT_SIZE / 2 - w / 2, y);
    ctx.font = '9px serif';
    var w = ctx.measureText(elm.atomic_mass).width;
    y = y + 12;
    ctx.fillText(elm.atomic_mass, x + ELM_RECT_SIZE / 2 - w / 2, y);
    
}


function drawPd() {
    var canvas = document.getElementById("pd");
    var ctx = canvas.getContext("2d");

    for (var i = 0; i < 119; i++) {
        var elm = elements[i];
        drawOneElement(ctx, elm);
    }
}

