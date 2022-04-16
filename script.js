// aba3 el doctorrrrrrrrrrrrrrrrrrr
//homsiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii


/*
variables
var : motagayer
const : sabet ,
let : falakon

const btet3araf la shi sebet ..ma byetgayar
yaane mafine a3ti la for loop maslan


let byetaraf jawa function aw jawa for loop
bas iza jarabet t3arfo tjibe natijeto barrra..bi 2ellak
error..huwe ma3ruf bas deman hal block


var wen maken zabet


/////oopppppppppppppppppppppppppppppp
const designer = {
    name:'sami',
    programs(){},
    skills(){}
}

console.log(designer.name);
designer.programs();
designer.skills();









///////////////////////////////////////
this



const designer = {
    name:'sami',
    programs(){
        console.log(this); // this bterja3 lal object li hye
        //tahtooooo
        //yaane mafrud tetba3 {name , programs}
    }

}

console.log(designer.name);
designer.programs();
designer.skills();

////////////////////////////


const designer = {
    name:'ali',
    programs(){        وظيفه
        console.log(this);
    }

}

استدعاء الوظيفه
designer.programs(); //1

تخزين نسخه عن الوظيقه
const prog =  designer.programs();

استدعاء النسخه
prog(); hala2 he jaweba huwe window..bi 3akes el 1

//w he tab3an mechkle w mishen netjewaj hal shi hon byeje dor
//el bind...kif mnzabeta ? shuf tahetttt

=======$$$$$$$$$$$$===================
tezbita:

const designer = {
    name:'ali',
    programs(){
        console.log(this);
    }

}


designer.programs(); //he li btestad3i
designer.programs; //he yaane enta 3am ta3mul nes5a


//function are objects in javascript
const prog =  designer.programs.bind(designer);


prog();



/////////////////////////////////////////

Arrow Function

function square(n){
    return n * n;
}

console.log(square(5)) //hik btetba3 el natije
lama ykun fi return

Awwwww


function square(n){
    return n * n;
}
const s = square(5)
console.log(s)



awwwww

const square = function(n){
    return n * n
}
console.log(square(5)) // he bet7elll


console.log(square) // he yaane enata 3am ta3mul nes5a



ES666666666666666666
arrow function

the best
const sqaure = (n) => n * n;


console.log(square(2))
========================================================

FIlterrrrrrrrrrr:



const designers = [
    {name:'ali',free:true},
    {name:'sami',free:false},
    {name:'saad',free:true}
];

const freeDesigner = designers.filter(function(designer){
    return designer.free;
})

console.log(freeDesigner); // bi rajje3le el true el filter

(2)[{name:'ali',free:true},{name:'saad',free:true}]

============

const freeDesigner = designers.filter(function(designer){
    return !(designer.free);
})

console.log(freeDesigner);
console.log(freeDesigner[0].name);


===================================
Arrow function


const freeDesigner = designers.filter(designer=> designer.free);

console.log(freeDesigner[0].name)

=================================

const designer = {
    skills(){

        setTimeout(function(){
            console.log(this)
        },1000);
    }
}

designer.skills(); // hala2 he btraje3le window
//li2an settimeout hye function men no3 5asss w hye mosatkille
// bi 7ad zeta soo bterja3 lal window degre..
shu el 7alll??????????????

===========

ta3mul hik


const designer = {
    skills(){
    vart that = this;
        setTimeout(function(){
            console.log(that)
        },1000);
    }
}

designer.skills(); //btraje3 el object


////////////////////////////////////////////////////////

BAS LAMA TESTA3MEL ARROW FUNCTION BTEZBAT EL UMUR KELLA

W BYA3TIK DEGRE EL OBJECT W MAFI DE3E LAL THAT W MEDRI SHU

====================SHUF KIFFF======================

const designer = {
    skills(){
        setTimeout(() =>{
            console.log("designer:",this)
        },1000);
    }
}

designer.skills(); //btaje3 el object


=====================================================

MAPPPPPPPPPPPPPPPPPPPPPPPPPPP


admina w abel el map

kena nesta5dem for loop aw for each


NOw sar Fi MApppppp


shufu el fare2;



HEDA ADIMAN
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const names = ["Nour","Majed","Anas"];

const items = [];

for(i=0;i<names.length ;i++){
    let list = "<li>" + names[i] + "</li>";
    items.push(list);
}
console.log(items);
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


HADISAN SAR FI MAP

const names = ["Nour","Majed","Anas"];
const items = names.map(name=> "<li>" + name + "</li>");

console.log(items);

=========================================
HADISAN SAR FI MAP + map thick

const names = ["Nour","Majed","Anas"];
const items = names.map(name=> `<li>${name}</li>`);

console.log(items);



*/

// const designer = {
//     first_name: 'nour',
//     last_name: 'saade',
//     position: 'Designer'
// }

// const  position  = designer.position; //not bad
// console.log(position);

// const { position } = designer //good
// console.log(position);


// const { position:po } = designer //good
// console.log(po);


// =====================================================


/*

const array_1 = [1,2,3];
const array_2 = [4,5,6];

const arrays = array_1.concat(array_2); oldddddddddd

new:
const arrays = [...array_1,...array_2];
console.log(arrays)

saret sahle el idafeeee
const arrays = [...array_1,'ali',...array_2,77];


=========================

and same bel object

const object1 = {name:"ali"};
const object2 = {name:"hsein"};
const object3 = {...object1,...object2};

console.log(objects);


////////////////////////////////////////////////


Classes OOP
 //D majuscule yaane lezem ta3ref ano heda constructor

//D majuscule yaane lezem ta3ref ano heda constructor

class Designer {
    constructor(name, skill) {
        this.name = name;
        this.skill = skill;
    }
    skills() {
        console.log(this.skill);
    }
}

const designer1 = new Designer("samo", "programmer");

console.log(designer1.name);//samo
console.log(designer1.skills());//programmer


*/


// Classes OOP
//D majuscule yaane lezem ta3ref ano heda constructor


class Designer {
    constructor(name, skill) {
        this.name = name;
        this.skill = skill;
    }
    skills() {
        console.log(this.skill);
    }
}


const designer = new Designer("Nour");
console.log(designer.name);


//////////////////////
class WebDesigner extends Designer {
    pl() {
        console.log("javascript");
    }
}

const webdesigner = new WebDesigner("ali", "photo");
console.log(webdesigner.skills());
console.log(webdesigner.pl());