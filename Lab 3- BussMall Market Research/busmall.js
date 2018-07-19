//creatinng an array that will store all the picture objects that I will create from the picture constructor

let pictureArray = [];
console.log(pictureArray)



//crate an object constructor to facilitate soring each image as an object with properties i can access
let Pictures = function(name, filePath, alt, click) { 
    this.name = name; 
    this.filePath = filePath;
    this.alt = alt,
    this.click = click; 
};

//istantiating picture objects for each image using the object constructor above and pushing into my array

let Pic1 = new Pictures ('bag','./Pictures/bag.jpg', 'A picture of a bag', 0);
let Pic2 = new Pictures ('banana', '.Pictures/banana.jpg', 'A picture of a banana',0)
let Pic3 = new Pictures ('bathroom','./Pictures/bathroom.jpg', 'A picture of a bathroom',0);
let Pic4 = new Pictures ('boots','./Pictures/boots.jpg', 'A picture of boots',0);
let Pic5 = new Pictures ('breakfast','./Pictures/breakfast.jpg', 'A picture of a breakfast',0);
let Pic6 = new Pictures ('bubblegum','./Pictures/bubblegum.jpg', 'A picture of bubblegums',0);
let Pic7 = new Pictures ('chair','./Pictures/chair.jpg', 'A picture of a chair',0);
let Pic8 = new Pictures ('cthulhu','./Pictures/cthulhu.jpg', 'A picture of a cthulhu',0);
let Pic9 = new Pictures ('dog-duck','./Pictures/dog-duck.jpg', 'A picture of a dog with a duck muzzle',0);
let Pic10 = new Pictures ('dragon','./Pictures/dragon.jpg', 'A picture of a can with so-called dragon meat in it',0);
let Pic11 = new Pictures ('pen','./Pictures/pen.jpg', 'A picture of a pens',0);
let Pic12 = new Pictures ('pet-sweep','./Pictures/pet-sweep.jpg', 'A picture of a dog with a sweepshape like shoes on',0);
let Pic13 = new Pictures ('scissors','./Pictures/scissors.jpg', 'An overly intricate scissor',0);
let Pic14 = new Pictures ('shark','./Pictures/shark.jpg', 'A shark-like blanket',0);
let Pic15 = new Pictures ('sweep','./Pictures/sweep.jpg', 'A picture of a baby sweeping',0);
let Pic16 = new Pictures ('tauntaun','./Pictures/tauntaun.jpg', 'A picture of a someone in a blanket on the floor',0);
let Pic17 = new Pictures ('unicorn','./Pictures/unicorn.jpg', 'A picture of a can with caption unicorn meat',0);
let Pic18 = new Pictures ('usb','./Pictures/usb.gif', 'A picture of a USD with the tail of a dragon',0);
let Pic19= new Pictures ('water-can','./Pictures/water-can.jpg', 'A picture of a water can',0);
let Pic20 = new Pictures ('wine-glass','./Pictures/wine-glass.jpg', 'A picture of a weird wine glass',0);

//storing the object recently instantiated inside the picture array
pictureArray.push(Pic1,Pic2,Pic3,Pic4,Pic5,Pic6,Pic7,Pic8);
