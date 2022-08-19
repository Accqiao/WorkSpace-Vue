import { get, post} from './request'

export const DEL_ById = (params: any) => post('todolist/delete', params)

export const Get_AllItem = (params: any) => get('todolist/all', params)
export const Get_ItemByPages = (params: any) => get('todolist/allpage', params)
export const Get_ItemByOkPage = (params: any) => get('todolist/okpage', params)
export const Get_ItemByDelPages = (params: any) => get('todolist/delpage', params)


