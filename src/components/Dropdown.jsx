import React from 'react'

const Dropdown = () => {
  return (
    <div className="dropdown dropdown-right">
          <div tabIndex={0} role="button" className="btn m-1">
            relevance
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
  )
}

export default Dropdown
