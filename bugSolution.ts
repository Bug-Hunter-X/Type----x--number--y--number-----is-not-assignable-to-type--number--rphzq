function printCoord(pt: { x: number; y: number } | number) {
  if (typeof pt === 'number') {
    console.log("The coordinate is a single number: " + pt);
  } else {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
}

printCoord({ x: 3, y: 7 });
printCoord(10); 