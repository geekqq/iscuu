import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="max-w-[1050px] m-auto md:pl-20 p-4 py-16">
            <h1 className="py-4 text-4xl font-bold text-center text-[001b5e]">Contact</h1>
            <form action="https://getform.io/f/7dde307a-253b-4159-a9e0-9c4fdf87dde5" method="POST" encType="multipart/form-data">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Name<span className="text-red-500">*</span></label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' required />
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Phone</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="phone" />
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Email<span className="text-red-500">*</span></label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="email" required />
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Subject<span className="text-red-500">*</span></label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="subject" required />
                    </div>
                    <div className="flex flex-col py-2 ">
                        <label className="uppercase text-sm py-2">Message<span className="text-red-500">*</span></label>
                        <textarea className='border-2 rounded-lg p-3 flex border-gray-300 ' rows='10' name="message" required /><textarea/>
                    </div>
                </div>
                <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-2 rounded-lg flex items-center justify-center">Send Message</button>
            </form>
        </div>
    )
}
export default Contact;