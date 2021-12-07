import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form, Button, Alert} from 'react-bootstrap';
import { Note } from '../../models/note.model';


interface ICreateNotesProps {
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

interface IFormInput {
    title: string,
    textarea: string, 
    color: string
}

const CreateNotes: React.FC<ICreateNotesProps> = ({ setNotes }) => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const newNote: Note = {
            id: (new Date()).toString(),
            title: data.title,
            text: data.textarea,
            color: data.color,
            date: (new Date()).toString(),
        }
        setNotes(prev => [...prev, newNote]);
        setValue("title", "");
        setValue("textarea", "");
    }

    return (
        <>
            <h2>Create Notes</h2>
            { (errors.title || errors.textarea) && 
                <Alert variant="danger">All fields are mandatory.</Alert>}

            <Form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control {...register('title', { required: true})} type="text" placeholder="Enter Title for the Note"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Text</Form.Label>
                    <Form.Control {...register('textarea', { required: true })}placeholder="Enter your notes" as="textarea" rows={3}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
                    <Form.Control {...register('color')} type="color" id="colorInput" defaultValue="#dfdfdf" title="Choose your color"/>
                </Form.Group>

                <Button type="submit" variant="primary">Submit</Button>
            </Form>
        </>
    );
};

export default CreateNotes;
