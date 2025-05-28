export function FullBleed({
  imageA,
  altA,
  captionA,
  imageB = null,
  altB = '',
  captionB = '',
}) {
  return (
    <figure className="w-full my-24">
      <div className="relative w-full overflow-hidden">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12">
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
        <div className="relative w-full overflow-hidden mt-16">
          <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12">
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
