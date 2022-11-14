let StringSplitter = class {
    constructor(toBeSplit) {
        this.toBeSplit=toBeSplit;
        
    }
    getSplit(n) {
        let stringa = "";
        let z= 0;
        let i =0;
        n=parseInt(n)
    for (i=0; i <this.toBeSplit.length; i++) {
      if ( z < this.toBeSplit.length) {
        stringa = stringa + this.toBeSplit.substr(i,n) + " ";
        z =i + n
        
      }
    }
    return stringa;
    }
    
    getAllSplits() {
        let stringa = "";
        let stringadiv=[];
        let d = this.toBeSplit.length;
        for (let i = 0; i < this.toBeSplit.length; i++) {
          for(let j=1 ; j<=d;j ++)
            {
             //stringa = stringa + this.toBeSplit.substr(i, j) + " ";
             stringadiv.push(this.toBeSplit.substr(i, j));
            }
            d--;
        }
        return stringadiv;
      }

      getCompare(string1,string2){
        let stringa =[];
        let d=0;
        let z=0;
        for(let i=0; i<string1.length;i++){
          for(let j=0; j<string2.length;j++){
            if( string1[i]==string2[j] ){
              stringa[z] =string1[i];
              z++
            }
          }
        }
        return stringa;
      }
    
}


 
module.exports = StringSplitter;