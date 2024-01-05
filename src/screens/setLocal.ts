declare const localStorage: any;

const setLocalx = (): void  => {
    'show source';
    console.log('test');
    localStorage.setItem("yourDataKey", JSON.stringify(12));

}
export const setUpdate = `${setLocalx}; setLocalx()`
    
