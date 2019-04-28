var old_categories = [
"human","sneaker","chair","hat","lamp","bottle","cabinet/shelf","cup","car","glasses","picture/frame","desk","handbag","street lights","book/notebook/menu","plate","helmet","leather shoe","pillow","glove","potted plant","bracelet","flower","display/tv","storage box","plants pot/vase","bench","goblet","boot","dining table","umbrella","boat","flag","speaker","trash bin","stool","backpack","sofa","belt","carpet","basket","towel/napkin","slipper","bowl","bucket","coffee table","jeep/suv","toy","tie","bed","traffic light","pen/pencil","microphone","sandal","can","necklace","mirror","tap","bicycle","bread","high heel","ring","van","watch","basin","sink","horse","fish","apple","camera","candle","stuffed toy/teddy bear","cake","motorcycle","wild bird","laptop","knife","cellphone","quant","road sign","cow","outlet","clock","drum","fork","bus","hanger","truck","nightstand","pot","sheep","guita","roadblocks","tea pot","keyboard","tripod","hockey","fan","dog","spoon","blackboard/whiteboard","balloon","air conditioner","cymbal","mouse","telephone","pickup","orange","banana","airplane","luggage","skis","soccer","trolley","oven","remote","baseball glove","roll paper","refrigerator","train","tomato","machinery vehicle","tent","shampoo/shower gel","head phone","lantern","donut","detergent","sailboat","tangerine","pizza","kite","computer box","elephant","cosmetic bottle","gas stove","broccoli","toilet","baby car","shovel","baseball bat","microwave","skateboard","surfboard","surveillance camera","gun","life ring","cat","lemon","hand sanitizer","zebra","duck","sports car","giraffe","pumpkin","piano/digital piano/pipe organ","stop sign","radiator","power supply","tissue","carrot","washing machine","range hood","cookies","chopping block","tennis racket","candy","skating shoe","scissors","folder","baseball","strawberry","bow tie","pigeon","chilli","coffe machine","bathtub","snowboard","suitcase","grape","ladder","pear","football","basketball","potato","painting brush","printer","billiards","fire hydrant","goose","projector","ham sausage","fire extinguisher","plug-in board","breathing mask","tennis","chopsticks","electromagnetic oven","pie","frisbee","kettle","hamburger","golf club","lorry","cucumber","wallet/purse","blender","cake tong","slide","hot dog","toothbrush","facial cleanser","mango","deer","egg","violin","maker pen","ship","chicken","onion","ice cream","tape","wheelchair","plum","soap","scale","watermelon","cabbage","router/modem","golf ball","pine apple","tower crane","fire engine","peach","cello","notepaper","tricycle","toaster","helicopter","pod","carriage","earphone","penguin","hurdle","swing","radio/recorder","CD","parking meter","cigarette","swan","brush","garlic","french fries","horn","avocado","sachs","trumpet","sandwich","cue","kiwi fruit","bear","fishing rod","cherry","tablet","sticky green leafy vegetables","nut","corn","key","screwdriver","globe","broom","pliers","hammer","volleyball","aubergine","trophy","dates","board eraser","rice","ruler","dumb-bell","traffic sign","hamimelon","stapler","camel","lettuce","goldfish","meat balls","medal","toothpaste","antelope","shrimp","rickshaw","trombone","pomegranate","coconut","jellyfish","calculator","mushroom","treadmill","butterfly","egg tart","cheese","pomelo","pig","formula car","rice cooker","tuba","crosswalk sign","papaya","hair dryer","green onion","potato crisps","dolphin","sushi","urinal","donkey","electric drill","spring rolls","tortoise/turtle","parrot","flute","water scoop","shark","steak","poker","telescope","alpaca","radish","noodles","yak","mop","crab","microscope","barbell","steamed bread","baozi","lion","cosmetic pen","kohlrabi","polar bear","lighter","mangosteen","seal","comb","eraser","pitaya","scallop","stationery box","saw","table tennis bat","okra","starfish","monkey","eagle","durian","(go/chess etc)board","rabbit","french horn","ambulance","cigar","asparagus","balance car","spaghetti","target"
];

