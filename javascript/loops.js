/**
 * Created by Andrey on 27.05.2016.
 */
var a = prompt("Enter a :");
var b = prompt("Enter b :");
var sum=0;
var kol=0;
for (a;a <= b;a++) {
  if(a%2==0){
   sum+=+a
  }else{
  kol+=1;
  }
}

console.log(sum);
console.log(kol);