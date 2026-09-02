const Footer = () => {
    return (
        <footer className="bg-[#14181D] text-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="flex md:flex-row flex-col justify-between md:w-[74%] mx-auto">


                    <div className="md:max-w-[30%]">
                        <h2 className="text-3xl font-bold text-white">
                            Style<span className="text-orange-500">vibe</span>
                        </h2>

                        <p className="mt-4">
                            Premium men's hair salon offering stylish haircuts, beard grooming, hair styling, and personalized services to help you look sharp, confident, and feel your best.
                        </p>
                    </div>

                    <div className="md:mt-0 mt-10">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Contact
                        </h3>

                        <p>Email: support@stylevibe.com</p>
                        <p className="mt-2">Phone: +91 98765 43210</p>

                        <p className="mt-2">
                            Premium Grooming for Modern Men.
                        </p>
                    </div>

                </div>


                <div className="border-t border-black mt-10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} LearnStack. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer