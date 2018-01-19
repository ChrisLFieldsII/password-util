const arrLowerLetters = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split(',')
const arrUpperLetters = strLowerLetters.toUpperCase().split(',')
const arrNumbers = '1,2,3,4,5,6,7,8,9,0'.split(',')
const arrSymbols = '!,@,#,$,-'.split(',')

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//window.crypto. FIGURE OUT HOW TO CRYPTOGRAPHICALLY RNG

export const genPw = (length) => {

}
