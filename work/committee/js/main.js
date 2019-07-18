var svg;
function init(evt) {
  if (window.svgDocument == null) {
    svg = evt.target.ownerDocument;
  }
  addRotateTransform('wheel-1', 2, 1);
  addRotateTransform('wheel-2', 2, 1);
}

function addRotateTransform(target_id, dur, dir) {
  var my_element = svg.getElementById(target_id);
  var a = svg.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
  var bb = my_element.getBBox();
  var cx = bb.x + bb.width/2;
  var cy = bb.y + bb.height/2;
  a.setAttributeNS(null, "attributeName", "transform");
  a.setAttributeNS(null, "attributeType", "XML");
  a.setAttributeNS(null, "type", "rotate");
  a.setAttributeNS(null, "dur", dur + "s");
  a.setAttributeNS(null, "repeatCount", "indefinite");
  a.setAttributeNS(null, "from", "0 "+cx+" "+cy);
  a.setAttributeNS(null, "to", 360*dir+" "+cx+" "+cy);
  my_element.appendChild(a);
  a.beginElement();
}
  
