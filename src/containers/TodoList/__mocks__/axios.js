const list = {
    success: true,
    data: [
        {
            type: 'div',
            value: 'hello'
        },
        {
            type: 'div',
            value: 'sasasa'
        }
    ]
}

export default {
    get(url) {
        if (url == "/getList.json") {
            return new Promise((resolved, rejected) => {
                // setTimeout(() => {
                    if(this.success){
                        resolved(list)
                    }else{
                        rejected(new Error())
                    }
                // }, 3000)
            })
        }
    }
}