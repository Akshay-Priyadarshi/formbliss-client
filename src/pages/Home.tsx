import { Component } from "solid-js"
import Layout from "../components/Layout"
import HeroImage from "../assets/hero.svg"

const Home: Component<{}> = () => {
    return (
        <Layout>
            <section class="h-[80vh] flex flex-row">
                <section class="flex flex-col justify-center flex-1">
                    <h1 class="text-5xl font-light leading-normal">
                        Create, Share, & Analyze <br /> Forms Effortlessly
                    </h1>
                    <div class="h-14"></div>
                    <p class="text-lg text-left w-[90%] leading-normal">
                        Welcome to FormBliss, the ultimate dynamic form builder
                        that empowers you to create customized forms in minutes.
                        Whether you need surveys, feedback forms, event
                        registrations, or quizzes, our intuitive platform makes
                        it easy to design, share, and analyze responses. Boost
                        your productivity and gather insights with our powerful,
                        user-friendly tools. Start building streamline your data
                        collection process!
                    </p>
                </section>
                <section class="flex-1 w-full">
                    <HeroImage class="w-full h-full object-contain" />
                </section>
            </section>
        </Layout>
    )
}

export default Home
