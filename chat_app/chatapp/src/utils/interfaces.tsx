export const ENDPOINT = 'localhost:5000';

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

export interface User {
    id: string,
    name: string,
    room: string,
}

export interface TextContainerProp {
    users: User[],
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

export interface ModalProp {
    show: boolean,
    handleClose: () => void,
    handleSave: () => void,
    title: string,
    modalType: string,
    content: string,
}