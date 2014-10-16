var multiply = function(a,b){
    var bunshi = a.bunshi * b.bunshi;
    var bunbo = a.bunbo * b.bunbo;

    if(Number.isInteger(b)){

	b = frac(b,1);

    }

    if(a.bunbo !== b.bunbo){
	bunshi = a.bunshi * b.bunshi;
	bunbo = a.bunbo * b.bunbo;


    }else{
	bunshi = a.bunshi * b.bunshi;
	bunbo = a.bunbo * b.bunbo;
    }

    var answer = frac(bunshi, bunbo);
    return answer;

};

var a = multiply(frac(1,3), frac(4,3));
var b = multiply(frac(1,4), frac(1,1));
var c = multiply(frac(2,3), frac(4,1));
var d = multiply(frac(1,4), frac(0,0));
var e = multiply(frac(1,1), frac(2,1));

document.write(a["bunsi"]+", "+ a["bunbo"]);
document.write(b["bunsi"]+", "+ b["bunbo"]);
document.write(c["bunsi"]+", "+ c["bunbo"]);
document.write(d["bunsi"]+", "+ d["bunbo"]);
document.write(e["bunsi"]+", "+ e["bunbo"]);

