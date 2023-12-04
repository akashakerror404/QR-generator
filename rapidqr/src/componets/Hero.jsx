import React, { useEffect, useState } from 'react';

function Hero() {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const generateQRCode = () => {
        let website = document.getElementById("website").value;
        if (website) {
            let qrcodeContainer = document.getElementById("qrcode");
            qrcodeContainer.innerHTML = "";
            new window.QRCode(qrcodeContainer, website);
            document.getElementById("qrcode-container").style.display = "block";
        } else {
            alert("Please enter a valid URL");
        }
    };

    return (
        <>
        <div className='bg-gradient-to-r from-indigo-400 from-10% via-sky-500 via-30% to-emerald-300 to-90% ... md:h-screen h-screen'>

            <div className="flex flex-col mb-6 pt-6 ">
                <div className="w-full flex justify-center items-center">
                    <h1 className='md:text-3xl text-xl font-Poppins text-white'>Welcome</h1>
                </div>
                <div className="w-full flex justify-center items-center">
                    <h1 className='md:text-7xl text-5xl font-Poppins tracking-wider text-white'>Rapid Qr</h1>
                </div>
            </div>

            <div className="form flex flex-col items-center">
                <h1 className="mb-4 text-2xl font-Poppins text-white">Please enter your URL</h1>
                <form className="flex-col flex items-center justify-center">
                    <div className="mb-4 border rounded-md p-2 focus-within:border-gray-500">
                        <input
                            type="url"
                            id="website"
                            name="website"
                            placeholder="https://site.com"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            required
                            className="w-full outline-none"
                        />
                    </div>

                    {inputValue && !inputValue.includes('.com') && !inputValue.includes('.app') && (
                        <div className="mb-4 justify-start items-start">
                            <p className='text-red-500'>{inputValue}</p>
                        </div>
                    )}

                    {inputValue && 
                        <button
                            type="button"
                            onClick={generateQRCode}
                            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                        >
                            Generate QR Code
                        </button>
                    }

                    <div id="qrcode-container" className="mb-4">
                        <div id="qrcode" className="qrcode"></div>
                    </div>
                </form>
            </div>
            </div>

        </>
    );
}

export default Hero;
