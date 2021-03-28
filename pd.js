const ELM_RECT_SIZE = 60;
const ELM_SPACER = 2;

function getColorForCategory(category) {
    if (category == "diatomic nonmetal") {
        return "green";
    }
    if (category == "alkali metal") {
        return "yellow";
    }
    if (category == "noble gas") {
        return "red";
    }
    if (category == "alkaline earth metal") {
        return "blue";
    }
    if (category == "metalloid") {
        return "cyan";
    }
    if (category == "polyatomic nonmetal") {
        return "pink";
    }
    if (category == "post-transition metal") {
        return "purple";
    }
    if (category == "transition metal") {
        return "lightgreen";
    }
    if (category == "lanthanide") {
        return "orange";
    }
    if (category == "actinide") {
        return "#c8a2c8";
    }
    return "#EFEFEF";
}

function drawOneElement(ctx, elm) {
    ctx.fillStyle = getColorForCategory(elm.category);
    var x = (elm.row - 1) * (ELM_RECT_SIZE + ELM_SPACER);
    var y = (elm.col - 1) * (ELM_RECT_SIZE + ELM_SPACER);
    ctx.fillRect(x, y, ELM_RECT_SIZE, ELM_RECT_SIZE);
    ctx.fillStyle = "#000000";
    ctx.font = '12px Arial';
    y = y + 12;
    ctx.fillText(elm.number, x + 2, y);
    ctx.font = 'bold 20px Arial';
    var w = ctx.measureText(elm.symbol).width;
    y = y + 17;
    ctx.fillText(elm.symbol, x + ELM_RECT_SIZE / 2 - w / 2, y);
    ctx.font = '9px Arial';
    var w = ctx.measureText(elm.name).width;
    y = y + 12;
    ctx.fillText(elm.name, x + ELM_RECT_SIZE / 2 - w / 2, y);
    ctx.font = '9px Arial';
    var w = ctx.measureText(elm.atomic_mass).width;
    y = y + 12;
    ctx.fillText(elm.atomic_mass, x + ELM_RECT_SIZE / 2 - w / 2, y);

}


function drawPd() {
    var canvas = document.getElementById("pd");
    var ctx = canvas.getContext("2d");

    for (var i = 0; i < TOTAL_ELEMENTS; i++) {
        var elm = elements[i];
        drawOneElement(ctx, elm);
    }
}

