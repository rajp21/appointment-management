class CustomErrorHanlder extends Error { 
    constructor(status, message){ 
        super(); 
        this.status = status; 
        this.message = message; 
    }

    static serviceAlreadyExists(status=422, msg){ 
        return  new CustomErrorHanlder(status, msg); 
    }
}

export default CustomErrorHanlder; 