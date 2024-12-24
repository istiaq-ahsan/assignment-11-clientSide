import FaqAnimation from "../animation/FaqAnimation";

const Faq = () => {
    return (
        <div className='py-20 '>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-20 text-center'>
                Frequently Asked Questions
            </h1>
            <div className='flex flex-col md:flex-row gap-5 w-11/12 mx-auto justify-center items-center'>
                <div className='w-full md:w-[50%]'>
                    <FaqAnimation></FaqAnimation>
                </div>
                <div className='w-full md:w-[50%] space-y-2'>
                    <div className="collapse collapse-arrow join-item border border-gray-400">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            How can I register for a marathon?
                        </div>
                        <div className="collapse-content">
                            <p>
                                You can register for any of our upcoming marathons directly
                                through our website. Simply choose your event, fill out the
                                registration form, and submit to secure your spot.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-gray-400 border">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How do I create a event?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Simply sign up, provide event details,
                                set a start,end,marathon date and also a thumbnail.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-gray-400 border">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Can I view marathon events without an account?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Yes, you can view all upcoming marathon events without
                                logging in, but registration requires an account.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-gray-400 border">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Are there any age restrictions for participants?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Our marathons are open to participants of all ages. Specific age categories may apply depending on the event.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Faq;