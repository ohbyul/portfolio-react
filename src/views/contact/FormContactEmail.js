import React from 'react';
import { Label, TextInput, Textarea , Button} from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

const FormContactEmail = () => {
    return (
        <div className="flex max-w-md flex-col gap-4">
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="email4" value="Your email" />
                </div>
                <TextInput id="email4" type="email" icon={HiMail} placeholder="name@email.com" required />
            </div>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="comment" value="Your message" />
                </div>
                <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
            </div>
            <Button className="bg-red-500 hover:bg-red-600">Send email</Button>
        </div>
    );
};

export default FormContactEmail;