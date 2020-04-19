function lineChart(obj,dom){
    var cvs = dom.getContext("2d"),
        width = dom.width,
        height=dom.height,
        data = obj,
        xLength=data.x.length,
        yLength=data.y.length,
        stepWidth = (width-80)/(xLength-1),
        stepHeight = (height-80)/(yLength-1),
        move = [40,40],
        line = [40,height-40],
        hMove = [40,40],
        hLine = [width-40,40],
        lMove = [40,40],
        lLine = [40,height-40];
//竖线
    for (var i=0;i<xLength;i++){
        cvs.font = '21px 微软雅黑';
        cvs.fillText(data.x[i],line[0]-10,line[1]+25)
        cvs.beginPath();
        cvs.moveTo(move[0],move[1]);
        cvs.lineTo(line[0],line[1]);
        move[0]+=stepWidth;
        line[0]+=stepWidth;
        cvs.strokeStyle="#000000";
        cvs.stroke();
        cvs.closePath();
    }

//Y单位
    cvs.font = '21px 微软雅黑';
    cvs.fillText(data.yUnit,50,30)

//横线
    for (var j=0;j<yLength;j++){
        cvs.font = '21px 微软雅黑';
        cvs.textAlign = "right";
        cvs.fillText(data.y[j],38,(height-40)-j*stepHeight+5);

        cvs.beginPath();
        cvs.moveTo(hMove[0],hMove[1]);
        cvs.lineTo(hLine[0],hLine[1]);
        hMove[1]+=stepHeight;
        hLine[1]+=stepHeight;
        cvs.strokeStyle="#000000";
        cvs.stroke();
        cvs.closePath();
    }

    //折线
    for (var k=0;k<data.line.length;k++){
        var item = data.line[k].da;
        for (var n=0;n<item.length;n++){
            cvs.strokeStyle=data.line[k].color;
            cvs.beginPath();
            cvs.moveTo();
            cvs.lineTo();
            cvs.stroke();
        }
    }
}
