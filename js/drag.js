$(function () {
    $("#imgParent").css('left',design.getClientRects()[0].x)
    $("#imgParent").css('top',design.getClientRects()[0].y)
    $("#imgParent").css('width',design.getClientRects()[0].width)
    $("#imgParent").css('height',design.getClientRects()[0].height)
    $("#imgParent").css('z-index',5000)
    

  $("#imgParent").resizable({
    grid: [1, 1],
  });
  $("#imgParent").draggable();
  
});