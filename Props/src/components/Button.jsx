import React from 'react'

const Button = ({text,colour}) => {
  return (
    <div className="inline-block">
  <button
    className={`
      ${colour}
      px-8 py-3
      text-white font-semibold
      rounded-xl
      shadow-md
      transition-all duration-300
      hover:scale-105 hover:shadow-xl
      active:scale-95
      focus:outline-none focus:ring-4 focus:ring-opacity-50
    `}
  >
    {text}
  </button>
</div>

  )
}

export default Button
