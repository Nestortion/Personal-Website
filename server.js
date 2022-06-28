function hi(){
    console.log("hello");
}

const person = {
    'name':'nestor',
    'age':'21',
}

function any(obj, obj1){
    obj.name = obj1.any;
    console.log(obj)
}

any({},{ 'name':'nestor'} )
