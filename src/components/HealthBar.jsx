const HealthBar = ({ health }) => {
  const defaultStyling = "rounded-lg flex justify-center shadow-[0px_5px_16px_1px_rgba(0,0,0,0.5)]";

  return (
    <div className={`col-[_span_2/_span_1] md:col-[_span_3/_span_1] ${defaultStyling} bg-slate-200 sticky top-2 z-[3]`}>
        {
            health.map()
        }
    </div>
  )
}

export default HealthBar