import Spotify from "@/img/Spotify.svg";
import Facebook from "@/img/Facebook.svg";
import Pinterest from "@/img/Pinterest.svg";
import Instagram from "@/img/Instagram.svg";
import Youtube from "@/img/Youtube.svg";
import Twitter from "@/img/Twitter.svg";
import Image from "next/image";
export default function Redes() {
  return (
    <>
      <ul className="flex space-x-2">
        <li className="bg-black rounded-full p-1">
          <a href="#">
            <Image src={Spotify} alt="Spotify" width={32} height={32} />
          </a>
        </li>
        <li className="bg-black rounded-full p-1">
          <a href="#">
            <Image src={Facebook} alt="Facebook" width={32} height={32} />
          </a>
        </li>
        <li className="bg-black rounded-full p-1">
          <a href="#">
            <Image src={Pinterest} alt="Pinterest" width={32} height={32} />
          </a>
        </li>
        <li className="bg-black rounded-full p-1">
          <a href="#">
            <Image src={Instagram} alt="Instagram" width={32} height={32} />
          </a>
        </li>
        <li className="bg-black rounded-full p-1">
          <a href="#">
            <Image src={Youtube} alt="Youtube" width={32} height={32} />
          </a>
        </li>
        <li className="bg-black rounded-full p-1">
          <a href="#">
            <Image src={Twitter} alt="Twitter" width={32} height={32} />
          </a>
        </li>
      </ul>
    </>
  );
}
