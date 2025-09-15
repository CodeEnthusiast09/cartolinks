import { CreditCardIcon } from "../../../../public/assets/credit-card-icon";
import { LegalIcon } from "../../../../public/assets/legal-icon";

const GallerySection = () => {
  return (
    <section className="px-2.5 md:px-5 lg:px-10 pt-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-foreground">
          Gallery
        </h3>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2 bg-foreground/5 p-2 rounded-xl">
            <LegalIcon size={24} />
            <p>Legal</p>
          </div>

          <div className="flex items-center gap-2 bg-foreground/5 p-2 rounded-xl">
            <CreditCardIcon />
            <p>Pricing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
