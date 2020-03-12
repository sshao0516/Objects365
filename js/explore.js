var old_categories = [
"human","sneaker","chair","hat","lamp","bottle","cabinet/shelf","cup","car","glasses","picture/frame","desk","handbag","street lights","book/notebook/menu","plate","helmet","leather shoe","pillow","glove","potted plant","bracelet","flower","display/tv","storage box","plants pot/vase","bench","goblet","boot","dining table","umbrella","boat","flag","speaker","trash bin","stool","backpack","sofa","belt","carpet","basket","towel/napkin","slipper","bowl","bucket","coffee table","jeep/suv","toy","tie","bed","traffic light","pen/pencil","microphone","sandal","can","necklace","mirror","tap","bicycle","bread","high heel","ring","van","watch","basin","sink","horse","fish","apple","camera","candle","stuffed toy/teddy bear","cake","motorcycle","wild bird","laptop","knife","cellphone","quant","road sign","cow","outlet","clock","drum","fork","bus","hanger","truck","nightstand","pot","sheep","guita","roadblocks","tea pot","keyboard","tripod","hockey","fan","dog","spoon","blackboard/whiteboard","balloon","air conditioner","cymbal","mouse","telephone","pickup","orange","banana","airplane","luggage","skis","soccer","trolley","oven","remote","baseball glove","roll paper","refrigerator","train","tomato","machinery vehicle","tent","shampoo/shower gel","head phone","lantern","donut","detergent","sailboat","tangerine","pizza","kite","computer box","elephant","cosmetic bottle","gas stove","broccoli","toilet","baby car","shovel","baseball bat","microwave","skateboard","surfboard","surveillance camera","gun","life ring","cat","lemon","hand sanitizer","zebra","duck","sports car","giraffe","pumpkin","piano/digital piano/pipe organ","stop sign","radiator","power supply","tissue","carrot","washing machine","range hood","cookies","chopping block","tennis racket","candy","skating shoe","scissors","folder","baseball","strawberry","bow tie","pigeon","chilli","coffe machine","bathtub","snowboard","suitcase","grape","ladder","pear","football","basketball","potato","painting brush","printer","billiards","fire hydrant","goose","projector","ham sausage","fire extinguisher","plug-in board","breathing mask","tennis","chopsticks","electromagnetic oven","pie","frisbee","kettle","hamburger","golf club","lorry","cucumber","wallet/purse","blender","cake tong","slide","hot dog","toothbrush","facial cleanser","mango","deer","egg","violin","maker pen","ship","chicken","onion","ice cream","tape","wheelchair","plum","soap","scale","watermelon","cabbage","router/modem","golf ball","pine apple","tower crane","fire engine","peach","cello","notepaper","tricycle","toaster","helicopter","pod","carriage","earphone","penguin","hurdle","swing","radio/recorder","CD","parking meter","cigarette","swan","brush","garlic","french fries","horn","avocado","sachs","trumpet","sandwich","cue","kiwi fruit","bear","fishing rod","cherry","tablet","sticky green leafy vegetables","nut","corn","key","screwdriver","globe","broom","pliers","hammer","volleyball","aubergine","trophy","dates","board eraser","rice","ruler","dumb-bell","traffic sign","hamimelon","stapler","camel","lettuce","goldfish","meat balls","medal","toothpaste","antelope","shrimp","rickshaw","trombone","pomegranate","coconut","jellyfish","calculator","mushroom","treadmill","butterfly","egg tart","cheese","pomelo","pig","formula car","rice cooker","tuba","crosswalk sign","papaya","hair dryer","green onion","potato crisps","dolphin","sushi","urinal","donkey","electric drill","spring rolls","tortoise/turtle","parrot","flute","water scoop","shark","steak","poker","telescope","alpaca","radish","noodles","yak","mop","crab","microscope","barbell","steamed bread","baozi","lion","cosmetic pen","kohlrabi","polar bear","lighter","mangosteen","seal","comb","eraser","pitaya","scallop","stationery box","saw","table tennis bat","okra","starfish","monkey","eagle","durian","(go/chess etc)board","rabbit","french horn","ambulance","cigar","asparagus","balance car","spaghetti","target"
];

