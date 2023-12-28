"use client"
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaPaperPlane , FaPhoneAlt } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram, AiFillGithub, AiOutlineUser ,AiFillPhone } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from "next-themes";


function ContactForm() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const [phone, setphone] = useState("");
    const { theme }  = useTheme()


    const notify = () => toast.success(`✌🔥 Email Sent Successfully !`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        theme : "colored",
            style:{backgroundColor :  theme == "light" ?  "#145a70" : "#fff" , color : theme == "dark" ? "#145a70" : "#fff"},
        pauseOnHover: true,
        progressStyle : {backgroundColor : "orange"},
        draggable: true,
        progress: undefined,
    });
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        console.log({email})
        if(!email  || email == "" ||  !name || "" || !message == ""){
         return   toast.warn("Fill All Fields Correctly 😔" ,  {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme : "colored",
                style:{backgroundColor :  theme == "light" ?  "#145a70" : "#fff" , color : theme == "dark" ? "#145a70" : "#fff"},
                progressStyle : {backgroundColor : "orange"},
                draggable: true,
            })
        }


        toast.warn("Please wait email is sending 🚀" ,  {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme : "colored",
            style:{backgroundColor :  theme == "light" ?  "#145a70" : "#fff" , color : theme == "dark" ? "#145a70" : "#fff"},
            progressStyle : {backgroundColor : "orange"},
            draggable: true,
        })
        emailjs.sendForm('service_435tgv9', 'template_z4brbe8', form.current, 'ZEGda7uZo2tK6cPbU')
            .then((result) => {
                console.log(result.text);
                notify();
                setemail("");
                setname("");
                setmessage("");
                setphone("");
            }, (error) => {
                setLoading(false)
                console.log(error.text);
            });
    };
    return (
        <>
            <div id="contact" className="heading mb-12  pt-12  ">
            </div>
            <ToastContainer />
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2  my-4">
                <div className="contact_details flex flex-col items-center mt-2 md:mt-9">
                    <div className="card dark:bg-cyan-900 shadow bg-gray-100 w-10/12 md:w-5/12 my-3 text-center  rounded-md py-4 px-4">
                        <p className="text-xl font-bold">ADDRESS</p>
                        <p className="text-ss">Mardan-KP, Pakisitan</p>
                    </div>

                    <div className="card dark:bg-cyan-900 shadow bg-gray-100 w-10/12 md:w-5/12 my-3 text-center  rounded-md py-4 px-4">
                        <p className="text-xl font-bold">EMAIL</p>
                        <p className="text-ss">contact@aasimshah.com</p>
                    </div>
                    <div className="card dark:bg-cyan-900 shadow bg-gray-100 w-10/12 md:w-5/12 my-3 text-center  rounded-md py-4 px-4">
                        <p className="text-xl font-bold">WHATSAPP</p>
                        <p className="text-ss">+923179936736</p>
                    </div>
                </div>

                <div className="form dark:bg-cyan-900 shadow bg-gray-100 mx-auto pb-4 mb-[2rem] my-3 rounded-md w-10/12 flex flex-col items-center ">
                    <form method="post" ref={form} onSubmit={sendEmail} className="sm:w-8/12 mt-3 mx-auto ">
                        <p className="text-center text-sm font-bold  my-5">
                            CONTACT NOW
                        </p>
                        <div className="mt-3 flex flex-row gap-3 border-b-2 dark:border-cyan-600 border-cyan-400 items-center w-10/12 mx-auto ">
                            <AiOutlineUser size={23} />
                            <input type="text" name="user_name" className="py-2 px-3 bg-transparent   outline-none " placeholder="Name" onChange={(e)=>setname(e.target.value)}  value={name}/>
                        </div>

                        <div className="mt-3 flex flex-row gap-3 border-b-2 border-cyan-400  dark:border-cyan-600  items-center w-10/12 mx-auto ">
                            <FaPhoneAlt size={17} />
                            <input type="text" name="user_phone" className="py-2 px-3 bg-transparent   outline-none " placeholder="Phone" onChange={(e)=>setphone(e.target.value)}  value={phone}/>
                        </div>

                        <div className="mt-3 flex flex-row gap-3 border-b-2  dark:border-cyan-600  border-cyan-400 items-center w-10/12 mx-auto ">
                            <MdEmail size={18} />
                            <input type="email" name="user_email" className="py-2 px-3 bg-transparent outline-none " placeholder="Email" onChange={(e)=>setemail(e.target.value)}  value={email}/>
                        </div>

                        <div className="mt-3 mb-4 py-3 flex flex-row gap-3 border-b-2  dark:border-cyan-600  border-cyan-400  px-3 items-center w-10/12 mx-auto ">
                           <textarea name="message" id="" cols="30" rows="3" className="bg-transparent outline-none" placeholder="Enter your Text !"onChange={(e)=>setmessage(e.target.value)}  value={message} ></textarea>
                        </div>
                        <button variant="contained" type="submit" className="flex flex-row gap-3 justify-center bg-orange-400 dark:bg-cyan-600 py-2 items-center rounded-md w-10/12 mx-auto">
                            <span className="mx-3 font-bold dark:text-white"> S E N D </span> <FaPaperPlane />
                        </button>
                    </form>
                    <div className="icons  flex flex-row mt-5">
                        <a href="https://www.instagram.com/aasim__shah_/" className="text-[#C13584] mx-2">
                            <AiFillInstagram size={30} />
                        </a>
                        <a href="https://www.facebook.com/asimshah0/" className="text-blue-600 mx-2">
                            <AiFillFacebook size={30} />
                        </a>

                        <a href="whatsapp://send?text=Hello%20World!&phone=+923179936736" className="text-[#25d366] mx-2">
                            <IoLogoWhatsapp size={30} />
                        </a>
                        <a href="https://www.github.com/aasim-shah/" className=" mx-2">
                            <AiFillGithub size={30} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mb-20"></div>
        </>
    );
}

export default ContactForm;
