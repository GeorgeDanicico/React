export interface InputProp {
    message: string,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    sendMessage: (e:any) => void,
}

export interface ButtonProp {
    btnIcon?: any,
    label?: string,
    btnType: string,
    onClick: (e?:any) => any,
}

export interface InfoBarProp {
    room: string,
}

export interface messagesObj {
    user: string,
    text: string,
}

export interface MessagesProp {
    messages: messagesObj[],
    name: string,
}

export interface MessageProp {
    message: messagesObj,
    name: string,
}
