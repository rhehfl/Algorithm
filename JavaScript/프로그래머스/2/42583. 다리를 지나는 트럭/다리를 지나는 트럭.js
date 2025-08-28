function solution(bridge_length, weight, truck_weights) {
    const queue = new Array(bridge_length).fill(0);
    let currentWeight = 0;
    let count = 0;
    
    while (queue.length > 0) {
        count++;
        
        currentWeight -= queue.shift();
        if (truck_weights.length > 0) {
            if (currentWeight + truck_weights[0] <= weight) {
                const truck = truck_weights.shift();
                queue.push(truck);
                currentWeight += truck;
            }else {
                queue.push(0);
            }
        }
    }
    return count;

}