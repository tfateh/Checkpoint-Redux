export const addNew=(X)=>{
    return {
        type:'ADDNEW', payload:X
    }
}

export const checkbox=(id)=>{
    return {
        type:'CHECKBOX', payload:id
    }
}

export const UpDate=(id,updatetext)=>{
    return {
        type:'UPDATE', payload:{id,updatetext}
    }
}
export const delet=(id)=>{
    return {
        type:'DELETE', payload:{id}
    }
}