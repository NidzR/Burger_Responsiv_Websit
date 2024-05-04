import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Image from "next/image"; 
import Service from "../components/Service";
import Menu from "../components/Menu";
import Survey from "../components/Survey";
// import footer from "./components/footer";

export default function Home() { 
    return (
        <main>
            <Hero/>
            <Feature/>
            <Service/>
            <Menu />
            <Survey />
        </main>
    );
 };