function marcoBlanco() {
  fill(255);
  noStroke();
  rect(400, 0, 400, anchoY);
  rect(400, 400-anchoY, 400, anchoY);
  rect(400, 0, anchoX, 400);
  rect(800-anchoX, 0, anchoX, 400);
}
