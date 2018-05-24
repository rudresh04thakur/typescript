var a = ["ganesh", "24", "Dev"];
a.forEach(function (v) {
    console.log(v);
});
console.time("A");
for (var i in a) {
    console.log(a[i]);
}
console.timeEnd("A");
