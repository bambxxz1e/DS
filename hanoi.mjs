function hanoi(count, from, to, temp){ //원반 갯수, 출발지, 목적지, 경유지
    if(count == 0) return;

    hanoi(count - 1, from, temp, to); // 출발지, 경유지, 목적지
    console.log(`원반${count} ${from} ==> ${to}`);
    hanoi(count - 1, temp, to, from);
}

hanoi(4, "A", "C", "B");