var categories = [
"person","sneakers","chair","hat","lamp","bottle","cabinet/shelf","cup","car","glasses","picture/frame","desk","handbag","street lights","book","plate","helmet","leather shoes","pillow","glove","potted plant","bracelet","flower","tv","storage box","vase","bench","wine glass","boots","dining table","umbrella","boat","flag","speaker","trash bin/can","stool","backpack","couch","belt","carpet","basket","towel/napkin","slippers","bowl","barrel/bucket","coffee table","suv","toy","tie","bed","traffic light","pen/pencil","microphone","sandals","canned","necklace","mirror","faucet","bicycle","bread","high heels","ring","van","watch","hotair balloon","sink","horse","fish","apple","camera","candle","teddy bear","cake","motorcycle","wild bird","laptop","knife","cell phone","paddle","traffic sign","cow","power outlet","clock","drum","fork","bus","hanger","truck","nightstand","pot/pan","sheep","guitar","traffic cone","tea pot","keyboard","tripod","hockey","fan","dog","spoon","blackboard/whiteboard","balloon","air conditioner","cymbal","mouse","telephone","pickup truck","orange","banana","airplane","luggage","skis","soccer","trolley","oven","remote","baseball glove","paper towel","refrigerator","train","tomato","machinery vehicle","tent","shampoo/shower gel","head phone","lantern","donut","cleaning products","sailboat","tangerine","pizza","kite","computer box","elephant","toiletries","gas stove","broccoli","toilet","stroller","shovel","baseball bat","microwave","skateboard","surfboard","surveillance camera","gun","life saver","cat","lemon","liquid soap","zebra","duck","sports car","giraffe","pumpkin","piano","stop sign","radiator","converter","tissue","carrot","washing machine","vent","cookies","cutting/chopping board","tennis racket","candy","skating and skiing shoes","scissors","folder","baseball","strawberry","bow tie","pigeon","pepper","coffee machine","bathtub","snowboard","suitcase","grapes","ladder","pear","american football","basketball","potato","paint brush","printer","billiards","fire hydrant","goose","projector","sausage","fire extinguisher","extension cord","facial mask","tennis ball","chopsticks","electronic stove and gas stove","pie","frisbee","kettle","hamburger","golf club","chainsaw","cucumber","clutch","blender","tong","slide","hot dog","toothbrush","facial cleanser","mango","deer","egg","violin","marker","ship","chicken","onion","ice cream","tape","wheelchair","plum","bar soap","scale","watermelon","cabbage","router/modem","golf ball","pine apple","crane","fire truck","peach","cello","notepaper","tricycle","toaster","helicopter","green beans","carriage","earphone","penguin","hurdle","swing","radio","CD","parking meter","cigar","swan","brush","garlic","french fries","horn","avocado","saxophone","trumpet","sandwich","cue","kiwi fruit","bear","fishing rod","cherry","tablet","green vegetables","nuts","corn","key","screwdriver","globe","broom","pliers","hammer","volleyball","eggplant","trophy","dates","board eraser","rice","tape measure/ruler","dumbbell","lobster","hamimelon","stapler","camel","lettuce","goldfish","meat balls","medal","toothpaste","antelope","shrimp","rickshaw","trombone","pomegranate","coconut","jellyfish","calculator","mushroom","treadmill","butterfly","egg tart","cheese","pomelo","pig","race car","rice cooker","tuba","crosswalk sign","papaya","hair drier","green onion","chips","dolphin","sushi","urinal","donkey","electric drill","spring rolls","tortoise/turtle","parrot","flute","measuring cup","shark","steak","poker card","binoculars","llama","radish","noodles","yak","mop","crab","microscope","barbell","bread/bun","baozi","lion","iron","red cabbage","polar bear","lighter","mangosteen","seal","comb","eraser","pitaya","scallop","pencil case","saw","table tennis paddle","okra","starfish","monkey","eagle","durian","game board","rabbit","french horn","ambulance","flashlight","asparagus","hoverboard","pasta","target"
];

