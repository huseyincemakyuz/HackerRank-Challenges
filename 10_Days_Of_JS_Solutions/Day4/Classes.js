function Polygon(arr){
    this.perimeter=function(){
        let toplam=0
        let new_arr=arr.map(function(deger){
            return toplam=toplam+deger
        })
        return toplam
    }
        
}
