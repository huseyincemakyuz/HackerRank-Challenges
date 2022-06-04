function modifyArray(nums) {
    let arr=nums.map((sayi)=>{
        if(sayi%2==0){
            return sayi=sayi*2
        }else{
            return sayi=sayi*3
        }
    })
    return arr
}