//var categories =
//['Person', 'Other Shoes', 'Sneakers', 'Car', 'Chair', 'Hat', 'Bottle', 'Glasses', 'Cup', 'Lamp', 'Desk', 'Street Lights', 'Bracelet', 'Handbag/Satchel', 'Storage box', 'Cabinet/shelf', 'Plate', 'Gloves', 'Helmet', 'Boat', 'Picture/Frame', 'Bowl/Basin', 'Microphone', 'Book', 'Bench', 'Flower', 'Flag', 'Ring', 'SUV', 'Necklace', 'Potted Plant', 'Leather Shoes', 'Speaker', 'Vase', 'Boots', 'Watch', 'Belt', 'Drum', 'Traffic Light', 'Wine Glass', 'Tie', 'Bicycle', 'Trash bin Can', 'Backpack', 'Slippers', 'Cymbal', 'Barrel/bucket', 'Guitar', 'Moniter/TV', 'Umbrella', 'Pillow', 'Van', 'Stool', 'Bus', 'Lifesaver', 'Sailboat', 'Wild Bird', 'Sandals', 'Bakset', 'Awning', 'Traffic cone', 'Pen/Pencil', 'High Heels', 'Motorcycle', 'Couch', 'Cell Phone', 'Truck', 'Candle', 'Hockey Stick', 'Napkin', 'Tent', 'Canned', 'Tripod', 'Laptop', 'Bread', 'Air Conditioner', 'Power outlet', 'Camera', 'Carpet', 'Ballon', 'Stuffed Toy', 'Pickup Truck', 'Green Vegetables', 'Knife', 'Fork', 'Dinning Table', 'Spoon', 'Paddle', 'Pot', 'Faucet', 'Lantern', 'Pumpkin', 'Mirror', 'Jug', 'Dessert', 'Sink', 'Blackboard/Whiteboard', 'Horse', 'Tomato', 'Machinery Vehicle', 'Clock', 'Dog', 'Crane', 'Hanger', 'Traffic Sign', 'Scooter', 'Towel', 'Keyboard', 'Baseball Glove', 'Other Balls', 'Toiletry', 'Apple', 'Fan', 'Bed', 'Mouse', 'Other Fish', 'Train', 'Skating and Skiing shoes', 'Stop Sign', 'Piano', 'Sports Car', 'Head Phone', 'Orange/Tangerine', 'Chopsticks', 'Lemon', 'Duck', 'Trolley', 'Soccer', 'Stroller', 'Coffee Table', 'Marker', 'Surveillance Camera', 'Strawberry', 'Pepper', 'Cake', 'Refrigerator', 'Telephone', 'Bow Tie', 'Pie', 'Gun', 'Baseball Bat', 'Cow', 'Toilet Paper', 'Heavy Truck', 'Banana', 'Computer Box', 'Airplane', 'Tea pot', 'Egg', 'Oven', 'Luggage', 'Tricycle', 'Gas stove', 'Ladder', 'Carrot', 'Fire Truck', 'Remote', 'Skiboard', 'Baseball', 'Sheep', 'Golf Club', 'Cutting/chopping Board', 'Microwave', 'Fire Hydrant', 'Side Table', 'Ambulance', 'Grape', 'Shovel', 'Radiator', 'Fire Extinguisher', 'Wheelchair', 'Cigar/Cigarette ', 'Billards', 'Potato', 'Scissors', 'Broccoli', 'Basketball', 'Saxophone', 'Nightstand', 'Violin', 'Cleaning Products', 'Snowboard', 'Cookies', 'Cucumber', 'Extention Cord', 'Tong', 'Pigeon', 'Swing', 'Trophy', 'Carriage', 'Cat', 'Tissue', 'Kettle', 'French Fries', 'Cello', 'Hotair ballon', 'Ship', 'Paint Brush', 'earphone', 'Green beans', 'Hamburger', 'Watermelon', 'Skateboard', 'Toilet', 'Chicken', 'Rice', 'Surfboard', 'Speed Limit Sign', 'American Football', 'Elephant', 'Pizza', 'Mask', 'Cabbage', 'Slide', 'Ice cream', 'Sausage', 'Tablet', 'Onion', 'Trumpet', 'Briefcase', 'Cosmetics', 'Projector', 'Wallet/Purse', 'Bathtub', 'Scale', 'Extractor', 'Tape', 'Sushi', 'Peach', 'Folder', 'Flute', 'Green Onion', 'Printer', 'Pineapple', 'Poker Card', 'Toothbrush', 'Golf Ball', 'Flask', 'Coffee Machine', 'Cheese', 'Pasta', 'Swan', 'Lettuce', 'Pear', 'Blender', 'Converter', 'Key', 'Trombone', 'Candy', 'Medal', 'Fishing Rod', 'Rickshaw', 'Showerhead', 'Garlic', 'Deer', 'Broom', 'Corn', 'Dishwasher', 'Parking meter', 'Megaphone', 'Brush', 'Induction Cooker', 'Helicopter', 'Nuts', 'Kite', 'Frisbee', 'Volleyball', 'Chips', 'Mango', 'Penguin', 'Eggplant', 'Shrimp', 'Tennis Racket', 'Cue', 'Hoverboard', 'Kiwi fruit', 'Hot dog', 'Pliers', 'Hamimelon', 'Steak', 'Board Eraser', 'Mushroon', 'Hammer', 'Goose', 'Screwdriver', 'Sandwich', 'Soap', 'Cherry', 'Rice Cooker', 'Coconut', 'Crosswalk Sign', 'Tennis', 'Avocado', 'Pig', 'Hurdle', 'Pomegranate', 'Tape Measur/ Ruler', 'Recorder', 'Crab', 'CD', 'Donut', 'Seal', 'Globe', 'Stapler', 'Tuba', 'Formula 1 ', 'Toaster', 'Washing Machine/Drying Machine', 'Game board', 'Lighter', 'Lion', 'Calculator', 'Notepaper', 'Parrot', 'Electric Drill', 'Jellyfish', 'Plum', 'Table Teniis paddle', 'Pencil Case', 'Oyster', 'French', 'Papaya', 'Asparagus', 'Target', 'Radish', 'Dumpling', 'Rabbit', 'Mop', 'Urinal', 'Scallop', 'Campel', 'Goldfish', 'Meat ball', 'Red Cabbage', 'Zebra', 'Durian', 'Chainsaw', 'Giraffe', 'Baozi', 'Router/modem', 'Buttefly', 'Yak', 'Grapefruit', 'Donkey', 'Hair Dryer', 'Cosmetics Brush/Eyeliner Pencil', 'Egg tart', 'Dolphin', 'Antelope', 'Monkey', 'Eraser', 'Binoculars', 'Treadmill', 'Lobster', 'Dumbbell', 'Spring Rolls', 'Curling', 'Barbell', 'Lipstick', 'Bear', 'Noddles', 'Cosmetics Mirror', 'Table Tennis ', 'Okra', 'Comb'];
var categories =
['Person', 'Other Shoes', 'Sneakers', 'Car', 'Chair', 'Hat', 'Bottle', 'Glasses', 'Cup', 'Lamp', 'Desk', 'Street Lights', 'Bracelet', 'Handbag/Satchel', 'Storage box', 'Cabinet/shelf', 'Plate', 'Gloves', 'Helmet', 'Boat', 'Picture/Frame', 'Bowl/Basin', 'Microphone', 'Book', 'Bench', 'Flower', 'Flag', 'Ring', 'SUV', 'Necklace', 'Potted Plant', 'Leather Shoes', 'Speaker', 'Vase', 'Boots', 'Watch', 'Belt', 'Drum', 'Traffic Light', 'Wine Glass', 'Tie', 'Bicycle', 'Trash bin Can', 'Backpack', 'Slippers', 'Cymbal', 'Barrel/bucket', 'Guitar', 'Moniter/TV', 'Umbrella ', 'Pillow', 'Van', 'Stool', 'Bus', 'Lifesaver', 'Sailboat', 'Wild Bird', 'Sandals', 'Bakset', 'Awning', 'Traffic cone', 'Pen/Pencil', 'High Heels', 'Motorcycle', 'Couch', 'Cell Phone', 'Truck', 'Candle', 'Hockey Stick', 'Napkin', 'Tent', 'Canned', 'Tripod', 'Laptop', 'Bread', 'Air Conditioner', 'Power outlet', 'Camera', 'Carpet', 'Ballon', 'Stuffed Toy', 'Pickup Truck', 'Green Vegetables', 'Knife', 'Fork', 'Dinning Table', 'Spoon', 'Paddle', 'Pot', 'Faucet', 'Lantern', 'Pumpkin', 'Mirror', 'Jug', 'Dessert', 'Sink', 'Blackboard/Whiteboard', 'Horse', 'Tomato', 'Machinery Vehicle', 'Clock', 'Dog', 'Crane', 'Hanger', 'Traffic Sign', 'Scooter', 'Towel', 'Keyboard', 'Baseball Glove', 'Other Balls', 'Toiletry', 'Apple', 'Fan', 'Bed', 'Mouse', 'Other Fish', 'Train', 'Skating shoes', 'Stop Sign', 'Piano', 'Sports Car', 'Head Phone', 'Orange/Tangerine', 'Chopsticks', 'Lemon', 'Duck', 'Trolley', 'Soccer', 'Stroller', 'Coffee Table', 'Marker', 'Surveillance Camera', 'Strawberry', 'Pepper', 'Cake', 'Refrigerator', 'Telephone', 'Bow Tie', 'Pie', 'Gun', 'Baseball Bat', 'Cow', 'Toilet Paper', 'Heavy Truck', 'Banana', 'Computer Box', 'Airplane', 'Tea pot', 'Egg', 'Oven', 'Luggage', 'Tricycle', 'Gas stove', 'Ladder', 'Carrot', 'Fire Truck', 'Remote', 'Skiboard', 'Baseball', 'Sheep', 'Golf Club', 'Cutting/chopping Board', 'Microwave', 'Fire Hydrant', 'Side Table', 'Ambulance', 'Grape', 'Shovel', 'Radiator', 'Fire Extinguisher', 'Wheelchair', 'Cigar/Cigarette ', 'Billards', 'Potato', 'Scissors', 'Broccoli', 'Basketball', 'Saxophone', 'Nightstand', 'Violin', 'Cleaning Products', 'Snowboard', 'Cookies', 'Cucumber', 'Extention Cord', 'Tong', 'Pigeon', 'Swing', 'Trophy', 'Carriage', 'Cat', 'Tissue', 'Kettle', 'French Fries', 'Cello', 'Hotair ballon', 'Ship', 'Paint Brush', 'earphone', 'Green beans', 'Hamburger', 'Watermelon', 'Skateboard', 'Toilet', 'Chicken', 'Rice', 'Surfboard', 'Speed Limit Sign', 'American Football', 'Elephant', 'Pizza', 'Mask', 'Cabbage', 'Slide', 'Ice cream', 'Sausage', 'Tablet', 'Onion', 'Trumpet', 'Briefcase', 'Cosmetics', 'Projector', 'Wallet/Purse', 'Bathtub', 'Scale', 'Extractor', 'Tape', 'Sushi', 'Peach', 'Folder', 'Flute', 'Green Onion', 'Printer', 'Pineapple', 'Poker Card', 'Toothbrush', 'Golf Ball', 'Flask', 'Coffee Machine', 'Cheese', 'Pasta', 'Swan', 'Lettuce', 'Pear', 'Blender', 'Converter', 'Key', 'Trombone', 'Candy', 'Medal', 'Fishing Rod', 'Rickshaw', 'Showerhead', 'Garlic', 'Deer', 'Broom', 'Corn', 'Dishwasher', 'Parking meter', 'Megaphone', 'Brush', 'Induction Cooker', 'Helicopter', 'Nuts', 'Kite', 'Frisbee', 'Volleyball', 'Chips', 'Mango', 'Penguin', 'Eggplant', 'Shrimp', 'Tennis Racket', 'Cue', 'Hoverboard', 'Kiwi fruit', 'Hot dog', 'Pliers', 'Hamimelon', 'Steak', 'Board Eraser', 'Mushroon', 'Hammer', 'Goose', 'Screwdriver', 'Sandwich', 'Soap', 'Cherry', 'Rice Cooker', 'Coconut', 'Crosswalk Sign', 'Tennis', 'Avocado', 'Pig', 'Hurdle', 'Pomegranate', 'Tape Measur/ Ruler', 'Recorder', 'Crab', 'CD', 'Donut', 'Seal', 'Globe', 'Stapler', 'Tuba', 'Formula 1 ', 'Toaster', 'Washing Machine/Drying Machine', 'Game board', 'Lighter', 'Lion', 'Calculator', 'Notepaper', 'Parrot', 'Electric Drill', 'Jellyfish', 'Plum', 'Table Teniis paddle', 'Pencil Case', 'Oyster', 'French', 'Papaya', 'Asparagus', 'Target', 'Radish', 'Dumpling', 'Rabbit', 'Mop', 'Urinal', 'Scallop', 'Campel', 'Goldfish', 'Meat ball', 'Red Cabbage', 'Zebra', 'Durian', 'Chainsaw', 'Giraffe', 'Baozi', 'Router/modem', 'Buttefly', 'Yak', 'Grapefruit', 'Donkey', 'Hair Dryer', 'Cosmetics Brush/Eyeliner Pencil', 'Egg tart', 'Dolphin', 'Antelope', 'Monkey', 'Eraser', 'Binoculars', 'Treadmill', 'Lobster', 'Dumbbell', 'Spring Rolls', 'Curling', 'Barbell', 'Lipstick', 'Bear', 'Noddles', 'Cosmetics Mirror', 'Table Tennis ', 'Okra', 'Comb'];