var CategoriesTree = [
    {'name' : 'Human & Accessory', 
        'subCategories' : [0, 63, 61, 55, 21, 341, 248, 344, 134, 30, 267, 71, 47, 101, 125, 131, 14, 122, 32, 275, 288, 360]}, 
    {'name' : 'Clothes', 
        'subCategories' : [16, 3, 194, 9, 48, 172, 42, 17, 1, 28, 60, 167, 53, 12, 178, 110, 36, 40, 205, 19, 38]}, 
    {'name' : 'Living room', 
        'subCategories' : [49, 37, 35, 2, 26, 45, 29, 11, 88, 6, 24, 81, 4, 102, 97, 25, 20, 22, 10, 70, 157, 56, 82, 86, 18, 41, 39, 338]}, 
    {'name' : 'Shower room', 
        'subCategories' : [57, 65, 137, 315, 176, 210, 289, 224, 123, 211, 149, 127, 44, 159, 117, 331, 270, 310, 161]},
    {'name' : 'Kitchen', 
        'subCategories' : [43, 15, 84, 99, 196, 76, 89, 162, 206, 306, 197, 118, 114, 141, 175, 237, 5, 7, 27, 200, 93, 207, 135, 164, 322]}, 
    {'name' : 'Office supplies & Tools', 
        'subCategories' : [51, 185, 216, 348, 283, 168, 279, 297, 345, 221, 169, 235, 100, 277, 34, 105, 326, 269, 272, 139, 349, 271, 268, 225, 192, 333, 180, 250, 317, 203]}, 
    {'name' : 'Electronic products', 
        'subCategories' : [75, 263, 94, 104, 246, 132, 241, 124, 190, 186, 158, 228, 193, 33, 245, 253, 52, 77, 69, 144, 95, 23, 115]}, 
    {'name' : 'Transportation', 
        'subCategories' : [8, 62, 87, 85, 46, 106, 121, 231, 152, 232, 359, 73, 58, 236, 240, 305, 292, 113, 138, 222, 362, 119, 109, 238, 31, 128, 217, 50, 156, 308, 79, 247, 188, 13, 92, 64]}, 
    {'name' : 'Foods', 
        'subCategories' : [54, 59, 336, 335, 318, 301, 72, 130, 198, 163, 201, 257, 314, 252, 312, 126, 191, 209, 329, 278, 363, 220, 302, 265, 166, 214, 287, 324]},
    {'name' : 'Fruits', 
        'subCategories' : [68, 181, 223, 233, 226, 108, 107, 230, 294, 171, 148, 295, 212, 259, 282, 355, 179, 254, 262, 342, 276, 129, 309, 303, 346]}, 
    {'name' : 'Vegetables', 
        'subCategories' : [227, 160, 154, 120, 184, 274, 351, 251, 219, 298, 339, 328, 174, 285, 266, 136, 311, 264, 204, 361, 239]}, 
    {'name' : 'Animal', 
        'subCategories' : [133, 153, 357, 319, 242, 337, 327, 290, 284, 150, 330, 213, 260, 340, 353, 147, 98, 90, 80, 304, 66, 316, 218, 151, 189, 300, 354, 320, 249, 173, 74, 332, 291, 347, 296, 323, 313, 286, 67, 352, 343, 281]}, 
    {'name' : 'Sport', 
        'subCategories' : [112, 183, 170, 182, 116, 140, 229, 202, 273, 187, 258, 350, 195, 165, 96, 299, 280, 334, 325, 356, 244, 208, 199, 177, 111, 142, 143, 243, 78, 261, 146, 145, 364]}, 
    {'name' : 'Musical instruments', 
        'subCategories' : [83, 103, 215, 234, 155, 91, 321, 256, 307, 293, 358, 255]}, 
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
        canvas.width = this.width;
        canvas.height = this.height;
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
    ctx.drawImage(img, 0, 0);
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
        // ctx.rect(bbox[0], bbox[1], bbox[2], bbox[3]);
        ctx.strokeRect(bbox[0], bbox[1], bbox[2] - bbox[0], bbox[3] - bbox[1]);
        // ctx.stroke();

        ctx.font = "20px Arial";
        ctx.fillStyle = color;
        ctx.fillText(data[i].category, bbox[0], bbox[1] - 5);

    }
    ctx.stroke();
}
