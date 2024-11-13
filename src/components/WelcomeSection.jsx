import "../style/WelcomeSection.css"

export default function WelcomeSection() {
  return(
    <section className="welcome-section">
      <picture> {/*Webbläsaren kommer att kolla alla sources. Ifall webbläsaren är gammal och inte kan använda "source" eller "picture" taggar, så kommer img srcset användas som "fallback".*/}
        <source 
          srcSet="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt84af0b0f4c7ad4f2/66d7e4dabe0a562a6c9cf24e/xc90-phev-hero-21x9-desktop.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=640&amp;imdensity=1 640w, 
          https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt84af0b0f4c7ad4f2/66d7e4dabe0a562a6c9cf24e/xc90-phev-hero-21x9-desktop.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=750&amp;imdensity=1 750w, c
          https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt84af0b0f4c7ad4f2/66d7e4dabe0a562a6c9cf24e/xc90-phev-hero-21x9-desktop.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=828&amp;imdensity=1 828w, 
          https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt84af0b0f4c7ad4f2/66d7e4dabe0a562a6c9cf24e/xc90-phev-hero-21x9-desktop.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=1080&amp;imdensity=1 1080w, 
          https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt84af0b0f4c7ad4f2/66d7e4dabe0a562a6c9cf24e/xc90-phev-hero-21x9-desktop.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=1200&amp;imdensity=1 1200w, 
          https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt84af0b0f4c7ad4f2/66d7e4dabe0a562a6c9cf24e/xc90-phev-hero-21x9-desktop.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=1920&amp;imdensity=1 1920w, 
          https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt84af0b0f4c7ad4f2/66d7e4dabe0a562a6c9cf24e/xc90-phev-hero-21x9-desktop.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=2048&amp;imdensity=1 2048w, 
          https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt84af0b0f4c7ad4f2/66d7e4dabe0a562a6c9cf24e/xc90-phev-hero-21x9-desktop.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=3840&amp;imdensity=1 3840w" 
          sizes="min(80rem, 100vw)"
          media="(min-width: 64rem)"/>
        <source 
          srcSet="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltb2fca7f36b748230/66d7e4b74558e05b9d8cc27f/xc90-phev-hero-1x1-tablet.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=640&amp;imdensity=1 640w,
          https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltb2fca7f36b748230/66d7e4b74558e05b9d8cc27f/xc90-phev-hero-1x1-tablet.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=750&amp;imdensity=1 750w,
          https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltb2fca7f36b748230/66d7e4b74558e05b9d8cc27f/xc90-phev-hero-1x1-tablet.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=828&amp;imdensity=1 828w,
          https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltb2fca7f36b748230/66d7e4b74558e05b9d8cc27f/xc90-phev-hero-1x1-tablet.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=1080&amp;imdensity=1 1080w,
          https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltb2fca7f36b748230/66d7e4b74558e05b9d8cc27f/xc90-phev-hero-1x1-tablet.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=1200&amp;imdensity=1 1200w,
          https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltb2fca7f36b748230/66d7e4b74558e05b9d8cc27f/xc90-phev-hero-1x1-tablet.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=1920&amp;imdensity=1 1920w,
          https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltb2fca7f36b748230/66d7e4b74558e05b9d8cc27f/xc90-phev-hero-1x1-tablet.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=2048&amp;imdensity=1 2048w,
          https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltb2fca7f36b748230/66d7e4b74558e05b9d8cc27f/xc90-phev-hero-1x1-tablet.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=3840&amp;imdensity=1 3840w" 
          sizes="min(80rem, 100vw)" 
          media="(min-width: 30rem)"/>

        <img 
          alt="En bil på en parkering brevid en strand"
          fetchpriority="high" /* Gör så att den här bilden "laddas ned" först (viktigt eftersom man ska kunna se bilden direkt) */
          width="1024" height="576" 
          className="welcome-img"
          sizes="min(80rem, 100vw)" 
          srcSet="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltd316e31c00f7885c/66d7e46193e60bbfb627da90/xc90-phev-4x5-mobile.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=640&amp;imdensity=1 640w, https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltd316e31c00f7885c/66d7e46193e60bbfb627da90/xc90-phev-4x5-mobile.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=750&amp;imdensity=1 750w, https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltd316e31c00f7885c/66d7e46193e60bbfb627da90/xc90-phev-4x5-mobile.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=828&amp;imdensity=1 828w, https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltd316e31c00f7885c/66d7e46193e60bbfb627da90/xc90-phev-4x5-mobile.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=1080&amp;imdensity=1 1080w, https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltd316e31c00f7885c/66d7e46193e60bbfb627da90/xc90-phev-4x5-mobile.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=1200&amp;imdensity=1 1200w, https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltd316e31c00f7885c/66d7e46193e60bbfb627da90/xc90-phev-4x5-mobile.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=1920&amp;imdensity=1 1920w, https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltd316e31c00f7885c/66d7e46193e60bbfb627da90/xc90-phev-4x5-mobile.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=2048&amp;imdensity=1 2048w, https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltd316e31c00f7885c/66d7e46193e60bbfb627da90/xc90-phev-4x5-mobile.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=3840&amp;imdensity=1 3840w" src="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/bltd316e31c00f7885c/66d7e46193e60bbfb627da90/xc90-phev-4x5-mobile.jpg?branch=prod_alias&amp;auto=webp&amp;iar=0&amp;w=3840&amp;imdensity=1">
        </img>
      </picture>
      <div className="bilfirma-slogan-br">
        <h2>Bilfrima</h2>
        <h3>Bra bilar, ännu bättre priser</h3>
      </div>
    </section>
  );
};