type ArrowProps = {
  type: string
}

const Arrow = ({ type }: ArrowProps) => {
  switch (type) {
    case "1":
      return (
<svg width="63" height="159" viewBox="0 0 63 159" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M62.3463 153.257C62.8136 152.963 62.9539 152.345 62.6597 151.878L57.8644 144.262C57.5701 143.795 56.9527 143.654 56.4853 143.949C56.018 144.243 55.8776 144.86 56.1719 145.328L60.4344 152.097L53.6645 156.36C53.1972 156.654 53.0568 157.272 53.3511 157.739C53.6454 158.206 54.2628 158.347 54.7302 158.052L62.3463 153.257ZM30.4663 0.707408C29.9162 1.08379 29.3734 1.46962 28.8381 1.86465L30.0255 3.47397C30.5419 3.09296 31.0653 2.7209 31.5956 2.35802L30.4663 0.707408ZM25.7146 4.34307C24.7031 5.20458 23.7213 6.10081 22.7693 7.02979L24.166 8.46125C25.0864 7.56323 26.0349 6.69742 27.0114 5.86564L25.7146 4.34307ZM20.0122 9.90209C19.1267 10.8864 18.2705 11.9009 17.4438 12.9437L19.0111 14.1862C19.8125 13.1753 20.6418 12.1926 21.499 11.2397L20.0122 9.90209ZM15.0639 16.1383C14.3075 17.219 13.5796 18.3253 12.8805 19.4553L14.5813 20.5075C15.261 19.409 15.968 18.3343 16.7024 17.2852L15.0639 16.1383ZM10.884 22.8879C10.2513 24.0459 9.64654 25.2253 9.06972 26.4243L10.872 27.2913C11.4342 26.1228 12.0233 24.974 12.6391 23.8467L10.884 22.8879ZM7.43806 30.0429C6.92682 31.2549 6.4425 32.4841 5.98515 33.7289L7.86245 34.4186C8.30916 33.2028 8.78199 32.0028 9.28082 30.8202L7.43806 30.0429ZM4.70221 37.4827C4.30425 38.7387 3.93254 40.0083 3.58715 41.29L5.51826 41.8104C5.85619 40.5564 6.21974 39.3147 6.60879 38.0868L4.70221 37.4827ZM2.63871 45.1309C2.34991 46.4153 2.0867 47.7099 1.84914 49.0133L3.81672 49.3719C4.04945 48.0951 4.30724 46.8271 4.58999 45.5696L2.63871 45.1309ZM1.21659 52.9262C1.03259 54.2279 0.873619 55.5368 0.739737 56.8514L2.72945 57.054C2.86072 55.765 3.01657 54.4819 3.1969 53.2061L1.21659 52.9262ZM0.414309 60.7972C0.331122 62.112 0.272722 63.4312 0.239182 64.7533L2.23854 64.804C2.27144 63.507 2.32873 62.2131 2.41032 60.9235L0.414309 60.7972ZM0.212979 68.7077C0.228883 70.0253 0.269386 71.3445 0.334564 72.6639L2.33213 72.5652C2.26818 71.2707 2.22844 69.9763 2.21283 68.6836L0.212979 68.7077ZM0.603426 76.6124C0.717449 77.9255 0.856023 79.2374 1.01923 80.5469L3.00387 80.2995C2.84376 79.0149 2.7078 77.7277 2.59593 76.4394L0.603426 76.6124ZM1.58246 84.4645C1.79476 85.7664 2.03172 87.0646 2.29343 88.3577L4.25368 87.9609C3.99704 86.6929 3.76463 85.4197 3.55639 84.1426L1.58246 84.4645ZM3.15326 92.2219C3.46486 93.5047 3.80134 94.7811 4.16279 96.0497L6.08624 95.5016C5.73203 94.2584 5.40222 93.0074 5.09675 91.7498L3.15326 92.2219ZM5.32356 99.8353C5.73627 101.091 6.17419 102.337 6.6374 103.572L8.51015 102.87C8.05664 101.661 7.62778 100.44 7.22351 99.2106L5.32356 99.8353ZM8.10484 107.251C8.62052 108.468 9.16176 109.674 9.72866 110.866L11.5349 110.007C10.9805 108.841 10.451 107.662 9.94644 106.471L8.10484 107.251ZM11.5098 114.408C12.1301 115.576 12.7762 116.728 13.4484 117.865L15.17 116.847C14.5135 115.737 13.8822 114.611 13.2761 113.47L11.5098 114.408ZM15.5469 121.232C16.273 122.337 17.0253 123.425 17.804 124.494L19.4206 123.317C18.6612 122.274 17.9273 121.213 17.2187 120.134L15.5469 121.232ZM20.2195 127.643C21.0504 128.672 21.9077 129.681 22.7914 130.667L24.2812 129.333C23.4204 128.372 22.5852 127.39 21.7755 126.387L20.2195 127.643ZM25.5161 133.554C26.4489 134.492 27.4081 135.407 28.3936 136.297L29.7342 134.813C28.7754 133.947 27.8421 133.057 26.9341 132.144L25.5161 133.554ZM31.4105 138.877C32.4361 139.707 33.4874 140.512 34.5646 141.29L35.7356 139.669C34.6883 138.912 33.666 138.13 32.6687 137.323L31.4105 138.877ZM37.8571 143.532C38.9635 144.242 40.0947 144.924 41.2509 145.578L42.2359 143.838C41.1119 143.202 40.0121 142.538 38.9366 141.849L37.8571 143.532ZM44.7613 147.439C45.9425 148.024 47.1476 148.581 48.3766 149.109L49.1653 147.271C47.9698 146.758 46.7977 146.216 45.6491 145.647L44.7613 147.439ZM52.0532 150.571C53.289 151.025 54.5472 151.45 55.8279 151.845L56.4179 149.934C55.1705 149.549 53.9455 149.135 52.7427 148.694L52.0532 150.571ZM59.6385 152.916C60.2843 153.08 60.9354 153.237 61.5918 153.386L62.0351 151.436C61.3949 151.29 60.7601 151.138 60.1307 150.978L59.6385 152.916Z" fill="black"/>
</svg>
        
      )
  }
};

export default Arrow
