/* eslint-disable @next/next/no-img-element */
import brazil from '../../../asset/images/brazil.png'

function Card3() {
  return (
<div className="w-64 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div className="flex flex-col items-center pb-10">
    <img
      className="w-24 h-24 mb-3 rounded-full shadow-lg mt-8"
      src={`${brazil.src}`}
      alt="Bonnie image"
    />
    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
      Bonnie Green
    </h5>
  </div>
</div>

  )
}

export default Card3