var CategoriesTree = [
    {'name' : 'Human & Accessory', 
        'subCategories' : [0, 12, 23, 26, 27, 29, 35, 49, 59, 70, 79, 80, 90, 171, 188, 220, 246, 249, 264, 309, 345, 358, 361, 364]}, 
    {'name' : 'Clothes', 
        'subCategories' : [1, 2, 5, 7, 13, 17, 18, 31, 34, 36, 40, 43, 44, 57, 58, 62, 117, 137, 150, 211, 219, 222]}, 
    {'name' : 'Traffic', 
        'subCategories' : [3, 11, 19, 28, 38, 41, 46, 51, 53, 55, 60, 63, 66, 81, 99, 102, 104, 105, 116, 118, 120, 126, 128, 143, 146, 151, 155, 163, 165, 170, 189, 195, 196, 207, 251, 258, 262, 274, 290, 305]}, 
    {'name' : 'Living room', 
        'subCategories' : [4, 9, 10, 14, 15, 20, 24, 25, 30, 33, 50, 52, 64, 67, 69, 75, 76, 78,85, 92, 100, 103, 129, 112, 113,164, 168, 178]},
    {'name' : 'Kitchen', 
        'subCategories' : [6, 8, 16, 21, 39, 83, 84, 86, 88, 93, 123, 135, 147, 149, 152, 161, 162, 185, 192, 225, 237, 238, 244, 257, 261, 288, 306]}, 
    {'name' : 'Office supplies & Tools', 
        'subCategories' : [42, 61, 96, 130, 136, 153, 167, 169, 174, 197, 224, 226, 229, 260, 277, 280, 282, 284, 296, 302, 303, 311, 312, 314, 318, 336, 350, 351]}, 
    {'name' : 'Electronics', 
        'subCategories' : [22, 32, 48, 65, 72, 73, 77, 107, 121, 131, 145, 156, 184, 198, 216, 221, 232, 245, 259, 297, 299, 339]}, 
    {'name' : 'Foods', 
        'subCategories' : [71, 74, 82, 91, 94, 98, 111, 122, 124, 132, 133, 134, 138, 144, 148, 154, 166, 173, 175, 182, 183, 193, 199, 200, 201, 205, 210, 212, 214, 215, 217, 227, 228, 231, 233, 239, 240, 242, 243, 248, 253, 256, 263, 267, 268, 270, 275, 276, 278, 279, 281, 285, 287, 289, 292, 295, 300, 316, 321, 322, 324, 325, 332, 333, 335, 338, 342, 346, 355, 360, 363]},
    {'name' : 'Animal', 
        'subCategories' : [56, 97, 101, 114, 115, 125, 141, 159, 186, 190, 204, 209, 241, 254, 269, 271, 283, 293, 298, 301, 310, 313, 315, 319, 326, 329, 330, 331, 334, 337, 340, 341, 343, 347, 348, 349, 353, 359]}, 
    {'name' : 'Sport', 
        'subCategories' : [37, 45, 47, 54, 68, 87, 108, 109, 119, 127, 139, 140, 157, 158, 160, 172, 176, 177, 179, 181, 187, 194, 202, 206, 208, 213, 218, 230, 234, 236, 247, 250, 265, 266, 272, 273, 291, 294, 304, 308, 317, 320, 323, 352, 354, 356, 357, 362]}, 
    {'name' : 'Bathroom', 
        'subCategories' : [89, 95, 106, 110, 142, 180, 191, 203, 223, 235, 252, 255, 286, 307, 327, 328, 344]}, 
]

