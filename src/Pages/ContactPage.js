import React, { useRef } from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
import emailjs from 'emailjs-com';
import '../Components/Components.css'
import swal from 'sweetalert';


function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z7a0qeo', 'template_uw1vl1j', form.current, 'user_5cIl5nGu5oYuxLuXMdpaZ')

            .then((result) => {
                console.log(result.text);
                swal("Success!", "Your Email Sent.", "success");
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });



    };
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled >
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className="form" ref={form} onSubmit={sendEmail}>
                            <div className="form-field">
                                <label htmlFor="name"  >Your name*</label>
                                <input type="text" id="name" name="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email"  >Your email*</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject"  >Subject</label>
                                <input type="text" id="subject" name="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Message*</label>
                                <textarea id="textarea" cols="30" rows="10" name="message"></textarea>
                            </div>
                            <div className="form-field f-button">

                                <input type="submit" className="email-submit" style={{ cursor: 'pointer' }} />
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem title={'Phone'} icon={phone} cont2={'+88 01712 365764'} />
                        <ContactItem title={'Email'} icon={email} cont1={'akmsakilsagor110@gmail.com'} cont2={'sakilsagor76543@gmail.com'} />
                        <ContactItem title={'Address'} icon={location} cont1={'Kishoregonj'} cont2={'Dhaka, Bangladesh'} />

                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid #808080;
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                input[type=submit] {
                   background:rgba(3,127,255,.3);
                }
                input[type=submit]:hover {
                    background:rgba(3,127,255,.7);
                 }
                textarea{
                    background-color: transparent;
                    border: 1px solid #808080;
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }

            
        }
    }
`;

export default ContactPage
