export const getActiveStep = () => {
  const activeStep: number = localStorage.getItem("activeStep")
    ? Number(localStorage.getItem("activeStep"))
    : 2;
  return activeStep;
};
