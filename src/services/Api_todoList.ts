import { get, post} from './request'

// export const DEL_ById = (params: any) => post('todolist/delete', params)
// export const Get_AllItem = (params: any) => get('todolist/allpage', params)

export const Get_ItemByPages = (type: string, params: any) => {
        let str = 'todolist/';
    if(type == 'all'){
        str = str + 'allpage'
    }else if(type == "unfinish"){
        str = str + 'okpage'
        params.sign = 0
    }else if(type == "finish"){
        str = str + 'okpage'
        params.sign = 1
    }else if(type == "delete"){
        str = str + 'delpage'
        params.sign = 1
    }
    return get(str, params)
}

export const Post_Update = (params: any) =>  post('todolist/update', params)
export const Post_Change = (params: any) =>  post('todolist/change', params)


export const Post_RealDelete = (params: any) => {

    return post('todolist/delete', params)
}



