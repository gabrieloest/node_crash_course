for(var i = 20; i <= 10000000000000; i++){
    var found = false;
    for(var e = 2; e <= 20; e++){
        if (i % e != 0) {
			break;
        }
		
		if (i % e == 0) {
			if(e == 20){
				found = true;
				break; // stop testing other divisors
			}
        }
    }
    if (found) {
        console.log(i);
		return i;
    }
}