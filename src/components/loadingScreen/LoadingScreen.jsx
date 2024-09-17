const LoadingScreen = () => {
  return (
    <div className="d-flex flex-column container justify-content-center align-items-center m-auto"> 
      <h2>Загрузка....</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="192"
        height="192"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="0" fill="#F85625">
          <animate
            id="svgSpinnersPulse30"
            fill="freeze"
            attributeName="r"
            begin="0;svgSpinnersPulse32.begin+0.6s"
            calcMode="spline"
            dur="1.8s"
            keySplines=".52,.6,.25,.99"
            values="0;11"
          />
          <animate
            fill="freeze"
            attributeName="opacity"
            begin="0;svgSpinnersPulse32.begin+0.6s"
            calcMode="spline"
            dur="1.8s"
            keySplines=".52,.6,.25,.99"
            values="1;0"
          />
        </circle>
        <circle cx="12" cy="12" r="0" fill="#F85625">
          <animate
            id="svgSpinnersPulse31"
            fill="freeze"
            attributeName="r"
            begin="svgSpinnersPulse30.begin+0.6s"
            calcMode="spline"
            dur="1.8s"
            keySplines=".52,.6,.25,.99"
            values="0;11"
          />
          <animate
            fill="freeze"
            attributeName="opacity"
            begin="svgSpinnersPulse30.begin+0.6s"
            calcMode="spline"
            dur="1.8s"
            keySplines=".52,.6,.25,.99"
            values="1;0"
          />
        </circle>
        <circle cx="12" cy="12" r="0" fill="#F85625">
          <animate
            id="svgSpinnersPulse32"
            fill="freeze"
            attributeName="r"
            begin="svgSpinnersPulse30.begin+1.2s"
            calcMode="spline"
            dur="1.8s"
            keySplines=".52,.6,.25,.99"
            values="0;11"
          />
          <animate
            fill="freeze"
            attributeName="opacity"
            begin="svgSpinnersPulse30.begin+1.2s"
            calcMode="spline"
            dur="1.8s"
            keySplines=".52,.6,.25,.99"
            values="1;0"
          />
        </circle>
      </svg>
    </div>
  );
};

export default LoadingScreen;
