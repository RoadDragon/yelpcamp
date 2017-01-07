var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
    {
        name: "Wye Valley Campground", 
        image: "https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg",
        description: "blah blah this is the actual name of the campground pictured. Mlkshk cardigan vegan enamel pin hexagon venmo. Twee pickled umami, banjo affogato fap occupy lumbersexual. Etsy echo park messenger bag, 90's typewriter kickstarter single-origin coffee banjo. Slow-carb enamel pin deep v, chia disrupt everyday carry mlkshk fashion axe prism. Cornhole banh mi craft beer drinking vinegar. Glossier you probably haven't heard of them fanny pack vegan, freegan organic whatever pour-over chia selfies. Tofu meggings VHS, 90's stumptown actually subway tile quinoa photo booth distillery."
    },
    {
        name: "Sweat Lodge Mountain", 
        image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg",
        description: "This looks like the hill on which I did sweat lodges near San Diego. Chicharrones viral 3 wolf moon, you probably haven't heard of them selvage literally hexagon pour-over. Hot chicken fanny pack poutine, distillery marfa pug prism offal four dollar toast pinterest pabst ethical. Distillery crucifix flexitarian, sriracha man braid scenester locavore live-edge etsy tumblr kinfolk intelligentsia. Photo booth everyday carry literally schlitz, intelligentsia whatever occupy fashion axe godard kogi. Fingerstache truffaut godard man bun brunch. 90's organic fixie typewriter glossier, put a bird on it skateboard butcher succulents pitchfork health goth hashtag gluten-free brooklyn scenester. DIY marfa chillwave truffaut gastropub church-key."
    },
    {
        name: "Burning Man Village", 
        image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg",
        description: "Only stupid or crazy people on drugs go to the Nevada desert in summer. Raw denim deep v kogi, knausgaard hammock tote bag tacos locavore post-ironic single-origin coffee VHS seitan wolf pop-up neutra. Master cleanse godard pop-up waistcoat, post-ironic street art jianbing pinterest bicycle rights scenester franzen man bun fingerstache sriracha. 90's letterpress before they sold out actually, neutra raw denim vegan single-origin coffee listicle cardigan tumeric hoodie enamel pin. Ugh pok pok fanny pack taxidermy tote bag chillwave williamsburg pop-up. Disrupt put a bird on it dreamcatcher mixtape yuccie beard. Flexitarian copper mug glossier brooklyn deep v migas. Stumptown blue bottle af pop-up, cray authentic craft beer lyft everyday carry glossier cliche sartorial salvia."
    }
    ];
    
function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } 
        console.log("removed campgrounds!");
        // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    // create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                    
                }
            });
        });
    });
}


    
    

module.exports = seedDB;
