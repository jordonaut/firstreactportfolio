export function FullBleed({
  imageA,
  altA,
  captionA,
  imageB = null,
  altB = '',
  captionB = '',
}) {
  return (
    <figure className="my-24">
      {/* Bleed Container */}
      <div className="relative w-[100vw] left-[50%] -translate-x-1/2 overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <img
            src={imageA}
            alt={altA}
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
          {captionA && (
            <figcaption className="text-center text-sm text-[var(--color-text-secondary)] mt-2 max-w-4xl mx-auto">
              {captionA}
            </figcaption>
          )}
        </div>
      </div>

      {imageB && (
        <div className="relative w-[100vw] left-[50%] -translate-x-1/2 overflow-hidden mt-16">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
            <img
              src={imageB}
              alt={altB}
              className="w-full h-auto object-cover rounded-xl shadow-md"
            />
            {captionB && (
              <figcaption className="text-center text-sm text-[var(--color-text-secondary)] mt-2 max-w-4xl mx-auto">
                {captionB}
              </figcaption>
            )}
          </div>
        </div>
      )}
    </figure>
  );
}
