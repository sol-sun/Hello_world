var lines =[];
var reader = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout
});
var hoge;
reader.on('line', function(line){
    hoge = line;
    process.stdout.write("\n");    
    process.stdout.write(hoge+"段のピラミッド。\n");
    process.stdout.write("\n|\nv\n\n");
    
    var join = "";

    for(var i=0;i<hoge;i++){
	join += "SFC ";
	process.stdout.write(join);
	process.stdout.write("\n");
    }
    reader.close();

});
reader.on('close', function(){
    process.stdout.write("\n");    
    process.stdout.write("終了");
});
