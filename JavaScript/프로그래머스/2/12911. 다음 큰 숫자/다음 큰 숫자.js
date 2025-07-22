function solution(n) {
   const binaryNumber = n.toString(2);
   const oneCount = countBits(binaryNumber);
   let nextNumber = n + 1;
    while (true) {
        
        if (oneCount === countBits(nextNumber.toString(2))) return nextNumber
            
        nextNumber++
    }
   
   
}

function countBits(binaryNum) {
    return [...binaryNum].filter(bit => Number(bit)).length;
}