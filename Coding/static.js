class excelUtil{
    static timeout=100
    static readexceldata(){

        console.log('reading an excel');
    }

    writedata(){

        console.log("writing data");
    }


}

let excelUtilObj=new excelUtil();

console.log(excelUtil.timeout)
excelUtil.readexceldata()
excelUtilObj.writedata()