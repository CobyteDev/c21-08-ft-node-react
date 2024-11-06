const NewAddressForm = () => {
  return (
    <div>
      <form action="">
        <div className="flex gap-2 xs:flex-col">
          <div className="flex max-w-[70%] grow flex-col xs:max-w-full">
            <label htmlFor="">Ciudad</label>
            <input type="text" className="rounded-lg p-2" />
          </div>
          <div className="flex max-w-[30%] flex-col xs:max-w-full">
            <label htmlFor="">Codigo postal</label>
            <input type="text" className="rounded-lg p-2" />
          </div>
        </div>
        <div className="flex gap-2 xs:flex-col">
          <div className="flex max-w-[50%] grow flex-col xs:max-w-full">
            <label htmlFor="">Calle</label>
            <input type="text" className="rounded-lg p-2" />
          </div>
          <div className="flex max-w-[15%] flex-col xs:max-w-full">
            <label htmlFor="">Numero</label>
            <input type="text" className="rounded-lg p-2" />
          </div>
          <div className="flex max-w-[15%] flex-col xs:max-w-full">
            <label htmlFor="">Piso</label>
            <input type="text" className="rounded-lg p-2" />
          </div>
          <div className="flex max-w-[15%] flex-col xs:max-w-full">
            <label htmlFor="">Dpto</label>
            <input type="text" className="rounded-lg p-2" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewAddressForm
