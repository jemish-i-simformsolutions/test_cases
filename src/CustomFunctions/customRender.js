import { render } from "@testing-library/react";
import { Provider } from "react-redux";

//function which will render the component for
//testing with given provider and options
export function customRender(ui, store) {
  return render(<Provider store={store}>{ui}</Provider>);
}
