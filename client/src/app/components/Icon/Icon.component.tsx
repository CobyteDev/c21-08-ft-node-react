import { IconProps } from "./types/IconProps.type"
const Icon = ({ iconType, style = "" }: IconProps) => {
  switch (iconType) {
    case "cart-color":{
return(<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.16 15.0374C5.75232 15.1041 6.2587 10.6979 4.92348 11.7661C3.96937 12.5874 4.25584 13.3683 4.25584 15.0374C4.25584 16.7064 6.45897 17.7078 7.92772 17.7078C9.39647 17.7078 16.2729 17.7746 17.7416 17.7078C19.2104 17.6411 20.3807 16.8109 20.9462 15.5047C21.3069 14.6715 22.0109 12.965 21.5389 11.7661C20.6581 11.197 15.4861 14.984 11.16 15.0374Z" fill="#FC7C48"/><path d="M7.83935 4.34734C8.85302 4.34734 15.2192 3.7376 16.3484 4.80577C17.4776 5.87394 12.6279 10.5599 10.3902 10.8984C9.03347 11.1036 5.09654 9.01286 5.09654 7.76664C5.99093 5.89837 6.11018 4.34734 7.83935 4.34734Z" fill="#E65046"/><path d="M2 2.7475H3.74001C4.82001 2.7475 5.67 3.6775 5.58 4.7475L4.75 14.7075C4.61 16.3375 5.89999 17.7375 7.53999 17.7375H18.19C19.63 17.7375 20.89 16.5575 21 15.1275L21.54 7.6275C21.66 5.9675 20.4 4.61749 18.73 4.61749H5.82001" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.25 22.7475C16.9404 22.7475 17.5 22.1879 17.5 21.4975C17.5 20.8071 16.9404 20.2475 16.25 20.2475C15.5596 20.2475 15 20.8071 15 21.4975C15 22.1879 15.5596 22.7475 16.25 22.7475Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.25 22.7475C8.94036 22.7475 9.5 22.1879 9.5 21.4975C9.5 20.8071 8.94036 20.2475 8.25 20.2475C7.55964 20.2475 7 20.8071 7 21.4975C7 22.1879 7.55964 22.7475 8.25 22.7475Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 8.7475H21" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>)
    }
    case "hamburger": {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7H21"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M3 12H21"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M3 17H21"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    }
    case "boxTick":
      return (
        <svg
          className={style}
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.666 35.82C46.706 37.32 46.306 38.74 45.586 39.96C45.186 40.68 44.646 41.34 44.046 41.88C42.666 43.16 40.846 43.94 38.826 44C35.906 44.06 33.326 42.56 31.906 40.26C31.146 39.08 30.686 37.66 30.666 36.16C30.606 33.64 31.726 31.36 33.526 29.86C34.886 28.74 36.606 28.04 38.486 28C42.906 27.9 46.566 31.4 46.666 35.82Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.546 36.0601L37.566 37.98L41.746 33.9399"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.0061 14.88L24.6661 25.1L42.2061 14.9399"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.666 43.22V25.08"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.886 18.34V29.6601C43.886 29.7601 43.886 29.84 43.866 29.94C42.466 28.72 40.666 28 38.666 28C36.786 28 35.046 28.66 33.666 29.76C31.826 31.22 30.666 33.48 30.666 36C30.666 37.5 31.086 38.92 31.826 40.12C32.006 40.44 32.226 40.7401 32.466 41.0201L28.806 43.0401C26.526 44.3201 22.806 44.3201 20.526 43.0401L9.84601 37.12C7.42601 35.78 5.44604 32.4201 5.44604 29.6601V18.34C5.44604 15.58 7.42601 12.22 9.84601 10.88L20.526 4.96C22.806 3.68 26.526 3.68 28.806 4.96L39.486 10.88C41.906 12.22 43.886 15.58 43.886 18.34Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "boxTickLarge":
      return (
        <svg
          className={style}
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.666 35.82C46.706 37.32 46.306 38.74 45.586 39.96C45.186 40.68 44.646 41.34 44.046 41.88C42.666 43.16 40.846 43.94 38.826 44C35.906 44.06 33.326 42.56 31.906 40.26C31.146 39.08 30.686 37.66 30.666 36.16C30.606 33.64 31.726 31.36 33.526 29.86C34.886 28.74 36.606 28.04 38.486 28C42.906 27.9 46.566 31.4 46.666 35.82Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.546 36.0601L37.566 37.98L41.746 33.9399"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.0061 14.88L24.6661 25.1L42.2061 14.9399"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.666 43.22V25.08"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.886 18.34V29.6601C43.886 29.7601 43.886 29.84 43.866 29.94C42.466 28.72 40.666 28 38.666 28C36.786 28 35.046 28.66 33.666 29.76C31.826 31.22 30.666 33.48 30.666 36C30.666 37.5 31.086 38.92 31.826 40.12C32.006 40.44 32.226 40.7401 32.466 41.0201L28.806 43.0401C26.526 44.3201 22.806 44.3201 20.526 43.0401L9.84601 37.12C7.42601 35.78 5.44604 32.4201 5.44604 29.6601V18.34C5.44604 15.58 7.42601 12.22 9.84601 10.88L20.526 4.96C22.806 3.68 26.526 3.68 28.806 4.96L39.486 10.88C41.906 12.22 43.886 15.58 43.886 18.34Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "cartLarge":
      return (
        <svg
          className={style}
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.87335 4.51685H8.64336C10.9834 4.51685 12.825 6.53185 12.63 8.85018L10.8317 30.4302C10.5284 33.9618 13.3233 36.9952 16.8767 36.9952H39.9517C43.0717 36.9952 45.8017 34.4385 46.04 31.3402L47.21 15.0902C47.47 11.4935 44.74 8.5685 41.1217 8.5685H13.15"
            stroke="#292D32"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.7484 47.8501C37.2441 47.8501 38.4567 46.6376 38.4567 45.1418C38.4567 43.646 37.2441 42.4335 35.7484 42.4335C34.2526 42.4335 33.04 43.646 33.04 45.1418C33.04 46.6376 34.2526 47.8501 35.7484 47.8501Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.4151 47.8501C19.9108 47.8501 21.1234 46.6376 21.1234 45.1418C21.1234 43.646 19.9108 42.4335 18.4151 42.4335C16.9193 42.4335 15.7067 43.646 15.7067 45.1418C15.7067 46.6376 16.9193 47.8501 18.4151 47.8501Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.04 17.5168H46.04"
            stroke="#292D32"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "almacen":
      return (
        <svg
          className={style}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 8H21"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "cartSmall":
      return (
        <svg
          className={style}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 8H21"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "category":
      return (
        <svg className={style} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.54 8.1628C18.8986 8.1628 20 7.06142 20 5.7028C20 4.34418 18.8986 3.2428 17.54 3.2428C16.1814 3.2428 15.08 4.34418 15.08 5.7028C15.08 7.06142 16.1814 8.1628 17.54 8.1628Z" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.46001 8.1628C7.81863 8.1628 8.92 7.06142 8.92 5.7028C8.92 4.34418 7.81863 3.2428 6.46001 3.2428C5.10139 3.2428 4 4.34418 4 5.7028C4 7.06142 5.10139 8.1628 6.46001 8.1628Z" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.54 20.4628C18.8986 20.4628 20 19.3615 20 18.0028C20 16.6442 18.8986 15.5428 17.54 15.5428C16.1814 15.5428 15.08 16.6442 15.08 18.0028C15.08 19.3615 16.1814 20.4628 17.54 20.4628Z" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.46001 20.4628C7.81863 20.4628 8.92 19.3615 8.92 18.0028C8.92 16.6442 7.81863 15.5428 6.46001 15.5428C5.10139 15.5428 4 16.6442 4 18.0028C4 19.3615 5.10139 20.4628 6.46001 20.4628Z" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    case "delivery":
      return (
        <svg
          className={style}
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.276 28H26.276C28.476 28 30.276 26.2 30.276 24V4H12.276C9.276 4 6.65602 5.65998 5.29602 8.09998"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.276 34C4.276 37.32 6.956 40 10.276 40H12.276C12.276 37.8 14.076 36 16.276 36C18.476 36 20.276 37.8 20.276 40H28.276C28.276 37.8 30.076 36 32.276 36C34.476 36 36.276 37.8 36.276 40H38.276C41.596 40 44.276 37.32 44.276 34V28H38.276C37.176 28 36.276 27.1 36.276 26V20C36.276 18.9 37.176 18 38.276 18H40.856L37.436 12.02C36.716 10.78 35.3961 10 33.9561 10H30.276V24C30.276 26.2 28.476 28 26.276 28H24.276"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.276 44C18.4851 44 20.276 42.2091 20.276 40C20.276 37.7909 18.4851 36 16.276 36C14.0669 36 12.276 37.7909 12.276 40C12.276 42.2091 14.0669 44 16.276 44Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.276 44C34.4851 44 36.276 42.2091 36.276 40C36.276 37.7909 34.4851 36 32.276 36C30.0669 36 28.276 37.7909 28.276 40C28.276 42.2091 30.0669 44 32.276 44Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44.276 24V28H38.276C37.176 28 36.276 27.1 36.276 26V20C36.276 18.9 37.176 18 38.276 18H40.856L44.276 24Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.276 16H16.276"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.276 22H12.276"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.276 28H8.276"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "heart":
      return (
        <svg
          className={style}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.953 20.6628C12.613 20.7828 12.053 20.7828 11.713 20.6628C8.81301 19.6728 2.33301 15.5428 2.33301 8.54276C2.33301 5.45276 4.82301 2.95276 7.89301 2.95276C9.71301 2.95276 11.323 3.83276 12.333 5.19276C13.343 3.83276 14.963 2.95276 16.773 2.95276C19.843 2.95276 22.333 5.45276 22.333 8.54276C22.333 15.5428 15.853 19.6728 12.953 20.6628Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "heartFilled":
      return (
        <svg
          className={style}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.953 20.6628C12.613 20.7828 12.053 20.7828 11.713 20.6628C8.81301 19.6728 2.33301 15.5428 2.33301 8.54276C2.33301 5.45276 4.82301 2.95276 7.89301 2.95276C9.71301 2.95276 11.323 3.83276 12.333 5.19276C13.343 3.83276 14.963 2.95276 16.773 2.95276C19.843 2.95276 22.333 5.45276 22.333 8.54276C22.333 15.5428 15.853 19.6728 12.953 20.6628Z"
            fill="#292D32"
          />
        </svg>
      )
    case "minus":
      return (
        <svg
          className={style}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.6687 12H18.6687"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "plus":
      return (
        <svg
          className={style}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.33301 12H18.333"
            // stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.333 18V6"
            // stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "search":
      return (
        <svg
          className={style}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.776 21C17.0227 21 21.276 16.7467 21.276 11.5C21.276 6.25329 17.0227 2 11.776 2C6.5293 2 2.276 6.25329 2.276 11.5C2.276 16.7467 6.5293 21 11.776 21Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.276 22L20.276 20"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "shop":
      return (
        <svg
          className={style}
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.02002 22.6234V31.6034C6.02002 40.5834 9.62002 44.1834 18.6 44.1834H29.38C38.36 44.1834 41.96 40.5834 41.96 31.6034V22.6234"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 24.1835C27.66 24.1835 30.36 21.2035 30 17.5435L28.68 4.18347H19.34L18 17.5435C17.64 21.2035 20.34 24.1835 24 24.1835Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.62 24.1835C40.66 24.1835 43.62 20.9035 43.22 16.8835L42.66 11.3835C41.94 6.18347 39.94 4.18347 34.7 4.18347H28.6L30 18.2035C30.34 21.5035 33.32 24.1835 36.62 24.1835Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.28 24.1835C14.58 24.1835 17.56 21.5035 17.88 18.2035L18.32 13.7835L19.28 4.18347H13.18C7.94001 4.18347 5.94001 6.18347 5.22001 11.3835L4.68001 16.8835C4.28001 20.9035 7.24001 24.1835 11.28 24.1835Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 34.1835C20.66 34.1835 19 35.8435 19 39.1835V44.1835H29V39.1835C29 35.8435 27.34 34.1835 24 34.1835Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "trash":
      return (
        <svg
          className={style}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.33 16.5H13.66"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12.5H14.5"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "user":
      return (
        <svg
          className={style}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "whatsapp":
      return (
        <svg
          className={style}
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.149902 48.08L3.5239 35.754C1.4419 32.146 0.347902 28.056 0.349902 23.862C0.355902 10.75 11.0259 0.0799561 24.1359 0.0799561C30.4979 0.0819561 36.4699 2.55996 40.9619 7.05596C45.4519 11.552 47.9239 17.528 47.9219 23.884C47.9159 36.998 37.2459 47.668 24.1359 47.668C20.1559 47.666 16.2339 46.668 12.7599 44.772L0.149902 48.08ZM13.3439 40.466C16.6959 42.456 19.8959 43.648 24.1279 43.65C35.0239 43.65 43.8999 34.782 43.9059 23.88C43.9099 12.956 35.0759 4.09996 24.1439 4.09596C13.2399 4.09596 4.3699 12.964 4.3659 23.864C4.3639 28.314 5.6679 31.646 7.8579 35.132L5.8599 42.428L13.3439 40.466ZM36.1179 29.538C35.9699 29.29 35.5739 29.142 34.9779 28.844C34.3839 28.546 31.4619 27.108 30.9159 26.91C30.3719 26.712 29.9759 26.612 29.5779 27.208C29.1819 27.802 28.0419 29.142 27.6959 29.538C27.3499 29.934 27.0019 29.984 26.4079 29.686C25.8139 29.388 23.8979 28.762 21.6279 26.736C19.8619 25.16 18.6679 23.214 18.3219 22.618C17.9759 22.024 18.2859 21.702 18.5819 21.406C18.8499 21.14 19.1759 20.712 19.4739 20.364C19.7759 20.02 19.8739 19.772 20.0739 19.374C20.2719 18.978 20.1739 18.63 20.0239 18.332C19.8739 18.036 18.6859 15.11 18.1919 13.92C17.7079 12.762 17.2179 12.918 16.8539 12.9L15.7139 12.88C15.3179 12.88 14.6739 13.028 14.1299 13.624C13.5859 14.22 12.0499 15.656 12.0499 18.582C12.0499 21.508 14.1799 24.334 14.4759 24.73C14.7739 25.126 18.6659 31.13 24.6279 33.704C26.0459 34.316 27.1539 34.682 28.0159 34.956C29.4399 35.408 30.7359 35.344 31.7599 35.192C32.9019 35.022 35.2759 33.754 35.7719 32.366C36.2679 30.976 36.2679 29.786 36.1179 29.538Z"
            fill="#292D32"
          />
        </svg>
      )
    case "rightArrow":
      return (
        <svg
          className={style}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 12H20.33"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "chev":
      return (
        <svg
          className={style}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path
            d="M19.92 15.09L13.4 8.56996C12.63 7.79997 11.37 7.79997 10.6 8.56997L4.07996 15.09"
            // stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "congelados":
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.52827 5.98432C1.83707 5.62958 1.83706 5.05841 2.52826 4.70367L9.47131 1.14032C10.1625 0.785577 11.2754 0.785584 11.9666 1.14032L18.9096 4.70366C19.6008 5.05841 19.6063 5.64044 18.9097 5.98432L14.8683 7.97919"
            stroke="black"
            strokeWidth="1.36499"
            strokeLinecap="round"
          />
          <path
            d="M8.26743 20.8277C8.03657 20.6869 7.77504 20.5773 3.09385 18.0051C2.29085 17.5442 1.44884 17.3143 1.47756 16.3888L1.48292 6.21158C1.48341 5.28569 1.81774 5.10789 2.42022 4.81926"
            stroke="black"
            strokeWidth="1.23164"
            strokeLinecap="round"
          />
          <path
            d="M2.23624 5.80212C2.23624 5.80212 3.59557 6.50794 4.32753 6.90006C5.05949 7.29218 6.00058 8.23326 6.00058 9.85402C6.00058 11.4748 6.00058 14.1935 6.00058 14.1935"
            stroke="black"
            strokeWidth="1.23035"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.8492 13.4525L11.8226 12.9497C11.2994 12.6812 11.2994 12.2488 11.8226 11.9802L17.0791 9.28246C17.6024 9.0139 18.4449 9.01389 18.9682 9.28246L24.2246 11.9802C24.7479 12.2488 24.7461 12.6776 24.2246 12.9498C24.2246 12.9498 22.9193 13.5856 22.2601 13.9297C21.764 14.1886 21.0072 14.6802 21.0072 14.6802"
            stroke="black"
            strokeWidth="1.41049"
            strokeLinecap="round"
          />
          <path
            d="M24.3032 12.0388C24.7577 12.2574 24.9897 12.6295 24.9905 13.3306C24.9931 15.7608 24.996 18.191 24.9948 20.6212C25.0164 21.322 24.3974 21.5259 23.7755 21.8451C23.7755 21.8451 21.2293 23.1795 19.9556 23.8454C18.356 24.6815 17.7675 24.7283 16.1373 23.9185C14.8138 23.2612 12.167 21.9465 12.167 21.9465C11.541 21.6355 10.926 21.4233 10.9477 20.7226C10.9464 18.2924 10.9494 15.8622 10.9519 13.432C10.9528 12.7309 11.1848 12.3587 11.6393 12.1402"
            stroke="black"
            strokeWidth="1.22826"
          />
          <path
            d="M11.6015 12.8118C11.6015 12.8118 12.6307 13.3462 13.1848 13.643C13.739 13.9399 14.4514 14.6524 14.4514 15.8794C14.4514 17.1065 14.4514 19.1647 14.4514 19.1647"
            stroke="black"
            strokeWidth="1.23035"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5345 15.3929C17.0886 15.6898 17.5964 16.255 17.6348 17.4814L17.7087 19.845C17.7392 20.8191 19.4822 20.7305 19.4822 19.7927V17.3173C19.4822 16.0103 20.3755 14.9678 21.2381 14.4842"
            stroke="black"
            strokeWidth="1.14832"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.194 4.30334C19.1028 4.90231 19.7926 4.99923 19.7951 5.52691C19.796 5.73094 19.8361 7.3439 19.8361 7.61574"
            stroke="black"
            strokeWidth="1.0663"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "libreria":
      return (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.35339 18V7C4.35339 3 5.35339 2 9.35339 2H16.3534C20.3534 2 21.3534 3 21.3534 7V17C21.3534 17.14 21.3534 17.28 21.3434 17.42"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.20339 15H21.3534V18.5C21.3534 20.43 19.7834 22 17.8534 22H7.85339C5.92339 22 4.35339 20.43 4.35339 18.5V17.85C4.35339 16.28 5.63339 15 7.20339 15Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.85339 7H16.8534"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.85339 10.5H13.8534"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "vinoteca":
      return (
        <svg
          width="22"
          height="27"
          viewBox="0 0 22 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.3707 12.411C6.22741 12.411 7.73254 10.9059 7.73254 9.04916C7.73254 7.19245 6.22741 5.68732 4.3707 5.68732C2.51399 5.68732 1.00882 7.19245 1.00882 9.04916C1.00882 10.9059 2.51399 12.411 4.3707 12.411Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.1878 12.411C13.0445 12.411 14.5496 10.9059 14.5496 9.04916C14.5496 7.19245 13.0445 5.68732 11.1878 5.68732C9.33104 5.68732 7.82588 7.19245 7.82588 9.04916C7.82588 10.9059 9.33104 12.411 11.1878 12.411Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.0049 12.411C19.8616 12.411 21.3668 10.9059 21.3668 9.04916C21.3668 7.19245 19.8616 5.68732 18.0049 5.68732C16.1482 5.68732 14.6431 7.19245 14.6431 9.04916C14.6431 10.9059 16.1482 12.411 18.0049 12.411Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.82591 19.2282C9.68262 19.2282 11.1878 17.723 11.1878 15.8663C11.1878 14.0096 9.68262 12.5045 7.82591 12.5045C5.9692 12.5045 4.46403 14.0096 4.46403 15.8663C4.46403 17.723 5.9692 19.2282 7.82591 19.2282Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5497 19.2282C16.4064 19.2282 17.9116 17.723 17.9116 15.8663C17.9116 14.0096 16.4064 12.5045 14.5497 12.5045C12.693 12.5045 11.1878 14.0096 11.1878 15.8663C11.1878 17.723 12.693 19.2282 14.5497 19.2282Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.1878 25.485C13.0445 25.485 14.5496 23.9798 14.5496 22.1231C14.5496 20.2664 13.0445 18.7612 11.1878 18.7612C9.33104 18.7612 7.82588 20.2664 7.82588 22.1231C7.82588 23.9798 9.33104 25.485 11.1878 25.485Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.1878 5.68732C11.0701 4.89152 11.1733 4.07864 11.4862 3.33753C11.7991 2.59642 12.3097 1.95558 12.9621 1.48499"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "limpieza":
      return (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7234 5.66998L7.3034 7.74999L5.7434 5.19C5.1734 4.25 5.4734 3.01 6.4134 2.44C7.3534 1.87 8.5934 2.16998 9.1634 3.10998L10.7234 5.66998Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6734 9.15997L9.5134 11.08C7.6734 12.2 7.11339 14.46 8.00339 16.26L10.0534 20.44C10.7134 21.79 12.3134 22.26 13.5934 21.47L20.0234 17.56C21.3134 16.78 21.6234 15.15 20.7334 13.94L17.9634 10.2C16.7634 8.58001 14.5134 8.03997 12.6734 9.15997Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.61 5.09797L6.48544 8.21857L8.56584 11.635L13.6904 8.51437L11.61 5.09797Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.1634 16.81L16.8134 19.52"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6034 18.37L14.2534 21.08"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.7234 15.25L19.3734 17.96"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "bebidas-sin-alcohol":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3839 1.5625V7.8125H14.462C15.5393 7.92857 16.5351 8.44027 17.2568 9.24851C17.9784 10.0567 18.3745 11.104 18.3682 12.1875V23.75H6.25887V12.1094C6.25252 11.0465 6.64034 10.019 7.34737 9.22543C8.05439 8.43183 9.03046 7.92843 10.087 7.8125V1.5625H14.3839Z"
            stroke="black"
            strokeWidth="1.17188"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.087 4.45312H14.3838"
            stroke="black"
            strokeWidth="1.17188"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.25892 14.375H18.3683"
            stroke="black"
            strokeWidth="1.17188"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.25892 18.5156H18.3683"
            stroke="black"
            strokeWidth="1.17188"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "bebidas-con-alcohol":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.31884 1.4338H8.6159H8.65614C8.73038 1.39785 8.79116 1.34074 8.83013 1.27032C8.8691 1.1999 8.88434 1.11964 8.87375 1.04058C8.86316 0.961519 8.82726 0.887543 8.771 0.828837C8.71474 0.770132 8.64088 0.729581 8.55958 0.712761H4.31884C4.25842 0.693726 4.19413 0.688693 4.13128 0.698076C4.06843 0.707458 4.00879 0.730989 3.95727 0.766737C3.90574 0.802484 3.8638 0.849431 3.83487 0.903722C3.80594 0.958014 3.79086 1.0181 3.79086 1.07906C3.79086 1.14002 3.80594 1.20012 3.83487 1.25441C3.8638 1.3087 3.90574 1.35564 3.95727 1.39139C4.00879 1.42714 4.06843 1.45067 4.13128 1.46005C4.19413 1.46943 4.25842 1.46441 4.31884 1.44537V1.4338Z"
            fill="#292D32"
            stroke="#292D32"
            strokeWidth="0.6"
          />
          <path
            d="M23.3016 10.4487H22.3038V9.97446C22.3114 9.48661 22.153 9.00965 21.8524 8.61585C21.5518 8.22204 21.1255 7.93285 20.6381 7.79206H20.6139C20.115 7.66096 20.0869 7.34093 20.0869 7.34093L19.604 3.20364H18.8396L19.3103 7.22912L19.3385 7.41419C19.3385 7.41419 19.3868 8.18536 20.0104 8.32417C20.1945 8.38245 20.3734 8.45466 20.5455 8.54009C20.841 8.66028 21.0932 8.86104 21.2706 9.11743C21.448 9.37382 21.5428 9.67453 21.5434 9.98217V10.4564H13.6372V9.98217C13.6392 9.72557 13.7061 9.47326 13.8322 9.24692C13.9584 9.02057 14.14 8.82697 14.3615 8.68276C14.4329 8.63669 14.5067 8.59422 14.5828 8.55551C14.7685 8.45852 14.9639 8.37972 15.1662 8.32031C15.661 8.20463 15.7817 7.68025 15.8139 7.47589L16.164 3.20364H15.3995L15.0575 7.3525C15.0174 7.46701 14.9457 7.56901 14.8501 7.64773C14.7545 7.72646 14.6385 7.77899 14.5144 7.79978L14.4701 7.81906C13.9958 7.96738 13.5836 8.25747 13.2939 8.64677C13.0043 9.03608 12.8524 9.50411 12.8607 9.98217V10.4564H11.2755V9.98217C11.2831 9.49432 11.1247 9.01737 10.8241 8.62356C10.5235 8.22976 10.0972 7.94056 9.60975 7.79978L9.56147 7.7805C9.06256 7.6494 9.06256 7.33708 9.06256 7.33708L8.57974 3.19978H7.81126L8.282 7.22526L8.30615 7.41033C8.30615 7.41033 8.35443 8.1815 8.97807 8.32031C9.16272 8.37705 9.34179 8.44931 9.51319 8.53624V8.53624C9.80825 8.65659 10.0598 8.85751 10.2365 9.11395C10.4133 9.37039 10.5073 9.671 10.507 9.97831V10.4526H2.62099V9.97831C2.62156 9.64767 2.73298 9.32597 2.93884 9.06063C3.04799 8.91022 3.18424 8.77966 3.34119 8.67505L3.55846 8.54781C3.7454 8.45045 3.94223 8.37164 4.14588 8.3126C4.32802 8.24824 4.48629 8.13376 4.60081 7.98354C4.71533 7.83332 4.78102 7.65404 4.78964 7.46817L5.1437 3.19592H4.37522L4.03322 7.34479C3.99626 7.4539 3.93055 7.55204 3.84245 7.62972C3.75435 7.70739 3.64683 7.76198 3.53029 7.78821H3.50213C3.02428 7.94017 2.60797 8.23151 2.31146 8.62145C2.01494 9.01139 1.85307 9.48042 1.84848 9.96289V10.4372H0.862735C0.756026 10.4372 0.653687 10.4778 0.578232 10.5501C0.502778 10.6224 0.460388 10.7205 0.460388 10.8227V23.3272C0.465554 23.4261 0.510213 23.5192 0.585115 23.5874C0.660017 23.6556 0.759422 23.6936 0.862735 23.6935H23.2936C23.3439 23.694 23.3938 23.6849 23.4405 23.6666C23.4871 23.6484 23.5294 23.6215 23.565 23.5873C23.6006 23.5532 23.6288 23.5126 23.6478 23.468C23.6668 23.4233 23.6763 23.3754 23.6758 23.3272V10.815C23.6763 10.7674 23.6671 10.7202 23.6485 10.676C23.63 10.6319 23.6026 10.5916 23.5679 10.5576C23.5331 10.5236 23.4917 10.4965 23.446 10.4778C23.4004 10.4591 23.3513 10.4492 23.3016 10.4487V10.4487ZM22.8993 22.9532H1.25301V11.1813H22.9194L22.8993 22.9532Z"
            fill="#292D32"
            stroke="#292D32"
            strokeWidth="0.6"
          />
          <path
            d="M15.3351 1.4338H19.6443H19.6885C19.7627 1.39785 19.8235 1.34074 19.8625 1.27032C19.9015 1.1999 19.9167 1.11964 19.9061 1.04058C19.8955 0.961519 19.8596 0.887543 19.8034 0.828837C19.7471 0.770132 19.6733 0.729581 19.5919 0.712761H15.3351C15.2747 0.693726 15.2104 0.688693 15.1476 0.698076C15.0847 0.707458 15.0251 0.730989 14.9736 0.766737C14.922 0.802484 14.8801 0.849431 14.8512 0.903722C14.8222 0.958014 14.8071 1.0181 14.8071 1.07906C14.8071 1.14002 14.8222 1.20012 14.8512 1.25441C14.8801 1.3087 14.922 1.35564 14.9736 1.39139C15.0251 1.42714 15.0847 1.45067 15.1476 1.46005C15.2104 1.46943 15.2747 1.46441 15.3351 1.44537V1.4338Z"
            fill="#292D32"
            stroke="#292D32"
            strokeWidth="0.6"
          />
          <path
            d="M5.357 20.1692H18.8155C18.9153 20.1646 19.0097 20.1245 19.0804 20.0568C19.151 19.9891 19.1928 19.8986 19.1977 19.8029V14.3315C19.2011 14.2817 19.1936 14.2317 19.1758 14.1848C19.1581 14.1379 19.1304 14.0949 19.0945 14.0587C19.0586 14.0225 19.0153 13.9938 18.9673 13.9744C18.9193 13.955 18.8676 13.9453 18.8155 13.946H5.357C5.25029 13.946 5.14795 13.9866 5.0725 14.0589C4.99704 14.1312 4.95465 14.2293 4.95465 14.3315V19.8029C4.95982 19.9018 5.00448 19.995 5.07938 20.0632C5.15428 20.1314 5.25368 20.1694 5.357 20.1692ZM5.73923 14.6978H18.4373V19.4444H5.73923V14.6978Z"
            fill="#292D32"
            stroke="#292D32"
            strokeWidth="0.6"
          />
        </svg>
      )
    case "variados":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0088 16C14.0088 17.77 13.2388 19.37 12.0088 20.46C10.9488 21.42 9.54879 22 8.00879 22C4.69879 22 2.00879 19.31 2.00879 16C2.00879 13.24 3.88879 10.9 6.42879 10.21C7.11879 11.95 8.59879 13.29 10.4288 13.79C10.9288 13.93 11.4588 14 12.0088 14C12.5588 14 13.0888 13.93 13.5888 13.79C13.8588 14.47 14.0088 15.22 14.0088 16Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.0088 8C18.0088 8.78 17.8588 9.53 17.5888 10.21C16.8988 11.95 15.4188 13.29 13.5888 13.79C13.0888 13.93 12.5588 14 12.0088 14C11.4588 14 10.9288 13.93 10.4288 13.79C8.59879 13.29 7.11879 11.95 6.42879 10.21C6.15879 9.53 6.00879 8.78 6.00879 8C6.00879 4.69 8.69879 2 12.0088 2C15.3188 2 18.0088 4.69 18.0088 8Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.0088 16C22.0088 19.31 19.3188 22 16.0088 22C14.4688 22 13.0688 21.42 12.0088 20.46C13.2388 19.37 14.0088 17.77 14.0088 16C14.0088 15.22 13.8588 14.47 13.5888 13.79C15.4188 13.29 16.8988 11.95 17.5888 10.21C20.1288 10.9 22.0088 13.24 22.0088 16Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "check":
      return (
        <svg
          className={style}
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5992 15.8445L17.2219 10.2218"
            // stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5986 15.8445L9.09424 13.34"
            // stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <ellipse
            cx="12.6803"
            cy="12.4947"
            rx="8.64441"
            ry="8.4712"
            // stroke="#292D32"
            strokeWidth="1.5"
          />
        </svg>
      )
    case "step-1":
      return (
        <svg width="57" height="42" viewBox="0 0 57 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.683 0.090332C18.6403 2.949 18.5977 5.35967 18.555 7.32233C18.555 9.285 18.5337 10.9703 18.491 12.3783C18.491 13.7437 18.4697 15.0237 18.427 16.2183C18.427 17.413 18.427 18.6717 18.427 19.9943C18.427 21.9143 18.427 23.7063 18.427 25.3703C18.4697 26.9917 18.5123 28.6343 18.555 30.2983C18.5977 31.9623 18.6403 33.8397 18.683 35.9303L26.491 37.5303L25.467 40.4103C24.2723 40.325 22.587 40.2823 20.411 40.2823C18.2777 40.2397 16.1443 40.2183 14.011 40.2183C12.8163 40.2183 11.4297 40.2397 9.85101 40.2823C8.31501 40.2823 6.82168 40.3037 5.37101 40.3463C3.92034 40.3463 2.72568 40.3677 1.78701 40.4103L0.763011 37.5303L8.89101 35.9303C8.97635 33.925 9.01901 32.133 9.01901 30.5543C9.06168 28.9757 9.08301 27.4397 9.08301 25.9463C9.12568 24.4103 9.14701 22.725 9.14701 20.8903C9.14701 19.2263 9.12568 17.8397 9.08301 16.7303C9.08301 15.5783 9.06168 14.4477 9.01901 13.3383C9.01901 12.1863 8.97635 10.757 8.89101 9.05033L1.33901 9.24233L0.187012 6.04234C2.61901 5.701 5.17901 5.08233 7.86701 4.18633C10.555 3.29033 13.0083 1.925 15.227 0.090332H18.683Z" fill="#292D32"/><path d="M26.491 10.4103H29.101C30.721 10.4103 31.996 11.8053 31.861 13.4103L30.616 28.3503C30.406 30.7953 32.341 32.8953 34.801 32.8953H50.776C52.936 32.8953 54.826 31.1253 54.991 28.9803L55.801 17.7303C55.981 15.2403 54.091 13.2153 51.586 13.2153H32.221" stroke="#292D32" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M47.866 40.4103C48.9015 40.4103 49.741 39.5709 49.741 38.5353C49.741 37.4998 48.9015 36.6603 47.866 36.6603C46.8304 36.6603 45.991 37.4998 45.991 38.5353C45.991 39.5709 46.8304 40.4103 47.866 40.4103Z" stroke="#292D32" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M35.866 40.4103C36.9015 40.4103 37.741 39.5709 37.741 38.5353C37.741 37.4998 36.9015 36.6603 35.866 36.6603C34.8304 36.6603 33.991 37.4998 33.991 38.5353C33.991 39.5709 34.8304 40.4103 35.866 40.4103Z" stroke="#292D32" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M36.991 19.4103H54.991" stroke="#292D32" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    case "step-2":
      return (
        <svg width="71" height="41" viewBox="0 0 71 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.184082 11.0023C2.27475 7.58898 4.72808 4.92231 7.54408 3.00231C10.3601 1.08231 13.4321 0.122314 16.7601 0.122314C18.7227 0.122314 20.6001 0.48498 22.3921 1.21031C24.2268 1.89298 25.7201 2.98098 26.8721 4.47431C28.0668 5.96765 28.6641 7.90898 28.6641 10.2983C28.6641 11.5783 28.4934 12.8156 28.1521 14.0103C27.8108 15.1623 27.1921 16.421 26.2961 17.7863C25.4001 19.109 24.0988 20.645 22.3921 22.3943C20.6854 24.1436 18.4667 26.2343 15.7361 28.6663C13.0481 31.0556 9.74142 33.957 5.81608 37.3703L6.77608 33.5943C7.62942 33.637 8.50408 33.6583 9.40008 33.6583C10.3387 33.6583 11.2987 33.6583 12.2801 33.6583C13.7734 33.6583 15.4374 33.637 17.2721 33.5943C19.1494 33.5516 21.0481 33.4876 22.9681 33.4023C24.8881 33.317 26.6801 33.2103 28.3441 33.0823L29.3681 40.3783C27.0641 40.293 24.7174 40.229 22.3281 40.1863C19.9814 40.1436 17.4641 40.1223 14.7761 40.1223C12.7281 40.1223 10.9361 40.1436 9.40008 40.1863C7.90675 40.1863 6.52008 40.2076 5.24008 40.2503C4.00275 40.2503 2.70142 40.293 1.33608 40.3783L0.184082 37.7543C3.98142 33.8716 7.13875 30.6503 9.65608 28.0903C12.1734 25.4876 14.1787 23.3116 15.6721 21.5623C17.1654 19.813 18.2107 18.3196 18.8081 17.0823C19.4481 15.8023 19.7681 14.5223 19.7681 13.2423C19.7681 11.2796 19.1281 9.70098 17.8481 8.50631C16.5681 7.26898 14.8614 6.65031 12.7281 6.65031C10.8507 6.65031 9.05875 7.11965 7.35208 8.05832C5.68808 8.99698 3.78942 10.661 1.65608 13.0503L0.184082 11.0023ZM23.9281 33.6583C24.4401 32.3783 24.8668 31.1836 25.2081 30.0743C25.5921 28.9223 25.9974 27.7703 26.4241 26.6183H29.8161C29.6454 28.3676 29.5174 30.1596 29.4321 31.9943C29.3468 33.829 29.3041 35.6636 29.3041 37.4983C29.3041 37.9676 29.3041 38.4583 29.3041 38.9703C29.3468 39.4396 29.3681 39.909 29.3681 40.3783L23.9281 33.6583Z" fill="#292D32"/><path d="M37.8162 40.3783L40.1358 31.9042C38.7044 29.4237 37.9523 26.6118 37.9537 23.7284C37.9578 14.7139 45.2934 7.3783 54.3065 7.3783C58.6804 7.37967 62.7862 9.0833 65.8744 12.1743C68.9613 15.2653 70.6608 19.3738 70.6594 23.7435C70.6553 32.7594 63.3197 40.095 54.3065 40.095C51.5703 40.0937 48.8739 39.4075 46.4855 38.104L37.8162 40.3783ZM46.887 35.1437C49.1915 36.5118 51.3915 37.3313 54.301 37.3327C61.792 37.3327 67.8943 31.2359 67.8984 23.7408C67.9012 16.2305 61.8278 10.142 54.312 10.1393C46.8155 10.1393 40.7174 16.236 40.7147 23.7298C40.7133 26.7892 41.6098 29.0799 43.1154 31.4765L41.7418 36.4925L46.887 35.1437ZM62.5442 27.6307C62.4424 27.4602 62.1702 27.3584 61.7604 27.1535C61.352 26.9487 59.3432 25.96 58.9678 25.8239C58.5938 25.6878 58.3215 25.619 58.0479 26.0288C57.7757 26.4372 56.9919 27.3584 56.754 27.6307C56.5162 27.9029 56.2769 27.9373 55.8685 27.7324C55.4602 27.5275 54.1429 27.0972 52.5823 25.7043C51.3682 24.6208 50.5473 23.2829 50.3094 22.8732C50.0715 22.4648 50.2847 22.2434 50.4882 22.0399C50.6724 21.857 50.8965 21.5628 51.1014 21.3235C51.309 21.087 51.3764 20.9165 51.5139 20.6429C51.65 20.3707 51.5827 20.1314 51.4795 19.9265C51.3764 19.723 50.5597 17.7114 50.22 16.8933C49.8873 16.0972 49.5504 16.2044 49.3002 16.192L48.5164 16.1783C48.2442 16.1783 47.8014 16.28 47.4274 16.6898C47.0534 17.0995 45.9974 18.0868 45.9974 20.0984C45.9974 22.11 47.4618 24.0529 47.6653 24.3252C47.8702 24.5974 50.5459 28.7252 54.6448 30.4948C55.6197 30.9155 56.3814 31.1672 56.974 31.3555C57.953 31.6663 58.844 31.6223 59.548 31.5178C60.3332 31.4009 61.9653 30.5292 62.3063 29.5749C62.6473 28.6193 62.6473 27.8012 62.5442 27.6307Z" fill="#292D32"/></svg>
      )
    case "step-3":
      return (
        <svg width="66" height="42" viewBox="0 0 66 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5496 13.6583C20.3229 14.2556 22.5416 15.2156 24.2056 16.5383C25.9122 17.8183 27.1496 19.3116 27.9176 21.0183C28.6856 22.6823 29.0695 24.4316 29.0695 26.2663C29.0695 28.5703 28.4509 30.8103 27.2136 32.9863C26.0189 35.1196 24.2696 36.8903 21.9656 38.2983C19.6616 39.6636 16.8669 40.3463 13.5816 40.3463C11.6189 40.3463 9.44288 39.9623 7.05355 39.1943C4.66422 38.4263 2.31755 36.933 0.0135498 34.7143L1.22955 31.8983C2.97888 33.349 4.81355 34.4583 6.73355 35.2263C8.69622 35.9516 10.5522 36.3143 12.3015 36.3143C14.6056 36.3143 16.5256 35.6316 18.0616 34.2663C19.6402 32.901 20.4296 31.045 20.4296 28.6983C20.4296 26.949 19.9389 25.477 18.9576 24.2823C18.0189 23.0876 16.7602 22.1916 15.1816 21.5943C13.6456 20.9543 12.0029 20.6343 10.2535 20.6343L9.16555 17.6903C10.7016 16.069 11.9816 14.7036 13.0056 13.5943C14.0722 12.4423 14.9896 11.3543 15.7576 10.3303C16.5682 9.26363 17.3789 8.11163 18.1896 6.87429C17.4216 6.83163 16.6322 6.8103 15.8216 6.8103C15.0536 6.76763 14.1149 6.7463 13.0056 6.7463C11.8535 6.7463 10.8082 6.76763 9.86955 6.8103C8.97355 6.8103 7.90688 6.85296 6.66955 6.9383C6.24288 7.87696 5.85888 8.87963 5.51755 9.9463C5.17622 10.9703 4.77088 12.037 4.30155 13.1463H1.16555C1.33622 11.0983 1.42155 8.87963 1.42155 6.4903C1.46422 4.0583 1.48555 1.9463 1.48555 0.154297C3.36288 0.196963 5.32555 0.239629 7.37355 0.282295C9.42155 0.324961 11.4056 0.346294 13.3256 0.346294C15.5869 0.346294 17.6989 0.324961 19.6616 0.282295C21.6669 0.239629 23.7576 0.196963 25.9335 0.154297L26.5736 4.82629C25.0376 6.36229 23.4802 7.87696 21.9016 9.3703C20.3229 10.821 18.8722 12.2503 17.5496 13.6583Z" fill="#292D32"/><path d="M64.9845 34.2099C65.0145 35.3349 64.7145 36.3999 64.1745 37.3149C63.8745 37.8549 63.4695 38.35 63.0195 38.755C61.9845 39.715 60.6195 40.3 59.1045 40.345C56.9145 40.39 54.9795 39.265 53.9145 37.54C53.3445 36.655 52.9995 35.59 52.9845 34.465C52.9395 32.575 53.7795 30.8649 55.1295 29.7399C56.1495 28.8999 57.4395 28.375 58.8495 28.345C62.1645 28.27 64.9095 30.8949 64.9845 34.2099Z" stroke="#292D32" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M56.6445 34.39L58.1595 35.83L61.2945 32.7999" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M35.2396 18.505L48.4846 26.17L61.6396 18.55" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M48.4846 39.76V26.155" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M62.8995 21.1V29.59C62.8995 29.665 62.8996 29.725 62.8846 29.8C61.8346 28.885 60.4846 28.345 58.9846 28.345C57.5746 28.345 56.2696 28.84 55.2346 29.665C53.8546 30.76 52.9846 32.455 52.9846 34.345C52.9846 35.47 53.2995 36.535 53.8545 37.435C53.9895 37.675 54.1545 37.9 54.3345 38.11L51.5896 39.625C49.8796 40.585 47.0895 40.585 45.3795 39.625L37.3696 35.185C35.5546 34.18 34.0696 31.66 34.0696 29.59V21.1C34.0696 19.03 35.5546 16.51 37.3696 15.505L45.3795 11.065C47.0895 10.105 49.8796 10.105 51.5896 11.065L59.5996 15.505C61.4146 16.51 62.8995 19.03 62.8995 21.1Z" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    case "almacen-md-color":
      return (
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0945 23.6217C8.36073 23.7418 9.27221 15.8106 6.86882 17.7333C5.15142 19.2118 5.66707 20.6174 5.66707 23.6217C5.66707 26.6259 9.6327 28.4285 12.2764 28.4285C14.9202 28.4285 27.2977 28.5487 29.9415 28.4285C32.5852 28.3083 34.6919 26.8141 35.7097 24.4629C36.3589 22.963 37.6263 19.8914 36.7766 17.7333C35.1911 16.709 25.8816 23.5255 18.0945 23.6217Z" fill="#FC7C48"/><path d="M12.117 4.37975C13.9416 4.37975 25.4007 3.28222 27.4334 5.20492C29.4659 7.12763 20.7364 15.5623 16.7086 16.1716C14.2664 16.5411 7.17994 12.7777 7.17994 10.5345C8.78985 7.17161 9.00451 4.37975 12.117 4.37975Z" fill="#E65046"/><path d="M1.60645 1.5H4.73846C6.68246 1.5 8.21245 3.174 8.05045 5.1L6.55645 23.028C6.30445 25.962 8.62643 28.482 11.5784 28.482H30.7484C33.3404 28.482 35.6084 26.358 35.8064 23.784L36.7784 10.284C36.9944 7.29601 34.7264 4.86599 31.7204 4.86599H8.48246" stroke="#292D32" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M27.2566 37.5C28.4992 37.5 29.5066 36.4926 29.5066 35.25C29.5066 34.0074 28.4992 33 27.2566 33C26.014 33 25.0066 34.0074 25.0066 35.25C25.0066 36.4926 26.014 37.5 27.2566 37.5Z" stroke="#292D32" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.8564 37.5C14.0991 37.5 15.1064 36.4926 15.1064 35.25C15.1064 34.0074 14.0991 33 12.8564 33C11.6138 33 10.6064 34.0074 10.6064 35.25C10.6064 36.4926 11.6138 37.5 12.8564 37.5Z" stroke="#292D32" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.2065 12.2998H35.8065" stroke="#292D32" strokeWidth="2.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    case "congelados-md-color":
      return (
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.9892 34.3173C21.2568 32.2132 16.716 31.2604 15.3094 29.315C15.5522 27.743 15.3094 21.8612 16.1649 18.4208C17.9261 16.8029 23.9727 14.1404 24.4087 13.9838C25.6583 15.0466 17.3992 24.4161 17.3992 26.5757C17.3992 29.1879 24.9058 31.3593 23.9892 34.3173Z" fill="#E65046"/><path d="M11.2889 28.919C8.55643 26.8149 4.49364 26.4576 3.08713 24.5123C3.44876 22.17 2.18647 9.98901 3.51251 9.51256C4.07553 8.38282 15.1426 1.70995 15.1426 3.86957C15.1426 6.02152 4.23766 20.1884 5.43939 21.762C7.01707 23.828 11.7188 27.5316 11.2889 28.919Z" fill="#FC7C48"/><path d="M4.3874 10.0037C3.49303 9.54464 3.49302 8.80558 4.38738 8.34657L13.3712 3.73584C14.2656 3.27682 15.7056 3.27683 16.6 3.73584L25.5838 8.34657C26.4782 8.80558 26.4852 9.55869 25.5838 10.0036L20.3546 12.5849" stroke="#292D32" strokeWidth="1.7662" strokeLinecap="round"/><path d="M11.8135 29.2099C11.5148 29.0277 11.1764 28.8859 5.11923 25.5577C4.0802 24.9613 2.99069 24.6638 3.02786 23.4663L3.03479 10.2976C3.03542 9.09961 3.46803 8.86954 4.2476 8.49608" stroke="#292D32" strokeWidth="1.59366" strokeLinecap="round"/><path d="M4.00954 9.76782C4.00954 9.76782 5.76843 10.6811 6.71553 11.1885C7.66264 11.6959 8.88034 12.9136 8.88034 15.0107C8.88034 17.1079 8.88034 20.6257 8.88034 20.6257" stroke="#292D32" strokeWidth="1.59199" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.7421 19.6669L16.4137 19.0164C15.7366 18.6689 15.7366 18.1093 16.4137 17.7618L23.2151 14.2712C23.8923 13.9237 24.9825 13.9236 25.6596 14.2711L32.461 17.7618C33.1381 18.1093 33.1357 18.6642 32.461 19.0164C32.461 19.0164 30.772 19.8391 29.919 20.2843C29.2771 20.6193 28.2979 21.2555 28.2979 21.2555" stroke="#292D32" strokeWidth="1.82508" strokeLinecap="round"/><path d="M32.5626 17.8378C33.1507 18.1206 33.451 18.6021 33.4521 19.5093C33.4554 22.6538 33.4592 25.7983 33.4576 28.9428C33.4856 29.8495 32.6846 30.1134 31.8799 30.5264C31.8799 30.5264 28.5853 32.2531 26.9371 33.1146C24.8674 34.1966 24.106 34.2571 21.9965 33.2093C20.2841 32.3587 16.8592 30.6576 16.8592 30.6576C16.0492 30.2552 15.2535 29.9807 15.2815 29.074C15.2799 25.9295 15.2837 22.785 15.287 19.6404C15.2881 18.7333 15.5884 18.2517 16.1765 17.9689" stroke="#292D32" strokeWidth="1.58929"/><path d="M16.1276 18.8379C16.1276 18.8379 17.4592 19.5293 18.1762 19.9134C18.8933 20.2976 19.8152 21.2195 19.8152 22.8072C19.8152 24.3949 19.8152 27.0581 19.8152 27.0581" stroke="#292D32" strokeWidth="1.59199" strokeLinecap="round" strokeLinejoin="round"/><path d="M22.5105 22.1776C23.2275 22.5618 23.8845 23.2931 23.9342 24.88L24.0298 27.9384C24.0693 29.1988 26.3246 29.0841 26.3246 27.8707V24.6677C26.3246 22.9765 27.4805 21.6276 28.5967 21.0018" stroke="#292D32" strokeWidth="1.48586" strokeLinecap="round" strokeLinejoin="round"/><path d="M24.6578 7.82849C25.8337 8.60352 26.7263 8.72892 26.7296 9.4117C26.7307 9.67571 26.7825 11.7628 26.7825 12.1145" stroke="#292D32" strokeWidth="1.37972" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    case "libreria-md-color":
      return (
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0481 23.3521C6.93664 23.4522 8.63906 23.4523 6.63623 25.0545C5.20506 26.2866 5.63478 27.4579 5.63478 29.9615C5.63478 32.465 8.93947 33.9672 11.1426 33.9672C13.3457 33.9672 23.6603 34.0673 25.8635 33.9672C28.0666 33.867 30.6703 32.3649 30.6703 30.6625V23.3521C28.1667 23.3187 21.5374 23.272 15.0481 23.3521Z" fill="#FC7C48"/><path d="M6.29991 5.50103C6.91937 4.17357 8.57924 3.53977 11.588 3.98223C9.28676 6.05336 9.04322 9.33527 9.32124 11.8128C9.59926 14.2904 10.3212 18.9744 10.0994 20.895C9.85342 23.0243 10.2947 23.9555 10.2947 23.9555C10.2947 23.9555 7.93856 24.7925 6.29992 24.7925C4.09452 24.7925 5.14952 16.1412 5.14952 14.4388C5.14952 13.0769 6.29991 7.37035 6.29991 5.50103Z" fill="#E65046"/><path d="M5.34653 27.8367V11.3367C5.34653 5.33667 6.84653 3.83667 12.8465 3.83667H23.3465C29.3465 3.83667 30.8465 5.33667 30.8465 11.3367V26.3367C30.8465 26.5467 30.8465 26.7567 30.8315 26.9667" stroke="#292D32" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.62153 23.3367H30.8465V28.5867C30.8465 31.4817 28.4915 33.8367 25.5965 33.8367H10.5965C7.70153 33.8367 5.34653 31.4817 5.34653 28.5867V27.6117C5.34653 25.2567 7.26653 23.3367 9.62153 23.3367Z" stroke="#292D32" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.0965 11.3367H24.0965" stroke="#292D32" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.0965 16.5867H19.5965" stroke="#292D32" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    case "bebidas-con-alcohol-md-color":
      return (
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.323 17.1737C26.4995 16.462 4.81332 25.4381 3.01147 26.8796C2.48824 29.1629 2.646 34.2748 3.85264 34.0619C5.05926 33.849 32.97 35.3554 32.97 33.6737C33.423 32.2501 34.2642 21.4443 32.323 17.1737Z" fill="#FC7C48"/><path d="M13.7676 4.30149C13.2172 3.74074 7.84728 3.74957 7.25182 4.52579C6.65636 5.30201 6.49933 7.39268 7.70597 7.17975C8.91259 6.96682 12.4023 8.22338 13.7676 7.4206C14.4094 6.69798 14.3181 4.86224 13.7676 4.30149Z" fill="#E65046"/><path d="M28.1514 4.26406C27.6032 3.67864 22.8287 2.7258 21.9077 4.26399C20.9868 5.80218 22.2768 7.19187 23.4406 7.47931C24.6045 7.76676 27.0536 7.78174 28.419 6.97896C29.0608 6.25634 28.6997 4.84948 28.1514 4.26406Z" fill="#E65046"/><path d="M7.6391 4.32033H13.4379H13.4922C13.5923 4.27181 13.6744 4.19474 13.727 4.09972C13.7796 4.00469 13.8001 3.89638 13.7858 3.78969C13.7715 3.683 13.7231 3.58317 13.6472 3.50395C13.5712 3.42473 13.4716 3.37 13.3619 3.34731H7.6391C7.55755 3.32162 7.47081 3.31483 7.38599 3.32749C7.30117 3.34015 7.2207 3.3719 7.15117 3.42014C7.08163 3.46838 7.02503 3.53174 6.98599 3.605C6.94696 3.67827 6.92661 3.75936 6.92661 3.84162C6.92661 3.92389 6.94696 4.00498 6.98599 4.07825C7.02503 4.15151 7.08163 4.21486 7.15117 4.2631C7.2207 4.31134 7.30117 4.34309 7.38599 4.35575C7.47081 4.36842 7.55755 4.36163 7.6391 4.33594V4.32033Z" fill="#292D32" stroke="#292D32" strokeWidth="0.44"/><path d="M33.2558 16.4857H31.9093V15.8457C31.9197 15.1874 31.7058 14.5437 31.3002 14.0123C30.8946 13.4809 30.3193 13.0906 29.6615 12.9006H29.6289C28.9556 12.7237 28.9176 12.2918 28.9176 12.2918L28.2661 6.70865H27.2345L27.8697 12.1409L27.9077 12.3907C27.9077 12.3907 27.9729 13.4314 28.8145 13.6187C29.0629 13.6973 29.3043 13.7948 29.5366 13.9101C29.9354 14.0722 30.2756 14.3432 30.515 14.6892C30.7544 15.0352 30.8824 15.441 30.8831 15.8561V16.4961H20.214V15.8561C20.2166 15.5098 20.3069 15.1693 20.4772 14.8639C20.6474 14.5585 20.8925 14.2972 21.1914 14.1026C21.2877 14.0404 21.3874 13.9831 21.49 13.9309C21.7406 13.8 22.0044 13.6936 22.2773 13.6135C22.9451 13.4574 23.108 12.7497 23.1514 12.4739L23.6238 6.70865H22.5922L22.1307 12.3074C22.0765 12.462 21.9798 12.5996 21.8508 12.7058C21.7218 12.8121 21.5652 12.883 21.3977 12.911L21.338 12.937C20.6979 13.1372 20.1416 13.5287 19.7507 14.054C19.3599 14.5794 19.155 15.211 19.1661 15.8561V16.4961H17.0269V15.8561C17.0372 15.1978 16.8234 14.5541 16.4178 14.0227C16.0122 13.4913 15.4369 13.101 14.779 12.911L14.7139 12.885C14.0406 12.7081 14.0406 12.2866 14.0406 12.2866L13.3891 6.70344H12.352L12.9873 12.1357L13.0199 12.3855C13.0199 12.3855 13.085 13.4261 13.9266 13.6135C14.1758 13.69 14.4174 13.7876 14.6487 13.9049V13.9049C15.0469 14.0673 15.3864 14.3384 15.6249 14.6845C15.8634 15.0305 15.9903 15.4362 15.9898 15.8509V16.4909H5.34789V15.8509C5.34866 15.4047 5.49903 14.9706 5.77683 14.6125C5.92413 14.4095 6.10799 14.2333 6.31978 14.0922L6.61298 13.9205C6.86526 13.7891 7.13087 13.6827 7.40569 13.6031C7.6515 13.5162 7.86506 13.3617 8.01961 13.159C8.17416 12.9563 8.2628 12.7143 8.27443 12.4635L8.75223 6.69824H7.71518L7.25367 12.297C7.20378 12.4443 7.11511 12.5767 6.99622 12.6815C6.87733 12.7864 6.73224 12.86 6.57497 12.8954H6.53697C5.89213 13.1005 5.33032 13.4936 4.93019 14.0198C4.53005 14.5461 4.3116 15.179 4.30542 15.8301V16.4701H2.97518C2.83118 16.4701 2.69307 16.5249 2.59125 16.6225C2.48942 16.7201 2.43222 16.8524 2.43222 16.9904V33.8648C2.43919 33.9983 2.49946 34.124 2.60054 34.2161C2.70161 34.3081 2.83576 34.3593 2.97518 34.3592H33.245C33.3129 34.3599 33.3803 34.3475 33.4432 34.3229C33.5061 34.2983 33.5633 34.262 33.6113 34.2159C33.6594 34.1699 33.6974 34.1151 33.723 34.0548C33.7487 33.9945 33.7615 33.9299 33.7608 33.8648V16.98C33.7615 16.9158 33.749 16.8521 33.724 16.7924C33.699 16.7328 33.6621 16.6785 33.6152 16.6326C33.5683 16.5867 33.5124 16.5501 33.4508 16.5249C33.3891 16.4997 33.3229 16.4864 33.2558 16.4857V16.4857ZM32.7129 33.3601H3.50184V17.4743H32.74L32.7129 33.3601Z" fill="#292D32" stroke="#292D32" strokeWidth="0.44"/><path d="M22.5053 4.32033H28.3204H28.3801C28.4803 4.27181 28.5623 4.19474 28.6149 4.09972C28.6675 4.00469 28.688 3.89638 28.6737 3.78969C28.6595 3.683 28.611 3.58317 28.5351 3.50395C28.4592 3.42473 28.3595 3.37 28.2498 3.34731H22.5053C22.4237 3.32162 22.337 3.31483 22.2522 3.32749C22.1674 3.34015 22.0869 3.3719 22.0174 3.42014C21.9478 3.46838 21.8912 3.53174 21.8522 3.605C21.8132 3.67827 21.7928 3.75936 21.7928 3.84162C21.7928 3.92389 21.8132 4.00498 21.8522 4.07825C21.8912 4.15151 21.9478 4.21486 22.0174 4.2631C22.0869 4.31134 22.1674 4.34309 22.2522 4.35575C22.337 4.36842 22.4237 4.36163 22.5053 4.33594V4.32033Z" fill="#292D32" stroke="#292D32" strokeWidth="0.44"/><path d="M9.04006 29.6034H27.202C27.3366 29.5971 27.464 29.543 27.5594 29.4516C27.6547 29.3603 27.7112 29.2382 27.7178 29.1091V21.7256C27.7223 21.6583 27.7122 21.5909 27.6882 21.5276C27.6643 21.4642 27.6269 21.4063 27.5785 21.3574C27.53 21.3086 27.4716 21.2698 27.4068 21.2437C27.342 21.2175 27.2723 21.2044 27.202 21.2052H9.04006C8.89606 21.2052 8.75796 21.2601 8.65614 21.3576C8.55431 21.4552 8.49711 21.5876 8.49711 21.7256V29.1091C8.50408 29.2425 8.56435 29.3683 8.66542 29.4603C8.7665 29.5523 8.90065 29.6036 9.04006 29.6034ZM9.55587 22.2199H26.6916V28.6252H9.55587V22.2199Z" fill="#292D32" stroke="#292D32" strokeWidth="0.44"/></svg>
      )
    case "bebidas-sin-alcohol-md-color":
      return (
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2232 4.39563C19.7126 3.61366 14.7318 3.62598 14.1795 4.70842C13.6272 5.79087 13.4815 8.70631 14.6007 8.40937C15.7199 8.11244 18.9568 9.86472 20.2232 8.74524C20.8185 7.73754 20.7338 5.17759 20.2232 4.39563Z" fill="#E65046"/><path d="M25.081 25.5372C19.1983 24.8182 11.5648 26.535 9.74468 27.9911C9.21613 30.2977 8.95449 33.8561 9.74468 34.2483C10.9636 34.0332 25.9398 35.2109 25.9398 33.5121C26.3974 32.0741 27.0419 29.8512 25.081 25.5372Z" fill="#FC7C48"/><path d="M20.6385 3.72882V12.2488H20.745C22.2136 12.407 23.5711 13.1045 24.5548 14.2063C25.5386 15.3081 26.0785 16.7357 26.07 18.2127V33.9746H9.5626V18.1062C9.55395 16.6573 10.0826 15.2567 11.0464 14.1749C12.0102 13.093 13.3408 12.4068 14.7811 12.2488V3.72882H20.6385Z" stroke="#292D32" strokeWidth="1.59749" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.781 7.66925H20.6385" stroke="#292D32" strokeWidth="1.59749" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.56267 21.1947H26.07" stroke="#292D32" strokeWidth="1.59749" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.56267 26.8391H26.07" stroke="#292D32" strokeWidth="1.59749" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    case "variados-md-color":
      return (
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5812 30.9426C19.5483 28.6144 30.6853 22.5109 33.0075 24.1132C33.6818 26.6512 32.1209 32.9604 24.3357 33.9221C22.0369 34.206 18.1782 32.8828 18.5812 30.9426Z" fill="#FC7C48"/><path d="M6.65336 30.9426C7.63953 28.6144 18.9957 22.5109 21.3637 24.1132C22.0513 26.6512 20.4597 32.9604 12.5212 33.9221C10.1771 34.206 6.24246 32.8828 6.65336 30.9426Z" fill="#FC7C48"/><path d="M12.0141 18.8189C13.0154 16.4908 24.5462 10.3873 26.9505 11.9895C27.6487 14.5276 26.0326 20.8368 17.9721 21.7984C15.592 22.0824 11.5968 20.7591 12.0141 18.8189Z" fill="#E65046"/><path d="M21.0965 24.8367C21.0965 27.4917 19.9415 29.8917 18.0965 31.5267C16.5065 32.9667 14.4065 33.8367 12.0965 33.8367C7.13153 33.8367 3.09653 29.8017 3.09653 24.8367C3.09653 20.6967 5.91653 17.1867 9.72653 16.1517C10.7615 18.7617 12.9815 20.7717 15.7265 21.5217C16.4765 21.7317 17.2715 21.8367 18.0965 21.8367C18.9215 21.8367 19.7165 21.7317 20.4665 21.5217C20.8715 22.5417 21.0965 23.6667 21.0965 24.8367Z" stroke="#292D32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M27.0965 12.8367C27.0965 14.0067 26.8715 15.1317 26.4665 16.1517C25.4315 18.7617 23.2115 20.7717 20.4665 21.5217C19.7165 21.7317 18.9215 21.8367 18.0965 21.8367C17.2715 21.8367 16.4765 21.7317 15.7265 21.5217C12.9815 20.7717 10.7615 18.7617 9.72653 16.1517C9.32153 15.1317 9.09653 14.0067 9.09653 12.8367C9.09653 7.87167 13.1315 3.83667 18.0965 3.83667C23.0615 3.83667 27.0965 7.87167 27.0965 12.8367Z" stroke="#292D32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M33.0965 24.8367C33.0965 29.8017 29.0615 33.8367 24.0965 33.8367C21.7865 33.8367 19.6865 32.9667 18.0965 31.5267C19.9415 29.8917 21.0965 27.4917 21.0965 24.8367C21.0965 23.6667 20.8715 22.5417 20.4665 21.5217C23.2115 20.7717 25.4315 18.7617 26.4665 16.1517C30.2765 17.1867 33.0965 20.6967 33.0965 24.8367Z" stroke="#292D32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    case "limpieza-md-color":
      return (
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0394 13.832C12.9279 13.9321 12.2556 19.2094 10.2528 20.8116C9.67122 23.3496 13.4511 34.648 17.5496 33.9247C18.8908 33.688 30.8742 25.9592 30.8742 24.0898C29.288 21.2874 27.5286 13.7519 21.0394 13.832Z" fill="#FC7C48"/><path d="M9.82988 3.99725C8.03207 3.99725 8.60726 5.30314 6.60443 6.90539C6.02284 9.44341 8.77248 12.0872 9.82988 11.6113C11.0718 11.0524 14.6944 10.9955 14.6944 9.1262C13.1082 6.3238 12.8967 3.99725 9.82988 3.99725Z" fill="#E65046"/><path d="M14.9015 9.3417L9.77153 12.4617L7.43154 8.62173C6.57654 7.21173 7.02653 5.35173 8.43653 4.49673C9.84653 3.64173 11.7065 4.0917 12.5615 5.5017L14.9015 9.3417Z" stroke="#292D32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.8265 14.5767L13.0865 17.4567C10.3265 19.1367 9.48652 22.5267 10.8215 25.2267L13.8965 31.4967C14.8865 33.5217 17.2865 34.2267 19.2065 33.0417L28.8515 27.1767C30.7865 26.0067 31.2515 23.5617 29.9165 21.7467L25.7615 16.1367C23.9615 13.7067 20.5865 12.8967 17.8265 14.5767Z" stroke="#292D32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.2315 8.48365L8.54459 13.1646L11.6652 18.2892L19.3521 13.6083L16.2315 8.48365Z" stroke="#292D32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M21.5615 26.0517L24.0365 30.1167" stroke="#292D32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.7215 28.3917L20.1965 32.4568" stroke="#292D32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M25.4015 23.7117L27.8765 27.7767" stroke="#292D32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    case "vinoteca-md-color":
      return (
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5679 32.1779C19.7078 31.7995 20.1797 26.0421 21.7911 27.3901C23.2302 30.1576 21.6527 33.866 18.2764 34.0598C16.6661 34.1522 15.1491 33.4786 14.5679 32.1779Z" fill="#E65046"/><path d="M19.1891 24.2293C24.329 23.851 24.8009 18.0936 26.4123 19.4415C27.8514 22.209 26.2739 25.9175 22.8976 26.1112C21.2873 26.2037 19.7703 25.5301 19.1891 24.2293Z" fill="#FC7C48"/><path d="M10.3407 24.3601C15.4806 23.9818 15.9525 18.2244 17.5639 19.5723C19.003 22.3398 17.4255 26.0483 14.0492 26.242C12.4389 26.3345 10.9219 25.6609 10.3407 24.3601Z" fill="#FC7C48"/><path d="M6.09808 16.079C11.238 15.7006 11.7099 9.94325 13.3213 11.2912C14.7604 14.0587 13.1829 17.7671 9.80656 17.9609C8.19627 18.0533 6.67927 17.3797 6.09808 16.079Z" fill="#E65046"/><path d="M14.5679 15.6265C19.7078 15.2481 20.1797 9.49074 21.7911 10.8387C23.2302 13.6062 21.6527 17.3146 18.2764 17.5084C16.6661 17.6008 15.1491 16.9272 14.5679 15.6265Z" fill="#FC7C48"/><path d="M23.1858 15.7444C28.3257 15.366 28.7976 9.60866 30.409 10.9566C31.8481 13.7241 30.2706 17.4325 26.8943 17.6263C25.284 17.7187 23.767 17.0451 23.1858 15.7444Z" fill="#E65046"/><path d="M9.49378 17.5168C11.8368 17.5168 13.7362 15.6174 13.7362 13.2744C13.7362 10.9313 11.8368 9.03192 9.49378 9.03192C7.15073 9.03192 5.2513 10.9313 5.2513 13.2744C5.2513 15.6174 7.15073 17.5168 9.49378 17.5168Z" stroke="#292D32" strokeWidth="1.32" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.0965 17.5168C20.4395 17.5168 22.339 15.6174 22.339 13.2744C22.339 10.9313 20.4395 9.03192 18.0965 9.03192C15.7534 9.03192 13.854 10.9313 13.854 13.2744C13.854 15.6174 15.7534 17.5168 18.0965 17.5168Z" stroke="#292D32" strokeWidth="1.32" strokeLinecap="round" strokeLinejoin="round"/><path d="M26.6993 17.5168C29.0423 17.5168 30.9418 15.6174 30.9418 13.2744C30.9418 10.9313 29.0423 9.03192 26.6993 9.03192C24.3562 9.03192 22.4569 10.9313 22.4569 13.2744C22.4569 15.6174 24.3562 17.5168 26.6993 17.5168Z" stroke="#292D32" strokeWidth="1.32" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.854 26.1197C16.1971 26.1197 18.0965 24.2202 18.0965 21.8772C18.0965 19.5341 16.1971 17.6347 13.854 17.6347C11.511 17.6347 9.61157 19.5341 9.61157 21.8772C9.61157 24.2202 11.511 26.1197 13.854 26.1197Z" stroke="#292D32" strokeWidth="1.32" strokeLinecap="round" strokeLinejoin="round"/><path d="M22.3391 26.1197C24.6821 26.1197 26.5816 24.2202 26.5816 21.8772C26.5816 19.5341 24.6821 17.6347 22.3391 17.6347C19.996 17.6347 18.0966 19.5341 18.0966 21.8772C18.0966 24.2202 19.996 26.1197 22.3391 26.1197Z" stroke="#292D32" strokeWidth="1.32" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.0965 34.0153C20.4395 34.0153 22.339 32.1159 22.339 29.7728C22.339 27.4298 20.4395 25.5304 18.0965 25.5304C15.7534 25.5304 13.854 27.4298 13.854 29.7728C13.854 32.1159 15.7534 34.0153 18.0965 34.0153Z" stroke="#292D32" strokeWidth="1.32" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.0966 9.03191C17.948 8.02766 18.0782 7.00185 18.4731 6.06661C18.868 5.13138 19.5123 4.32268 20.3356 3.72882" stroke="#292D32" strokeWidth="1.32" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
  }
}

export default Icon
