
import Fashion from "@/components/Fashion";
import Footer from "@/components/Footer";
import Collaborate from "@/components/Collaborate";
import Social from "@/components/Social";
import Latest from "@/components/Latest";
import Trending from "@/components/Trending";
import Service from "@/components/Service";
import HomeComponent from "@/components/HomeComponent";
import Featureblog from "@/components/Featureblog";


export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden  ">
      <div>
      <HomeComponent/>
      </div>
     <div className="flex-1  md:mt-10">
     <Featureblog/>
     </div>
     <div>
      <Service/>
     </div>
     <div>
      <Trending/>
    
     </div>
     <div>
      <Fashion/>
     </div>
     <div className=" ">
      <Latest/>
     </div>
     <div>
      <Social/>
     </div>
     <div>
      <Collaborate/>
     </div>

     <div>
      <Footer/>
     </div>
    </div>
   
  );
}
