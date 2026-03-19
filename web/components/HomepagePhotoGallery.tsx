/**
 * Static homepage gallery from public/images/
 * Uses <img> so /images/... load directly (avoids Next Image optimizer issues).
 */
const PHOTOS = [
  {
    src: '/images/waist1.jpg',
    alt: 'HOMA Clinic patient success story – metabolic health improvement at Dr. Muddu Surendra Nehru MD Gachibowli Hyderabad',
    caption: 'Patient success – metabolic remission',
  },
  {
    src: '/images/waist2.jpg',
    alt: 'Patient transformation at HOMA Clinic – diabetes reversal and weight loss Gachibowli',
    caption: '90-day program results',
  },
  {
    src: '/images/labnotice4.jpg',
    alt: 'Dr. Muddu Surendra Nehru MD – HOMA Clinic Gachibowli Hyderabad metabolic care and diabetes remission',
    caption: 'HOMA Clinic – Gachibowli',
  },
  {
    src: '/images/waist4.jpg',
    alt: 'Before and after metabolic health transformation – Dr. Muddu Nehru 90-day remission program',
    caption: 'Before & after – metabolic reversal',
  },
  {
    src: '/images/waist5.jpg',
    alt: 'Patient before and after results – HOMA Clinic diabetes and obesity reversal Hyderabad',
    caption: 'Transformation results',
  },
  {
    src: '/images/pcos-reversal-anita-hyderabad.jpg.png',
    alt: 'PCOS reversal success story – HOMA Clinic metabolic health program Dr. Muddu Surendra Nehru MD Gachibowli',
    caption: 'PCOS reversed – patient success',
  },
  // Grok-generated: save as exact names in public/images/ (see GROK_PROMPT_BEFORE_AFTER.md)
  {
    src: '/images/before-after-south-indian-before-1.jpg',
    alt: 'Before – South Indian woman in pattu saree, central obesity – HOMA Clinic 90-day metabolic program',
    caption: 'Before – pattu saree',
  },
  {
    src: '/images/before-after-south-indian-after-1.jpg',
    alt: 'After – same patient, younger, healthier – HOMA Clinic metabolic remission Gachibowli',
    caption: 'After – healthier, younger',
  },
  {
    src: '/images/before-after-south-indian-9-month.jpg',
    alt: '9-month transformational journey – South Indian patient before and after with Dr. Muddu MVP',
    caption: '9-month transformation – Dr. Muddu MVP',
  },
] as const;

export default function HomepagePhotoGallery() {
  return (
    <section className="bg-white py-12 px-4" aria-labelledby="homepage-gallery-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="homepage-gallery-heading" className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
          Patient Results &amp; Clinic
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Real transformations and our Gachibowli clinic – HOMA Clinic metabolic remission program.
        </p>

        {/* Patient results / HOMA success – first 2 */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Patient success</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PHOTOS.slice(0, 2).map((item, i) => (
              <figure key={i} className="rounded-lg overflow-hidden shadow-md bg-gray-100">
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {item.caption && (
                  <figcaption className="p-3 text-sm text-gray-700 text-center font-medium">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>

        {/* Clinic location – 1 */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Clinic – Gachibowli</h3>
          <figure className="rounded-lg overflow-hidden shadow-md bg-gray-100 max-w-2xl mx-auto">
            <div className="relative aspect-[16/10] w-full">
              <img
                src={PHOTOS[2].src}
                alt={PHOTOS[2].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="p-3 text-sm text-gray-700 text-center font-medium">
              {PHOTOS[2].caption}
            </figcaption>
          </figure>
        </div>

        {/* Before & after – 3 (waist4, waist5, 9-month) */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Before &amp; after</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[PHOTOS[3], PHOTOS[4], PHOTOS[8]].map((item, i) => (
              <figure key={i} className="rounded-lg overflow-hidden shadow-md bg-gray-100">
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {item.caption && (
                  <figcaption className="p-3 text-sm text-gray-700 text-center font-medium">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>

        {/* Before & after – South Indian patient: full face/body visible, no crop */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Before &amp; after – South Indian patient</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PHOTOS.slice(6, 9).map((item, i) => (
              <figure key={i} className="rounded-lg overflow-hidden shadow-md bg-gray-100">
                <div className="relative aspect-[3/4] w-full flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                {item.caption && (
                  <figcaption className="p-3 text-sm text-gray-700 text-center font-medium">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>

        {/* Success story – PCOS: full pic visible (face + message), no zoom crop */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Success story</h3>
          <figure className="rounded-lg overflow-hidden shadow-md bg-gray-100 max-w-md mx-auto">
            <div className="relative aspect-square w-full flex items-center justify-center">
              <img
                src={PHOTOS[5].src}
                alt={PHOTOS[5].alt}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <figcaption className="p-3 text-sm text-gray-700 text-center font-medium">
              {PHOTOS[5].caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
