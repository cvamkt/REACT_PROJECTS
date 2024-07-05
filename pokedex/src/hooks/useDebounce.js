function useDebounce(cb, delay = 2000) {
    let timerid;


    return (...argu) => {
        console.log(...argu);
        clearTimeout(timerid);
        timerid = setTimeout(() => {
            cb(...argu);
        }, delay);
    }

    
    // setTimeout(()=> {
        //     clearInterval(timeid);
        // }, delay);
}


export default useDebounce;
