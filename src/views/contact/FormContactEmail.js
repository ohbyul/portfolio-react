import React from 'react';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import { useInput } from './UseInput';


const regex_email = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const FormContactEmail = () => {
    const [{ email, title, contents }, onInputChange, resetInput] = useInput({
        email: "",
        title: "",
        contents: "",
    })

    const onSend = () => {
        if (!email || email === '') { alert("이메일은 필수입니다."); return; }
        if (!title || title === '') { alert("제목은 필수입니다."); return; }
        if (!contents || contents === '') { alert("내용은 필수입니다."); return; }

        if (!regex_email.test(email)) { alert("이메일 형식에 맞지 않습니다."); return; }



    }

    return (
        <div className="flex flex-col gap-4" style={{ width: '500px' }}>
            <div className="">
                To : dhquf8093@naver.com
            </div>
            <div className="">
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                    name="email"
                    type="email"
                    icon={HiMail}
                    placeholder="name@email.com"
                    value={email}
                    onChange={onInputChange}
                    required
                />
            </div>
            <div className="">
                <div className="mb-2 block">
                    <Label htmlFor="title" value="Title" />
                </div>
                <TextInput
                    name="title"
                    type="text"
                    placeholder="text a title"
                    value={title}
                    onChange={onInputChange}
                    required
                />
            </div>
            <div className="">
                <div className="mb-2 block">
                    <Label htmlFor="comment" value="Your message" />
                </div>
                <Textarea
                    name="contents"
                    placeholder="Leave a comment..."
                    rows={10}
                    value={contents}
                    onChange={onInputChange}
                    required
                />
            </div>
            <Button className="bg-red-500 hover:bg-red-600" onClick={onSend}>Send email</Button>

            <div>작업중.. mail server 붙일까 말까</div>
        </div>
    );
};

export default FormContactEmail;