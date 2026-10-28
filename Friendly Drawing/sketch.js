let Shape = 1;
let run = 1;
let run1 = 1;
let run3 = 1;
let drawing = true;
let ShapeIndicator = true;

function setup() {
    createCanvas(1680, 930);
    background("Brown");
}

async function ChangeShape() {
    //When mouse is clicked, change to different shape
    if (run === 0) {
        return
    }
    if (run === 1) {
        done = false
        console.log("I will sleep now");
        if (Shape === 3) {
            Shape = 1
        } else {
            Shape = Shape + 1
        }
        run = 0
        await sleep(200);
        console.log("I am awake now");
        run = 1
    }
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function drawingset() {
    if (run1 === 0) {
        return
    }
    if (run1 === 1) {
        done = false
        if (drawing === false && done === false) {
            drawing = true
            done = true
        }
        if (drawing === true && done === false) {
            drawing = false
        }
        run1 = 0
        await sleep(200);
        run1 = 1
    }
}

async function ShapeIndicatorSet() {
    if (run3 === 0) {
        return
    }
    if (run3 === 1) {
        done = false
        if (ShapeIndicator === false && done === false) {
            ShapeIndicator = true
            done = true
        }
        if (ShapeIndicator === true && done === false) {
            ShapeIndicator = false
        }
        run3 = 0
        await sleep(200);
        run3 = 1
    }
}
function keyPressed() {
    if (key === 'd') {
        ChangeShape();
    }
    if (key === 'c') {
        clear();
        background("Brown");
    }
    if (key === 'i') {
        ShapeIndicatorSet();
    }
}

function draw() {
    if (mouseIsPressed === true) {
        if (mouseButton.left) {
            //Draw Shapes
            if (Shape === 1) {
                circle(mouseX, mouseY, 100);
            }
            if(Shape === 2) {
                square(mouseX, mouseY, 100);
            }
            if (Shape === 3) {
                triangle(mouseX, mouseY, mouseX + 50, mouseY + 100, mouseX - 50, mouseY + 100);
            }
            /*
            if (Shape === 4) {
                ellipse(mouseX, mouseY, 100, 50);
            }
            if (Shape === 5) {
                rect(mouseX, mouseY, 100, 50);
            }
                */
        }
    }

    if (ShapeIndicator === true) {
        //draw the shape shown permanently on the top left corner of the canvas
        fill('red');
        square(1600, 0, 80);
        //Draw Shapes
        if (Shape === 1) {
            circle(1640, 40, 70);
        }
        if(Shape === 2) {
            square(1610, 10, 60);
        }
        if (Shape === 3) {
            triangle(1640, 10, 1670, 70, 1610, 70);
        }
        /*
        if (Shape === 4) {
            ellipse(1640, 40, 70, 35);
        }
        if (Shape === 5) {
            rect(1640, 40, 70, 35);
        }
        */
        fill('white');
    }
}
