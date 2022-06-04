function getCount(objects) {
    let control=0
    for(let i=0;i<objects.length;i++){
        if( objects[i].x === objects[i].y ){
        control++  
        }
    }
    return control
}