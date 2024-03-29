import SearchBar from "./SearchBar";
import map from '../../../asset/images/map.jpg'
import globe from '../../../asset/images/Globe .png'
import Image from "next/image";

function Hero() {
  return (
    <section className="w-full h-screen flex justify-evenly align-middle bg-sky-white opacity-90 flex-wrap">
      <Image
      className="absolute top-0 z-0 opacity-20"
      fill={true}
      src={map}
      alt="background image"
      />

<div className="lg:h-52  lg:w-10/12  my-auto flex justify-center align-middle absolute top-1/2 bg z-50">
      <SearchBar />

</div>
<div>
  <Image 
      className="absolute top-1/4 lg:right-14 z-10 "
        src={globe}
        alt="background image"

  />
</div>
    </section>
  )
}

export default Hero;
