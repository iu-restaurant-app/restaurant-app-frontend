export default function Story() {
    return (
        <div>
            <section
                className="@apply flex min-h-screen flex-col items-center justify-center bg-fixed bg-[url('https://wallpaper.forfun.com/fetch/5b/5b58f53e0636f0e18b4caab18f1aa017.jpeg')] bg-center bg-cover text-black] gap-y-16 text-center">
                <h1 className="text-lime-200 text-6xl font-serif mb-[-10%]">Pasta Palace</h1>
            </section>

            <section className="@apply w-full min-h-[55vh] bg-red-900"><br/>
                <h1 className="text-center text-5xl text-lime-200 font-serif">Our story</h1><br/>
                <p className="ml-80 text-center font-serif w-[55%] text-2xl text-lime-200">
                    Welcome to Pasta Palace, a cozy and inviting eatery serving up delicious Italian-inspired dishes.
                    Our
                    story began with a passion for pasta and a dream to share that love with our community. Our chefs
                    use
                    only the freshest ingredients to craft each dish, from classic spaghetti Bolognese to creative
                    vegetarian options. Our warm and welcoming atmosphere makes us the perfect spot for date nights,
                    family
                    gatherings, or simply a night out with friends. Come taste the difference for yourself and
                    experience
                    the authentic Italian flavors that have made us a local favorite.
                </p>
            </section>

            <section
                className="@apply bg-gray-50/40 flex min-h-screen flex-col items-center justify-center bg-fixed bg-[url('https://facts.net/wp-content/uploads/2023/11/11-interesting-italian-food-facts-1700670149.jpg')] bg-center bg-cover text-black] gap-y-16 text-center bg-white">
                <div
                    className="max-w-2xl bg-lime-200 border border-lime-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 ml-96">
                    <div className="p-5">
                        <h3 className="text-4xl font-serif text-red-900">Our goal</h3><br/>
                        <p className="mb-3 font-normal text-red-900 dark:text-gray-400 font-serif text-xl">At Pasta
                            Palace, our goal is simple - to transport you to the cobblestone streets of Italy with every
                            dish we serve. We strive to bring the authentic flavors and traditions of Italian cuisine to
                            your table, creating a dining experience that is both delicious and memorable.
                        </p>
                    </div>
                </div>

                <div
                    className="max-w-2xl bg-lime-200 border border-lime-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mr-96 mt-24">
                    <div className="p-5">
                        <h3 className="text-4xl font-serif text-red-900">Our purpose</h3><br/>
                        <p className="mb-3 font-normal text-red-900 dark:text-gray-400 font-serif text-xl">Beyond
                            serving
                            incredible food, Pasta Palace is a place where friends and families come together to share
                            laughter, stories, and of course, amazing pasta. We believe in the power of food to bring
                            people closer, and our cozy restaurant is the perfect setting for creating unforgettable
                            memories.</p>
                    </div>
                </div>
            </section>

            <section className="@apply w-full min-h-[100vh] bg-orange-700 bg-opacity-90"><br/>
                <h1 className=" text-center text-5xl text-lime-200 font-serif">Our kitchen</h1><br/>
                <p className="ml-80 text-center font-serif w-[55%] text-2xl text-lime-200">
                    Step into our kitchen and you'll find a team of passionate chefs who pour their heart and soul into
                    each and every dish. Using only the freshest ingredients and time-honored recipes, we craft
                    mouthwatering pasta dishes that will tantalize your taste buds and leave you craving more.
                </p>
                <div className="@apply w-full min-h-[61vh] bg-orange-700 bg-opacity-0 text-center">
                    <img className="rounded-full w-96 h-96 justify-center mt-8 m-auto"
                         src="../pastaEgg.jpg"
                         alt="Pasta dough making"/><br/>
                    <p className="ml-80 text-center font-serif w-[55%] text-2xl text-lime-200 mb-16">
                        We take pride in serving the finest quality of food that truly captures the essence of
                        traditional Italian cuisine. Our experienced chefs meticulously select the freshest ingredients
                        to craft each dish with care and precision.
                    </p>
                </div>

                <div className="@apply w-full min-h-[78vh] bg-yellow-50 text-center"><br/>
                    <img className="rounded-full w-96 h-96 mt-12 m-auto"
                         src="../pasta.jpg"
                         alt="Pasta cutting"/><br/>
                    <p className="ml-80 text-center font-serif w-[55%] text-2xl text-grey-700">
                        With a focus on authentic recipes and time-honored cooking techniques, every bite is a symphony
                        of flavors that transport you to the streets of Italy.
                    </p>
                </div>
                <div className="@apply w-full min-h-[75vh] bg-lime-200"><br/>
                    <img className="rounded-full w-96 h-96 mt-12 m-auto"
                         src="../pastaReady.jpg"
                         alt="Pasta and ravioli on a table"/><br/>
                    <p className="ml-80 text-center font-serif w-[55%] text-2xl text-red-900">
                        From our homemade pasta to wood-fired pizzas, each dish is a celebration of taste that will
                        leave you craving more. Come savor the true essence of Italy with us and experience the
                        unparalleled quality and deliciousness of our dishes.
                    </p><br/>
                </div>
            </section>

            <section
                className="@apply flex min-h-screen flex-col items-center justify-center bg-fixed bg-[url('https://orders.co/static/44cbe207cad4090751ef79c87c04395e/f659b/Selecting-the-Perfect-Location-for-Your-Italian-Eatery.png')] bg-center bg-cover text-black] gap-y-16 text-center opacity-70">
                <h1 className="text-5xl text-lime-200 font-serif align-text-top">Our atmosphere</h1><br/>
            </section>
        </div>
    );
}