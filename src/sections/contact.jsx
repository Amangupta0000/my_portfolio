import {useRef, useState} from "react";
import * as emailjs from "@emailjs/browser";


const Contact = () => {
    const formRef = useRef();

    const [isLoaded, setIsLoaded] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    }   );
 const handleChange = ({target : {name,value}}) => {
     setForm({ ...form, [name]: value });
 };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoaded(true);
        emailjs
            .send(
                "service_cshia6d",
                "template_1yhdyrp",
                {
                    from_name: form.name,
                    to_name: 'Aman',
                    from_email: form.email,
                    to_email: 'amangupta1a2b3c@gmail.com',
                    message: form.message,
                },
                "cfufr04yRk7d-cDB7",
            )
            .then(
                () => {
                    setIsLoaded(false);
                    // showAlert({
                    //     show: true,
                    //     text: 'Thank you for your message 😃',
                    //     type: 'success',
                    // });
                    alert("Thank you for your message 😃");

                    setTimeout(() => {
                        // hideAlert(false);
                        setForm({
                            name: '',
                            email: '',
                            message: '',
                        });
                    }, [3000]);
                },
                (error) => {
                    setIsLoaded(false);
                    console.error(error);

                    // showAlert({
                    //     show: true,
                    //     text: "I didn't receive your message 😢",
                    //     type: 'danger',
                    // });
                    alert("I didn't receive your message 😢");
                },
            );
    };

    return (
        <section className="c-space my-20"  id = "contact">
            <div className="relative h-fit flex flex-col items-center justify-center">
                <img src="/assets/terminal.png" alt="terminal-background" className="absolute h-full inset-0 "/>
                <div className="contact-container">
                    <h3 className="head-text mt-5">
                        Let&apos;s Talk
                    </h3>
                    <p className="text-lg text-white-600 mt-3">
                        I am always open to discussing product design work or partnership opportunities.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-7 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input type="text" name="name" value={form.name} required onChange={handleChange}
                                   placeholder="John Doe" className="field-input"/>

                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email Address</span>
                            <input type="email" name="email" value={form.email} required onChange={handleChange}
                                   placeholder="jhondoe@gmail.com" className="field-input"/>

                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea name="message" value={form.message} required onChange={handleChange}
                                      placeholder="Hi, I want to give you a job..." className="field-input" rows={5}/>

                        </label>
                        <button className="field-btn" type="submit" disabled={isLoaded}>
                            {isLoaded ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                        <div className="h-3"></div>

                    </form>
                </div>


            </div>


        </section>
    )
}
export default Contact
