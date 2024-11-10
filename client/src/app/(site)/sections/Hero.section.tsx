const Hero = () => {
  return (
    <section className="relative h-[440px] w-full overflow-hidden bg-[url('/images/hero-final1.jpg')] bg-cover bg-center bg-top lg:h-[480px] md:h-[320px] xs:h-[192px]">
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-gray100 to-gray100/0 to-40%"></div>
      <div className="relative z-20 m-auto flex h-full max-w-[1000px] items-center justify-end">
        <h1 className="mb-14 mr-14 flex flex-col gap-5 text-6xl font-bold leading-8 tracking-tighter lg:mb-28 lg:mr-28 lg:text-5xl lg:leading-4 md:mr-28 md:mr-[10vw] md:mt-14 md:mt-28 md:text-4xl md:leading-3 sm:mr-[5vw] xs:text-2xl xs:leading-[0.2rem]">
          <span className="text-4xl leading-[1px] xs:text-3xl">hasta</span>
          <span className="-mt-4 text-9xl lg:text-8xl xs:-mt-8 xs:text-6xl">
            15%
          </span>
          <span>En alimentos</span>
          <span>para el hogar</span>
        </h1>
      </div>
    </section>
  )
}

export default Hero