function creatCategoryButton(mainCategory) {
    var div = '', i;
    div += '<div class="btn-group">';
    $("#MainCategoryButtonPanel").empty();
    for(i = 0; i < CategoriesTree.length; i++) {
        div += '<button onclick="creatCategoryButton(' + i + ')" type="button" style="width=80px" class="btn btn-dark btn-sm';
        if (i == mainCategory)
            div += ' active';
        div += '">' + CategoriesTree[i].name + '</button>';
        // newline
        if (i == 5) {
            div += '</div><div class="btn-group">';
        }
    }
    div += '</div>';
    $("#MainCategoryButtonPanel").append(div);
    div = ''
    $("#SubCategoryButtonPanel").empty();
    for(i = 0; i < CategoriesTree[mainCategory].subCategories.length; i++) {
        idx = CategoriesTree[mainCategory].subCategories[i];
        div += '<div class="col-lg-2">'
        div += '<button onclick="showImg(' + idx + ')" type="button" class="btn btn-default btn-block btn-sm">' + categories[idx] + '</button>';
        div += '</div>';
        if(i % 6 == 5) {
            div += '<div class="col-lg-12"></div>';
        }
    }
    $("#SubCategoryButtonPanel").append(div);
}
function addAImg(imgId, url, boxes) {
    var div = '';
    //div = '<a>'+url+'</a><div class="col-lg-12" id="imageDisplay' + imgId + '"><canvas class="canvas" style="margin:10px"></canvas></div>';
    div = '<div class="col-lg-12" id="imageDisplay' + imgId + '"><canvas class="canvas" style="margin:10px"></canvas></div>';
    $('#ImageDisplayList').append(div);
    display = $('#imageDisplay' + imgId);
    var canvas = display.find('.canvas')[0];
    var ctx = canvas.getContext("2d");
    var img = new Image;
    img.src = url;
    img.onload = function () {
        reference_lenth = 1024.0;
	    if (this.width >=this.height){
	    	this.ratio = reference_lenth/this.width;
	    	this.height = this.height * this.ratio;
	        this.width = reference_lenth;
	        }
	    else {
	    	this.ratio = reference_lenth/this.height;
	    	this.width = this.width * this.ratio;
	        this.height = reference_lenth;
	        }
        canvas.width = this.width ;
        canvas.height = this.height ;
        renderImage(ctx, this);
        renderBBox(ctx, this, boxes);
    }
}

