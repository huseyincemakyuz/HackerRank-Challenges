function getMaxLessThanK(n,k) {
    var max=0;
    for(let i=1;i<=n;i++) {
        for(let j=i+1;j<=n;j++) {
            var x = i&j;
            if(x > max & x < k){
                max = x;
            }
        }
    }
    return(max);
}
