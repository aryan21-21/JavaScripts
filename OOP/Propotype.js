let Name = "Ram    ";

String.prototype.trueLegth = function(){
    return this.trim().length;
}

console.log(Name.trueLegth());