function loadRandomData(cid) {
    // TODO
    var ret=[];
    $.ajaxSettings.async = false;
    $.getJSON("data_samples.txt", function (data) {
        for(var i = 0; i < data.length; i++) {
            var img_flag = 0;
            for (var j = 0; j < data[i]['gtboxes'].length; j++) {
                if (categories[cid] == data[i]['gtboxes'][j]['category']) {
                    img_flag = 1;
                    break;
                }
            }

            if (img_flag)
                ret.push(data[i]);

            if (ret.length >= 20)
                break;
        }
    });

    console.log(ret.length);
    for(var i = 0; i < ret.length; i++) {
        console.log(i, ret[i].name);
    }
    return ret;
}

function showImg(cid){
    $("#ImageDisplayList").empty();
    items = loadRandomData(cid);
    var i;
    for (i = 0; i < items.length; i++) {
        addAImg(i, items[i].url, items[i].gtboxes);
    }
}

function renderImage(ctx, img) {
    ctx.clearRect(0, 0, img.width, img.height);
    ctx.drawImage(img,0,0,img.width,img.height);
}

function renderBBox(ctx, img, data) {
    for (var i = 0; i < data.length; i++){
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        // color = 'rgba(255, 0, 0, 1.0)';
        color = 'rgba('+r+','+g+','+b+',0.8)';

        // bbox = [100, 100, 200, 200];
        bbox = data[i].rect;
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        x = Math.round(img.ratio*bbox[0]);
        y = Math.round(img.ratio*bbox[1]);
        w = Math.round(img.ratio*(bbox[2]-bbox[0]));
        h = Math.round(img.ratio*(bbox[3]-bbox[1]));
        ctx.strokeRect(x, y, w, h);

        // ctx.stroke();

        ctx.font = "20px Arial";
        ctx.fillStyle = color;
        ctx.fillText(data[i].category, x, y-5);

    }
    ctx.stroke();
}
