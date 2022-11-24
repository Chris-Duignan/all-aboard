export const createTextSample = (str:string):string => {
    let arr = str.split(' ');

    let sampleArr:string[] = [];

    arr.forEach((w, i)=> {
        if(i < 16) sampleArr.push(w);
        if(i === 16) sampleArr.push('...')
        if(i > 16) return
    })
    return sampleArr.join(' ');
}