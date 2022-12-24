
export const  debounceRaf = (callback) => {
  let raf = 0;
  return (...arg) => {
    if(raf) return;
 
    raf = requestAnimationFrame(() => {
      callback(...arg);
      raf = 0;
    })  

    
  }
}