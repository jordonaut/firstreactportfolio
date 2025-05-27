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
      {/* Image A */}
      <div className="relative max-w-screen-2xl mx-auto -mx-6 sm:-mx-12">
        <img
          src={imageA}
          alt={altA}
          className="w-full h-auto object-cover rounded-xl shadow-md"
        />
        {captionA && (
          <figcaption className="text-center text-sm text-[var(--color-text-secondary)] mt-2 px-4 max-w-4xl mx-auto">
            {captionA}
          </figcaption>
        )}
      </div>

      {/* Optional spacing + Image B */}
      {imageB && (
        <div className="relative max-w-screen-2xl mx-auto -mx-6 sm:-mx-12 mt-16">
          <img
            src={imageB}
            alt={altB}
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
          {captionB && (
            <figcaption className="text-center text-sm text-[var(--color-text-secondary)] mt-2 px-4 max-w-4xl mx-auto">
              {captionB}
            </figcaption>
          )}
        </div>
      )}
    </figure>
  );
}
