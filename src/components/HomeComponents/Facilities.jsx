
const Facilities = () => {
    return (
        <div className="bg-stone-800 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center w-11/12 mx-auto gap-4 py-12">
                <div className="flex items-center gap-3">
                    <div>
                        <img src="https://img.icons8.com/?size=100&id=b3BuyWiMeege&format=png&color=000000" alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl text-yellow-300 font-bold">Best Running Club</h1>
                        <p className="text-base mt-4">SprintSphere connects runners and organizers,
                            making marathon events seamless and engaging for everyone.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <div>
                        <img src="https://img.icons8.com/?size=100&id=ADY18xu5Gay1&format=png&color=000000" alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl text-yellow-300 font-bold">Certified Instructor</h1>
                        <p className="text-base mt-4">Train with certified instructors dedicated to
                            guiding you toward your running goals.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <div>
                        <img src="https://img.icons8.com/?size=100&id=I6HveExp7QPC&format=png&color=000000" alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl text-yellow-300 font-bold">1000+ Members</h1>
                        <p className="text-base mt-4">Join a community of 1000+ passionate runners
                            and fitness enthusiasts.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Facilities;