import Image from "next/image";
import styles from "./TrustedBy.module.scss";

import logo1 from "@/assets/images/trustedPartners/img1.png";
import logo2 from "@/assets/images/trustedPartners/img2.png";
import logo3 from "@/assets/images/trustedPartners/img3.png";
import logo4 from "@/assets/images/trustedPartners/img4.png";
import logo5 from "@/assets/images/trustedPartners/img5.png";
import logo6 from "@/assets/images/trustedPartners/img6.png";
import logo7 from "@/assets/images/trustedPartners/img7.png";
import logo8 from "@/assets/images/trustedPartners/img8.png";
import logo9 from "@/assets/images/trustedPartners/img9.png";
import logo10 from "@/assets/images/trustedPartners/img10.png";
import logo11 from "@/assets/images/trustedPartners/img11.png";
import logo12 from "@/assets/images/trustedPartners/img12.png";
import logo13 from "@/assets/images/trustedPartners/img13.png";
import logo14 from "@/assets/images/trustedPartners/img14.png";
import logo15 from "@/assets/images/trustedPartners/img15.png";
import logo16 from "@/assets/images/trustedPartners/img16.png";
import logo17 from "@/assets/images/trustedPartners/img17.png";
import logo18 from "@/assets/images/trustedPartners/img18.png";
import logo19 from "@/assets/images/trustedPartners/img19.png";
import logo20 from "@/assets/images/trustedPartners/img20.png";
import logo21 from "@/assets/images/trustedPartners/img21.png";
import logo22 from "@/assets/images/trustedPartners/img22.png";
import logo23 from "@/assets/images/trustedPartners/img23.png";
import logo24 from "@/assets/images/trustedPartners/img24.png";
import logo25 from "@/assets/images/trustedPartners/img25.png";
import logo26 from "@/assets/images/trustedPartners/img26.png";
import logo27 from "@/assets/images/trustedPartners/img27.png";
import logo28 from "@/assets/images/trustedPartners/img28.png";
import logo29 from "@/assets/images/trustedPartners/img29.png";
import logo30 from "@/assets/images/trustedPartners/img30.png";

const TrustedBy = () => {
  const logos = [
    { src: logo1, alt: "Wistron" },
    { src: logo2, alt: "Volvo" },
    { src: logo3, alt: "Wabtec" },
    { src: logo4, alt: "Voltas" },
    { src: logo5, alt: "TVS" },
    { src: logo6, alt: "Faiveley" },
    { src: logo7, alt: "Ashok Leyland" },
    { src: logo8, alt: "Ashok Leyland" },
    { src: logo9, alt: "Ashok Leyland" },
    { src: logo10, alt: "Ashok Leyland" },
    { src: logo11, alt: "Ashok Leyland" },
    { src: logo12, alt: "Ashok Leyland" },
    { src: logo13, alt: "Ashok Leyland" },
    { src: logo14, alt: "Ashok Leyland" },
    { src: logo15, alt: "Ashok Leyland" },
    { src: logo16, alt: "Ashok Leyland" },
    { src: logo17, alt: "Ashok Leyland" },
    { src: logo18, alt: "Ashok Leyland" },
    { src: logo19, alt: "Ashok Leyland" },
    { src: logo20, alt: "Ashok Leyland" },
    { src: logo21, alt: "Ashok Leyland" },
    { src: logo22, alt: "Ashok Leyland" },
    { src: logo23, alt: "Ashok Leyland" },
    { src: logo24, alt: "Ashok Leyland" },
    { src: logo25, alt: "Ashok Leyland" },
    { src: logo26, alt: "Ashok Leyland" },
    { src: logo27, alt: "Ashok Leyland" },
    { src: logo28, alt: "Ashok Leyland" },
    { src: logo29, alt: "Ashok Leyland" },
    { src: logo30, alt: "Ashok Leyland" },
  ];

  return (
    <section className={styles.trustedSection}>
      <h3 className={styles.heading}>Our Global Partners</h3>

      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.slide}>
              <Image
                src={logo.src}
                alt={logo.alt}
                className={styles.logo}
                width={160}
                height={80}
                priority={index < 7} // load first set eagerly
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
